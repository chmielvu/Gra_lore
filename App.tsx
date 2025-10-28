
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
    // Use a deep copy to avoid mutating the original state directly
    const doc = JSON.parse(JSON.stringify(originalDoc));

    patch.forEach(({ op, path, value }) => {
        if (!path || path.length === 0) {
            console.error("Invalid patch operation: path is empty.");
            return;
        }

        let current = doc;
        // Traverse the path to find the parent of the target
        for (let i = 0; i < path.length - 1; i++) {
            current = current[path[i]];
            if (current === undefined) {
                console.error("Invalid path in patch:", path);
                return; // Skip this operation if path is invalid
            }
        }

        const finalSegment = path[path.length - 1];

        switch (op) {
            case 'replace':
                 if (Array.isArray(current) && typeof finalSegment === 'number') {
                    current[finalSegment] = value;
                } else if (typeof current === 'object' && current !== null && !Array.isArray(current)) {
                    current[finalSegment] = value;
                } else {
                     console.error("Invalid path for 'replace' op:", path);
                }
                break;
            case 'add':
                // For 'add', the spec is that the path points TO THE ARRAY itself.
                const targetArray = path.length === 1 ? current[finalSegment] : current[finalSegment];
                 if (Array.isArray(targetArray)) {
                    targetArray.push(value);
                } else {
                     console.error("Invalid path for 'add' op: target is not an array.", path, "TARGET:", targetArray);
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
            
            const updatedLore = applyJsonPatch(loreData, patch);
            
            setLoreData(updatedLore);
            setIsLoreModified(true);
            setEnhancementPlan(null); // Clear the plan after execution
            alert("Enhancement plan executed successfully! The Lore Overview has been updated.");

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
                            />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default App;
