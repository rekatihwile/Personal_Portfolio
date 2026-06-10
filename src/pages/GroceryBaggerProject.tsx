import LoopingVideos from '../components/LoopingVideos';

const media = {
  hero: '/videos/Grocery_Bagger/hero-pick-place-demo.mp4',
  densePack: '/videos/Grocery_Bagger/dense-pack-demo.mp4',
  checkout: '/videos/Grocery_Bagger/grocery-checkout-demo.mp4',
  walkthrough: '/videos/Grocery_Bagger/system-walkthrough.mp4',
  yolo: '/images/Grocery_Bagger/yolo-training-scene.jpg',
  manipulator: '/images/Grocery_Bagger/early-manipulator-prototype.jpg',
};

const packingPoints = [
  'Object size and footprint shaped where an item could be placed.',
  'Overlap and fit checks filtered out placements that would collide with existing bag contents.',
  'Available bag space and stable placement mattered more than visual neatness.',
  'Item ordering helped the robot make practical choices with the groceries it could see and handle.',
];

const takeaways = [
  'Integrated perception, planning, and physical robot motion into one working demo.',
  'Converted object-recognition outputs into placement decisions constrained by real hardware.',
  'Debugged grasping, object fit, bag deformation, and placement assumptions.',
  'Learned how small real-world errors compound across a perception-to-action pipeline.',
];

const futureWork = [
  'More robust item pose estimation',
  'Closed-loop placement correction',
  'More systematic packing metrics',
  'Better grasp planning',
  'More reliable bag deformation handling',
];

function GroceryBaggerProject() {
  return (
    <div className="project-page">
      <header className="mb-20">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
          Robotics / Mechatronics Capstone
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Autonomous Grocery Bagging Robot
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-400">
          Robotic pick-and-place grocery bagging system using deterministic geometry-based packing
          heuristics.
        </p>
      </header>

      <section className="mb-24 grid gap-12 md:mb-28 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <LoopingVideos
            src={media.hero}
            size="full"
            text="Continuous pick-and-place hero demo showing the grocery bagging system operating over an extended sequence."
            className="rounded-xl border border-white/10"
          />
        </div>
        <figure>
          <img
            src={media.manipulator}
            alt="Full grocery bagging system with numbered labels marking the overhead webcam, stereo webcam, manipulator, grasped grocery item, bag region, and staging platform"
            className="w-full rounded-xl border border-white/10 bg-[#0f1213] object-contain"
          />
          <figcaption className="mt-4 text-sm leading-relaxed text-gray-400">
            Full system prototype during autonomous grocery placement. The numbered labels identify
            the overhead webcam, stereo webcam, SCARA-like manipulator and robot frame, grasped
            grocery item, bag placement region, and the staging platform used for perception
            calibration and candidate filtering.
          </figcaption>
        </figure>
      </section>

      <section className="mb-24 max-w-3xl md:mb-28">
        <h2 className="mb-5 text-2xl font-semibold">Project Summary</h2>
        <p className="text-gray-300 leading-relaxed">
          This was a capstone robotics and mechatronics project built around a physical manipulator
          that picked grocery items and placed them into a bag. The system produced a working
          physical demonstration, with bag placement driven by deterministic geometry-based
          heuristics rather than a learned packing policy.
        </p>
        <p className="mt-5 text-gray-300 leading-relaxed">
          The goal was not to claim a perfectly robust grocery bagger for every environment. It was
          to connect perception, item handling, and practical placement logic into a real robot
          demo.
        </p>
      </section>

      <section className="mb-24 grid gap-12 md:mb-28 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Packing Strategy</h2>
          <p className="text-gray-300 leading-relaxed">
            The packing behavior used explicit geometric reasoning. Each placement had to make sense
            for the item, the available bag space, and the real manipulator constraints.
          </p>
          <div className="mt-8 space-y-5 text-gray-300">
            {packingPoints.map((point) => (
              <p key={point} className="accent-item">
                {point}
              </p>
            ))}
          </div>
        </div>
        <LoopingVideos
          src={media.densePack}
          size="full"
          text="The planner prioritized practical fit and placement constraints rather than treating bagging as a purely visual layout problem."
          className="rounded-xl border border-white/10"
        />
      </section>

      <section className="mb-24 grid gap-12 md:mb-28 lg:grid-cols-2 lg:items-start lg:gap-16">
        <figure>
          <img
            src={media.yolo}
            alt="YOLO object recognition training scene with grocery items labeled"
            className="w-full rounded-xl border border-white/10 bg-[#0f1213] object-contain"
          />
          <figcaption className="mt-4 text-sm leading-relaxed text-gray-400">
            Object recognition training example with grocery items labeled in the scene.
          </figcaption>
        </figure>
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Perception And Item Recognition</h2>
          <p className="text-gray-300 leading-relaxed">
            The system used object recognition, segmentation, and classification to identify grocery
            objects before planning the next pick and placement. The image includes items like Chex
            Mix, Burt's Bees, paper towels, Dove deodorant, Pringles, Lay's chips, Band-Aid, DC, and
            Carmex lip balm.
          </p>
          <p className="mt-5 text-gray-300 leading-relaxed">
            Those recognition outputs still had to be translated into robot-relevant decisions: what
            to pick, where it could fit, and how the physical bag state might change after the
            placement.
          </p>
        </div>
      </section>

      <section className="mb-24 grid gap-12 md:mb-28 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <h2 className="mb-5 text-2xl font-semibold">Full System Prototype</h2>
          <p className="text-gray-300 leading-relaxed">
            This view shows the integrated grocery bagging setup during autonomous placement, not
            just the arm in isolation. The final prototype combined the SCARA-like manipulator, an
            overhead webcam, a stereo webcam, a staging platform, and the bag placement region into
            one working perception-to-action system.
          </p>
          <p className="mt-5 text-gray-300 leading-relaxed">
            Seeing the full rig in one frame makes the real constraints clearer: camera placement,
            robot reach, item visibility, and bag access all had to cooperate for the packing demo
            to work reliably.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#0f1213] p-6">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Figure Labels
          </p>
          <div className="mt-5 space-y-4 text-gray-300">
            <p>\u2460 Overhead webcam</p>
            <p>\u2461 Stereo webcam</p>
            <p>\u2462 SCARA-like manipulator, base, and robot frame</p>
            <p>\u2463 Grasped grocery item</p>
            <p>\u2464 Grocery bag and place region</p>
            <p>\u2465 Staging platform used for perception calibration and candidate filtering</p>
          </div>
        </div>
      </section>

      <section className="mb-24 md:mb-28">
        <h2 className="mb-5 text-2xl font-semibold">Walkthrough Video</h2>
        <p className="mb-10 max-w-2xl text-gray-400">
          Short project walkthrough with slides and final bagging footage.
        </p>
        <LoopingVideos
          src={media.walkthrough}
          size="lg"
          className="rounded-xl border border-white/10"
        />
      </section>

      <section className="mb-24 md:mb-28">
        <h2 className="mb-5 text-2xl font-semibold">Grocery Checkout</h2>
        <p className="mb-10 max-w-2xl text-gray-400">
          Standard checkout-style demo showing the robot placing grocery items into the bag.
        </p>
        <LoopingVideos
          src={media.checkout}
          size="lg"
          className="rounded-xl border border-white/10"
        />
      </section>

      <section className="mb-24 grid gap-12 md:mb-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Engineering Takeaways</h2>
          <ul className="space-y-5 text-gray-300">
            {takeaways.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Future Improvements</h2>
          <ul className="space-y-5 text-gray-300">
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
