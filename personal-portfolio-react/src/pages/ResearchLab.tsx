import LoopingVideos from '../components/LoopingVideos';

const PIPELINE_STEPS = [
  { step: '01', label: 'Stereo Survey Burst', desc: 'Cameras sweep the workspace and capture synchronized stereo frames.' },
  { step: '02', label: 'Weed / Keypoint Detection', desc: 'Two-phase perception: plant segmentation then meristem localization.' },
  { step: '03', label: 'Stereo Matching', desc: 'Left/right detections are associated across the stereo pair.' },
  { step: '04', label: 'Triangulation', desc: '3D workspace coordinates are derived from stereo disparity.' },
  { step: '05', label: 'Target Ordering', desc: 'Path planning minimizes gantry travel across the target set.' },
  { step: '06', label: 'Coarse Move', desc: 'Gantry translates to the 3D-derived XY position over each target.' },
  { step: '07', label: 'Local Re-ID', desc: 'Plant is re-detected in the near-field camera frame after travel.' },
  { step: '08', label: 'PD Visual Servo', desc: 'Image-space PD controller drives pixel error to threshold.' },
  { step: '09', label: 'Laser Dwell / Fire', desc: 'Laser fires for 2.0 s once alignment error is below threshold.' },
];

const METRICS = [
  { value: '60 W', label: 'Diode laser power', sub: '440 nm blue wavelength' },
  { value: '3.5×', label: 'Wall-plug efficiency gain', sub: 'vs. benchmark CO₂ setup' },
  { value: '5.89 s', label: 'Per-weed treatment time', sub: 'Fitted slope, R² = 0.998' },
  { value: '2.0 s', label: 'Laser dwell time', sub: 'Dominant per-target bottleneck' },
];

const REPO_MODULES = [
  { name: 'control/', desc: 'Gantry motion, PD visual servo, state machine' },
  { name: 'hardware/', desc: 'Serial interfaces, laser actuation, safety gating' },
  { name: 'vision/', desc: 'Stereo matching, triangulation, detection models' },
  { name: 'planning/', desc: 'Target ordering, path optimization' },
  { name: 'ui/', desc: 'Visualization and debug overlays' },
  { name: 'data_collection/', desc: 'Trial recording, annotation pipelines' },
  { name: 'dev_tools/calibration/', desc: 'Stereo calibration, laser–camera geometry' },
  { name: 'params/', desc: 'Tunable parameters and config files' },
];

