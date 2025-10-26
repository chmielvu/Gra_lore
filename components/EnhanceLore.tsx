
import React from 'react';
import {ClipboardListIcon, FileTextIcon, BookUpIcon} from './icons'
import FileUploader from './FileUploader';

interface EnhanceLoreProps {
    enhancementPlan: string | null;
    onPlan: () => void;
    onExecute: () => void;
    onIntegrateMaterial: (file: File) => void;
    onIntegrateProvidedNarrative: () => void;
    canPlan: boolean;
    canExecute: boolean;
}

const EnhanceLore: React.FC<EnhanceLoreProps> = ({ 
    enhancementPlan, 
    onPlan, 
    onExecute,
    onIntegrateMaterial,
    onIntegrateProvidedNarrative, 
    canPlan, 
    canExecute 
}) => {
    return (
        <div className="flex flex-col h-full space-y-4">
            
            {/* Integration Section */}
            <div>
                 <div className="flex items-center gap-3 mb-2">
                    <BookUpIcon className="w-5 h-5 text-brand-primary"/>
                    <h3 className="text-md font-semibold text-brand-text">Integrate New Lore</h3>
                </div>
                <button
                    onClick={onIntegrateProvidedNarrative}
                    className="w-full bg-brand-secondary hover:bg-brand-primary-hover text-white font-bold py-2 px-4 rounded-lg transition-colors mb-2"
                >
                    Integrate Provided Narrative Bible
                </button>
                <FileUploader onFileUpload={onIntegrateMaterial} />
            </div>

            {/* Divider */}
            <hr className="border-brand-secondary my-4"/>

            {/* Analysis Section */}
            <div className="flex-grow flex flex-col space-y-4">
                <div className="flex flex-col">
                    <button
                        onClick={onPlan}
                        disabled={!canPlan}
                        className="w-full bg-brand-primary hover:bg-brand-primary-hover disabled:bg-brand-secondary disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors mb-2"
                    >
                        1. Analyze Lore Bible & Plan Enhancements
                    </button>
                    <div className="flex-grow flex flex-col bg-brand-bg p-4 rounded-md">
                       <div className="flex items-center gap-3 mb-2">
                           <ClipboardListIcon className="w-5 h-5 text-brand-primary"/>
                           <h3 className="text-md font-semibold text-brand-text">Recommended Enhancement Plan</h3>
                       </div>
                        <textarea
                            readOnly
                            value={enhancementPlan || ''}
                            placeholder="An enhancement plan will be generated here after analysis..."
                            className="w-full flex-grow bg-transparent text-brand-text-muted resize-none focus:outline-none p-2 rounded"
                            rows={8}
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <button
                        onClick={onExecute}
                        disabled={!canExecute}
                        className="w-full bg-brand-primary hover:bg-brand-primary-hover disabled:bg-brand-secondary disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                        2. Execute Enhancement Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnhanceLore;
