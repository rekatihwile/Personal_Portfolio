import { Link } from 'react-router-dom';

const projects = [
  {
    to: '/projects/grocery-bagger',
    img: '/images/Grocery_Bagger/final_setup.png',
    alt: 'Automated grocery bagger final setup',
    title: 'Automated Grocery Bagger',
    desc: 'End-to-end SCARA-like grocery packing robot using YOLO segmentation, RAFT-Stereo point clouds, robot-frame calibration, and deterministic AABB packing.',
  },
  {
    to: '/projects/ball-catching',
    img: '/images/Ball_Catching_Robot/Experimental_Setup.png',
    alt: 'Ball catching robot setup',
    title: 'Ball Catching Project',
    desc: 'Computer vision + 2-DOF planar arm intercepting ping-pong trajectories across four controller variants.',
  },
  {
    to: '/projects/ResearchLab',
    img: '/images/Research_Lab/CAD_Setup.png',
    alt: 'Laser Weeding Research',
    title: 'Laser Weeding Research',
    desc: 'Stereo vision, learned keypoint localization, and closed-loop gantry control for autonomous precision weed ablation.',
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
              className="group rounded-xl border border-white/10 bg-[#0f1213] hover:bg-white/[0.04] p-4 transition flex flex-col"
            >
              <img
                src={img}
                alt={alt}
                className="w-full h-36 object-contain rounded-lg border border-white/10 bg-[#121517]"
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
