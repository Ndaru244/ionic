import React from "react";

export interface Memory {
    id: string;
    imagePath: string;
    title: string;
    type: 'good' | 'bad';
    lat: number,
    lng: number,
    base64url: string;
}

const MemoriesContext = React.createContext<{
    memories:    Memory[];
    addMemory:   (
        path: string,
        base64Data: string,
        title: string,
        lat: number,
        lng: number,
        type: 'good' | 'bad'
    ) => void;
    
    initContext: () => void;
}>({
    memories: [],
    addMemory:   () => { },
    initContext: () => { }
});

export default MemoriesContext;