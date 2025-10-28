

import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import ContextPanel from './components/ContextPanel';
import StudioPanel from './components/StudioPanel';
import Loader from './components/Loader';
import * as geminiService from './services/geminiService';
import { loreBible as initialLoreBible } from './data/loreData';
import type { Chat } from '@google/genai';
import type { ChatMessage } from './types';

declare global {
    interface Window {
        pdfjsLib: any;
    }
}

window.pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

// Helper to convert file to base64
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

// Helper function to apply a JSON patch
const applyJsonPatch = (
    originalDoc: any,
    patch: Array<{ op: string; path: (string | number)[]; value: any }>
): any => {
    const doc = JSON.parse(JSON.stringify(originalDoc));

    patch.forEach(({ op, path, value }) => {
        if (!path || path.length === 0) {
            console.error("Invalid patch operation: path is empty.");
            return;
        }

        let parent = doc;
        const finalSegment = path[path.length - 1];

        // Traverse to find the parent object/array, creating path segments for 'add' if necessary.
        for (let i = 0; i < path.length - 1; i++) {
            const segment = path[i];

            if (parent[segment] === undefined || parent[segment] === null) {
                // If a segment in the path doesn't exist, we can create it for 'add'.
                if (op === 'add') {
                    const nextSegment = path[i + 1];
                    parent[segment] = typeof nextSegment === 'number' ? [] : {};
                } else {
                    // For 'replace', the path must exist.
                    console.error(`Invalid path for '${op}': segment '${String(segment)}' does not exist.`, path);
                    return; // Skip this invalid operation
                }
            }
            parent = parent[segment];
        }

        switch (op) {
            case 'replace':
                if (typeof parent === 'object' && parent !== null) {
                    parent[finalSegment] = value;
                } else {
                    console.error("Invalid path for 'replace' op: parent is not an object.", path);
                }
                break;

            case 'add':
                // Our AI uses 'add' to append to an array.
                const targetArray = parent[finalSegment];
                if (Array.isArray(targetArray)) {
                    targetArray.push(value);
                } else if (targetArray === undefined) {
                    // If the array doesn't exist at the final segment, create it.
                    if (typeof parent === 'object' && parent !== null && !Array.isArray(parent)) {
                       parent[finalSegment] = [value];
                    } else {
                        console.error("'add' operation failed: parent is not a valid object for creating a new property.", path);
                    }
                } else {
                    // This is an error because our AI should only 'add' to arrays or non-existent keys.
                    console.error("Invalid path for 'add' op: target exists but is not an array.", path);
                }
                break;

            default:
                console.warn(`Unsupported patch operation: ${op}`);
        }
    });

    return doc;
};


