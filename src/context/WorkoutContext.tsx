'use client';
import React, { createContext, ReactNode, useState } from 'react';
export const WorksoutContext = createContext({});
const WorksoutProvider= ({children}: {children:ReactNode}) => {
    const [addPlan, setAddPlan] = useState([])
    const [saveWorkout, setSaveWorkout] = useState([])
    const sharedData = {
        addPlan,
        setAddPlan,
        saveWorkout,
        setSaveWorkout
    };
    return <WorksoutContext.Provider value={sharedData}>
        {children}
    </WorksoutContext.Provider>
};

export default WorksoutProvider;