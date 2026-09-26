import React from 'react';

const LibrarySkeleton = () => {
  return (
    <section className="py-8 md:py-12 animate-pulse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="space-y-2 text-center md:text-left">
          <div className="skeleton mx-auto md:mx-0 h-9 w-48 rounded-lg bg-gray-800"></div>
          <div className="skeleton mx-auto md:mx-0 h-4 w-72 rounded bg-gray-800"></div>
        </div>

        {/* Responsive Grid Skeleton */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-3xl bg-gray-900 p-4 border border-gray-800"
            >
              {/* Card Image Skeleton */}
              <div className="skeleton h-48 w-full rounded-2xl bg-gray-800"></div>

              {/* Title & Badges Skeleton */}
              <div className="flex flex-col gap-2">
                <div className="skeleton h-6 w-3/4 rounded bg-gray-800"></div>
                <div className="skeleton h-4 w-1/2 rounded bg-gray-800"></div>
              </div>

              {/* Stats & Actions Skeleton */}
              <div className="mt-2 flex justify-between items-center">
                <div className="skeleton h-4 w-20 rounded bg-gray-800"></div>
                <div className="skeleton h-8 w-24 rounded-full bg-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibrarySkeleton;