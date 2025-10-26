
import React, { useCallback, useState } from 'react';
import { UploadCloudIcon } from './icons';

interface FileUploaderProps {
    onFileUpload: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onFileUpload(e.target.files[0]);
        }
    };

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
                onFileUpload(file);
            } else {
                alert('Please upload a PDF or an image file (PNG, JPG).');
            }
        }
    }, [onFileUpload]);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    return (
        <div className="w-full mt-4">
            <div
                className={`w-full p-6 border-2 border-dashed rounded-lg text-center transition-colors duration-300 ${isDragging ? 'border-brand-primary bg-brand-surface' : 'border-brand-secondary hover:border-brand-primary-hover'}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
            >
                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf,image/png,image/jpeg"
                    onChange={handleFileChange}
                />
                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center">
                    <UploadCloudIcon className="w-12 h-12 text-brand-secondary mb-3" />
                    <h2 className="text-lg font-semibold text-brand-text mb-1">Upload New Material to Enhance</h2>
                    <p className="text-sm text-brand-text-muted">Or drag & drop a PDF or Image to integrate it.</p>
                </label>
            </div>
        </div>
    );
};

export default FileUploader;
