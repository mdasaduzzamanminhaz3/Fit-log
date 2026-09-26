import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        {/* Big 404 Text */}
        <h1 className="text-8xl sm:text-9xl font-black text-lime-400 tracking-tight">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
          Oops! The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="btn bg-lime-400 hover:bg-lime-500 text-black font-bold rounded-full px-8 border-none"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}