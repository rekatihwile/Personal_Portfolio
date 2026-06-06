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
    desc: 'Computer vision + 2-DOF planar arm intercepting ping-pong trajectories across four controller variants.',
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
    alt: 'Ukulele Strap Project',
    title: 'Ukulele Strap Project',
    desc: 'Custom 3D-printed strap attachment designed in Onshape — friction and elastic retention, no drilling required.',
  },
];

function Home() {
  return (
    <div>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="w-full bg-gradient-to-b from-[#1e2427] to-[#171a1c] pt-16 pb-12">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Hi, I'm Eli<span className="ml-2">👋</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl leading-relaxed">
            UCLA mechanical engineering student focused on robotics, clean design, and rigorous
            problem-solving.
          </p>
          <img
            src="/images/Profile_Picture.jpeg"
            alt="Portrait of Eli Whitaker"
            className="mt-8 w-44 h-44 md:w-52 md:h-52 rounded-xl object-cover border border-white/10"
          />
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-16">
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map(({ to, img, alt, title, desc }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-lg border border-white/10 bg-[#0f1213] hover:bg-white/[0.04] p-4 transition flex flex-col"
            >
              <img
                src={img}
                alt={alt}
                className="w-full h-48 object-cover rounded-md border border-white/10 bg-[#121517]"
              />
              <h3 className="mt-3 text-base font-medium text-white">{title}</h3>
              <p className="mt-1 text-sm text-gray-400 leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
