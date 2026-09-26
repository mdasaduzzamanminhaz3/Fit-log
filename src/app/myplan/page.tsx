"use client";
import React, { useContext, useState } from "react";
import { WorksoutContext } from "@/context/WorkoutContext";
import Plans from "../components/shared/Plans";
import { IFitLogs } from "@/types/FitLogs.type";
import SavedWorkOut from "../components/shared/SavedWorkOut";
interface WorkoutContextType {
  addPlan: IFitLogs[];
  saveWorkout: IFitLogs[];
}
const MyPlansPage = () => {
  const { addPlan, saveWorkout } = useContext(
    WorksoutContext,
  ) as WorkoutContextType;

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const currentList = activeTab === "today"?addPlan:saveWorkout;
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce((acc,item)=>{
    return acc + item.duration;
  },0)
  const totalCalories = currentList.reduce((acc,item)=>{
    return acc + item.caloriesBurned;
  },0)
  return (
    <main className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* ================= HEADER ================= */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
          Your Fitness
        </p>

        <h1 className="mt-1 text-3xl font-black uppercase tracking-tight sm:text-4xl">
          My Plan
        </h1>

        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl bg-gray-900">
        <div className="px-3 py-5 text-center sm:px-6">
          <span className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">
            Exercises
          </span>
          <h2 className="mt-1 text-2xl font-black sm:text-3xl">{totalExercises}</h2>
        </div>

        <div className="border-x border-gray-700 px-3 py-5 text-center sm:px-6">
          <span className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">
            Minutes
          </span>
          <h2 className="mt-1 text-2xl font-black sm:text-3xl">{totalMinutes}</h2>
        </div>

        <div className="px-3 py-5 text-center sm:px-6">
          <span className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">
            Calories
          </span>
          <h2 className="mt-1 text-2xl font-black sm:text-3xl">{totalCalories}</h2>
        </div>
      </div>

      {/* ================= TABS & SORT ================= */}
      <div className="mt-8">
        {/* Tab & Sort Alignment Wrapper */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="tabs tabs-lift w-full">
            {/* TODAY'S PLAN */}
            <label className="tab font-semibold">
              <input type="radio" name="my_tabs" checked={activeTab ==="today"} onChange={() => setActiveTab("today")}/>
              Today&apos;s Plan
            </label>

            <div className="tab-content border-base-300 bg-base-100 p-3 sm:p-6">
              {/* Workout Card */}

              {addPlan && addPlan.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {addPlan.map((plan: IFitLogs) => (
                    <Plans key={plan.id} plan={plan} />
                  ))}
                </div>
              ) : (
                <p className="py-8 text-center text-lg font-bold text-gray-400">
                  No workout plan found
                </p>
              )}
            </div>

            {/* ================= SAVED ================= */}
            <label className="tab font-semibold">
              <input type="radio" name="my_tabs" checked={activeTab ==="saved"} onChange={() => setActiveTab("saved")}/>
              Saved
            </label>

            <div className="tab-content border-base-300 bg-base-100 p-3 sm:p-6">
              {/* Saved Workout Card */}

              {saveWorkout && saveWorkout.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {saveWorkout.map((saveWork: IFitLogs) => (
                    <SavedWorkOut key={saveWork.id} saveWork={saveWork} />
                  ))}
                </div>
              ) : (
                <p className="py-8 text-center text-lg font-bold text-gray-400">
                  No workout saved found
                </p>
              )}
            </div>

            {/* SORT FIELD INLINE WITH TABS */}
            <div className="tab ml-auto flex items-center gap-2 pointer-events-auto">
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">
                Sort by
              </span>
              <select className="select select-bordered select-xs focus:outline-none sm:select-sm">
                <option value="duration_asc">Duration</option>
                <option value="calories_desc">Calories</option>
                <option value="rating_desc">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPlansPage;
