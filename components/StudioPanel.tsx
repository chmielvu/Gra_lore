
import React from 'react';
import { Mode } from '../types';
import GenerateContent from './GenerateContent';
import EnhanceLore from './EnhanceLore';

interface StudioPanelProps {
    mode: Mode;
    setMode: (mode: Mode) => void;
    generatedContent: string | null;
    generatedImage: string | null;
    enhancementPlan: string | null;
    onGenerateContent: (contentType: string) => void;
    onPlanEnhancements: () => void;
    onExecutePlan: () => void;
    onIntegrateMaterial: (file: File) => void;
    onIntegrateProvidedNarrative: () => void;
    hasContentToEnhance: boolean;
}

const StudioPanel: React.FC<StudioPanelProps> = (props) => {
    return (
        <div className="bg-brand-surface rounded-lg p-6 flex flex-col shadow-lg">
            <div className="flex justify-center mb-6">
                <div className="bg-brand-bg p-1 rounded-lg flex gap-1">
                    <button
                        onClick={() => props.setMode(Mode.Generate)}
                        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${props.mode === Mode.Generate ? 'bg-brand-primary text-white' : 'text-brand-text-muted hover:bg-brand-secondary'}`}
                    >
                        Generate New Content
                    </button>
                    <button
                        onClick={() => props.setMode(Mode.Enhance)}
                        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${props.mode === Mode.Enhance ? 'bg-brand-primary text-white' : 'text-brand-text-muted hover:bg-brand-secondary'}`}
                    >
                        Enhance Existing Lore
                    </button>
                </div>
            </div>
            <div className="flex-grow flex flex-col">
                {props.mode === Mode.Generate ? (
                    <GenerateContent 
                        onGenerate={props.onGenerateContent} 
                        generatedContent={props.generatedContent}
                        generatedImage={props.generatedImage}
                    />
                ) : (
                    <EnhanceLore 
                        enhancementPlan={props.enhancementPlan}
                        onPlan={props.onPlanEnhancements}
                        onExecute={props.onExecutePlan}
                        onIntegrateMaterial={props.onIntegrateMaterial}
                        onIntegrateProvidedNarrative={props.onIntegrateProvidedNarrative}
                        canPlan={props.hasContentToEnhance}
                        canExecute={!!props.enhancementPlan}
                    />
                )}
            </div>
        </div>
    );
};

export default StudioPanel;
