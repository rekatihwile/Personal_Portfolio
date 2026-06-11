import LoopingVideos from '../components/LoopingVideos';
import { usePageTitle } from '../hooks/usePageTitle';

const BASE = '/videos/Ball_Catching_Project/';

const videos = [
  { src: BASE + '63_Decentralized.mp4', label: 'Decentralized PD' },
  { src: BASE + 'JointSpaceInverseDynamics.mp4', label: 'Joint-Space Inverse Dynamics' },
  { src: BASE + 'OperationalInverseDynamics.mp4', label: 'Operational-Space Inverse Dynamics' },
  { src: BASE + '63_RobustJoint.mp4', label: 'Robust Joint-Space' },
];

const controllers = [
  { label: 'Decentralized PD', note: 'Independent joint-level PD - simple, no model needed' },
  { label: 'Joint-Space ID', note: 'Model-based control that compensates for inertia and Coriolis forces' },
  { label: 'Operational-Space ID', note: 'Control expressed in Cartesian task space' },
  { label: 'Robust Joint-Space', note: 'Adds robustness terms for model uncertainty' },
];

function BallCatchingProject() {
  usePageTitle('Ball Catching Project');
  return (
    <div className="project-page mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
      <header className="mx-auto mb-16 max-w-4xl animate-fade-up text-center motion-reduce:animate-none md:mb-20">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
          MAE C163C - Robotics
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Ball Catching Project</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">
          Computer vision plus a 2-DOF planar arm intercepting ping-pong trajectories across four
          controller variants, built in the final course of the MAE C163A/B/C robotics elective
          sequence.
        </p>
      </header>

      <section className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Overview</h2>
          <div className="space-y-5 leading-relaxed text-gray-300">
            <p>
              This project combines high-speed vision with model-based control. A 2-link planar arm
              built with <strong className="text-white">Dynamixel MX-28 motors</strong> and
              3D-printed links tracks and intercepts a thrown ping-pong ball in real time.
            </p>
            <p>
              A calibrated overhead camera streams ball-position data into a trajectory predictor,
              which computes the expected intercept point and feeds joint-angle targets to the
              controller. Four controller formulations were evaluated and compared on catch success
              rate and overshoot.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#0f1213] lg:h-[22rem]">
          <img
            src="/images/Ball_Catching_Robot/Experimental_Setup.png"
            alt="Experimental setup with a 2-link arm and overhead camera for ball tracking"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Implementation</h2>
          <p className="leading-relaxed text-gray-300">
            Four controllers were implemented and benchmarked: decentralized PD, joint-space
            inverse dynamics, operational-space inverse dynamics, and robust joint-space control.
            Metrics tracked time-to-catch, joint overshoot, and success rate across varying release
            angles and distances.
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 text-sm">
            {controllers.map(({ label, note }, i) => (
              <div
                key={label}
                className={`grid grid-cols-[160px_1fr] gap-4 px-5 py-4 ${
                  i % 2 === 0 ? 'bg-white/[0.03]' : ''
                } ${i !== 0 ? 'border-t border-white/5' : ''}`}
              >
                <span className="font-medium leading-relaxed text-white">{label}</span>
                <span className="leading-relaxed text-gray-400">{note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <LoopingVideos
            src={BASE + 'IMG_4009.mp4'}
            portrait
            size="full"
            text="End-effector tracking test."
            className="rounded-xl border border-white/10"
          />
        </div>
      </section>

      <section className="mx-auto mb-10 max-w-4xl">
        <h2 className="mb-3 text-2xl font-semibold">Results</h2>
        <p className="mb-10 max-w-2xl text-gray-400">
          Representative catch clips from each controller variant.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {videos.map(({ src, label }) => (
            <LoopingVideos key={src} src={src} size="full" text={label} className="rounded-xl" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default BallCatchingProject;
