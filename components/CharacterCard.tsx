import React from 'react';
import OceanVisualizer from './OceanVisualizer';
import { UserIcon } from './icons';

interface CharacterCardProps {
    archetype: any;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ archetype }) => {
    return (
        <div className="bg-brand-bg rounded-lg p-4 border border-brand-secondary/50">
            <div className="flex items-center gap-3 mb-2">
                <UserIcon className="w-5 h-5 text-brand-primary"/>
                <h3 className="text-lg font-bold text-brand-text">{archetype.name}</h3>
                <span className="text-xs bg-brand-secondary text-brand-text-muted px-2 py-0.5 rounded-full">{archetype.role_tag}</span>
            </div>

            <p className="text-sm text-brand-text-muted mb-3">{archetype.loreDescription}</p>
            
            {archetype.visualMotifs && (
                <div className="mb-3">
                    <h4 className="text-md font-bold text-brand-text mb-1">Visual Motifs</h4>
                    <p className="text-sm text-brand-text-muted italic">"{archetype.visualMotifs}"</p>
                </div>
            )}
            
            {archetype.psychologicalProfile && (
                <div className="bg-brand-surface/50 p-3 rounded-md">
                    <h4 className="text-md font-bold text-brand-text mb-2">Psychological Summary</h4>
                    <p className="text-sm text-brand-text-muted mb-3">{archetype.psychologicalProfile.summary}</p>

                    <OceanVisualizer ocean={archetype.psychologicalProfile.ocean} />

                    <h4 className="text-md font-bold text-brand-text mt-4 mb-2">Narrative Functions</h4>
                    <ul className="list-disc list-inside text-sm text-brand-text-muted space-y-1">
                        {archetype.narrativeFunctions.map((func: string, index: number) => (
                            <li key={index}>{func}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CharacterCard;
