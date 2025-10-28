
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
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <BookOpenIcon className="w-6 h-6 text-brand-primary"/>
                    <h2 className="text-xl font-bold text-brand-text">Lore Overview</h2>
                </div>
                {isLoreModified && (
                    <div className="flex items-center gap-2">
                         <button onClick={handleDownload} className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-1.5 px-3 rounded-lg text-xs transition-colors">
                            <DownloadIcon className="w-4 h-4"/>
                            Commit & Download Updated File
                        </button>
                        <button onClick={onRevert} className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold py-1.5 px-3 rounded-lg text-xs transition-colors">
                            <RotateCcwIcon className="w-4 h-4"/>
                            Discard In-Memory Changes
                        </button>
                    </div>
                )}
            </div>

            {isLoreModified && (
                <div className="bg-yellow-900/50 border border-yellow-700 text-yellow-300 text-xs rounded-lg p-2 mb-4">
                    <strong>Note:</strong> The lore has been modified in this session. To make changes permanent, you must <strong>"Commit & Download"</strong> the file and manually replace the <code>loreData.ts</code> in your project. Discarding will revert to the original file content.
                </div>
            )}

            <div className="border-b border-brand-secondary/50 mb-4">
                <nav className="flex space-x-4">
                    <button onClick={() => setActiveView('dossiers')} className={`py-2 px-1 border-b-2 text-sm font-medium ${activeView === 'dossiers' ? 'border-brand-primary text-brand-text' : 'border-transparent text-brand-text-muted hover:text-brand-text'}`}>
                        Character Dossiers
                    </button>
                     <button onClick={() => setActiveView('json')} className={`py-2 px-1 border-b-2 text-sm font-medium ${activeView === 'json' ? 'border-brand-primary text-brand-text' : 'border-transparent text-brand-text-muted hover:text-brand-text'}`}>
                        Live Working Document (In-Memory State)
                    </button>
                </nav>
            </div>
            <div className="flex-grow overflow-y-auto -mr-4 pr-4">
                {activeView === 'dossiers' && (
                    <div className="space-y-4">
                        {meta && <p className="text-sm text-brand-text-muted italic">{meta.description}</p>}
                        {factions?.map((faction: any) => (
                            <div key={faction.id}>
                                <div className="flex items-center gap-3 my-4">
                                    <UsersIcon className="w-5 h-5 text-brand-primary"/>
                                    <h3 className="text-lg font-bold text-brand-text">{faction.name}</h3>
                                </div>
                                <div className="space-y-4">
                                {faction.archetypes.map((archetype: any) => (
                                    <CharacterCard key={archetype.id} archetype={archetype} />
                                ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeView === 'json' && (
                    <JsonViewer data={loreData} baseData={baseLoreData} />
                )}
            </div>
        </div>
    );
};

export default ContextPanel;
