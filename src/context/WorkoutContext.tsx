'use client';
import { IFitLogs } from '@/types/FitLogs.type';
import React, { createContext, ReactNode, useState } from 'react';

export interface WorkoutContextType {
  addPlan: IFitLogs[];
  setAddPlan: React.Dispatch<React.SetStateAction<IFitLogs[]>>;
  saveWorkout: IFitLogs[];
  setSaveWorkout: React.Dispatch<React.SetStateAction<IFitLogs[]>>;
  completedPlanIds: (string | number)[];
  setCompletedPlanIds: React.Dispatch<React.SetStateAction<(string | number)[]>>;
}

export const WorksoutContext = createContext<WorkoutContextType | null>(null);

const WorksoutProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<IFitLogs[]>([]);
  const [saveWorkout, setSaveWorkout] = useState<IFitLogs[]>([]);
  const [completedPlanIds, setCompletedPlanIds] = useState<(string | number)[]>([]);

  const sharedData: WorkoutContextType = {
    addPlan,
    setAddPlan,
    saveWorkout,
    setSaveWorkout,
    completedPlanIds,
    setCompletedPlanIds,
  };

  return (
    <WorksoutContext.Provider value={sharedData}>
      {children}
    </WorksoutContext.Provider>
  );
};

export default WorksoutProvider;