import React from 'react';
export interface Target {
    id: string,
    photo: string,
    name: string,
    criteria: string,
    gender: string
}

interface Context {
    targets: Target[];
    addTarget: (
        targetId: string,
        targetPhoto: string,
        targetName: string,
        targetCriteria: string,
        targetGender: string
    ) => void,
}

const TargetContext = React.createContext<Context>({
    targets: [],
    addTarget: () => {},
});
export default TargetContext;