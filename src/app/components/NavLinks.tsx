'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`font-semibold transition-colors ${
        isActive
          ? 'text-lime-400 font-bold bg-lime-400/10 rounded-lg px-3 py-1.5'
          : 'text-gray-300 hover:text-lime-500 px-3 py-1.5'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;