function LaserWeeding() {
  return (
    <div className="min-h-screen bg-[#121517] text-gray-100">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-white/10 bg-[#0f1213]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex flex-wrap gap-2 mb-5">
            {['UCLA SCI Lab', 'Robotics / Mechatronics', 'Computer Vision', 'Diode Laser Ablation'].map(b => (
              <span
                key={b}
                className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10"
              >
                {b}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Autonomous Diode-Laser Weeding
          </h1>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl">
            Stereo vision, learned keypoint localization, and closed-loop gantry control for
            precision weed ablation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/rekatihwile/SCI_Weeder/tree/refactor/workspace-cleanup"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-gray-900 text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              View GitHub Repo
            </a>
            <button
              disabled
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-gray-500 text-sm font-semibold cursor-not-allowed"
            >
              View Paper (forthcoming)
            </button>
          </div>
        </div>
      </section>

      {/* ── Project Overview ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Herbicide-free weed control requires delivering a lethal energy dose to a precise
              anatomical target—the plant's meristem—without disturbing neighboring soil or crops.
              Conventional laser weeding systems rely on high-power CO₂ sources that demand heavy
              infrastructure poorly suited to compact, battery-operated platforms.
            </p>
            <p>
              This undergraduate research project, conducted in{' '}
              <strong className="text-white">
                Professor Jawed's Structures-Computer Interaction (SCI) Lab
              </strong>{' '}
              at UCLA, explores whether a{' '}
              <strong className="text-white">compact 60 W blue-diode laser</strong> paired with
              stereo vision and a CNC gantry can match the treatment efficacy of higher-power
              alternatives while operating far more efficiently.
            </p>
            <p>
              The system integrates the full stack: hardware bring-up, stereo calibration, learned
              weed detection, 3D triangulation, trajectory planning, visual servoing, and controlled
              laser actuation. The research paper compares diode-laser ablation against a CO₂
              benchmark and reports a measured{' '}
              <strong className="text-white">3.5× wall-plug energy-efficiency improvement</strong>.
            </p>
          </div>
          <img
            src="/images/Research_Lab/CAD_Setup.png"
            alt="Experimental setup overview"
            className="rounded-xl border border-white/10 bg-[#1e2326] w-full object-cover"
          />
        </div>
      </section>

      {/* ── My Role ──────────────────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#0f1213]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold mb-3">My Role</h2>
          <p className="text-gray-400 mb-7 max-w-2xl">
            This was a team research project. My contributions spanned hardware integration,
            software architecture, and the perception-to-actuation pipeline.
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Integrated the full perception-to-actuation pipeline for the CNC diode-laser weeding prototype.',
              'Worked on stereo camera calibration, laser–camera coordinate mapping, and homogeneous transform verification.',
              'Refactored the runtime codebase into modular folders: control, hardware, vision, planning, ui, data_collection, and params.',
              'Implemented stereo survey logic, stereo matching, target triangulation, and path ordering.',
              'Integrated coarse gantry motion, local target re-identification, image-space PD visual servoing, and laser firing sequence.',
              'Built debugging and visualization tools for triangulated target overlays and treatment-order previews.',
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── System Architecture ──────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-2">System Architecture</h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          The runtime executes a stop-and-go state machine across nine stages, from stereo survey
          through laser actuation.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {PIPELINE_STEPS.map(({ step, label, desc }) => (
            <div key={step} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <span className="text-xs font-mono text-blue-400">{step}</span>
              <h3 className="mt-1 text-sm font-semibold text-white">{label}</h3>
              <p className="mt-1 text-xs text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <img
          src="/images/Research_Lab/system_architecture_placeholder.png"
          alt="System architecture diagram (placeholder)"
          className="rounded-xl border border-white/10 bg-[#1e2326] w-full h-48 object-cover"
          onError={e => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </section>

      {/* ── Hardware ─────────────────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#0f1213]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold mb-8">Hardware</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              {[
                {
                  title: 'Planar CNC Gantry',
                  desc: 'XY motion platform carries the laser head and camera pair, enabling workspace-scale positioning with millimeter resolution.',
                },
                {
                  title: '60 W, 440 nm Blue Diode Laser',
                  desc: 'Compact solid-state laser module. Lower peak power than CO₂ alternatives; the efficiency advantage was measured at 3.5× wall-plug.',
                },
                {
                  title: 'Eye-in-Hand Stereo Cameras',
                  desc: 'Two OV5640 RGB modules mounted near the laser head with a fixed stereo baseline. Used for both workspace survey and local visual servoing.',
                },
                {
                  title: 'Onboard Compute',
                  desc: 'Embedded compute (Jetson-class) runs the full perception and control stack without a tethered workstation.',
                },
                {
                  title: 'Battery-Powered Architecture',
                  desc: 'The low-power diode approach enables battery operation, supporting future fieldable or mobile deployments.',
                },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">{desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <img
                src="/images/Research_Lab/laser_head_stereo_placeholder.png"
                alt="Laser head and stereo camera mount (placeholder)"
                className="rounded-xl border border-white/10 bg-[#1e2326] w-full h-52 object-cover"
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <img
                src="/images/Research_Lab/gantry_setup_placeholder.png"
                alt="CNC gantry setup (placeholder)"
                className="rounded-xl border border-white/10 bg-[#1e2326] w-full h-52 object-cover"
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Perception ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-4">Perception Pipeline</h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="text-gray-300 leading-relaxed space-y-5">
            <p>
              Weed ablation requires more than bounding-box detection. The laser spot must land on
              the plant's <strong className="text-white">meristem</strong>—the apical growth point.
              A miss by even a centimeter or two can leave the plant alive.
            </p>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Phase 1 — Detection / Segmentation
              </h3>
              <p className="text-sm text-gray-400">
                YOLOv8-style detection and segmentation identify candidate weed plants in the stereo
                frames. This phase produces the region of interest passed to Phase 2.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Phase 2 — Keypoint / Meristem Localization
              </h3>
              <p className="text-sm text-gray-400">
                A dedicated keypoint head predicts the meristem location with sub-pixel precision.
                The paper evaluates MobileNetV3-small keypoint heads, direct regression, soft-argmax
                heatmaps with skip connections, and a YOLO pose baseline.
              </p>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl px-4 py-3">
              <p className="text-sm text-blue-300">
                <strong>Key finding:</strong> The soft-argmax + skip-connection architecture proved
                most stable under label scarcity—critical when the training dataset is collected in
                a lab setting rather than across thousands of field images.
              </p>
            </div>
          </div>
          <img
            src="/images/Research_Lab/perception_pipeline_placeholder.png"
            alt="Perception pipeline comparison (placeholder)"
            className="rounded-xl border border-white/10 bg-[#1e2326] w-full h-72 object-cover"
            onError={e => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* ── Control & Execution ──────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#0f1213]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold mb-4">Control & Execution</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                The runtime uses a{' '}
                <strong className="text-white">stop-and-go state machine</strong>: laser firing
                saturates camera imagery, so movement and actuation are decoupled into discrete
                phases.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <span className="text-white font-medium">Coarse move —</span> stereo-derived 3D
                  coordinates drive the gantry to within range of the target.
                </li>
                <li>
                  <span className="text-white font-medium">Local re-ID —</span> the plant is
                  re-detected in the near-field camera frame after travel.
                </li>
                <li>
                  <span className="text-white font-medium">PD visual servo —</span> image-space
                  proportional-derivative control drives pixel error below a threshold before
                  firing.
                </li>
                <li>
                  <span className="text-white font-medium">Laser dwell —</span> 2.0 s exposure;
                  deterministic mortality observed for early-stage weeds in lab conditions.
                </li>
              </ul>
              <p className="text-sm text-gray-400">
                Runtime decomposition showed that laser dwell was the dominant per-target cost.
                Total execution time scales approximately linearly with weed count (fitted slope
                5.89 s/weed, R² = 0.998).
              </p>
            </div>

            {/* Pseudocode block */}
            <div className="bg-[#0b0e10] border border-white/10 rounded-xl px-5 py-4 font-mono text-xs text-gray-300 leading-6">
              <div className="text-gray-500 mb-2"># Runtime state machine (simplified)</div>
              <div>
                <span className="text-blue-400">init_hardware</span>()
              </div>
              <div>
                <span className="text-blue-400">home_gantry</span>(){' '}
                <span className="text-gray-600"># optional</span>
              </div>
              <div>
                <span className="text-blue-400">stereo_survey_burst</span>()
              </div>
              <div>
                <span className="text-blue-400">detect_weed_candidates</span>()
              </div>
              <div>
                <span className="text-blue-400">stereo_match</span>(left, right)
              </div>
              <div>
                <span className="text-blue-400">triangulate_targets</span>(matches)
              </div>
              <div>
                <span className="text-blue-400">order_targets</span>(targets)
              </div>
              <div className="text-gray-500">for target in targets:</div>
              <div className="pl-4">
                <span className="text-blue-400">coarse_move</span>(target.xyz)
              </div>
              <div className="pl-4">
                <span className="text-blue-400">local_reid</span>()
              </div>
              <div className="pl-4">
                <span className="text-blue-400">pd_servo_align</span>()
              </div>
              <div className="pl-4">
                <span className="text-blue-400">laser_fire</span>(dwell=2.0)
              </div>
              <div>
                <span className="text-blue-400">teardown</span>(save_recording=True)
              </div>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4 text-gray-200">System Demonstrations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <LoopingVideos
              src="/videos/Research_Lab/stereo_survey_placeholder.mp4"
              text="Stereo survey burst"
              className="w-full rounded-xl"
            />
            <LoopingVideos
              src="/videos/Research_Lab/triangulation_debug_placeholder.mp4"
              text="Triangulation debug view"
              className="w-full rounded-xl"
            />
            <LoopingVideos
              src="/videos/Research_Lab/fine_alignment_placeholder.mp4"
              text="PD visual servoing"
              className="w-full rounded-xl"
            />
            <LoopingVideos
              src="/videos/Research_Lab/laser_fire_placeholder.mp4"
              text="Laser firing sequence"
              className="w-full rounded-xl"
            />
          </div>
          <p className="mt-3 text-xs text-gray-600">
            Video placeholders — replace with real recordings under /videos/Research_Lab/
          </p>
        </div>
      </section>

      {/* ── Results ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-2">Results</h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Key quantitative results from the lab prototype. The system is an undergraduate research
          prototype; results reflect controlled lab conditions, not field-commercial deployment.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {METRICS.map(({ value, label, sub }) => (
            <div
              key={value}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-6 text-center"
            >
              <div className="text-3xl font-bold text-white">{value}</div>
              <div className="mt-1 text-sm text-gray-300 font-medium">{label}</div>
              <div className="mt-0.5 text-xs text-gray-500">{sub}</div>
            </div>
          ))}
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-5 text-sm text-gray-300 leading-relaxed space-y-3 max-w-3xl">
          <p>
            <strong className="text-white">Laser dwell:</strong> A 2.0 s dwell time produced
            deterministic mortality for early-stage weed plants in laboratory conditions.
          </p>
          <p>
            <strong className="text-white">Runtime decomposition:</strong> Travel, target re-ID,
            visual servoing, and laser dwell were separately profiled. Laser dwell was the dominant
            bottleneck; reducing it is the clearest path to faster throughput.
          </p>
          <p>
            <strong className="text-white">Scope:</strong> These results demonstrate the feasibility
            of a lower-power, battery-compatible architecture for diode-laser weed treatment. Field
            validation and multi-species generalization remain open problems.
          </p>
        </div>
      </section>

      {/* ── Clean Runtime Workspace ──────────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#0f1213]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold mb-2">Clean Runtime Workspace</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            The refactored repository separates hardware interfaces, vision, control, and tooling
            into distinct modules—making the system easier to debug, extend, and hand off.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-[#0b0e10] border border-white/10 rounded-xl px-5 py-5 font-mono text-sm">
              <div className="text-gray-500 mb-3 text-xs"># refactor/workspace-cleanup</div>
              <div className="space-y-1 text-gray-300">
                <div>
                  <span className="text-blue-400">control/</span>
                </div>
                <div>
                  <span className="text-blue-400">hardware/</span>
                </div>
                <div>
                  <span className="text-blue-400">vision/</span>
                </div>
                <div>
                  <span className="text-blue-400">planning/</span>
                </div>
                <div>
                  <span className="text-blue-400">ui/</span>
                </div>
                <div>
                  <span className="text-blue-400">data_collection/</span>
                </div>
                <div>
                  <span className="text-blue-400">dev_tools/</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">calibration/</span>
                </div>
                <div>
                  <span className="text-blue-400">params/</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {REPO_MODULES.map(({ name, desc }) => (
                <div key={name} className="flex gap-3 items-start">
                  <code className="text-blue-400 text-xs font-mono shrink-0 mt-0.5 w-40">
                    {name}
                  </code>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Learned ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold mb-6">What I Learned</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Calibration survives—or doesn't—at integration time",
              body: 'Camera intrinsics and extrinsics look clean in isolation. The real test is whether the coordinate transform holds when the camera is mounted, the gantry moves, and the scene changes.',
            },
            {
              title: 'Evaluate perception at the task point',
              body: 'Detector confidence does not predict whether the laser lands correctly. The metric that matters is pixel error at the meristem after visual servoing, not AP on a held-out test set.',
            },
            {
              title: 'Robotics systems fail at interfaces',
              body: 'Camera-to-laser geometry, coordinate transforms between frames, serial timing, calibration drift, and safety gating—these boundaries are where things break, not inside individual modules.',
            },
            {
              title: 'Modularity makes prototypes useful',
              body: 'A single-file script gets you to a demo. A modular codebase lets you diagnose why the demo breaks and fix it without rewriting everything from scratch.',
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-4"
            >
              <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Future Directions ────────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#0f1213]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold mb-6">Future Directions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Galvanometer steering',
                body: 'Mirror-based beam steering to reduce mechanical travel overhead and enable faster per-target cycling.',
              },
              {
                title: 'Automated labeling',
                body: 'Semi-automated or self-supervised annotation pipelines to extend coverage to new weed species without large manual labeling effort.',
              },
              {
                title: 'Outdoor lighting robustness',
                body: 'Improved exposure handling and perception under direct sunlight, shadows, and variable outdoor conditions.',
              },
              {
                title: 'Field testing & scaling',
                body: 'Multi-head gantry configurations and extended field trials across real agricultural environments.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-4"
              >
                <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default LaserWeeding;
