import React, { useState } from "react";
import TargetContext, {Target} from "./target-context";

const TargetContextProvider: React.FC = props => {
    const [targets, setTargets] = useState<Target[]>([
    ]);
    const addTarget = (id: string, photo: string, name: string, criteria: string, gender: string) => {
        const newTarget: Target = {
            id: id,
            photo: photo,
            name: name,
            criteria: criteria,
            gender: gender
        };
        setTargets((currTargets: Target[]) => {
            return currTargets.concat(newTarget);
        });
    };

    return <TargetContext.Provider value={{
        targets,
        addTarget
    }}>
        {props.children}
    </TargetContext.Provider>
};

export default TargetContextProvider;