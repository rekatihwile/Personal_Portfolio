import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MathUtils, TOUCH, Vector3 } from 'three';
import type { Group } from 'three';
import { BaggerRobot } from './BaggerRobot';
import type { RobotRig } from './BaggerRobot';
import type { Mesh } from 'three';
import {
  BAG_CENTER,
  GRIP_OPEN_X,
  HOME_JOINTS,
  ITEMS,
  LIFT_PLANE_Y,
  TIP_LOCAL_Y,
  buildHomeSteps,
  buildItemSteps,
  easeInOutCubic,
  gripClosedX,
  itemBagPos,
  itemStartPos,
} from './simulation';
import type { JointState, Step } from './simulation';

type SimState = {
  /** index into ITEMS; ITEMS.length means the homing/dwell block */
  itemIdx: number;
  stepIdx: number;
  /** normalized progress through the current step, 0 → 1 */
  t: number;
  started: boolean;
  steps: Step[] | null;
  carrying: number | null;
  gripClosedX: number;
  from: JointState;
  joints: JointState;
};

function useRobotRig(): RobotRig {
  return {
    baseYaw: useRef<Group>(null),
    elbow: useRef<Group>(null),
    lift: useRef<Group>(null),
    wrist: useRef<Group>(null),
    fingerL: useRef<Mesh>(null),
    fingerR: useRef<Mesh>(null),
    tip: useRef<Group>(null),
  };
}

