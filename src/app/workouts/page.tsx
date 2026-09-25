import { IFitLogs } from '@/types/FitLogs.type';
import React from 'react';
import LibraryCard from '../components/LibraryCard';
const getFitLog = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  // console.log(data);
  return data;
};

const Workouts = async() => {
  const fitLogsData: IFitLogs[] = await getFitLog();

    return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
<div className="space-y-3 text-center md:text-left">
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
        Workout Library
    </p>

    <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
        Find Your Next <span className="text-lime-400">Lift.</span>
    </h1>

    <p className="max-w-xl text-sm font-medium leading-7 text-gray-400 sm:text-base">
        Explore a curated library of exercises and build your perfect workout plan.
    </p>
</div>

        {/* Responsive Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fitLogsData.map((fitLog: IFitLogs) => (
            <LibraryCard key={fitLog.id} fitLog={fitLog} />
          ))}
        </div>
      </div>
    </section>
    );
};

export default Workouts;