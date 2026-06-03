import LoopingVideos from '../components/LoopingVideos';

const techTags = [
  'Python',
  'OpenCV',
  'YOLO',
  'RAFT-Stereo',
  'Point Clouds',
  'Robot Calibration',
  'Inverse Kinematics',
  'Teensy 4.1',
  'TMC2209',
  'C++/Arduino',
  'Motion Planning',
];

const perceptionSteps = [
  {
    title: 'Stereo burst survey',
    body: 'A stereo pair surveys the staging platform while an overhead Logitech webcam supports alignment and workspace monitoring.',
  },
  {
    title: 'YOLO segmentation + class label',
    body: 'A custom-trained YOLO model detects grocery classes and produces masks for the selected item instead of relying on a loose bounding box.',
  },
  {
    title: 'RAFT disparity map',
    body: 'RAFT-Stereo provides dense disparity from the stereo images, giving depth structure across the visible grocery surface.',
  },
  {
    title: 'Masked point cloud in robot frame',
    body: 'Masking the disparity by the selected grocery yields a point cloud that is mapped into the robot frame for geometry and grasp estimation.',
  },
];

const planningChecks = [
  'Leave the bag footprint',
  'Collide with already placed groceries',
  'Lack sufficient support from below',
  'Overhang too far relative to the support area',
  'Block a vertical top-down descent into the bag',
];

const learningPoints = [
  'Perception-to-action integration across cameras, calibration, planning, and embedded control',
  'Robot-frame reasoning for grasping and placement on real hardware',
  'Physical debugging under backlash, visibility, and timing constraints',
  'Failure recovery design so one bad pick does not poison the rest of the sequence',
  'Planning under hardware constraints instead of assuming idealized geometry',
];

const nextSteps = [
  'Rigidly mounted bag frame to reduce bag motion during placement',
  'Overhead camera positioned over the bag interior for direct bag-state feedback',
  'Heavier grocery handling and broader shape coverage',
  'Class/product database for weight, fragility, and placement preferences',
  'Improved gripper mechanics for more reliable grasp retention',
  'More formal evaluation with repeated trials and clearer failure taxonomy',
];

