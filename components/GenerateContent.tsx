
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MapIcon, UserIcon, UsersIcon, CalendarIcon, ImageIcon, XIcon, PaperclipIcon, SendIcon, CameraIcon, PlayIcon } from './icons';
import type { ChatMessage, ChatPart } from '../types';

// --- Audio Playback Helpers ---
const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });

function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(data: Uint8Array): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length;
  const buffer = audioContext.createBuffer(1, frameCount, 24000);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
}

const playAudio = async (base64Audio: string) => {
    try {
        const decoded = decodeBase64(base64Audio.split(',')[1]);
        const audioBuffer = await decodeAudioData(decoded);
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
    } catch (error) {
        console.error("Failed to play audio:", error);
    }
};

// --- Component Props ---
interface GenerateContentProps {
    onGenerateFromButtons: (contentType: string) => void;
    chatHistory: ChatMessage[];
    isSendingMessage: boolean;
    onSendMessage: (prompt: string, file?: File) => void;
    onGenerateImage: (messageId: number, prompt: string) => void;
    onGenerateAudio: (messageId: number, text: string, characterId: string) => void;
}

const buttons = [
    { label: 'New Location', value: 'Location', icon: MapIcon },
    { label: 'New Educator', value: 'Educator', icon: UserIcon },
    { label: 'New Subject', value: 'Subject', icon: UsersIcon },
    { label: 'New Event', value: 'Event', icon: CalendarIcon },
    { label: 'New Visual Prompt', value: 'Visual Prompt', icon: ImageIcon },
];

