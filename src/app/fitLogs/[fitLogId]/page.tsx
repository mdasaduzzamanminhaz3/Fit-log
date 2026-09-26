import AddPlanButton from "@/app/components/workoutDetails/AddPlanButton";
import SaveButton from "@/app/components/workoutDetails/SaveButton";
import { IFitLogs } from "@/types/FitLogs.type";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

interface IFLDetailsPageProps {
  params: Promise<{
    fitLogId: string;
  }>;
}

const getFitLog = async () => {
  try {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog",{cache:'force-cache'});
  const data = await res.json();
  return data;
  } catch (error) {
    console.log("Faild to load workouts.Please try again!",error);
    toast.error(`Faild to load workouts.Someting went wrong.`)
  }

};

const WorkoutDetailsPage = async ({ params }: IFLDetailsPageProps) => {
  const { fitLogId } = await params;
  const fitLogsData = await getFitLog();
  
  const fitLog = fitLogsData.find(
    (item: IFitLogs) => String(item.id) === fitLogId
  );

  if (!fitLog) {
    return (
      <div className="container mx-auto py-12 text-center text-gray-400">
        FitLog item not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side: Image */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-gray-800 bg-gray-900">
          <Image
            src={fitLog.image}
            alt={fitLog.name || "FitLog Image"}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Details Content */}
        <div className="flex flex-col gap-6">
          {/* Header & Muscle Groups */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
              {fitLog.name}
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              {fitLog.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {Array.isArray(fitLog.muscleGroups) ? (
                fitLog.muscleGroups.map((group: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-md border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-400"
                  >
                    {group}
                  </span>
                ))
              ) : (
                <span className="rounded-md border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-400">
                  {fitLog.muscleGroups}
                </span>
              )}
            </div>
          </div>

          {/* Stats / Parameters Box (bg-gray-800 with Table UI) */}
          <div className="bg-gray-800 rounded-xl p-4 sm:p-5 border border-gray-700/60 shadow-inner">
            <div className="divide-y divide-gray-700/70 text-sm">
              <div className="flex justify-between py-2.5">
                <span className="uppercase font-semibold text-gray-400">Equipment</span>
                <span className="font-medium text-gray-100">{fitLog.equipment || "N/A"}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="uppercase font-semibold text-gray-400">Difficulty</span>
                <span className="font-medium text-gray-100 capitalize">{fitLog.difficulty || "N/A"}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="uppercase font-semibold text-gray-400">Sets</span>
                <span className="font-medium text-gray-100">{fitLog.sets || "N/A"}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="uppercase font-semibold text-gray-400">Reps</span>
                <span className="font-medium text-gray-100">{fitLog.reps || "N/A"}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="uppercase font-semibold text-gray-400">Duration</span>
                <span className="font-medium text-gray-100">{fitLog.duration ? `${fitLog.duration} min` : "N/A"}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="uppercase font-semibold text-gray-400">Calories</span>
                <span className="font-medium text-gray-100">{fitLog.caloriesBurned || "N/A"}</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span className="uppercase font-semibold text-gray-400">Rating</span>
                <span className="text-lime-400 font-bold">{fitLog.rating || "N/A"}</span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white">
              Instructions
            </h3>
            {Array.isArray(fitLog.instructions) ? (
              <ol className="space-y-2 list-decimal list-inside text-gray-300">
                {fitLog.instructions.map((instruction: string, index: number) => (
                  <li key={index} className="leading-relaxed">
                    <span className="text-gray-200">{instruction}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-gray-300 leading-relaxed">{fitLog.instructions}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <AddPlanButton fitLog={fitLog} />
          <SaveButton fitLog={fitLog}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;