'use client'
import { WorksoutContext } from "@/context/WorkoutContext";
import { IFitLogs } from "@/types/FitLogs.type";
import Link from "next/link";
import React, { useContext } from "react";
interface WorkoutContextType {
  addPlan: IFitLogs[];
}
const PlanButton = () => {
  const { addPlan } = useContext(WorksoutContext) as WorkoutContextType;
  return (
    <Link href={"/myplan"} className="flex justify-between gap-1">
      <span>Plan</span>
      <span className="badge rounded-full bg-lime-300 text-black">
        {addPlan.length}
      </span>
    </Link>
  );
};

export default PlanButton;
