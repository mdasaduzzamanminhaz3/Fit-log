'use client'
import { WorksoutContext } from '@/context/WorkoutContext';
import { IFitLogs } from '@/types/FitLogs.type';
import React, { useContext } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';
interface WorkoutContextType {
  saveWorkout: IFitLogs[];
  setSaveWorkout: React.Dispatch<React.SetStateAction<IFitLogs[]>>;
}
const SaveButton = ({fitLog}:{fitLog:IFitLogs}) => {
  const {saveWorkout,setSaveWorkout } = useContext(WorksoutContext) as WorkoutContextType;
    const handleSave = () => {
    const isAlreadySaved = Boolean(saveWorkout?.find((item) => item.id === fitLog.id));
      if (isAlreadySaved) {
      toast.info(`${fitLog.name} is already in your saved list!`);
      return;
    }
        setSaveWorkout([...saveWorkout,fitLog]);
        toast.success(`you have savded successfully,${fitLog.name}`)
    }
    return (
            <button onClick={() => handleSave()} className="btn flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm border border-gray-700 transition-all active:scale-[0.98]">
              <FaBookmark className="text-base text-gray-400" /> Save for later
            </button>
    );
};

export default SaveButton;