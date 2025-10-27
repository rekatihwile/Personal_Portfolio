export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f1213]">
      <div className="mx-auto max-w-6xl px-4 py-10 text-gray-300">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <p className="text-sm">UCLA Mechanical Engineering Student</p>
            <p className="text-sm">Expected Graduation: June 2026</p>
            <a
              href="mailto:eli.p.p.whitaker@gmail.com"
              className="text-sm underline decoration-dotted underline-offset-4 hover:text-white"
            >
              eli.p.p.whitaker@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://www.linkedin.com/in/eliwhitaker/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rekatihwile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a href="Resume.pdf" className="hover:text-white">
              Resume
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Eli Whitaker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
