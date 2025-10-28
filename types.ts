
export interface InlineDataPart {
    inlineData: {
        data: string;
        mimeType: string;
    };
}

export interface TextPart {
    text: string;
}

export type ChatPart = InlineDataPart | TextPart;

export interface ChatMessage {
    id: number;
    role: 'user' | 'model';
    parts: ChatPart[];
    fileDataUrl?: string; // Optional field to store Data URL for displaying attached images
    imageUrl?: string; // Optional field for generated image
    audioUrl?: string; // Optional field for generated audio
    isGeneratingMedia?: boolean; // Optional flag for loading state
}
