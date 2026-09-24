import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImage from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-6 md:px-6 lg:py-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-gray-800 p-2 shadow-2xl">
        <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Content Column */}
          <div className="w-full px-6 py-10 text-center sm:px-10 md:py-14 md:text-left lg:w-1/2 lg:px-12 lg:py-16">
            <span className="inline-block rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-lime-400 backdrop-blur-md">
              WORKOUT LIBRARY
            </span>

            <h1 className="mt-5 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
              TRAIN WITH INTENT.LOG
              <br />
              <span>
                 EVERY SET.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:mx-0">
              FitLog is a dark, no-nonsense gym companion. Pick a lift, lock it
              into today&apos;s plan, and watch the weeks of work add up.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link
                href="/workouts"
                className="btn border-none bg-lime-400 px-8 text-base font-bold text-black shadow-[0_0_20px_rgba(163,230,53,0.25)] transition-all duration-300 hover:scale-[1.02] hover:bg-lime-300 active:scale-[0.98]"
              >
                BROWSE WORKOUTS
              </Link>
            </div>
          </div>

          {/* Image Column */}
            <div className="relative overflow-hidden rounded-2xl p-2 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src={bannerImage}
                alt="FitLog workout banner"
                className="rounded-xl object-cover"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;