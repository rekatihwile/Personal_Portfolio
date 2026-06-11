import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const projects = [
  {
    to: '/projects/grocery-bagger',
    img: '/images/Grocery_Bagger/home-hero-preview.jpg',
    alt: 'Autonomous grocery bagging robot hero photo',
    title: 'Autonomous Grocery Bagging Robot',
    desc: 'Physical robot demo for autonomous grocery packing using item recognition and deterministic geometry-based packing heuristics.',
  },
  {
    to: '/projects/laser-weeder',
    img: '/images/Laser_Weeder/home-hero-preview.jpg',
    alt: 'Laser weeder robotic treatment system in a UCLA research context',
    title: 'Laser Weeder Robotic Treatment System',
    desc: 'Robotic laser weed treatment system using staged control, target re-identification, and timed firing in a UCLA lab context.',
  },
  {
    to: '/projects/ball-catching',
    img: '/images/Ball_Catching_Robot/Experimental_Setup.png',
    alt: 'Ball catching robot setup',
    title: 'Ball Catching Project',
    desc: 'Computer vision plus a 2-DOF planar arm intercepting ping-pong trajectories across four controller variants.',
  },
  {
    to: '/projects/ukulele-strap',
    img: '/images/Ukulele_Strap/Overview_Strap.png',
    alt: 'Ukulele strap project',
    title: 'Ukulele Strap Project',
    desc: 'Custom 3D-printed strap attachment designed in Onshape with friction and elastic retention, no drilling required.',
  },
];

function Home() {
  usePageTitle();
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="page-shell home-hero-shell">
          <h1 className="animate-fade-up text-4xl font-semibold tracking-tight motion-reduce:animate-none md:text-5xl">
            Hi, I'm Eli
          </h1>
          <p className="mt-4 max-w-xl animate-fade-up text-balance text-lg leading-relaxed text-gray-300 [animation-delay:120ms] motion-reduce:animate-none">
            UCLA mechanical engineering student focused on robotics, clean design, and rigorous
            problem-solving.
          </p>
          <div className="mt-6 flex animate-fade-up gap-3 [animation-delay:200ms] motion-reduce:animate-none">
            <Link
              to="/resume"
              className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-400"
            >
              View Resume
            </Link>
            <a
              href="mailto:eli.p.p.whitaker@gmail.com"
              className="rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-gray-200 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              Contact
            </a>
          </div>
          <img
            src="/images/Profile_Picture.jpeg"
            alt="Portrait of Eli Whitaker"
            className="mt-8 h-52 w-52 animate-fade-up rounded-xl border border-white/10 object-cover shadow-[0_18px_60px_rgba(0,0,0,0.35)] [animation-delay:280ms] motion-reduce:animate-none md:h-64 md:w-64"
          />
        </div>
      </section>

      <section className="page-shell home-projects">
        <h2 className="mb-8 flex animate-fade-up items-center gap-3 text-2xl font-semibold [animation-delay:200ms] motion-reduce:animate-none">
          <span className="h-px w-8 bg-indigo-400/60" aria-hidden />
          Projects
        </h2>
        <div className="project-grid">
          {projects.map(({ to, img, alt, title, desc }, index) => (
            <Link
              key={to}
              to={to}
              className="project-card group flex animate-fade-up flex-col rounded-lg border border-white/10 bg-[#0f1213] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none motion-reduce:animate-none motion-reduce:transition-none"
              style={{ animationDelay: `${250 + index * 80}ms` }}
            >
              <div className="overflow-hidden rounded-md border border-white/10 bg-[#121517]">
                <img
                  src={img}
                  alt={alt}
                  loading="lazy"
                  className="h-81 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </div>
              <h3 className="mt-3 text-base font-medium text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-400">{desc}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-indigo-300/90">
                View project
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
