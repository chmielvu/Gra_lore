
import React from 'react';
import GenerateContent from './GenerateContent';
import EnhanceLore from './EnhanceLore';
import { BrainCircuitIcon, BookUpIcon } from './icons';
import type { ChatMessage } from '../types';

interface StudioPanelProps {
    enhancementPlan: string | null;
    onGenerateContent: (contentType: string) => void;
    onPlanEnhancements: () => void;
    onExecutePlan: () => void;
    hasContentToEnhance: boolean;
    // Chat props
    chatHistory: ChatMessage[];
    isSendingMessage: boolean;
    onSendMessage: (prompt: string, file?: File) => void;
    onGenerateImage: (messageId: number, prompt: string) => void;
    onGenerateAudio: (messageId: number, text: string, characterId: string) => void;
}

const StudioPanel: React.FC<StudioPanelProps> = (props) => {
    return (
        <div className="bg-brand-surface rounded-lg p-6 flex flex-col shadow-lg space-y-6 h-full">
            
            {/* --- GENERATE / CHAT --- */}
            <div className="flex flex-col flex-grow min-h-0">
                <div className="flex items-center gap-3 mb-4">
                    <BrainCircuitIcon className="w-6 h-6 text-brand-primary"/>
                    <h2 className="text-xl font-bold text-brand-text">AI Creative Partner</h2>
                </div>
                <GenerateContent 
                    onGenerateFromButtons={props.onGenerateContent}
                    chatHistory={props.chatHistory}
                    isSendingMessage={props.isSendingMessage}
                    onSendMessage={props.onSendMessage}
                    onGenerateImage={props.onGenerateImage}
                    onGenerateAudio={props.onGenerateAudio}
                />
            </div>
            
            <hr className="border-brand-secondary/50"/>
            
            {/* --- ENHANCE --- */}
            <div className="flex flex-col">
                 <div className="flex items-center gap-3 mb-4">
                    <BookUpIcon className="w-6 h-6 text-brand-primary"/>
                    <h2 className="text-xl font-bold text-brand-text">Enhance Existing Lore</h2>
                </div>
                <EnhanceLore 
                    enhancementPlan={props.enhancementPlan}
                    onPlan={props.onPlanEnhancements}
                    onExecute={props.onExecutePlan}
                    canPlan={props.hasContentToEnhance}
                    canExecute={!!props.enhancementPlan}
                />
            </div>

        </div>
    );
};

export default StudioPanel;
