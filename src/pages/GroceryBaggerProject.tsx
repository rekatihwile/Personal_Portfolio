// import { Suspense, lazy } from 'react';
import LoopingVideos from '../components/LoopingVideos';
import { usePageTitle } from '../hooks/usePageTitle';

// const GroceryBaggerSim = lazy(() => import('../components/bagger-sim/GroceryBaggerSim'));

const media = {
  hero: '/videos/Grocery_Bagger/hero-pick-place-demo.mp4',
  densePack: '/videos/Grocery_Bagger/dense-pack-demo.mp4',
  checkout: '/videos/Grocery_Bagger/grocery-checkout-demo.mp4',
  walkthrough: '/videos/Grocery_Bagger/system-walkthrough.mp4',
  system: '/images/Grocery_Bagger/early-manipulator-prototype.jpg',
  figure2: '/images/Grocery_Bagger/figure2-perception-pipeline.jpg',
  figure3: '/images/Grocery_Bagger/figure3-point-cloud-aabb.jpg',
  figure4: '/images/Grocery_Bagger/figure4-deterministic-packing.jpg',
};

const plannerPoints = [
  'Each grocery was reduced to a conservative axis-aligned bounding box for grasp and placement reasoning.',
  'Feasible placements were filtered by bag bounds, overlap, support, overhang, usable bag volume, and top-down access.',
  'The planner used one-step receding-horizon decisions instead of committing to a stale global sequence.',
  'The selected placement updated the internal bag state before the next pick was planned.',
];

const results = [
  '64 logged autonomous runs',
  '454 presented objects across 7 grocery classes',
  '404 successful placements out of 425 attempts',
  '95.1% successful pick-and-place rate over attempted actions',
];

const futureWork = [
  'Rigidly mount the bag holder and add a bag-facing camera for direct packed-state observation.',
  'Extend the planner beyond conservative 2.5D AABB placement toward more formal multi-layer packing methods.',
  'Reduce cycle time by caching recent 3D reconstructions and refreshing stereo only when the scene changes.',
  'Incorporate richer item metadata such as weight, fragility, and inventory-linked product information.',
];

