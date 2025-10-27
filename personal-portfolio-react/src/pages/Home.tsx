import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-[90vh]">
      {/* Hero */}
      <section className="w-full pt-20 pb-8 bg-gradient-to-b from-[#1e2427] to-[#171a1c] flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-4">
            Hi, I’m Eli<span className="ml-2">👋</span>
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-2xl">
            UCLA mechanical engineering student focused on robotics, clean design, and rigorous
            problem-solving. This portfolio highlights hands-on projects and systems thinking.
          </p>
          <img
            src="/images/Profile_Picture.jpeg"
            alt="Portrait of Eli Whitaker"
            className="mt-8 w-48 h-48 md:w-56 md:h-56 rounded-xl object-cover border border-white/10"
          />
        </div>
      </section>

      {/* Projects */}
      <section className="w-full max-w-6xl px-4 pb-10 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-center mb-4">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <Link
            to="/projects/ball-catching"
            className="group rounded-xl border border-white/10 bg-[#0f1213] hover:bg-white/[0.04] p-4 transition w-72"
          >
            <img
              src="/images/Ball_Catching_Robot/Experimental_Setup.png"
              alt="Ball catching setup"
              className="w-full h-36 object-contain rounded-lg border border-white/10 bg-[#121517]"
            />
            <h3 className="mt-3 text-base font-medium text-white text-center">
              Ball Catching Project
            </h3>
            <p className="mt-1 text-sm text-gray-400 text-center">
              Computer vision + 2-DOF arm intercepting ping-pong trajectories.
            </p>
          </Link>

          <Link
            to="/projects/ResearchLab"
            className="group rounded-xl border border-white/10 bg-[#0f1213] hover:bg-white/[0.04] p-4 transition w-72"
          >
            <img
              src="/images/Research_Lab/CAD_Setup.png"
              alt="Laser Weeding Research"
              className="w-full h-36 object-contain rounded-lg border border-white/10 bg-[#121517]"
            />
            <h3 className="mt-3 text-base font-medium text-white text-center">
              Laser Weeding Research
            </h3>
            <p className="mt-1 text-sm text-gray-400 text-center">
              Perception-guided actuation for selective weed removal.
            </p>
          </Link>

          <Link
            to="/projects/ukulele-strap"
            className="group rounded-xl border border-white/10 bg-[#0f1213] hover:bg-white/[0.04] p-4 transition w-72"
          >
            <img
              src="/images/Ukulele_Strap/Overview_Strap.png"
              alt="Ukulele Strap Project"
              className="w-full h-36 object-contain rounded-lg border border-white/10 bg-[#121517]"
            />
            <h3 className="mt-3 text-base font-medium text-white text-center">
              Ukulele Strap Project
            </h3>
            <p className="mt-1 text-sm text-gray-400 text-center">
              Custom 3D-printed ukulele attachment.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
