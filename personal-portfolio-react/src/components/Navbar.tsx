import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const base =
    'px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-[#171a1c]';
  const active = 'bg-indigo-600/20 text-white';
  const inactive = 'text-gray-300 hover:text-white hover:bg-white/5';
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `${base} ${isActive ? active : inactive}`;

  return (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0f1213]/70 bg-[#0f1213]/80 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14">
          {/* Eli Whitaker now links to About */}
          <NavLink to="/about" className="flex items-center gap-2 group">
            <div
              className="h-6 w-6 rounded-md bg-indigo-500 group-hover:rotate-6 transition"
              aria-hidden
            />
            <span className="text-sm tracking-wide text-gray-200">Eli Whitaker</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkCls} end>
              Home
            </NavLink>
            <NavLink to="/about" className={linkCls}>
              About
            </NavLink>
            <NavLink to="/projects/ball-catching" className={linkCls}>
              Ball Catching
            </NavLink>
            <NavLink to="/projects/ResearchLab" className={linkCls}>
              Laser Weeder
            </NavLink>
            <NavLink to="/projects/ukulele-strap" className={linkCls}>
              Ukulele Strap
            </NavLink>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
