import { IFitLogs } from '@/types/FitLogs.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaClock, FaFire, FaStar } from 'react-icons/fa';
import DeleteButton from '../myplanButton/DeleteButton';
interface SaveWorkProps {
    saveWork:IFitLogs;
}
const SavedWorkOut = ({saveWork}:SaveWorkProps) => {
    return (
              <div className="flex flex-col gap-5 rounded-3xl bg-gray-900 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">

                {/* Workout Info */}
                <div className="flex min-w-0 gap-4">

                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-32">
                    <Image
                      src={saveWork.image}
                      alt="Russian twist"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">

                    <h2 className="truncate text-xl font-bold sm:text-2xl">
                      {saveWork.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                     {saveWork.equipment}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-gray-300 sm:text-sm">

                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-lime-400" />
                        {saveWork.duration}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaFire className="text-lime-400" />
                        {saveWork.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaStar className="text-lime-400" />
                       {saveWork.rating}
                      </span>

                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-full items-center gap-2 sm:w-auto">

                  <Link href={`fitLogs/${saveWork.id}`} className="btn flex-1 rounded-full sm:flex-none">
                    View Details
                  </Link>

            <DeleteButton id={saveWork.id} name={saveWork.name} type="saved" />

                </div>

              </div>
    );
};

export default SavedWorkOut;