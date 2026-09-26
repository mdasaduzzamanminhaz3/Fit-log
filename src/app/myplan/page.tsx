"use client";
import React, { useContext, useState } from "react";
import { WorksoutContext } from "@/context/WorkoutContext";
import Plans from "../components/shared/Plans";
import { IFitLogs } from "@/types/FitLogs.type";
import SavedWorkOut from "../components/shared/SavedWorkOut";
import Link from "next/link";

interface WorkoutContextType {
  addPlan: IFitLogs[];
  saveWorkout: IFitLogs[];
}

const MyPlansPage = () => {
  const { addPlan = [], saveWorkout = [] } = (useContext(
    WorksoutContext
  ) as WorkoutContextType) || {};

  const [sortBy, setSortBy] = useState<
    "duration_desc" | "rating_desc" | "calories_desc"
  >("duration_desc");

  const sortWorkOuts = (workouts: IFitLogs[]) => {
    if (!Array.isArray(workouts)) return [];
    const sortedWorkouts = [...workouts];
    if (sortBy === "duration_desc") {
      sortedWorkouts.sort((a, b) => (b.duration || 0) - (a.duration || 0));
    } else if (sortBy === "rating_desc") {
      sortedWorkouts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "calories_desc") {
      sortedWorkouts.sort(
        (a, b) => (b.caloriesBurned || 0) - (a.caloriesBurned || 0)
      );
    }
    return sortedWorkouts;
  };

  const sortedTodaysPlan = sortWorkOuts(addPlan);
  const sortedSaved = sortWorkOuts(saveWorkout);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const currentList = activeTab === "today" ? addPlan : saveWorkout;
  const totalExercises = currentList?.length || 0;
  const totalMinutes =
    currentList?.reduce((acc, item) => acc + (item.duration || 0), 0) || 0;
  const totalCalories =
    currentList?.reduce((acc, item) => acc + (item.caloriesBurned || 0), 0) || 0;

  return (
    <main className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* ================= HEADER ================= */}
      <div className="text-left">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
          Your Fitness
        </p>

        <h1 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
          My Plan
        </h1>

        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl bg-gray-900 border border-gray-800">
        <div className="px-2 sm:px-4 py-4 sm:py-5 text-center">
          <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
            Exercises
          </span>
          <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-black">
            {totalExercises}
          </h2>
        </div>

        <div className="border-x border-gray-800 px-2 sm:px-4 py-4 sm:py-5 text-center">
          <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
            Minutes
          </span>
          <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-black">
            {totalMinutes}
          </h2>
        </div>

        <div className="px-2 sm:px-4 py-4 sm:py-5 text-center">
          <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-gray-400">
            Calories
          </span>
          <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-black">
            {totalCalories}
          </h2>
        </div>
      </div>

      {/* ================= TABS & SORT ================= */}
      <div className="mt-6 sm:mt-8">
        <div className="flex flex-col gap-4">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Tabs Header */}
            <div className="flex bg-gray-900 p-1 rounded-xl sm:rounded-2xl border border-gray-800 self-start sm:self-auto w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab("today")}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-colors ${
                  activeTab === "today"
                    ? "bg-lime-400 text-black font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Today&apos;s Plan
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("saved")}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-colors ${
                  activeTab === "saved"
                    ? "bg-lime-400 text-black font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Saved
              </button>
            </div>

            {/* Sort Select */}
            <div className="flex items-center justify-end gap-2 self-end sm:self-auto">
              <span className="text-xs font-semibold text-gray-400 whitespace-nowrap">
                Sort by
              </span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as
                      | "duration_desc"
                      | "rating_desc"
                      | "calories_desc"
                  )
                }
                className="select select-bordered select-xs sm:select-sm focus:outline-none bg-gray-900 text-white rounded-lg border-gray-800"
              >
                <option value="duration_desc">Duration</option>
                <option value="rating_desc">Rating</option>
                <option value="calories_desc">Calories</option>
              </select>
            </div>
          </div>

          {/* Active Tab Content Panel */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/50 p-3 sm:p-5 md:p-6 mt-2">
            {activeTab === "today" ? (
              sortedTodaysPlan && sortedTodaysPlan.length > 0 ? (
                <div className="flex flex-col gap-3 sm:gap-4">
                  {sortedTodaysPlan.map((plan: IFitLogs) => (
                    <Plans key={plan.id} plan={plan} />
                  ))}
                </div>
              ) : (
                <div className="py-8 sm:py-12 px-4 text-center bg-gray-900 rounded-2xl border border-gray-800">
                  <h2 className="uppercase font-bold text-xl sm:text-2xl text-white">
                    Nothing here yet
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">
                    Browse the library and add a lift to get today moving.
                  </p>
                  <Link
                    href={"/"}
                    className="mt-4 sm:mt-5 inline-block btn bg-lime-400 rounded-full px-5 py-2 hover:bg-lime-500 text-black font-bold border-none text-xs sm:text-sm"
                  >
                    Go to workouts
                  </Link>
                </div>
              )
            ) : sortedSaved && sortedSaved.length > 0 ? (
              <div className="flex flex-col gap-3 sm:gap-4">
                {sortedSaved.map((saveWork: IFitLogs) => (
                  <SavedWorkOut key={saveWork.id} saveWork={saveWork} />
                ))}
              </div>
            ) : (
              <div className="py-8 sm:py-12 px-4 text-center bg-gray-900 rounded-2xl border border-gray-800">
                <h2 className="uppercase font-bold text-xl sm:text-2xl text-white">
                  Nothing here yet
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 mt-2">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link
                  href={"/"}
                  className="mt-4 sm:mt-5 inline-block btn bg-lime-400 rounded-full px-5 py-2 hover:bg-lime-500 text-black font-bold border-none text-xs sm:text-sm"
                >
                  Go to workouts
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPlansPage;