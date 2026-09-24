import React from 'react';
import LibraryCard from '../LibraryCard';
import { IFitLogs } from '@/types/FitLogs.type';

const getFitLog = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  console.log(data);
  return data;
};

const Library = async () => {
  const fitLogsData: IFitLogs[] = await getFitLog();

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            The Library
          </h1>
          <p className="text-sm font-medium text-gray-400 sm:text-base">
            Twelve lifts covering every major muscle group.
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

export default Library;