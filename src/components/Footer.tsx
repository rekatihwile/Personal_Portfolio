import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#0f1213]">
      <div className="mx-auto max-w-6xl px-4 py-12 text-gray-300">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <div>
            <p className="text-sm">UCLA Mechanical Engineering Student</p>
            <p className="text-sm">Expected Graduation: June 2026</p>
            <a
              href="mailto:eli.p.p.whitaker@gmail.com"
              className="text-sm underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:text-white"
            >
              eli.p.p.whitaker@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://www.linkedin.com/in/eliwhitaker/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rekatihwile"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-white"
            >
              GitHub
            </a>
            <Link to="/resume" className="transition-colors duration-200 hover:text-white">
              Resume
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          Copyright {new Date().getFullYear()} Eli Whitaker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
