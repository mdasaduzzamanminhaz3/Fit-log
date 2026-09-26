import Image from "next/image";
import React from "react";
import {
  FaFire,
  FaStar,
  FaClock,
  FaCheck
} from "react-icons/fa";
import dummyImg from "@/assets/banner.png";
import { RxCross2 } from "react-icons/rx";

const MyPlansPage = () => {
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
          <h2 className="mt-1 text-2xl font-black sm:text-3xl">
            2
          </h2>
        </div>

        <div className="border-x border-gray-700 px-3 py-5 text-center sm:px-6">
          <span className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">
            Minutes
          </span>
          <h2 className="mt-1 text-2xl font-black sm:text-3xl">
            23
          </h2>
        </div>

        <div className="px-3 py-5 text-center sm:px-6">
          <span className="text-xs uppercase tracking-wider text-gray-400 sm:text-sm">
            Calories
          </span>
          <h2 className="mt-1 text-2xl font-black sm:text-3xl">
            190
          </h2>
        </div>

      </div>

      {/* ================= TABS & SORT ================= */}
      <div className="mt-8">

        {/* Tab & Sort Alignment Wrapper */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="tabs tabs-lift w-full">

            {/* TODAY'S PLAN */}
            <label className="tab font-semibold">
              <input
                type="radio"
                name="my_tabs"
                defaultChecked
              />
              Today&apos;s Plan
            </label>

            <div className="tab-content border-base-300 bg-base-100 p-3 sm:p-6">

              {/* Workout Card */}
              <div className="flex flex-col gap-5 rounded-3xl bg-gray-900 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">

                {/* Workout Info */}
                <div className="flex min-w-0 gap-4">

                  {/* Image */}
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-32">
                    <Image
                      src={dummyImg}
                      alt="Russian twist"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="min-w-0">

                    <h2 className="truncate text-xl font-bold sm:text-2xl">
                      Russian Twist
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      Medicine Ball
                    </p>

                    {/* Workout Stats */}
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-gray-300 sm:text-sm">

                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-lime-400" />
                        15 min
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaFire className="text-lime-400" />
                        120 kcal
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaStar className="text-lime-400" />
                        5
                      </span>

                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">

                  <button className="btn w-full rounded-full sm:w-auto">
                    View Details
                  </button>

                  <button className="btn w-full border-none bg-lime-300 text-gray-900 hover:bg-lime-400 sm:w-auto">
                    <FaCheck />
                    Mark As Done
                  </button>

                </div>

              </div>
            </div>


            {/* ================= SAVED ================= */}
            <label className="tab font-semibold">
              <input
                type="radio"
                name="my_tabs"
              />
              Saved
            </label>
            

            <div className="tab-content border-base-300 bg-base-100 p-3 sm:p-6">

              {/* Saved Workout Card */}
              <div className="flex flex-col gap-5 rounded-3xl bg-gray-900 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">

                {/* Workout Info */}
                <div className="flex min-w-0 gap-4">

                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-32">
                    <Image
                      src={dummyImg}
                      alt="Russian twist"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">

                    <h2 className="truncate text-xl font-bold sm:text-2xl">
                      Russian Twist
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      Medicine Ball
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-gray-300 sm:text-sm">

                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-lime-400" />
                        15 min
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaFire className="text-lime-400" />
                        120 kcal
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaStar className="text-lime-400" />
                        5
                      </span>

                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-full items-center gap-2 sm:w-auto">

                  <button className="btn flex-1 rounded-full sm:flex-none">
                    View Details
                  </button>

                  <button
                    className="btn btn-circle btn-ghost text-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                    aria-label="Remove from saved"
                  >
                    <RxCross2 />
                  </button>

                </div>

              </div>
              
            </div>

            {/* SORT FIELD INLINE WITH TABS */}
            <div className="tab ml-auto flex items-center gap-2 pointer-events-auto">
              <span className="text-xs font-semibold text-gray-400 sm:text-sm">Sort by</span>
              <select className="select select-bordered select-xs focus:outline-none sm:select-sm">
                <option defaultValue="latest">Latest</option>
                <option value="duration_asc">Duration (Shortest)</option>
                <option value="duration_desc">Duration (Longest)</option>
                <option value="calories_desc">Calories (Highest)</option>
                <option value="rating_desc">Rating (Highest)</option>
              </select>
            </div>

          </div>
        </div>
        
      </div>
    </main>
  );
};

export default MyPlansPage;