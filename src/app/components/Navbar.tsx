import Image from "next/image";
import Link from "next/link";
import React from "react";
import navLogo from "@/assets/logo.png";
import PlanButton from "./shared/navbarPlanButton/PlanButton";
import SavedButton from "./shared/navbarPlanButton/SavedButton";
import NavLink from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="navbar container mx-auto my-2 rounded-2xl bg-base-100/80 px-4 shadow-sm backdrop-blur-md md:px-6 relative z-50">
      {/* Logo */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={navLogo}
            alt="FITLOG logo"
            width={40}
            height={40}
            className="rounded-full"
          />

          <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
            FIT<span className="text-lime-500">LOG</span>
          </h3>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 p-0">
          <li>
            <NavLink href="/">Workouts</NavLink>
          </li>
          <li>
            <NavLink href="/myplan">My Plan</NavLink>
          </li>
        </ul>
      </div>

      {/* Desktop Stats */}
      <div className="navbar-end hidden items-center gap-3 md:flex">
        <div className="flex items-center gap-2 rounded-xl bg-base-200 px-3 py-2">
          <PlanButton />
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-base-200 px-3 py-2">
          <SavedButton />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-end md:hidden relative z-50">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-3 shadow-lg"
          >
            <li>
              <NavLink href="/">Workouts</NavLink>
            </li>
            <li>
              <NavLink href="/myplan">My Plan</NavLink>
            </li>

            <div className="divider my-1" />

            <li>
              <PlanButton />
            </li>

            <li>
              <SavedButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
