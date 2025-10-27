import LoopingVideos from '../components/LoopingVideos';

function BallCatchingProject() {
  const BASE = '/videos/Ball_Catching_Project/';
  const videoPaths = {
    Ball_On_Stick: BASE + 'IMG_4009.mp4',
    Catch_DC: BASE + '63_Decentralized.mov',
    Catch_JSID: BASE + 'JointSpaceInverseDynamics.mov',
    Catch_OID: BASE + 'OperationalInverseDynamics.mov',
    Catch_RJS_2: BASE + '63_RobustJoint.mov',
  } as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Ball Catching Project</h1>
        <p className="mt-2 text-gray-400 text-lg">
          Computer vision + 2RR planar arm intercepting ping-pong trajectories.
        </p>
      </header>

      {/* Overview */}
      <section className="mt-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-medium">Overview</h2>
          <p className="mt-3 text-gray-300 leading-relaxed text-lg">
            This project combines high-speed vision with model-based control. A 2-link arm with
            Dynamixel MX-28 motors and 3D-printed links tracks and intercepts the ball’s flight.
          </p>
        </div>
        <img
          src="/images/Ball_Catching_Robot/Experimental_Setup.png"
          alt="Experimental setup"
          className="rounded-xl border border-white/10 bg-[#0f1213]"
        />
      </section>

      {/* Implementation */}
      <section className="mt-10 grid md:grid-cols-2 gap-8 items-start">
        <LoopingVideos
          src={videoPaths.Ball_On_Stick}
          className="w-full"
          text="End-effector tracking test"
        />
        <div>
          <h2 className="text-2xl font-medium">Implementation</h2>
          <p className="mt-3 text-gray-300 leading-relaxed text-lg">
            Controllers evaluated: decentralized PD, joint-space inverse dynamics (JS-ID),
            operational-space inverse dynamics (OS-ID), and robust joint-space. We benchmarked
            time-to-catch and overshoot across varying release angles.
          </p>
        </div>
      </section>
    </div>
  );
}

export default BallCatchingProject;