function GroceryBaggerProject() {
  usePageTitle('Autonomous Grocery Bagging Robot');
  return (
    <div className="project-page mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 lg:px-10">
      <header className="mx-auto mb-16 max-w-4xl animate-fade-up text-center motion-reduce:animate-none md:mb-20">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
          Robotics / Mechatronics Capstone
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Autonomous Grocery Bagging Robot
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">
          Robotic pick-and-place grocery bagging system using stereo perception, robot-frame
          targeting, deterministic 2.5D packing logic, and missed-pick recovery behavior.
        </p>
      </header>

      <section className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-2 lg:items-start lg:gap-10">
        <figure className="flex h-full flex-col">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0f1213] lg:h-[22rem]">
            <video
              src={media.hero}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="block h-full w-full bg-[#15191c] object-cover shadow-[0_18px_70px_rgba(0,0,0,0.24)]"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-gray-400">
            Continuous pick-and-place hero demo showing the grocery bagging system operating over an
            extended sequence.
          </figcaption>
        </figure>

        <figure className="flex h-full flex-col">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0f1213] lg:h-[22rem]">
            <img
              src={media.system}
              alt="Full grocery bagging system with numbered labels marking the overhead webcam, stereo webcam, manipulator, grasped grocery item, bag region, and staging platform"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-relaxed text-gray-400">
            Full system prototype during autonomous grocery placement. Figure labels: (1) overhead
            webcam, (2) stereo webcam, (3) SCARA-like manipulator and robot frame, (4) grasped
            grocery item, (5) grocery bag and placement region, and (6) staging platform used for
            perception calibration and candidate filtering.
          </figcaption>
        </figure>
      </section>

      {/* <section className="mx-auto mb-16 w-full max-w-5xl md:mb-20">
        <h2 className="mb-5 text-2xl font-semibold">Interactive 3D Demo</h2>
        <p className="text-gray-300 leading-relaxed">
          A simplified digital twin of the bagging cycle: the SCARA-like arm moves over the staging
          platform, picks each grocery, and packs it into the bag — the same loop
          shown in the footage, driven here by inverse kinematics on the same RRPR joint
          layout as the physical robot.
        </p>
        <div className="mt-6">
          <Suspense
            fallback={
              <div className="h-[24rem] w-full animate-pulse rounded-xl border border-white/10 bg-[#0f1213] md:h-[28rem]" />
            }
          >
            <GroceryBaggerSim />
          </Suspense>
        </div>
      </section> */}

      <section className="mx-auto mb-16 w-full max-w-4xl md:mb-20">
        <h2 className="mb-5 text-2xl font-semibold">Project Summary</h2>
        <p className="text-gray-300 leading-relaxed">
          This capstone project integrated a SCARA-like RRPR manipulator, a stereo camera, overhead
          monitoring, Python planning software, and Teensy-based motion control into a working
          grocery bagging prototype. The system detects groceries on a staging platform,
          reconstructs approximate geometry, maps targets into the robot frame, selects feasible bag
          placements, and executes physical pick-and-place actions on hardware.
        </p>
        <p className="mt-5 text-gray-300 leading-relaxed">
          The contribution is primarily full-stack robotics integration rather than a new isolated
          algorithm. The final prototype demonstrated autonomous survey, pick, place, bag-state
          update, and missed-pick recovery behavior, and the accumulated development logs reached
          404 successful placements over 425 attempted pick-and-place actions.
        </p>
      </section>

      <section className="mx-auto mb-16 w-full max-w-5xl md:mb-20">
        <h2 className="mb-5 text-2xl font-semibold">Perception And Calibration</h2>
        <div className="mx-auto max-w-4xl">
          <p className="text-gray-300 leading-relaxed">
            The perception stack combined a custom YOLO segmentation model with RAFT-Stereo
            disparity to isolate grocery geometry from side-by-side stereo imagery. The selected
            mask was applied to the disparity map so the system kept depth values for the target
            grocery while rejecting the surrounding platform, arm, and background. The resulting
            masked point cloud was then mapped from camera coordinates into the robot frame for
            grasping and placement.
          </p>
          <p className="mt-5 text-gray-300 leading-relaxed">
            The overhead webcam provided an additional height-indexed homography path for planar XY
            refinement. That mattered because groceries at different heights project differently
            into the camera image even when their true robot-frame XY position is unchanged.
          </p>
        </div>
        <figure className="mx-auto mt-8 w-full max-w-5xl">
          <img
            src={media.figure2}
            alt="Perception pipeline figure showing stereo input, disparity, segmentation, and masked target isolation"
            className="w-full rounded-xl border border-white/10 bg-[#0f1213] object-contain"
          />
          <figcaption className="mt-3 text-sm leading-relaxed text-gray-400">
            Perception pipeline for isolating grocery geometry from stereo imagery: stereo-left and
            stereo-right frames, RAFT-Stereo disparity, YOLO segmentation and classification, and
            the target mask applied to the disparity map to isolate the depth data used for 3D
            reconstruction.
          </figcaption>
        </figure>
      </section>

      <section className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">AABB Packing Planner</h2>
          <p className="text-gray-300 leading-relaxed">
            After perception, each grocery was wrapped in a conservative axis-aligned bounding box
            and evaluated as a placement primitive in the bag-local frame. This let the system
            reason about placement feasibility without pretending the groceries were perfectly known
            rigid solids.
          </p>
          <div className="mt-6 space-y-4 text-gray-300">
            {plannerPoints.map((point) => (
              <p key={point} className="accent-item">
                {point}
              </p>
            ))}
          </div>
        </div>

        <figure>
          <img
            src={media.figure3}
            alt="Robot-frame point cloud and bounding-box abstraction for a grocery object"
            className="w-full rounded-xl border border-white/10 bg-[#0f1213] object-contain"
          />
          <figcaption className="mt-3 text-sm leading-relaxed text-gray-400">
            Robot-frame point-cloud reconstruction of a grocery object and the axis-aligned
            bounding-box abstraction used for placement reasoning. The object height is padded
            conservatively for vertical clearance while XY spacing is enforced during placement
            feasibility checks.
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto mb-16 w-full max-w-5xl md:mb-20">
        <figure className="mx-auto w-full max-w-5xl">
          <img
            src={media.figure4}
            alt="Deterministic packing visualization showing internal bag state and best feasible placements"
            className="w-full rounded-xl border border-white/10 bg-[#0f1213] object-contain"
          />
          <figcaption className="mt-3 text-sm leading-relaxed text-gray-400">
            Deterministic packing visualization for one planning cycle: filtered overhead-camera
            detections, current internal bag state, and the best feasible placement proposed for
            each remaining candidate under the deterministic 2.5D heuristic.
          </figcaption>
        </figure>
      </section>

      <section className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Packing In Action</h2>
          <p className="text-gray-300 leading-relaxed">
            Rather than repeating a scripted drop point, the robot re-evaluated the visible
            groceries after each confirmed placement and selected the next feasible item-placement
            pair under the current bag state. This made the system behave more like a sequential
            packing assistant than an offline bin-packing solver.
          </p>
          <p className="mt-5 text-gray-300 leading-relaxed">
            The dense-pack sequence highlights how the planner balances object size, support,
            clearance, and usable bag volume while adapting online as the bag fills.
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl">
          <LoopingVideos
            src={media.densePack}
            size="full"
            text="Dense item packing demo showing the planner prioritizing practical fit and placement constraints rather than a fixed drop location."
            className="rounded-xl border border-white/10"
          />
        </div>
      </section>

      <section className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Execution And Recovery</h2>
          <p className="text-gray-300 leading-relaxed">
            Once a grasp or placement target was chosen, Python converted robot-frame targets into
            joint-space commands and sent them to the Teensy motion controller. A key supervisory
            behavior was the missed-pick recovery check: after a pick, the robot re-surveyed the
            original pick region before release and canceled the placement if the object still
            appeared to be present.
          </p>
          <p className="mt-5 text-gray-300 leading-relaxed">
            This prevented one failed grasp from corrupting the internal bag state and allowed the
            robot to recover instead of pretending a nonexistent placement had succeeded.
          </p>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <LoopingVideos
            src={media.walkthrough}
            size="full"
            className="rounded-xl border border-white/10"
            text="Project walkthrough with slides, pipeline explanation, and final hardware bagging footage."
          />
        </div>
      </section>

      <section className="mb-16 grid gap-8 md:mb-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Demonstrated Results</h2>
          <p className="text-gray-300 leading-relaxed">
            The final prototype demonstrated autonomous grocery detection, height-aware pick
            targeting, deterministic placement selection, bag-state updating, and missed-pick
            recovery on physical hardware. The logged development runs span hundreds of real
            physical pick-and-place actions rather than a few isolated demo clips.
          </p>
          <ul className="mt-6 space-y-4 text-gray-300">
            {results.map((item) => (
              <li key={item} className="accent-item leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <LoopingVideos
            src={media.checkout}
            size="full"
            className="rounded-xl border border-white/10"
            text="Checkout-style demo showing closed-loop bagging behavior over a longer autonomous sequence."
          />
        </div>
      </section>

      <section className="mb-10 grid gap-10 md:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">What This Project Proved</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="leading-relaxed">
              The system tied together perception, calibration, planning, control, and recovery into
              one working physical demo.
            </li>
            <li className="leading-relaxed">
              Placement decisions depended on the current packed state rather than a single fixed
              destination.
            </li>
            <li className="leading-relaxed">
              The prototype showed that conservative geometry-based reasoning can still produce
              useful closed-loop bagging behavior on hardware.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-semibold">Future Work</h2>
          <ul className="space-y-4 text-gray-300">
            {futureWork.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default GroceryBaggerProject;
