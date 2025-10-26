
import React, { useState, useCallback } from 'react';
import { Mode } from './types';
import Header from './components/Header';
import ContextPanel from './components/ContextPanel';
import StudioPanel from './components/StudioPanel';
import Loader from './components/Loader';
import * as geminiService from './services/geminiService';
import { initialLoreBible, narrativeBibleText } from './data/loreData';

declare global {
    interface Window {
        pdfjsLib: any;
    }
}

window.pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const App: React.FC = () => {
    const [loreData, setLoreData] = useState<any>(initialLoreBible);
    const [isLoreModified, setIsLoreModified] = useState<boolean>(false);
    const [enhancementPlan, setEnhancementPlan] = useState<string | null>(null);
    const [generatedContent, setGeneratedContent] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [mode, setMode] = useState<Mode>(Mode.Generate);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loadingMessage, setLoadingMessage] = useState<string>('');

    const handleIntegrateMaterial = useCallback(async (file: File) => {
        setIsLoading(true);
        setLoadingMessage('Processing new material...');
        try {
            let newText: string | undefined;
            let newImage: { data: string; mimeType: string } | undefined;

            if (file.type === 'application/pdf') {
                setLoadingMessage('Reading PDF...');
                const arrayBuffer = await file.arrayBuffer();
                const typedArray = new Uint8Array(arrayBuffer);
                const pdf = await window.pdfjsLib.getDocument(typedArray).promise;
                let textContent = '';
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const text = await page.getTextContent();
                    textContent += text.items.map((s: any) => s.str).join(' ');
                }
                newText = textContent;
            } else if (file.type.startsWith('image/')) {
                setLoadingMessage('Reading image...');
                 const base64String = await new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve((reader.result as string).split(',')[1]);
                    reader.onerror = (error) => reject(error);
                    reader.readAsDataURL(file);
                });
                newImage = { data: base64String, mimeType: file.type };
            } else {
                 alert('Unsupported file type. Please upload a PDF or an image (PNG, JPG).');
                 setIsLoading(false);
                 return;
            }

            setLoadingMessage('Integrating material into Lore Bible...');
            const updatedLoreString = await geminiService.integrateNewMaterial(loreData, newText, newImage);

            try {
                // Clean the response to ensure it's valid JSON
                const cleanedJsonString = updatedLoreString.replace(/^```json\s*|```\s*$/g, '');
                const updatedLore = JSON.parse(cleanedJsonString);
                setLoreData(updatedLore);
                setIsLoreModified(true);
                alert("Lore Bible has been successfully updated with the new material!");
            } catch (e) {
                console.error("Failed to parse updated lore from AI:", e);
                alert("The AI returned an invalid data format. Please try again.");
            }

        } catch (error) {
            console.error("Error processing file:", error);
            alert("Failed to process and integrate the new material.");
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    }, [loreData]);
    
    const handleIntegrateProvidedNarrative = useCallback(async () => {
        setIsLoading(true);
        setLoadingMessage('Integrating provided narrative into Lore Bible...');
        try {
            const updatedLoreString = await geminiService.integrateNewMaterial(loreData, narrativeBibleText, undefined);
             try {
                const cleanedJsonString = updatedLoreString.replace(/^```json\s*|```\s*$/g, '');
                const updatedLore = JSON.parse(cleanedJsonString);
                setLoreData(updatedLore);
                setIsLoreModified(true);
                alert("Lore Bible has been successfully updated with the provided narrative!");
            } catch (e) {
                console.error("Failed to parse updated lore from AI:", e);
                alert("The AI returned an invalid data format. Please try again.");
            }
        } catch(error) {
            console.error("Error integrating provided narrative:", error);
            alert("Failed to integrate the provided narrative.");
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    }, [loreData]);


    const handleGenerateContent = useCallback(async (contentType: string) => {
        if (!loreData) return;
        setIsLoading(true);
        setGeneratedImage(null); 
        setGeneratedContent('');
        setLoadingMessage(`Generating ${contentType}...`);
        try {
            const content = await geminiService.generateNewContent(loreData, contentType);
            if (contentType === 'Visual Prompt') {
                 setGeneratedContent(content);
                setLoadingMessage('Generating image from prompt...');
                const imageB64 = await geminiService.generateImage(content);
                setGeneratedImage(imageB64);
            } else {
                // Attempt to parse and format the JSON response
                try {
                    const cleanedJsonString = content.replace(/^```json\s*|```\s*$/g, '');
                    const jsonObj = JSON.parse(cleanedJsonString);
                    setGeneratedContent(JSON.stringify(jsonObj, null, 2));
                } catch {
                    setGeneratedContent(content); // Fallback to raw text if not valid JSON
                }
            }
        } catch (error) {
            console.error(`Error generating ${contentType}:`, error);
            alert(`Failed to generate ${contentType}.`);
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    }, [loreData]);

    const handlePlanEnhancements = useCallback(async () => {
        if (!loreData) return;
        setIsLoading(true);
        setLoadingMessage('Analyzing lore & planning enhancements...');
        try {
            const plan = await geminiService.planEnhancements(loreData);
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
        setLoadingMessage('Executing enhancement plan...');
        try {
            const updatedLoreString = await geminiService.executePlan(loreData, enhancementPlan);
            const cleanedJsonString = updatedLoreString.replace(/^```json\s*|```\s*$/g, '');
            const updatedLore = JSON.parse(cleanedJsonString);
            setLoreData(updatedLore);
            setIsLoreModified(true);
            setEnhancementPlan(null); // Clear the plan after execution
            alert("Enhancement plan executed successfully! The Lore Overview has been updated.");
        } catch (error) {
            console.error("Error executing plan:", error);
            alert("Failed to execute enhancement plan. The AI may have returned an invalid format.");
        } finally {
            setIsLoading(false);
            setLoadingMessage('');
        }
    }, [loreData, enhancementPlan]);


    return (
        <div className="min-h-screen bg-brand-bg text-brand-text font-sans flex flex-col">
            {isLoading && <Loader message={loadingMessage} />}
            <Header />
            <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col">
                {!loreData ? (
                    <div className="flex-grow flex items-center justify-center">
                        <Loader message="Loading Lore Bible..." />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full flex-grow">
                        <ContextPanel loreData={loreData} isLoreModified={isLoreModified} />
                        <StudioPanel
                            mode={mode}
                            setMode={setMode}
                            generatedContent={generatedContent}
                            generatedImage={generatedImage}
                            enhancementPlan={enhancementPlan}
                            onGenerateContent={handleGenerateContent}
                            onPlanEnhancements={handlePlanEnhancements}
                            onExecutePlan={handleExecutePlan}
                            onIntegrateMaterial={handleIntegrateMaterial}
                            onIntegrateProvidedNarrative={handleIntegrateProvidedNarrative}
                            hasContentToEnhance={!!loreData}
                        />
                    </div>
                )}
            </main>
        </div>
    );
};

export default App;