const ChatInput: React.FC<{
    isSendingMessage: boolean;
    onSendMessage: (prompt: string, file?: File) => void;
}> = ({ isSendingMessage, onSendMessage }) => {
    const [textPrompt, setTextPrompt] = useState('');
    const [attachedFile, setAttachedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSend = () => {
        if (!isSendingMessage && (textPrompt.trim() || attachedFile)) {
            onSendMessage(textPrompt, attachedFile ?? undefined);
            setTextPrompt('');
            setAttachedFile(null);
            if(fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
             if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
                setAttachedFile(file);
            } else {
                alert('Please upload a PDF or an image file (PNG, JPG).');
            }
        }
    };
    
    return (
        <div className="mt-4 border-t border-brand-secondary/50 pt-4">
            <div className="bg-brand-bg border border-brand-secondary rounded-lg p-2 flex flex-col">
                {attachedFile && (
                    <div className="bg-brand-surface p-2 rounded-md mb-2 flex items-center justify-between">
                        <span className="text-sm text-brand-text-muted truncate">{attachedFile.name}</span>
                        <button onClick={() => setAttachedFile(null)} className="p-1 rounded-full hover:bg-brand-secondary">
                            <XIcon className="w-4 h-4" />
                        </button>
                    </div>
                )}
                <div className="flex items-end gap-2">
                     <textarea
                        value={textPrompt}
                        onChange={(e) => setTextPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        placeholder="Ask a question or give a creative prompt..."
                        className="w-full bg-transparent text-sm focus:outline-none resize-none"
                        rows={2}
                        disabled={isSendingMessage}
                    />
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,image/*" className="hidden" id="chat-file-input" />
                    <button onClick={() => fileInputRef.current?.click()} className="p-2 rounded-lg hover:bg-brand-secondary disabled:opacity-50" disabled={isSendingMessage}>
                        <PaperclipIcon className="w-5 h-5" />
                    </button>
                    <button onClick={handleSend} className="bg-brand-primary hover:bg-brand-primary-hover disabled:opacity-50 text-white p-2 rounded-lg" disabled={isSendingMessage}>
                        <SendIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ChatMessageRenderer: React.FC<{ 
    message: ChatMessage,
    onGenerateImage: GenerateContentProps['onGenerateImage'],
    onGenerateAudio: GenerateContentProps['onGenerateAudio'],
 }> = ({ message, onGenerateImage, onGenerateAudio }) => {
    const textContent = message.parts.map(p => 'text' in p ? p.text : '').join('');
    
    // --- Visual Prompt Logic ---
    const visualPromptMatch = textContent.match(/\[VISUAL_PROMPT\]([\s\S]*?)\[\/VISUAL_PROMPT\]/);
    const visualPrompt = visualPromptMatch ? visualPromptMatch[1].trim() : null;
    const textWithoutVisualPrompt = visualPrompt ? textContent.replace(visualPromptMatch[0], '') : textContent;

    // --- Dialogue Logic ---
    const dialogueRegex = /^(\w+):\s*"(.*)"$/gm;
    let dialogueMatches: { character: string; text: string }[] = [];
    let match;
    while ((match = dialogueRegex.exec(textContent)) !== null) {
        dialogueMatches.push({ character: match[1], text: match[2] });
    }

    const renderTextWithDialogueButtons = (text: string) => {
        const parts = text.split(dialogueRegex);
        const elements = [];
        let lastIndex = 0;
        
        dialogueRegex.lastIndex = 0; // Reset regex index

        while ((match = dialogueRegex.exec(text)) !== null) {
            // Text before the match
            if (match.index > lastIndex) {
                 elements.push(<span key={`text-${lastIndex}`}>{text.substring(lastIndex, match.index)}</span>);
            }
            const [fullMatch, character, dialogue] = match;
            elements.push(
                <span key={`dialogue-${match.index}`} className="flex items-center gap-2 my-1">
                    <span>{fullMatch}</span>
                    {message.audioUrl ? (
                         <button onClick={() => playAudio(message.audioUrl!)} className="p-1.5 rounded-full bg-green-500/20 text-green-300 hover:bg-green-500/40">
                            <PlayIcon className="w-3 h-3"/>
                        </button>
                    ) : (
                        <button 
                            onClick={() => onGenerateAudio(message.id, dialogue, character.toLowerCase())}
                            className="p-1.5 rounded-full bg-brand-secondary hover:bg-brand-primary-hover disabled:opacity-50"
                            disabled={!!message.isGeneratingMedia}
                        >
                            <PlayIcon className="w-3 h-3"/>
                        </button>
                    )}
                </span>
            );
            lastIndex = match.index + fullMatch.length;
        }

        // Remaining text after last match
        if (lastIndex < text.length) {
            elements.push(<span key={`text-end`}>{text.substring(lastIndex)}</span>);
        }

        return elements.length > 0 ? <>{elements}</> : <>{text}</>;
    }
    
    return (
        <div className={`p-3 rounded-lg max-w-full break-words ${message.role === 'user' ? 'bg-brand-primary/20 self-end' : 'bg-brand-surface self-start'}`}>
            {message.fileDataUrl && <img src={message.fileDataUrl} alt="Attached file" className="rounded-lg mb-2 max-w-xs" />}
            
            {renderTextWithDialogueButtons(textWithoutVisualPrompt)}

            {visualPrompt && (
                <div className="mt-3 pt-3 border-t border-brand-primary/30">
                    <p className="text-sm italic text-brand-text-muted">{visualPrompt}</p>
                    <button 
                        onClick={() => onGenerateImage(message.id, visualPrompt)}
                        disabled={!!message.imageUrl || !!message.isGeneratingMedia}
                        className="mt-2 flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover disabled:bg-brand-secondary disabled:cursor-not-allowed text-white font-semibold py-1.5 px-3 rounded-lg text-xs transition-colors"
                    >
                       <CameraIcon className="w-4 h-4" />
                       {message.isGeneratingMedia ? 'Generating...' : (message.imageUrl ? 'Image Generated' : 'Generate Image')}
                    </button>
                </div>
            )}
            
            {message.imageUrl && (
                <div className="mt-3">
                    <img src={message.imageUrl} alt="Generated content" className="rounded-lg max-w-full" />
                </div>
            )}
        </div>
    );
};


const GenerateContent: React.FC<GenerateContentProps> = (props) => {
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [props.chatHistory]);

    return (
        <div className="flex flex-col flex-grow bg-brand-bg p-4 rounded-md min-h-0">
            {/* Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 mb-4">
                {buttons.map((btn) => (
                    <button
                        key={btn.value}
                        onClick={() => props.onGenerateFromButtons(btn.value)}
                        className="flex items-center justify-center text-center gap-2 bg-brand-surface hover:bg-brand-primary-hover disabled:opacity-50 text-brand-text-muted hover:text-white text-xs font-semibold p-2 rounded-lg transition-colors"
                        disabled={props.isSendingMessage}
                    >
                        <btn.icon className="w-4 h-4" />
                        <span>{btn.label}</span>
                    </button>
                ))}
            </div>
            
            {/* Chat History */}
             <div ref={chatContainerRef} className="flex-grow overflow-y-auto space-y-4 pr-2 -mr-2">
                {props.chatHistory.map((message) => (
                    <div key={message.id} className="flex flex-col">
                        <ChatMessageRenderer 
                            message={message} 
                            onGenerateImage={props.onGenerateImage} 
                            onGenerateAudio={props.onGenerateAudio}
                        />
                    </div>
                ))}
            </div>


            {/* Chat Input */}
            <ChatInput 
                isSendingMessage={props.isSendingMessage}
                onSendMessage={props.onSendMessage}
            />
        </div>
    );
};

export default GenerateContent;
