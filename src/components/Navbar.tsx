import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects/grocery-bagger', label: 'Grocery Bagger' },
  { to: '/projects/laser-weeder', label: 'Laser Weeder' },
  { to: '/projects/ball-catching', label: 'Ball Catching' },
  { to: '/projects/ukulele-strap', label: 'Ukulele Strap' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const base =
    'px-2.5 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-[#171a1c]';
  const active = 'bg-white/10 text-white';
  const inactive = 'text-gray-300 hover:text-white hover:bg-white/5';
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `${base} ${isActive ? active : inactive}`;

  return (
    <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0f1213]/70 bg-[#0f1213]/80 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        {/* ── Top bar ── */}
        <div className="flex items-center justify-between h-14">
          <NavLink to="/about" className="flex items-center gap-2 group shrink-0">
            <div
              className="h-6 w-6 rounded-md bg-indigo-500 group-hover:rotate-6 transition"
              aria-hidden
            />
            <span className="text-sm tracking-wide text-gray-200">Eli Whitaker</span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2 flex-wrap justify-end">
            {navLinks.map(({ to, label, end }) => (
              <NavLink key={to} to={to} className={linkCls} end={end}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0f1213]/95">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-1">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                className={linkCls}
                end={end}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
