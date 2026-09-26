'use client';

import { WorkoutContextType, WorksoutContext } from '@/context/WorkoutContext';
import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface MarksButtonProps {
  planId: number;
  planName: string;
}

const MarksButton = ({ planId, planName }: MarksButtonProps) => {
  const { completedPlanIds = [], setCompletedPlanIds } = useContext(
    WorksoutContext
  ) as WorkoutContextType;

  // আইডি ম্যাচ করছে কিনা চেক
  const isCompleted = completedPlanIds.some((id) => String(id) === String(planId));

  const handleToggleDone = () => {
    if (isCompleted) {
      setCompletedPlanIds((prev) => prev.filter((id) => String(id) !== String(planId)));
      toast.info(`Marked "${planName}" as incomplete`);
    } else {
      setCompletedPlanIds((prev) => [...prev, planId]);
      toast.success(`Great job! Completed "${planName}"`);
    }
  };

  return (
    <button
      onClick={handleToggleDone}
      className={`btn w-full border-none transition-all sm:w-auto ${
        isCompleted
          ? 'bg-gray-800 text-lime-400 hover:bg-gray-700'
          : 'bg-lime-300 text-gray-900 hover:bg-lime-400'
      }`}
    >
      <FaCheck />
      {isCompleted ? 'Completed' : 'Mark As Done'}
    </button>
  );
};

export default MarksButton;