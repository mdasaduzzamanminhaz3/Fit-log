import Image from "next/image";
import React from "react";
import { IoMdStopwatch } from "react-icons/io";
import { FaFire, FaStar } from "react-icons/fa";
import { IFitLogs } from "@/types/FitLogs.type";
import Link from "next/link";
interface FitLogProops {
  fitLog: IFitLogs;
}
const LibraryCard = ({ fitLog }: FitLogProops) => {
  // console.log("data from card",fitLog);
  return (
    <div className="container mx-auto">
      <Link href={`/fitLogs/${fitLog.id}`}>
      <div className="card group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_10px_30px_rgba(163,230,53,0.15)]">
        {/* Image Container with Hover Zoom */}
        <div className="relative aspect-[16/9] w-full  bg-gray-950">
          <Image
            src={fitLog.image}
            width={600}
            height={400}
            alt="Library image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="card-body p-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {Array.isArray(fitLog.muscleGroups) ? (
              fitLog.muscleGroups.map((group: string, index: number) => (
                <span
                  key={index}
                  className="rounded-md border border-lime-400/20 bg-lime-400/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-lime-400"
                >
                  {group}
                </span>
              ))
            ) : (
              <span className="rounded-md border border-lime-400/20 bg-lime-400/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-lime-400">
                {fitLog.muscleGroups}
              </span>
            )}
          </div>

          {/* Titles */}
          <div className="mt-2">
            <h4 className="text-lg font-extrabold capitalize text-white transition-colors group-hover:text-lime-300 sm:text-xl">
              {fitLog.name}
            </h4>
            <p className="mt-1 text-xs font-medium text-gray-400 sm:text-sm">
              {fitLog.equipment}
            </p>
          </div>

          {/* Divider Line */}
          <div className="my-3 border-t border-gray-800" />

          {/* Stats Row */}
          <div className="flex items-center text-xs font-semibold text-gray-300 sm:text-sm gap-4">
            <span className="flex items-center">
              <IoMdStopwatch />
              {fitLog.duration} min
            </span>
            <span className="flex items-center">
              <FaFire />
              {fitLog.caloriesBurned} kcal
            </span>
            <span className="flex items-center">
              <FaStar />
              {fitLog.rating}
            </span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default LibraryCard;
