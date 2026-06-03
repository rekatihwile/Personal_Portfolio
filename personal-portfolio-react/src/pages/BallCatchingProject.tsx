import LoopingVideos from '../components/LoopingVideos';

const BASE = '/videos/Ball_Catching_Project/';

const videos = [
  { src: BASE + '63_Decentralized.mov', label: 'Decentralized PD' },
  { src: BASE + 'JointSpaceInverseDynamics.mov', label: 'Joint-Space Inverse Dynamics' },
  { src: BASE + 'OperationalInverseDynamics.mov', label: 'Operational-Space Inverse Dynamics' },
  { src: BASE + '63_RobustJoint.mov', label: 'Robust Joint-Space' },
];

function BallCatchingProject() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">

      {/* ── Hero ──────────────────────────────────────── */}
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-2">
          MAE 189 — Robotics
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Ball Catching Project</h1>
        <p className="mt-3 text-lg text-gray-400 max-w-2xl leading-relaxed">
          Computer vision + 2-DOF planar arm intercepting ping-pong trajectories across four
          controller variants.
        </p>
      </header>

      {/* ── Overview ──────────────────────────────────── */}
      <section className="grid md:grid-cols-2 gap-10 items-start mb-14">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            This project combines high-speed vision with model-based control. A 2-link planar arm
            built with <strong className="text-white">Dynamixel MX-28 motors</strong> and
            3D-printed links tracks and intercepts a thrown ping-pong ball in real time.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            A calibrated overhead camera streams ball-position data into a trajectory predictor,
            which computes the expected intercept point and feeds joint-angle targets to the
            controller. Four controller formulations were evaluated and compared on catch success
            rate and overshoot.
          </p>
        </div>
        <img
          src="/images/Ball_Catching_Robot/Experimental_Setup.png"
          alt="Experimental setup: 2-link arm and overhead camera for ball tracking"
          className="rounded-xl border border-white/10 bg-[#0f1213] w-full"
        />
      </section>

      {/* ── Implementation ────────────────────────────── */}
      <section className="grid md:grid-cols-2 gap-10 items-start mb-14">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Implementation</h2>
          <p className="text-gray-300 leading-relaxed">
            Four controllers were implemented and benchmarked: decentralized PD, joint-space
            inverse dynamics (JS-ID), operational-space inverse dynamics (OS-ID), and robust
            joint-space. Metrics tracked: time-to-catch, joint overshoot, and success rate across
            varying release angles and distances.
          </p>
          <div className="mt-5 space-y-2 text-sm text-gray-400">
            {[
              { label: 'Decentralized PD', note: 'Independent joint-level PD — simple, no model needed' },
              { label: 'Joint-Space ID', note: 'Model-based; compensates for inertia and Coriolis forces' },
              { label: 'Operational-Space ID', note: 'Control expressed in Cartesian task space' },
              { label: 'Robust Joint-Space', note: 'Adds robustness terms for model uncertainty' },
            ].map(({ label, note }) => (
              <div key={label} className="flex gap-3 items-baseline">
                <span className="text-white font-medium shrink-0">{label} —</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
        <LoopingVideos
          src={BASE + 'IMG_4009.mp4'}
          text="End-effector tracking test"
          className="w-full rounded-xl"
        />
      </section>

      {/* ── Results ───────────────────────────────────── */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Results</h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Representative catch clips from each controller variant.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {videos.map(({ src, label }) => (
            <LoopingVideos key={src} src={src} text={label} className="w-full rounded-xl" />
          ))}
        </div>
      </section>

    </div>
  );
}

export default BallCatchingProject;