const App: React.FC = () => {
    // FIX: Consolidate multi-line useState declarations
    const [loreData, setLoreData] = useState<any>(initialLoreBible);
    const [isLoreModified, setIsLoreModified] = useState<boolean>(false);
    const [enhancementPlan, setEnhancementPlan] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loadingMessage, setLoadingMessage] = useState<string>('');
    const [chat, setChat] = useState<Chat | null>(null);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);

    useEffect(() => {
        const initializeChat = async () => {
            if (loreData) {
                setLoadingMessage("Initializing AI Creative Partner...");
                setIsLoading(true);
                try {
                    const chatSession = await geminiService.startChatSession(loreData);
                    setChat(chatSession);
                    setChatHistory([]); // Clear history for the new session
                } catch (error) {
                    console.error("Failed to initialize chat session:", error);
                    alert("Could not initialize the AI Creative Partner. Please check your API key and refresh.");
                } finally {
                    setIsLoading(false);
                    setLoadingMessage('');
                }
            }
        };
        initializeChat();
    }, [loreData]);
    
    const handleSendMessage = useCallback(async (prompt: string, file?: File) => {
        if (!chat || isSendingMessage || (!prompt.trim() && !file)) {
            return;
        }

        setIsSendingMessage(true);
        setLoadingMessage("Thinking...");

        const userMessageParts: any[] = [{ text: prompt }];
        
        let fileDataUrl: string | undefined;

        // Process file if it exists
        if (file) {
            try {
                setLoadingMessage(`Reading ${file.type}...`);
                const base64Data = await fileToBase64(file);
                if (file.type.startsWith('image/')) {
                    userMessageParts.push({ inlineData: { data: base64Data, mimeType: file.type } });
                    fileDataUrl = `data:${file.type};base64,${base64Data}`;
                } else if (file.type === 'application/pdf') {
                     setLoadingMessage('Reading PDF attachment...');
                    const arrayBuffer = await file.arrayBuffer();
                    const typedArray = new Uint8Array(arrayBuffer);
                    const pdf = await window.pdfjsLib.getDocument(typedArray).promise;
                    let textContent = '';
                    for (let i = 1; i <= pdf.numPages; i++) {
                        const page = await pdf.getPage(i);
                        const text = await page.getTextContent();
                        textContent += text.items.map((s: any) => s.str).join(' ');
                    }
                    userMessageParts.push({ text: `\n\n--- Attached PDF Content ---\n${textContent}\n--- End PDF Content ---` });
                }
            } catch (error) {
                console.error("Error processing file:", error);
                alert("Failed to process the attached file.");
                setIsSendingMessage(false);
                setLoadingMessage('');
                return;
            }
        }
        
        const messageId = Date.now();
        const newUserMessage: ChatMessage = { id: messageId, role: 'user', parts: userMessageParts, ...(fileDataUrl && { fileDataUrl })};
        setChatHistory(prev => [...prev, newUserMessage]);
        
        // Prepare for streaming response
        const modelResponse: ChatMessage = { id: messageId + 1, role: 'model', parts: [{ text: '' }] };
        setChatHistory(prev => [...prev, modelResponse]);

        try {
            setLoadingMessage("AI is responding...");
            const stream = await geminiService.sendMessageStream(chat, prompt, file);
            
            let accumulatedText = "";
            for await (const chunk of stream) {
                 accumulatedText += chunk;
                 setChatHistory(prev => {
                    const newHistory = [...prev];
                    const lastMessage = newHistory[newHistory.length - 1];
                    if (lastMessage && lastMessage.role === 'model') {
                        lastMessage.parts = [{ text: accumulatedText }];
                    }
                    return newHistory;
                 });
            }

        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: ChatMessage = { id: messageId + 2, role: 'model', parts: [{ text: `Sorry, I encountered an error: ${error instanceof Error ? error.message : String(error)}` }] };
            setChatHistory(prev => [...prev.slice(0, -1), errorMessage]);
        } finally {
            setIsSendingMessage(false);
            setLoadingMessage('');
        }
    }, [chat, isSendingMessage]);


    const handleGenerateContent = useCallback(async (contentType: string) => {
       if (contentType === 'Visual Prompt') {
            await handleSendMessage("Analyze the lore and generate a detailed, evocative visual prompt for an image generation AI. Wrap the final prompt in [VISUAL_PROMPT] tags.");
        } else {
            const prompt = `Generate a new ${contentType} JSON object that is deeply consistent with the world and matches the existing schema in the Lore Bible. Your output must be only the single, valid JSON object, without any markdown formatting or explanations.`;
            await handleSendMessage(prompt);
        }
    }, [handleSendMessage]);

    const handleGenerateImageForMessage = useCallback(async (messageId: number, prompt: string) => {
        setChatHistory(prev => prev.map(msg => msg.id === messageId ? { ...msg, isGeneratingMedia: true } : msg));
        setLoadingMessage('Generating image...');
        setIsLoading(true);
        try {
            const base64Image = await geminiService.generateImage(prompt);
            const imageUrl = `data:image/png;base64,${base64Image}`;
            setChatHistory(prev => prev.map(msg => msg.id === messageId ? { ...msg, isGeneratingMedia: false, imageUrl } : msg));
        } catch (error) {
            console.error("Error generating image:", error);
            alert("Failed to generate image.");
            setChatHistory(prev => prev.map(msg => msg.id === messageId ? { ...msg, isGeneratingMedia: false } : msg));
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    }, []);

    const handleGenerateAudioForMessage = useCallback(async (messageId: number, text: string, characterId: string) => {
        setChatHistory(prev => prev.map(msg => msg.id === messageId ? { ...msg, isGeneratingMedia: true } : msg));
        setLoadingMessage('Generating audio...');
        setIsLoading(true);
        try {
            const base64Audio = await geminiService.generateSpeech(text, characterId, loreData);
            const audioUrl = `data:audio/webm;base64,${base64Audio}`;
             setChatHistory(prev => prev.map(msg => msg.id === messageId ? { ...msg, isGeneratingMedia: false, audioUrl } : msg));
        } catch (error) {
            console.error("Error generating audio:", error);
            alert("Failed to generate audio.");
            setChatHistory(prev => prev.map(msg => msg.id === messageId ? { ...msg, isGeneratingMedia: false } : msg));
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    }, [loreData]);

    const handlePlanEnhancements = useCallback(async () => {
        if (!loreData) return;
        setIsLoading(true);
        setLoadingMessage('Activating The Loom of Thought...');
        try {
            const plan = await geminiService.planEnhancements(loreData, (message) => {
                setLoadingMessage(message);
            });
            setEnhancementPlan(plan);
        } catch (error) {
            console.error("Error planning enhancements:", error);
            alert("Failed to plan enhancements.");
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    }, [loreData]);

    const handleExecutePlan = useCallback(async () => {
        if (!loreData || !enhancementPlan) return;
        setIsLoading(true);
        setLoadingMessage('Executing plan with self-correction...');
        try {
            const patch = await geminiService.executePlan(loreData, enhancementPlan, (message) => {
                setLoadingMessage(message);
            });

            if (!patch || patch.length === 0) {
                alert("The AI determined no changes were necessary for this plan.");
                setEnhancementPlan(null);
                setIsLoading(false);
                setLoadingMessage('');
                return;
            }
            
            const updatedLore = applyJsonPatch(loreData, patch);
            
            setLoreData(updatedLore);
            setIsLoreModified(true);
            setEnhancementPlan(null); // Clear the plan after execution
            alert("Enhancement plan executed successfully! The Lore Overview has been updated.");

        // FIX: Corrected invalid 'catch' block syntax from 'catch (error) =>' to 'catch (error)'.
        } catch (error) {
            console.error("Error executing plan:", error);
            alert(`Failed to execute enhancement plan. ${error instanceof Error ? error.message : "The AI may have returned an invalid format."}`);
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    }, [loreData, enhancementPlan]);

    const handleRevertData = useCallback(() => {
        if (window.confirm("Are you sure you want to discard all changes and revert to the base lore document?")) {
            setLoreData(initialLoreBible);
            setIsLoreModified(false);
            setEnhancementPlan(null);
            setChatHistory([]);
            alert("Lore Bible has been reverted to its original state.");
        }
    }, []);

    const handleApplyJsonFromChat = useCallback((jsonString: string) => {
        if (!loreData) return;

        let newObject;
        try {
            newObject = JSON.parse(jsonString);
        } catch (error) {
            console.error("Failed to parse JSON from chat:", error);
            alert("The selected content is not valid JSON and could not be applied.");
            return;
        }

        if (!newObject || typeof newObject !== 'object' || !newObject.id) {
            alert("The JSON object is invalid or missing an 'id' and cannot be added.");
            return;
        }

        let path: (string | number)[] | null = null;
        let objectType = 'item';

        if (newObject.hasOwnProperty('intensity') && newObject.hasOwnProperty('ledgerImpact')) {
            path = ['events'];
            objectType = 'Event';
        } else if (newObject.hasOwnProperty('atmosphere') && newObject.hasOwnProperty('sounds')) {
            path = ['locations'];
            objectType = 'Location';
        } else if (newObject.hasOwnProperty('role_tag')) {
            objectType = newObject.name || 'Character';
            switch(newObject.role_tag) {
                case 'Faculty':
                    path = ['factions', 0, 'archetypes'];
                    break;
                case 'Prefect':
                    path = ['factions', 1, 'archetypes'];
                    break;
                case 'Subject':
                    path = ['factions', 2, 'archetypes'];
                    break;
            }
        }

        if (!path) {
            alert("Could not automatically determine where to add this JSON object in the Lore Bible.");
            return;
        }
        
        let targetArray: any = loreData;
        try {
            for(const segment of path) {
                targetArray = targetArray[segment];
            }
        } catch (e) {
            targetArray = undefined;
        }
        
        if (Array.isArray(targetArray) && targetArray.some(item => item.id === newObject.id)) {
            if (!window.confirm(`An item with ID "${newObject.id}" already exists. Do you want to overwrite it?`)) {
                return;
            }
            const index = targetArray.findIndex(item => item.id === newObject.id);
            const replacePath = [...path, index];
            const patch = [{ op: 'replace' as 'replace', path: replacePath, value: newObject }];
            const updatedLore = applyJsonPatch(loreData, patch);
            setLoreData(updatedLore);
            setIsLoreModified(true);
            alert(`Object with ID "${newObject.id}" has been updated in the working document.`);
            return;
        }

        const patch = [{ op: 'add' as 'add', path: path, value: newObject }];
        
        try {
            const updatedLore = applyJsonPatch(loreData, patch);
            setLoreData(updatedLore);
            setIsLoreModified(true);
            alert(`New ${objectType} has been added to the working document! You can see the change in the "Live Working Document" tab.`);
        } catch(error) {
            console.error("Error applying JSON patch from chat:", error);
            alert("An error occurred while trying to add the object to the document.");
        }
    }, [loreData]);


    return (
        <div className="min-h-screen bg-brand-bg text-brand-text font-sans flex flex-col">
            {(isLoading || isSendingMessage) && <Loader message={loadingMessage} />}
            <Header />
            <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col">
                {!loreData ? (
                    <div className="flex-grow flex items-center justify-center">
                        <Loader message="Loading Base Lore Bible..." />
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8 w-full flex-grow min-h-0">
                        <div className="w-full lg:w-2/3 flex flex-col min-h-0">
                           <ContextPanel 
                                loreData={loreData} 
                                baseLoreData={initialLoreBible}
                                isLoreModified={isLoreModified}
                                onRevert={handleRevertData}
                            />
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col min-h-0">
                            <StudioPanel
                                enhancementPlan={enhancementPlan}
                                onGenerateContent={handleGenerateContent}
                                onPlanEnhancements={handlePlanEnhancements}
                                onExecutePlan={handleExecutePlan}
                                hasContentToEnhance={!!loreData}
                                // Chat props
                                chatHistory={chatHistory}
                                isSendingMessage={isSendingMessage}
                                onSendMessage={handleSendMessage}
                                onGenerateImage={handleGenerateImageForMessage}
                                onGenerateAudio={handleGenerateAudioForMessage}
                                onApplyJsonFromChat={handleApplyJsonFromChat}
                            />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default App;
