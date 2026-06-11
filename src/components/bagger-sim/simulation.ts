import { MathUtils } from 'three';

/* ── Arm geometry ─────────────────────────────────────────────────────────
   SCARA-like RRPR manipulator, matching the physical prototype:
   base yaw (R) → elbow yaw (R) → vertical prismatic rod (P) → wrist yaw (R).
   All dimensions are in scene metres. */
export const L1 = 0.9; // link 1 length, base joint → elbow joint
export const L2 = 0.75; // link 2 length, elbow joint → prismatic carriage
export const LINK_Y = 1.3; // world height of the link-1 centreline
export const LIFT_PLANE_Y = LINK_Y - 0.11; // link-2 / carriage centreline
export const TIP_LOCAL_Y = -0.02; // grasp point offset inside the wrist group
export const HOVER_Y = 0.95; // gripper travel height between targets
export const GRIP_OPEN_X = 0.17; // finger offset from centre when fully open

/* ── World layout ───────────────────────────────────────────────────── */
export const PLATFORM_TOP_Y = 0.22;
export const BAG_CENTER: readonly [number, number] = [1.25, 1.25];
export const BAG_FLOOR_Y = 0.035;

/* ── Joints ─────────────────────────────────────────────────────────────
   q1/q2 are yaw angles in radians, lift is the grasp-point world height,
   grip is 0 (open) → 1 (closed). The wrist angle is derived (-q1 - q2) so
   carried items keep a fixed world orientation. */
export type JointState = { q1: number; q2: number; lift: number; grip: number };

/* Home yaw parks the arm front-left, so transits to the platform and bag
   (both in the front-right quadrant) never sweep link 1 across the camera
   mast standing mid-bar at (0.5, 0). */
export const HOME_JOINTS: JointState = { q1: -2.8, q2: 0.55, lift: HOVER_Y, grip: 0 };

/* ── Groceries ──────────────────────────────────────────────────────── */
export type GroceryShape = 'box' | 'cylinder' | 'sphere';

export type GroceryItem = {
  id: string;
  shape: GroceryShape;
  /** box: [w, h, d] · cylinder: [radius, h] · sphere: [radius] */
  size: number[];
  color: string;
  /** initial yaw on the staging platform, purely cosmetic */
  yaw: number;
  /** XZ position on the staging platform */
  start: [number, number];
  /** XZ offset from the bag centre once packed */
  bagOffset: [number, number];
};

export const ITEMS: GroceryItem[] = [
  {
    id: 'cereal',
    shape: 'box',
    size: [0.16, 0.34, 0.1],
    color: '#c2703f',
    yaw: 0.25,
    start: [0.37, 0.87],
    bagOffset: [-0.12, 0.12],
  },
  {
    id: 'milk',
    shape: 'box',
    size: [0.13, 0.26, 0.13],
    color: '#dfe5e8',
    yaw: -0.15,
    start: [0.73, 0.91],
    bagOffset: [0.12, 0.12],
  },
  {
    id: 'soup-can',
    shape: 'cylinder',
    size: [0.07, 0.16],
    color: '#a63a47',
    yaw: 0,
    start: [0.4, 1.17],
    bagOffset: [-0.12, -0.12],
  },
  {
    id: 'apple',
    shape: 'sphere',
    size: [0.075],
    color: '#7da854',
    yaw: 0,
    start: [0.75, 1.23],
    bagOffset: [0.12, -0.12],
  },
];

export function itemHeight(item: GroceryItem): number {
  if (item.shape === 'box') return item.size[1];
  if (item.shape === 'cylinder') return item.size[1];
  return item.size[0] * 2;
}

/** Finger offset from centre when closed around this item. */
export function gripClosedX(item: GroceryItem): number {
  const halfWidth = item.shape === 'box' ? item.size[0] / 2 : item.size[0];
  return halfWidth + 0.008;
}

export function itemStartPos(item: GroceryItem): [number, number, number] {
  return [item.start[0], PLATFORM_TOP_Y + itemHeight(item) / 2, item.start[1]];
}

export function itemBagPos(item: GroceryItem): [number, number, number] {
  return [
    BAG_CENTER[0] + item.bagOffset[0],
    BAG_FLOOR_Y + itemHeight(item) / 2,
    BAG_CENTER[1] + item.bagOffset[1],
  ];
}

/* ── Inverse kinematics ─────────────────────────────────────────────────
   Standard 2R planar IK in the ground (XZ) plane. Joint groups rotate
   around +Y, which maps +X toward −Z, so the planar frame is (x, −z). */
export function solveIK(x: number, z: number): { q1: number; q2: number } {
  const u = x;
  const v = -z;
  const d = MathUtils.clamp(Math.hypot(u, v), 0.2, L1 + L2 - 0.02);
  const cosQ2 = MathUtils.clamp((d * d - L1 * L1 - L2 * L2) / (2 * L1 * L2), -1, 1);
  const q2 = Math.acos(cosQ2);
  const q1 = Math.atan2(v, u) - Math.atan2(L2 * Math.sin(q2), L1 + L2 * Math.cos(q2));
  return { q1, q2 };
}

export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/* ── Motion timeline ────────────────────────────────────────────────────
   Each step eases the joints from their values at step start toward
   `target` over `dur` seconds. Joints omitted from `target` hold still.
   `onStart` fires once when the step begins (used to attach/release the
   carried item). New steps can be appended to extend the choreography. */
export type Step = { dur: number; target: Partial<JointState>; onStart?: () => void };

export function buildItemSteps(
  item: GroceryItem,
  onLift: () => void,
  onRelease: () => void
): Step[] {
  const overItem = solveIK(item.start[0], item.start[1]);
  const bagX = BAG_CENTER[0] + item.bagOffset[0];
  const bagZ = BAG_CENTER[1] + item.bagOffset[1];
  const overBag = solveIK(bagX, bagZ);
  const grabY = itemStartPos(item)[1];
  const dropY = itemBagPos(item)[1] + 0.02;

  return [
    { dur: 1.1, target: { ...overItem, lift: HOVER_Y, grip: 0 } },
    { dur: 0.6, target: { lift: grabY } },
    { dur: 0.35, target: { grip: 1 } },
    { dur: 0.55, target: { lift: HOVER_Y }, onStart: onLift },
    { dur: 1.25, target: { ...overBag } },
    { dur: 0.65, target: { lift: dropY } },
    { dur: 0.35, target: { grip: 0 }, onStart: onRelease },
    { dur: 0.55, target: { lift: HOVER_Y } },
  ];
}

/** Return to the home pose and dwell before the cycle restarts. */
export function buildHomeSteps(): Step[] {
  return [
    { dur: 1.2, target: { ...HOME_JOINTS } },
    { dur: 1.6, target: {} },
  ];
}