function Scene({ pausedRef }: { pausedRef: RefObject<boolean> }) {
  const rig = useRobotRig();
  const gl = useThree((state) => state.gl);

  // OrbitControls sets touch-action: none, which turns the canvas into a
  // scroll trap on phones. Restore vertical page scrolling; two-finger
  // gestures still reach the controls for orbit/zoom.
  useEffect(() => {
    gl.domElement.style.touchAction = 'pan-y';
  }, [gl]);
  const itemRefs = useRef<(Group | null)[]>([]);
  const tipWorld = useRef(new Vector3());
  const sim = useRef<SimState>({
    itemIdx: 0,
    stepIdx: 0,
    t: 0,
    started: false,
    steps: null,
    carrying: null,
    gripClosedX: 0.08,
    from: { ...HOME_JOINTS },
    joints: { ...HOME_JOINTS },
  });

  useFrame((_, rawDelta) => {
    if (pausedRef.current) return;
    const s = sim.current;
    const delta = Math.min(rawDelta, 0.05);

    // Lazily build the step list for the current item (or the homing block).
    if (!s.steps) {
      if (s.itemIdx < ITEMS.length) {
        const i = s.itemIdx;
        const item = ITEMS[i];
        s.gripClosedX = gripClosedX(item);
        s.steps = buildItemSteps(
          item,
          () => {
            s.carrying = i;
          },
          () => {
            s.carrying = null;
            itemRefs.current[i]?.position.set(...itemBagPos(item));
          }
        );
      } else {
        s.steps = buildHomeSteps();
      }
      s.stepIdx = 0;
      s.t = 0;
      s.started = false;
      s.from = { ...s.joints };
    }

    const step = s.steps[s.stepIdx];
    if (!s.started) {
      step.onStart?.();
      s.started = true;
    }

    // Ease all joints from their step-start values toward the step target.
    s.t = Math.min(1, s.t + delta / step.dur);
    const e = easeInOutCubic(s.t);
    for (const key of ['q1', 'q2', 'lift', 'grip'] as const) {
      const target = step.target[key];
      if (target !== undefined) s.joints[key] = MathUtils.lerp(s.from[key], target, e);
    }

    // Drive the rig.
    const { baseYaw, elbow, lift, wrist, fingerL, fingerR, tip } = rig;
    if (baseYaw.current && elbow.current && lift.current && wrist.current) {
      const j = s.joints;
      baseYaw.current.rotation.y = j.q1;
      elbow.current.rotation.y = j.q2;
      wrist.current.rotation.y = -(j.q1 + j.q2);
      lift.current.position.y = j.lift - TIP_LOCAL_Y - LIFT_PLANE_Y;
      const fingerX = MathUtils.lerp(GRIP_OPEN_X, s.gripClosedX, j.grip);
      if (fingerL.current) fingerL.current.position.x = fingerX;
      if (fingerR.current) fingerR.current.position.x = -fingerX;
    }

    // A carried item tracks the grasp point.
    if (s.carrying != null && tip.current) {
      tip.current.getWorldPosition(tipWorld.current);
      itemRefs.current[s.carrying]?.position.copy(tipWorld.current);
    }

    // Advance the timeline.
    if (s.t >= 1) {
      s.stepIdx += 1;
      s.from = { ...s.joints };
      s.t = 0;
      s.started = false;
      if (s.stepIdx >= s.steps.length) {
        s.steps = null;
        s.itemIdx += 1;
        if (s.itemIdx > ITEMS.length) {
          // Cycle complete — restock the platform and start over.
          s.itemIdx = 0;
          ITEMS.forEach((item, i) => itemRefs.current[i]?.position.set(...itemStartPos(item)));
        }
      }
    }
  });

  return (
    <>
      <color attach="background" args={['#0f1213']} />
      <fog attach="fog" args={['#0f1213', 7, 13]} />

      <hemisphereLight args={['#aab6c4', '#272e35', 1.5]} />
      <directionalLight
        position={[4, 7, 3]}
        intensity={2.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={3}
        shadow-camera-bottom={-3}
        shadow-bias={-0.0005}
      />
      <directionalLight position={[-5, 4, -3]} intensity={0.8} />

      <BaggerRobot rig={rig} />
      <Groceries itemRefs={itemRefs} />
      <Platform />
      <CameraMast />
      <PaperBag />
      <Ground />

      <OrbitControls
        target={[0, 0.6, 0]}
        enablePan={false}
        minDistance={2.2}
        maxDistance={6.5}
        maxPolarAngle={Math.PI / 2 - 0.06}
        // single-finger touch is left to the browser for page scrolling;
        // an out-of-enum value makes OrbitControls ignore the gesture
        touches={{ ONE: -1 as unknown as TOUCH, TWO: TOUCH.DOLLY_ROTATE }}
      />
    </>
  );
}

function Groceries({ itemRefs }: { itemRefs: RefObject<(Group | null)[]> }) {
  return (
    <>
      {ITEMS.map((item, i) => (
        <group
          key={item.id}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          position={itemStartPos(item)}
          rotation-y={item.yaw}
        >
          <mesh castShadow>
            {item.shape === 'box' && (
              <boxGeometry args={[item.size[0], item.size[1], item.size[2]]} />
            )}
            {item.shape === 'cylinder' && (
              <cylinderGeometry args={[item.size[0], item.size[0], item.size[1], 20]} />
            )}
            {item.shape === 'sphere' && <sphereGeometry args={[item.size[0], 24, 16]} />}
            <meshStandardMaterial color={item.color} roughness={0.55} />
          </mesh>
        </group>
      ))}
    </>
  );
}

function Platform() {
  return (
    <group position={[0.55, 0, 1.05]}>
      <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.85, 0.2, 0.95]} />
        <meshStandardMaterial color="#20262c" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.21, 0]} receiveShadow>
        <boxGeometry args={[0.85, 0.02, 0.95]} />
        <meshStandardMaterial color="#2b333a" roughness={0.6} />
      </mesh>
    </group>
  );
}

/* Camera mast standing on the right end of the T-frame's top bar: pyramid
   foot, tall pole, and two F-shaped booms — the overhead webcam hangs from
   the top boom over the staging platform, the stereo webcam mounts on the
   lower boom angled at it. The yaw aims the booms at the platform centre. */
