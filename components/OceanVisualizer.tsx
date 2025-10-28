import React from 'react';

interface OceanProfile {
    openness: { score: number; rationale: string };
    conscientiousness: { score: number; rationale: string };
    extraversion: { score: number; rationale: string };
    agreeableness: { score: number; rationale: string };
    neuroticism: { score: number; rationale: string };
}

interface OceanVisualizerProps {
    ocean: OceanProfile;
}

const OceanTrait: React.FC<{ trait: string; data: { score: number; rationale: string } }> = ({ trait, data }) => {
    const scorePercentage = (data.score / 5) * 100;

    return (
        <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
                <h5 className="text-sm font-semibold capitalize text-brand-text">{trait}</h5>
                <span className="text-xs font-mono text-brand-primary">{data.score}/5</span>
            </div>
            <div className="w-full bg-brand-bg rounded-full h-2.5">
                <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: `${scorePercentage}%` }}></div>
            </div>
            <p className="text-xs text-brand-text-muted mt-1 italic">"{data.rationale}"</p>
        </div>
    );
};


const OceanVisualizer: React.FC<OceanVisualizerProps> = ({ ocean }) => {
    // Handle cases where ocean data might be missing
    if (!ocean) return null;

    return (
        <div>
            <h4 className="text-md font-bold text-brand-text mt-4 mb-2">Psychological Profile (OCEAN)</h4>
            <div className="space-y-2">
               {ocean.openness && <OceanTrait trait="openness" data={ocean.openness} />}
               {ocean.conscientiousness && <OceanTrait trait="conscientiousness" data={ocean.conscientiousness} />}
               {ocean.extraversion && <OceanTrait trait="extraversion" data={ocean.extraversion} />}
               {ocean.agreeableness && <OceanTrait trait="agreeableness" data={ocean.agreeableness} />}
               {ocean.neuroticism && <OceanTrait trait="neuroticism" data={ocean.neuroticism} />}
            </div>
        </div>
    );
};

export default OceanVisualizer;