function GroceryBaggerProject() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1d2428] via-[#171a1c] to-[#101314] shadow-[0_30px_120px_rgba(0,0,0,0.35)] px-6 py-8 md:px-10 md:py-10 mb-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80 mb-3">
              UCLA MAE 162D/E Capstone — Group #6, Clawsome Foods
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Automated Grocery Bagger
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-xl">
              End-to-end autonomous grocery packing with stereo perception, robot-frame calibration,
              deterministic 2.5D packing, and embedded motion control.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-300 max-w-xl">
              Built for UCLA's MAE 162D/E capstone, this project turns an open-ended grocery bagging
              task into a complete perception-to-action robotics pipeline. The robot detects
              groceries, reconstructs approximate 3D geometry, chooses a feasible item and
              placement, and executes the pick/place sequence on physical hardware.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/rekatihwile/Grocery_Buildup/tree/V_2_Prototype"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                View Project Repo
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
            <LoopingVideos
              src="/videos/Grocery_Bagger/hero_demo.mp4"
              className="w-full rounded-xl border border-white/10"
              text="Autonomous survey, pick, place, and bag-state update."
            />
          </div>
        </div>
      </section>

      {/* ── What it does ──────────────────────────────── */}
      <section className="grid gap-10 lg:grid-cols-2 lg:items-start mb-14">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">What it does</h2>
          <p className="text-base leading-relaxed text-gray-300">
            This SCARA-like RRPR grocery bagger uses a stereo camera to observe groceries on a
            staging platform, estimate each item's 3D geometry, select a target, choose a feasible
            bag placement, and execute the pick/place sequence with a two-finger claw gripper.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            A Windows PC runs Python-based perception, calibration, planning, inverse kinematics,
            and serial command generation. A Teensy 4.1 executes synchronized motion across four
            NEMA-17-driven joints and the PWM-controlled claw, with soft limits and safety checks
            enforced before motion.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-200/80 mb-2">
                Hardware
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                SCARA-like RRPR manipulator, carbon fiber links, machined and 3D-printed parts,
                four NEMA-17 steppers, TMC2209 drivers, Teensy 4.1, stereo camera, overhead webcam,
                and a two-finger claw end effector.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-200/80 mb-2">
                Joint layout
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                J1 and J2 form the planar arm, J3 is the vertical prismatic axis, and J4 controls
                wrist rotation for grasp alignment over the staging platform and bag.
              </p>
            </div>
          </div>
        </div>

        <img
          src="/images/Grocery_Bagger/final_setup.png"
          alt="Final automated grocery bagger prototype with staging area, bag, and robot arm"
          className="rounded-2xl border border-white/10 bg-[#0f1213] w-full"
        />
      </section>

      {/* ── System architecture ───────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-[#111518] px-6 py-8 md:px-8 mb-14">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between mb-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white">System architecture</h2>
            <p className="mt-3 text-base leading-relaxed text-gray-300">
              The stack is split between high-level robotics logic on a Windows PC and low-level
              synchronized actuation on a Teensy 4.1. The goal was to keep the full perception,
              planning, and robot-frame reasoning pipeline explicit and debuggable.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-50 font-mono shrink-0 self-start">
            Cameras → YOLO/RAFT → calibration → planner → IK/serial → Teensy → motors
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <img
            src="/images/Grocery_Bagger/software_architecture.png"
            alt="Software architecture diagram for the automated grocery bagger control stack"
            className="rounded-2xl border border-white/10 bg-[#0f1213] w-full"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-lg font-medium text-white mb-2">Perception and calibration</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Python coordinates YOLO segmentation, RAFT-Stereo disparity, point-cloud
                reconstruction, and camera-to-robot calibration so each pick and place target is
                expressed directly in robot coordinates.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h3 className="text-lg font-medium text-white mb-2">Planning and control</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                The planner maintains bag state after every confirmed placement, then hands the
                chosen robot-frame targets to inverse kinematics and serial command generation for
                embedded execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Perception pipeline ───────────────────────── */}
      <section className="mb-14">
        <div className="max-w-3xl mb-6">
          <h2 className="text-2xl font-semibold text-white">Perception pipeline</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-300">
            The perception stack combines YOLO segmentation with RAFT-Stereo disparity. YOLO
            provides object masks and class labels; the disparity map provides dense depth. Masking
            the disparity by the selected grocery produces a point cloud mapped into the robot frame
            for height, footprint, centroid, and grasp orientation estimation.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-8">
          {perceptionSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 bg-[#111518] p-5 transition hover:border-cyan-400/30 hover:bg-[#141a1e]"
            >
              <div className="text-sm font-semibold uppercase tracking-widest text-cyan-200/80 mb-2">
                Step {index + 1}
              </div>
              <h3 className="text-base font-medium text-white mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 mb-6">
          <LoopingVideos
            src="/videos/Grocery_Bagger/perception_pipeline.mp4"
            className="w-full rounded-xl border border-white/10"
            text="Perception pipeline: stereo survey, segmentation, disparity, and masked point-cloud reconstruction."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <figure className="rounded-2xl border border-white/10 bg-[#0f1213] overflow-hidden">
            <img
              src="/images/Grocery_Bagger/yolo_disparity.png"
              alt="YOLO segmentation masks paired with RAFT-Stereo disparity output for grocery detection"
              className="w-full"
            />
            <figcaption className="px-4 py-3 text-sm text-gray-400">
              YOLO segmentation supplies item masks and labels while RAFT-Stereo supplies dense
              disparity for depth-aware reconstruction.
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-white/10 bg-[#0f1213] overflow-hidden">
            <img
              src="/images/Grocery_Bagger/masked_pointcloud.png"
              alt="Masked grocery point cloud transformed into the robot coordinate frame"
              className="w-full"
            />
            <figcaption className="px-4 py-3 text-sm text-gray-400">
              The masked point cloud provides centroid, height, footprint, and grasp orientation for
              downstream planning.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── Calibration ───────────────────────────────── */}
      <section className="grid gap-8 lg:grid-cols-2 lg:items-start mb-14">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Calibration: pixels to robot coordinates</h2>
          <p className="text-base leading-relaxed text-gray-300">
            The cameras see pixels, but the robot needs millimeter-scale robot-frame targets. An
            early version used an overhead homography for known-height, flat objects. The final
            stack uses stereo-to-robot calibration for 3D points, then applies a height-indexed
            overhead homography for XY refinement.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            This split keeps depth from stereo while correcting the lateral placement error that
            shows up in real camera geometry. Both grasp points and bag placements are expressed in
            the robot frame before inverse kinematics.
          </p>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-4 font-mono text-sm text-cyan-50">
            (u_L, v_L, d) → (X_c, Y_c, Z_c) → (X_r, Y_r, Z_r)
          </div>
          <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-4 font-mono text-sm text-cyan-50">
            point cloud → raw AABB → padded AABB → bag placement
          </div>
        </div>
      </section>

      {/* ── Planning ──────────────────────────────────── */}
      <section className="rounded-3xl border border-white/10 bg-[#111518] px-6 py-8 md:px-8 mb-14">
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl font-semibold text-white">Planning: dense bag packing</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-300">
            Once each grocery has a 3D estimate, the planner simplifies it into a padded AABB and
            searches for feasible placements in the bag. The planner treats the bag as a state that
            changes after every confirmed placement rather than dropping each item to a fixed
            location.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            The planner prefers feasible floor placements before stacking, then chooses the item
            whose best feasible placement is most favorable under a deterministic 2.5D packing
            heuristic. This is not globally optimal packing; it is a deterministic, constraint-based
            heuristic designed to work reliably on the physical prototype.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          <figure className="rounded-2xl border border-white/10 bg-[#0f1213] overflow-hidden">
            <img
              src="/images/Grocery_Bagger/aabb_packing.png"
              alt="AABB abstraction of grocery items used for bag placement search"
              className="w-full"
            />
            <figcaption className="px-4 py-3 text-sm text-gray-400">
              Each grocery is reduced to a conservative padded planning box derived from the point cloud.
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-white/10 bg-[#0f1213] overflow-hidden">
            <img
              src="/images/Grocery_Bagger/planning_sequence.png"
              alt="Sequence of feasible placement decisions for groceries inside the bag"
              className="w-full"
            />
            <figcaption className="px-4 py-3 text-sm text-gray-400">
              Bag state is updated after each confirmed placement before searching the next move.
            </figcaption>
          </figure>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-3">Each placement candidate is rejected if it would:</p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {planningChecks.map((check) => (
              <div
                key={check}
                className="flex gap-2 items-start rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-300"
              >
                <span className="text-gray-500 mt-0.5 shrink-0">—</span>
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Missed-pick recovery ──────────────────────── */}
      <section className="grid gap-8 lg:grid-cols-2 lg:items-start mb-14">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <LoopingVideos
            src="/videos/Grocery_Bagger/missed_pick_recovery.mp4"
            className="w-full rounded-xl border border-white/10"
            text="Missed-pick watchdog cancels release, recovers, and retries."
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Missed-pick recovery</h2>
          <p className="text-base leading-relaxed text-gray-300">
            Because a missed pick can corrupt the entire planned bag state, the system includes a
            YOLO-based watchdog before release. It compares class, position, IoU, and area against
            the original pick site.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            If the object still appears to be at the pick location, the robot cancels release,
            returns to a recovery or survey pose, re-homes the prismatic axis, and retries. That
            recovery behavior keeps one bad grasp from cascading into a bad bag model.
          </p>
        </div>
      </section>

      {/* ── Results + Contribution ────────────────────── */}
      <section className="grid gap-6 lg:grid-cols-2 mb-14">
        <div className="rounded-3xl border border-white/10 bg-[#111518] p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">Results and why it matters</h2>
          <p className="text-base leading-relaxed text-gray-300">
            The final prototype demonstrated autonomous grocery detection, grasp selection,
            height-aware pick/place, deterministic packing, and missed-pick recovery on physical
            hardware.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            After the final presentation, the project was encouraged for further development as a
            possible conference, workshop, or demo submission.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#111518] p-6">
          <h2 className="text-2xl font-semibold text-white mb-3">My contribution</h2>
          <p className="text-base leading-relaxed text-gray-300">
            I led the software, perception, calibration, planning, and control integration: YOLO
            segmentation, RAFT-Stereo disparity, masked point-cloud reconstruction, camera-to-robot
            calibration, robot-frame grasp and placement targets, deterministic 2.5D packing logic,
            Teensy motion integration, and missed-pick recovery. Cooper Downing led the mechanical
            design, fabrication, wiring, and hardware integration.
          </p>
        </div>
      </section>

      {/* ── What I Learned + Next Steps ───────────────── */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#111518] p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">What I learned</h2>
          <ul className="space-y-3">
            {learningPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 items-start rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-gray-300"
              >
                <span className="text-cyan-400 mt-0.5 shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#111518] p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Next steps</h2>
          <ul className="space-y-3">
            {nextSteps.map((step) => (
              <li
                key={step}
                className="flex gap-3 items-start rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-gray-300"
              >
                <span className="text-cyan-400 mt-0.5 shrink-0">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
}

export default GroceryBaggerProject;
