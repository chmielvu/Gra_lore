import React, { useState } from 'react';
import { BookOpenIcon, DownloadIcon, UsersIcon, RotateCcwIcon } from './icons';
import CharacterCard from './CharacterCard';
import JsonViewer from './JsonViewer';

interface ContextPanelProps {
    loreData: any;
    baseLoreData: any;
    isLoreModified: boolean;
    onRevert: () => void;
}

const ContextPanel: React.FC<ContextPanelProps> = ({ loreData, baseLoreData, isLoreModified, onRevert }) => {
    const [activeView, setActiveView] = useState<'dossiers' | 'json'>('dossiers');
    const { meta, factions } = loreData || {};

    const handleDownload = () => {
        const fileContent = `export const loreBible = ${JSON.stringify(loreData, null, 2)};\n`;
        const blob = new Blob([fileContent], { type: 'text/typescript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'loreData_updated.ts';
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

    const TabButton = ({ view, label, icon: Icon }: { view: 'dossiers' | 'json', label: string, icon: React.FC<any> }) => (
        <button
            onClick={() => setActiveView(view)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-t-lg border-b-2 transition-colors ${
                activeView === view
                    ? 'border-brand-primary text-brand-text'
                    : 'border-transparent text-brand-text-muted hover:text-brand-text hover:border-brand-secondary'
            }`}
        >
            <Icon className="w-5 h-5" />
            {label}
        </button>
    );


    return (
        <div className="bg-brand-surface rounded-lg p-6 flex flex-col h-full shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                    <BookOpenIcon className="w-6 h-6 text-brand-primary"/>
                    <h2 className="text-xl font-bold text-brand-text">Lore Bible Document</h2>
                </div>
                <div className="flex items-center gap-2">
                     <button 
                        onClick={onRevert}
                        disabled={!isLoreModified}
                        className="flex items-center gap-2 bg-brand-secondary hover:bg-brand-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-1.5 px-3 rounded-lg text-xs transition-colors"
                        title={isLoreModified ? "Discard changes and revert to base document" : "No changes to revert"}
                    >
                        <RotateCcwIcon className="w-4 h-4" />
                        Revert to Base
                    </button>
                    <button 
                        onClick={handleDownload}
                        disabled={!isLoreModified}
                        className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-1.5 px-3 rounded-lg text-xs transition-colors"
                        title={isLoreModified ? "Download the updated lore file" : "No changes to download"}
                    >
                        <DownloadIcon className="w-4 h-4" />
                        Download
                    </button>
                </div>
            </div>
            <p className="text-sm text-brand-text-muted mb-4">{meta?.description}</p>
            
            <div className={`p-3 rounded-lg border text-xs mb-4 ${isLoreModified ? 'bg-yellow-900/20 border-yellow-400/30 text-yellow-300' : 'bg-green-900/20 border-green-400/30 text-green-300'}`}>
                {isLoreModified ? (
                    <>
                        <p className="font-bold">Status: Working Document (Modified)</p>
                        <p>You are viewing a live, in-memory version of the lore that has been changed during this session.</p>
                    </>
                ) : (
                    <>
                        <p className="font-bold">Status: Base Lore Document</p>
                        <p>You are viewing the original, unmodified lore file. Enhancements will modify this working document.</p>
                    </>
                )}
            </div>
            
            {/* Tabs */}
            <div className="flex border-b border-brand-secondary/50 -mx-6 px-6">
                <TabButton view="dossiers" label="Character Dossiers" icon={UsersIcon} />
                <TabButton view="json" label="Working Document (Live State)" icon={BookOpenIcon} />
            </div>

            <div className="flex-grow overflow-auto mt-4 min-h-0 pr-2">
                {activeView === 'json' ? (
                    <div className="bg-brand-bg rounded-md h-full text-xs">
                       <JsonViewer data={loreData} baseData={isLoreModified ? baseLoreData : loreData} />
                    </div>
                ) : (
                    <div className="h-full">
                        {factions.map((faction: any) => (
                            <div key={faction.id} className="mb-6">
                                <h2 className="text-2xl font-bold text-brand-primary border-b-2 border-brand-primary/30 pb-2 mb-4">{faction.name}</h2>
                                <div className="space-y-4">
                                    {faction.archetypes.map((archetype: any) => (
                                        <CharacterCard key={archetype.id} archetype={archetype} />
                                    ))}
                                 </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContextPanel;
