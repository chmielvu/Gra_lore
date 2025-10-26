
import React from 'react';
import { Wand2Icon, MapIcon, UserIcon, UsersIcon, CalendarIcon, ImageIcon } from './icons';

interface GenerateContentProps {
    onGenerate: (contentType: string) => void;
    generatedContent: string | null;
    generatedImage: string | null;
}

const buttons = [
    { label: 'New Location', value: 'Location', icon: MapIcon },
    { label: 'New Educator', value: 'Educator', icon: UserIcon },
    { label: 'New Subject', value: 'Subject', icon: UsersIcon },
    { label: 'New Event', value: 'Event', icon: CalendarIcon },
    { label: 'New Visual Prompt', value: 'Visual Prompt', icon: ImageIcon },
];

const GenerateContent: React.FC<GenerateContentProps> = ({ onGenerate, generatedContent, generatedImage }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-4">
                {buttons.map(({ label, value, icon: Icon }) => (
                    <button
                        key={value}
                        onClick={() => onGenerate(value)}
                        className="bg-brand-secondary hover:bg-brand-primary-hover text-brand-text font-semibold py-2 px-3 rounded-lg flex flex-col items-center justify-center text-xs text-center transition-colors h-20"
                    >
                        <Icon className="w-5 h-5 mb-1.5"/>
                        {label}
                    </button>
                ))}
            </div>
            <div className="flex-grow flex flex-col bg-brand-bg p-4 rounded-md">
                <div className="flex items-center gap-3 mb-2">
                     <Wand2Icon className="w-5 h-5 text-brand-primary"/>
                    <h3 className="text-lg font-semibold text-brand-text">Generated Enhancement</h3>
                </div>
                {generatedImage && (
                    <div className="mb-4">
                        <img src={`data:image/jpeg;base64,${generatedImage}`} alt="Generated visual" className="rounded-lg w-full max-w-sm mx-auto" />
                    </div>
                )}
                <textarea
                    readOnly
                    value={generatedContent || ''}
                    placeholder="Generated JSON objects or prompts will appear here..."
                    className="w-full flex-grow bg-transparent text-brand-text-muted resize-none focus:outline-none p-2 rounded font-mono text-xs"
                />
            </div>
        </div>
    );
};

export default GenerateContent;
