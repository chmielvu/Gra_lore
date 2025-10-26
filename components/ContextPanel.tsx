import React from 'react';
import { BookOpenIcon, DownloadIcon } from './icons';
import { narrativeBibleText } from '../data/loreData';


interface ContextPanelProps {
    loreData: any;
    isLoreModified: boolean;
}

const ContextPanel: React.FC<ContextPanelProps> = ({ loreData, isLoreModified }) => {
    const { meta } = loreData || {};

    const handleDownload = () => {
        const fileContent = `export const initialLoreBible = ${JSON.stringify(loreData, null, 2)};\n\n// NOTE: The narrativeBibleText is not updated by this tool.\nexport const narrativeBibleText = \`${narrativeBibleText}\`;\n`;
        const blob = new Blob([fileContent], { type: 'text/typescript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'loreData.ts';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    if (!loreData) {
        return (
            <div className="bg-brand-surface rounded-lg p-6 flex flex-col h-full shadow-lg items-center justify-center">
                <p className="text-brand-text-muted">Loading Lore Bible...</p>
            </div>
        );
    }

    return (
        <div className="bg-brand-surface rounded-lg p-6 flex flex-col h-full shadow-lg">
            <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                    <BookOpenIcon className="w-6 h-6 text-brand-primary"/>
                    <h2 className="text-xl font-bold text-brand-text">Lore Overview</h2>
                </div>
                <button 
                    onClick={handleDownload}
                    disabled={!isLoreModified}
                    className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover disabled:bg-brand-secondary disabled:cursor-not-allowed text-white font-semibold py-1.5 px-3 rounded-lg text-xs transition-colors"
                    title={isLoreModified ? "Download the updated lore file" : "No changes to save yet"}
                >
                    <DownloadIcon className="w-4 h-4" />
                    Download Updated Lore
                </button>
            </div>
            <p className="text-sm text-brand-text-muted mb-4">{meta?.description}</p>
            
            <div className="bg-brand-bg rounded-md flex-grow overflow-auto min-h-[70vh]">
                <textarea
                    readOnly
                    value={JSON.stringify(loreData, null, 2)}
                    className="w-full h-full bg-transparent text-brand-text-muted resize-none focus:outline-none p-4 font-mono text-xs"
                    aria-label="Current Lore Bible JSON"
                />
            </div>
        </div>
    );
};

export default ContextPanel;