function CameraMast() {
  const metal = { color: '#39424a', roughness: 0.5, metalness: 0.3 };
  const camBody = { color: '#1c2126', roughness: 0.4, metalness: 0.2 };
  const lens = { color: '#0b0d0f', roughness: 0.2, metalness: 0.1 };
  return (
    <group position={[.5, 0, 0]}>
      {/* pyramid foot */}
      <mesh position={[0, 0.14, 0]} rotation-y={Math.PI / 4} castShadow receiveShadow>
        <coneGeometry args={[0.26, 0.28, 4]} />
        <meshStandardMaterial color="#262d33" roughness={0.6} metalness={0.2} />
      </mesh>
      <group position={[0, 0, 0]} rotation-y={1.5}>
        {/* pole */}
        <mesh position={[0, 1.2, 0]} castShadow>
          <cylinderGeometry args={[0.035, 0.05, 2.0, 16]} />
          <meshStandardMaterial {...metal} />
        </mesh>
        {/* top F boom */}
        <mesh position={[-0.42, 2.15, 0]} castShadow>
          <boxGeometry args={[0.85, 0.05, 0.05]} />
          <meshStandardMaterial {...metal} />
        </mesh>
        {/* lower F boom */}
        <mesh position={[-0.3, 1.66, 0]} castShadow>
          <boxGeometry args={[0.6, 0.05, 0.05]} />
          <meshStandardMaterial {...metal} />
        </mesh>

        {/* overhead webcam — hangs from the end of the top boom, lens down */}
        <group position={[-0.8, 2.125, 0]}>
          <mesh position={[0, -0.07, 0]}>
            <cylinderGeometry args={[0.014, 0.014, 0.14, 8]} />
            <meshStandardMaterial {...metal} />
          </mesh>
          <mesh position={[0, -0.18, 0]} castShadow>
            <boxGeometry args={[0.13, 0.09, 0.13]} />
            <meshStandardMaterial {...camBody} />
          </mesh>
          <mesh position={[0, -0.235, 0]}>
            <cylinderGeometry args={[0.032, 0.032, 0.025, 16]} />
            <meshStandardMaterial {...lens} />
          </mesh>
        </group>

        {/* stereo webcam — on the lower boom, twin lenses pitched at the platform */}
        <group position={[-0.55, 1.62, 0]} rotation-z={0.55}>
          <mesh castShadow>
            <boxGeometry args={[0.06, 0.07, 0.26]} />
            <meshStandardMaterial {...camBody} />
          </mesh>
          {([1, -1] as const).map((side) => (
            <mesh key={side} position={[-0.032, 0, side * 0.07]} rotation-z={Math.PI / 2}>
              <cylinderGeometry args={[0.022, 0.022, 0.02, 16]} />
              <meshStandardMaterial {...lens} />
            </mesh>
          ))}
        </group>
      </group>
    </group>
  );
}

function PaperBag() {
  const t = 0.022;
  const w = 0.52;
  const h = 0.42;
  const paper = { color: '#b08055', roughness: 0.85, metalness: 0 };
  return (
    <group position={[BAG_CENTER[0], 0, BAG_CENTER[1]]}>
      <mesh position={[0, t / 2, 0]} receiveShadow>
        <boxGeometry args={[w, t, w]} />
        <meshStandardMaterial {...paper} />
      </mesh>
      {([1, -1] as const).map((side) => (
        <mesh key={`z${side}`} position={[0, h / 2, side * (w / 2 - t / 2)]} castShadow>
          <boxGeometry args={[w, h, t]} />
          <meshStandardMaterial {...paper} />
        </mesh>
      ))}
      {([1, -1] as const).map((side) => (
        <mesh key={`x${side}`} position={[side * (w / 2 - t / 2), h / 2, 0]} castShadow>
          <boxGeometry args={[t, h, w - 2 * t]} />
          <meshStandardMaterial {...paper} />
        </mesh>
      ))}
    </group>
  );
}

function Ground() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[4.6, 48]} />
        <meshStandardMaterial color="#14181b" roughness={0.95} />
      </mesh>
      <gridHelper args={[6, 24, '#242b31', '#1c2228']} position={[0, 0.002, 0]} />
    </>
  );
}

export default function GroceryBaggerSim() {
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const pausedRef = useRef(false);

  const buttonCls =
    'rounded-md border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur transition-colors duration-200 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none';

  return (
    <div
      className="relative h-[24rem] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0f1213] md:h-[28rem]"
      role="img"
      aria-label="Interactive 3D simulation of the grocery bagging robot picking items off a staging platform and packing them into a paper bag"
    >
      <Canvas key={resetKey} shadows dpr={[1, 1.75]} camera={{ position: [3.1, 2.2, 3.5], fov: 42 }}>
        <Scene pausedRef={pausedRef} />
      </Canvas>
      <div className="absolute top-3 right-3 flex gap-2">
        <button
          type="button"
          className={buttonCls}
          onClick={() => {
            pausedRef.current = !pausedRef.current;
            setPaused(pausedRef.current);
          }}
        >
          {paused ? 'Play' : 'Pause'}
        </button>
        <button type="button" className={buttonCls} onClick={() => setResetKey((k) => k + 1)}>
          Reset
        </button>
      </div>
      <p className="pointer-events-none absolute bottom-3 left-3 text-xs text-gray-500">
        Drag to orbit · Scroll to zoom · Two fingers on touch
      </p>
    </div>
  );
}
