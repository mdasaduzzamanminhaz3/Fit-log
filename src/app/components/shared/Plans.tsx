import { IFitLogs } from '@/types/FitLogs.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheck, FaClock, FaFire, FaStar } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

interface PlansProps {
    plan:IFitLogs;
}

const Plans = ({plan}: PlansProps) => {
    return (
              <div className="flex flex-col gap-5 rounded-3xl bg-gray-900 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">

                {/* Workout Info */}
                <div className="flex min-w-0 gap-4">

                  {/* Image */}
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-32">
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      fill
                      className="object-cover"

                    />
                  </div>

                  {/* Details */}
                  <div className="min-w-0">

                    <h2 className="truncate text-xl font-bold sm:text-2xl">
                      {plan.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-400">
                      {plan.equipment}
                    </p>

                    {/* Workout Stats */}
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-gray-300 sm:text-sm">

                      <span className="flex items-center gap-1.5">
                        <FaClock className="text-lime-400" />
                        {plan.duration}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaFire className="text-lime-400" />
                        {plan.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1.5">
                        <FaStar className="text-lime-400" />
                        {plan.rating}
                      </span>

                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">

                  <Link href={`/fitLogs/${plan.id}`} className="btn w-full rounded-full sm:w-auto">
                    View Details
                  </Link>

                  <button className="btn w-full border-none bg-lime-300 text-gray-900 hover:bg-lime-400 sm:w-auto">
                    <FaCheck />
                    Mark As Done
                  </button>
                                      <button
                    className="btn btn-circle btn-ghost text-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                    aria-label="Remove from saved"
                  >
                    <RxCross2 />
                  </button>
                </div>

              </div>
    );
};

export default Plans;