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
    'rounded-md px-2.5 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171a1c]';
  const active = 'bg-white/10 text-white';
  const inactive = 'text-gray-300 hover:bg-white/5 hover:text-white';
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `${base} ${isActive ? active : inactive}`;

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0f1213]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0f1213]/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <NavLink to="/about" className="group flex shrink-0 items-center gap-2">
            <div
              className="h-6 w-6 rounded-md bg-indigo-500 transition group-hover:rotate-6"
              aria-hidden
            />
            <span className="text-sm tracking-wide text-gray-200">Eli Whitaker</span>
          </NavLink>

          <div className="hidden flex-wrap items-center justify-end gap-2 md:flex">
            {navLinks.map(({ to, label, end }) => (
              <NavLink key={to} to={to} className={linkCls} end={end}>
                {label}
              </NavLink>
            ))}
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
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

      {open && (
        <div className="border-t border-white/10 bg-[#0f1213]/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2">
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
