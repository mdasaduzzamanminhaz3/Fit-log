'use client';

import { WorkoutContextType, WorksoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface DeleteButtonProps {
  id: string | number;
  name: string;
  type: "plan" | "saved";
}

const DeleteButton = ({ id, name, type }: DeleteButtonProps) => {
  const { setAddPlan, setSaveWorkout, setCompletedPlanIds } = useContext(
    WorksoutContext
  ) as WorkoutContextType;

  const handleDelete = () => {
    if (type === "plan") {
      setAddPlan((prev) => prev.filter((item) => String(item.id) !== String(id)));
      setCompletedPlanIds((prev) => prev.filter((item) => String(item) !== String(id)));
      toast.warn(`Removed "${name}" from today's plan`);
    } else {
      setSaveWorkout((prev) => prev.filter((item) => String(item.id) !== String(id)));
      toast.warn(`Removed "${name}" from saved list`);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="btn btn-circle btn-ghost text-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400"
      aria-label="Remove item"
    >
      <RxCross2 />
    </button>
  );
};

export default DeleteButton;