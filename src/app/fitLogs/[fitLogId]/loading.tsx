import React from "react";

const WorkoutDetailsLoading = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Side: Image Skeleton */}
        <div className="skeleton w-full aspect-[4/5] rounded-2xl bg-base-300"></div>

        {/* Right Side: Details Content Skeleton */}
        <div className="flex flex-col gap-6">
          
          {/* Header & Muscle Groups */}
          <div>
            {/* Title */}
            <div className="skeleton h-10 w-3/4 rounded-md mb-3 bg-base-300"></div>
            
            {/* Description Lines */}
            <div className="space-y-2 mb-4">
              <div className="skeleton h-4 w-full rounded bg-base-300"></div>
              <div className="skeleton h-4 w-5/6 rounded bg-base-300"></div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="skeleton h-6 w-20 rounded-md bg-base-300"></div>
              <div className="skeleton h-6 w-24 rounded-md bg-base-300"></div>
              <div className="skeleton h-6 w-16 rounded-md bg-base-300"></div>
            </div>
          </div>

          {/* Stats Box Skeleton */}
          <div className="bg-base-200 rounded-xl p-4 sm:p-5 border border-base-300">
            <div className="divide-y divide-base-300/50 text-sm">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="flex justify-between py-2.5">
                  <div className="skeleton h-4 w-24 rounded bg-base-300"></div>
                  <div className="skeleton h-4 w-16 rounded bg-base-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions Skeleton */}
          <div className="space-y-3">
            <div className="skeleton h-6 w-32 rounded bg-base-300"></div>
            <div className="space-y-2">
              <div className="skeleton h-4 w-full rounded bg-base-300"></div>
              <div className="skeleton h-4 w-11/12 rounded bg-base-300"></div>
              <div className="skeleton h-4 w-4/5 rounded bg-base-300"></div>
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="skeleton h-12 w-full sm:w-1/2 rounded-full bg-base-300"></div>
            <div className="skeleton h-12 w-full sm:w-1/2 rounded-full bg-base-300"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsLoading;