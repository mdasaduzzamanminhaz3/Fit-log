'use client'
import { WorksoutContext } from '@/context/WorkoutContext';
import { IFitLogs } from '@/types/FitLogs.type';
import React, { useContext } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { toast } from 'react-toastify';
interface WorkoutContextType {
  addPlan: IFitLogs[];
  setAddPlan: React.Dispatch<React.SetStateAction<IFitLogs[]>>;
}
const AddPlanButton = ({fitLog}: {fitLog:IFitLogs}) => {
    const {addPlan, setAddPlan} = useContext(WorksoutContext) as WorkoutContextType;
    // console.log(worksoutProvider);
    const handleAddPlan = () => {
        const currentPlans = addPlan || [];
const isAlreadyAdded = Boolean(currentPlans.find((item) => item.id === fitLog.id));
    if (isAlreadyAdded) {
      toast.info(`${fitLog.name} is already in your Today's Plan list!`);
      return;
    }
        setAddPlan([...addPlan,fitLog]);
        toast.success(`You have successfully added,${fitLog.name} in your Today's Plan`)
    }
    return (
            <button onClick={() => handleAddPlan()} className="btn flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-lime-400 hover:bg-lime-500 text-gray-950 font-bold text-sm transition-all shadow-md active:scale-[0.98]">
              <FaCalendar className="text-base" /> Add to today&apos;s plan
            </button>
    );
};

export default AddPlanButton;