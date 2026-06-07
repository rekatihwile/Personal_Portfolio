import LoopingVideos from '../components/LoopingVideos';

const media = {
  hero: '/images/Laser_Weeder/ucla-laser-weeder-system-hq.jpg',
  control: '/videos/Laser_Weeder/control-sequence-overlay-h264.mp4',
  controlPoster: '/images/Laser_Weeder/control-sequence-poster.jpg',
  demo: '/videos/Laser_Weeder/controlled-demo-two-perspective-h264.mp4',
  demoPoster: '/images/Laser_Weeder/controlled-demo-poster.jpg',
};

const controlStages = [
  'Coarse positioning moves the system into range of the next target.',
  'PD alignment reduces image-space error before treatment.',
  'Firing is timed as its own stage because laser operation affects sensing and safety.',
  'Transit moves to the next target before local target re-identification.',
  'Final alignment refines the target position before the next firing step.',
];

const focusAreas = [
  'Robotics integration across perception, motion, and laser actuation',
  'Staged control sequencing for alignment, transit, re-identification, and firing',
  'Target re-identification after gantry motion',
  'Timing and safety constraints around laser operation',
  'Testing limits under lighting, calibration, and controlled-environment assumptions',
];

const futureWork = [
  'Better robustness under harsh sunlight',
  'More diverse field testing',
  'Improved real-time perception robustness',
  'More systematic performance evaluation',
];

function LaserWeeding() {
  return (
    <div className="project-page">
      <header>
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
          UCLA Research / Lab Context
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Laser Weeder Robotic Treatment System
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-400">
          Robotic laser weed treatment system with staged control, target re-identification, and
          timed firing sequences.
        </p>
      </header>

      {/* ── Project Summary ───────────────────────────── */}
      <section className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Project Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            This project was developed as part of UCLA lab/research work. The system used staged
            robotic control to align with weed targets, re-identify targets after motion, and run
            timed treatment sequences.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I am presenting the work as robotics integration inside a broader lab context, not as a
            claim that the full UCLA-affiliated system was solely mine.
          </p>
        </div>
        <figure className="space-y-4">
          <img
            src={media.hero}
            alt="Laser weeder system in a UCLA research and lab context"
            className="w-full rounded-xl border border-white/10 bg-[#0f1213] object-cover"
          />
          <figcaption className="text-sm leading-relaxed text-gray-400">
            Laser weeder system in a UCLA research/lab context.
          </figcaption>
        </figure>
      </section>

      {/* ── System And Control Sequence ───────────────── */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">System And Control Sequence</h2>
        <p className="mb-8 max-w-4xl text-gray-400 leading-relaxed">
          The control-sequence overlay explains the system behavior over time, including PD
          control, firing, transit, target re-identification, and final alignment before the next
          treatment step.
        </p>
        <LoopingVideos
          src={media.control}
          poster={media.controlPoster}
          text="Timeline overlay showing staged control behavior: PD control, transit, target re-identification, final alignment, and firing."
          className="w-full rounded-xl border border-white/10"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6">
          {controlStages.map((stage) => (
            <p
              key={stage}
              className="border-l border-cyan-300/40 py-1 pl-5 text-gray-300 leading-relaxed"
            >
              {stage}
            </p>
          ))}
        </div>
      </section>

      {/* ── Controlled Demo ───────────────────────────── */}
      <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Controlled Demo Result</h2>
          <p className="text-gray-300 leading-relaxed">
            The demo video shows phone POV and external POV footage of the laser weeder operating.
            The clip speeds up partway through so the full treatment sequence can be viewed
            compactly.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The 16/16 weed-hit result was a controlled demo in favorable conditions, including
            lighting that was not harshly sunny. It should not be presented as broad field
            performance.
          </p>
        </div>
        <LoopingVideos
          src={media.demo}
          poster={media.demoPoster}
          text="Controlled demo showing 16/16 successful weed treatments in favorable conditions, with phone POV and external POV."
          className="w-full rounded-xl border border-white/10"
        />
      </section>

      {/* ── Technical Focus + Future Improvements ─────── */}
      <section className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Technical Focus</h2>
          <ul className="space-y-5 text-gray-300">
            {focusAreas.map((item) => (
              <li key={item} className="border-l border-cyan-300/40 pl-5 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Future Improvements</h2>
          <ul className="space-y-5 text-gray-300">
            {futureWork.map((item) => (
              <li key={item} className="border-l border-cyan-300/40 pl-5 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Research Context ──────────────────────────── */}
      <section className="max-w-4xl">
        <h2 className="mb-5 text-2xl font-semibold">Research Context</h2>
        <p className="text-gray-300 leading-relaxed">
          This work contributed to a research-paper-style system and results presentation in a UCLA
          lab setting. I am intentionally presenting the project as robotics integration work within
          a broader lab context, not claiming that the full UCLA-affiliated system was solely mine.
        </p>
      </section>
    </div>
  );
}

export default LaserWeeding;
