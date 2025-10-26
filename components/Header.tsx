
import React from 'react';
import { ForgeIcon } from './icons';

const Header: React.FC = () => {
    return (
        <header className="bg-brand-surface/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
                <ForgeIcon className="w-8 h-8 text-brand-primary" />
                <h1 className="text-xl md:text-2xl font-bold tracking-wider text-brand-text">
                    The Forge's Loom: <span className="font-light text-brand-text-muted">Lore Enhancer</span>
                </h1>
            </div>
        </header>
    );
};

export default Header;
