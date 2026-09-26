'use client'
import { WorksoutContext } from "@/context/WorkoutContext";
import { IFitLogs } from "@/types/FitLogs.type";
import Link from "next/link";
import React, { useContext } from "react";
interface WorkoutContextType {
  saveWorkout: IFitLogs[];
}
const SavedButton = () => {
      const { saveWorkout } = useContext(WorksoutContext) as WorkoutContextType;

  return (
    <Link href={"/myplan"} className="flex justify-between gap-1">
      <span>Saved</span>
      <span className="badge rounded-full bg-lime-300 text-black">{saveWorkout.length}</span>
    </Link>
  );
};

export default SavedButton;
