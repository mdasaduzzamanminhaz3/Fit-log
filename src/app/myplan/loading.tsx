import React from "react";

const MyPlansLoading = () => {
  return (
    <main className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 animate-pulse">
      {/* ================= HEADER SKELETON ================= */}
      <div>
        {/* Category Badge */}
        <div className="skeleton h-4 w-28 rounded bg-gray-800"></div>

        {/* Title */}
        <div className="mt-2 skeleton h-9 w-44 rounded-lg bg-gray-800"></div>

        {/* Subtitle */}
        <div className="mt-3 skeleton h-4 w-72 sm:w-96 rounded bg-gray-800"></div>
      </div>

      {/* ================= STATS SKELETON ================= */}
      <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-2 sm:p-4">
        <div className="flex flex-col items-center justify-center gap-2 py-3">
          <div className="skeleton h-3 w-16 sm:w-20 rounded bg-gray-800"></div>
          <div className="skeleton h-8 w-12 sm:w-16 rounded-md bg-gray-800"></div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 py-3 border-x border-gray-800">
          <div className="skeleton h-3 w-16 sm:w-20 rounded bg-gray-800"></div>
          <div className="skeleton h-8 w-12 sm:w-16 rounded-md bg-gray-800"></div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 py-3">
          <div className="skeleton h-3 w-16 sm:w-20 rounded bg-gray-800"></div>
          <div className="skeleton h-8 w-12 sm:w-16 rounded-md bg-gray-800"></div>
        </div>
      </div>

      {/* ================= TABS & SORT SKELETON ================= */}
      <div className="mt-8">
        {/* Tab Buttons & Sort Selector Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex gap-2">
            <div className="skeleton h-10 w-32 rounded-xl bg-gray-800"></div>
            <div className="skeleton h-10 w-24 rounded-xl bg-gray-800"></div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="skeleton h-4 w-12 rounded bg-gray-800"></div>
            <div className="skeleton h-9 w-28 rounded-lg bg-gray-800"></div>
          </div>
        </div>

        {/* ================= WORKOUT CARDS SKELETON ================= */}
        <div className="flex flex-col gap-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 rounded-3xl bg-gray-900 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between border border-gray-800/80"
            >
              {/* Left Side: Image & Info */}
              <div className="flex min-w-0 gap-4 items-center">
                {/* Image Skeleton */}
                <div className="skeleton h-24 w-24 shrink-0 rounded-2xl sm:h-28 sm:w-32 bg-gray-800"></div>

                {/* Details Skeleton */}
                <div className="flex flex-col gap-3 min-w-0 flex-1">
                  {/* Title */}
                  <div className="skeleton h-6 w-3/4 sm:w-48 rounded bg-gray-800"></div>

                  {/* Equipment Subtitle */}
                  <div className="skeleton h-4 w-1/2 sm:w-32 rounded bg-gray-800"></div>

                  {/* Badges / Stats */}
                  <div className="flex gap-3 pt-1">
                    <div className="skeleton h-4 w-14 rounded bg-gray-800"></div>
                    <div className="skeleton h-4 w-16 rounded bg-gray-800"></div>
                    <div className="skeleton h-4 w-12 rounded bg-gray-800"></div>
                  </div>
                </div>
              </div>

              {/* Right Side: Action Buttons Skeleton */}
              <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto items-center">
                <div className="skeleton h-11 w-full sm:w-28 rounded-full bg-gray-800"></div>
                <div className="skeleton h-11 w-full sm:w-36 rounded-full bg-gray-800"></div>
                <div className="skeleton h-11 w-11 rounded-full bg-gray-800 shrink-0 hidden sm:block"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyPlansLoading;