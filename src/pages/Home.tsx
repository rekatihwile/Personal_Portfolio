import { Link } from 'react-router-dom';

const projects = [
  {
    to: '/projects/grocery-bagger',
    img: '/images/Grocery_Bagger/yolo-training-scene.jpg',
    alt: 'Grocery item recognition scene for the autonomous bagging robot',
    title: 'Autonomous Grocery Bagging Robot',
    desc: 'Physical robot demo for autonomous grocery packing using item recognition and deterministic geometry-based packing heuristics.',
  },
  {
    to: '/projects/ball-catching',
    img: '/images/Ball_Catching_Robot/Experimental_Setup.png',
    alt: 'Ball catching robot setup',
    title: 'Ball Catching Project',
    desc: 'Computer vision plus a 2-DOF planar arm intercepting ping-pong trajectories across four controller variants.',
  },
  {
    to: '/projects/laser-weeder',
    img: '/images/Laser_Weeder/ucla-laser-weeder-system-hq.jpg',
    alt: 'Laser weeder robotic treatment system in a UCLA research context',
    title: 'Laser Weeder Robotic Treatment System',
    desc: 'Robotic laser weed treatment system using staged control, target re-identification, and timed firing in a UCLA lab context.',
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
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="page-shell home-hero-shell">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Hi, I'm Eli</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-300">
            UCLA mechanical engineering student focused on robotics, clean design, and rigorous
            problem-solving.
          </p>
          <img
            src="/images/Profile_Picture.jpeg"
            alt="Portrait of Eli Whitaker"
            className="mt-8 h-52 w-52 rounded-xl border border-white/10 object-cover md:h-64 md:w-64"
          />
        </div>
      </section>

      <section className="page-shell home-projects">
        <h2 className="mb-8 text-2xl font-semibold">Projects</h2>
        <div className="project-grid">
          {projects.map(({ to, img, alt, title, desc }) => (
            <Link
              key={to}
              to={to}
              className="project-card group flex flex-col rounded-lg border border-white/10 bg-[#0f1213] p-4 transition hover:bg-white/[0.04]"
            >
              <img
                src={img}
                alt={alt}
                className="h-48 w-full rounded-md border border-white/10 bg-[#121517] object-cover"
              />
              <h3 className="mt-3 text-base font-medium text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-400">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
