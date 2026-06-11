import type { RefObject } from 'react';
import type { Group, Mesh } from 'three';
import { L1, L2, LINK_Y, TIP_LOCAL_Y } from './simulation';

/* Joint hierarchy exposed as refs so the animation loop can drive the rig
   directly: baseYaw → elbow → (carriage) → lift → wrist → fingers/tip. */
export type RobotRig = {
  baseYaw: RefObject<Group | null>;
  elbow: RefObject<Group | null>;
  lift: RefObject<Group | null>;
  wrist: RefObject<Group | null>;
  fingerL: RefObject<Mesh | null>;
  fingerR: RefObject<Mesh | null>;
  /** grasp point — carried items track this object's world position */
  tip: RefObject<Group | null>;
};

const BODY = { color: '#39424a', roughness: 0.5, metalness: 0.3 };
const LINK = { color: '#48525b', roughness: 0.5, metalness: 0.3 };
const JOINT = { color: '#6366f1', roughness: 0.35, metalness: 0.25 };
const STEEL = { color: '#8a939c', roughness: 0.35, metalness: 0.5 };

export function BaggerRobot({ rig }: { rig: RobotRig }) {
  return (
    <group>
      {/* T-shaped base frame — long top bar running across the workspace
          (bag side → past the platform side) with the camera mast standing
          on its right end, and a stem coming forward for stability */}
      <mesh position={[0, 0.035, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.45, 0.07, 0.24]} />
        <meshStandardMaterial color="#262d33" roughness={0.6} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.035, 0.535]} castShadow receiveShadow>
        <boxGeometry args={[0.24, 0.07, 0.83]} />
        <meshStandardMaterial color="#262d33" roughness={0.6} metalness={0.2} />
      </mesh>
      {/* column foot */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.22, 0.14, 28]} />
        <meshStandardMaterial color="#262d33" roughness={0.6} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.66, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.13, 1.2, 24]} />
        <meshStandardMaterial {...BODY} />
      </mesh>

      {/* R1 — base yaw */}
      <group ref={rig.baseYaw} position={[0, LINK_Y, 0]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.18, 24]} />
          <meshStandardMaterial {...JOINT} />
        </mesh>
        <mesh position={[L1 / 2, 0, 0]} castShadow>
          <boxGeometry args={[L1 + 0.12, 0.1, 0.16]} />
          <meshStandardMaterial {...LINK} />
        </mesh>

        {/* R2 — elbow yaw */}
        <group ref={rig.elbow} position={[L1, -0.11, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.11, 0.11, 0.16, 24]} />
            <meshStandardMaterial {...JOINT} />
          </mesh>
          <mesh position={[L2 / 2, 0, 0]} castShadow>
            <boxGeometry args={[L2 + 0.1, 0.085, 0.13]} />
            <meshStandardMaterial {...LINK} />
          </mesh>

          {/* carriage at the end of link 2 */}
          <group position={[L2, 0, 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.18, 0.22, 0.18]} />
              <meshStandardMaterial {...BODY} />
            </mesh>

            {/* P — vertical prismatic axis (position.y driven per frame) */}
            <group ref={rig.lift}>
              <mesh position={[0, 0.65, 0]} castShadow>
                <cylinderGeometry args={[0.04, 0.04, 1.3, 16]} />
                <meshStandardMaterial {...STEEL} />
              </mesh>

              {/* R3 — wrist yaw, keeps the gripper world-aligned */}
              <group ref={rig.wrist}>
                <mesh position={[0, 0.16, 0]} castShadow>
                  <boxGeometry args={[0.34, 0.08, 0.14]} />
                  <meshStandardMaterial color="#30383f" roughness={0.5} metalness={0.3} />
                </mesh>
                <mesh ref={rig.fingerL} position={[0.17, 0.02, 0]} castShadow>
                  <boxGeometry args={[0.03, 0.24, 0.09]} />
                  <meshStandardMaterial color="#aeb6bd" roughness={0.4} metalness={0.4} />
                </mesh>
                <mesh ref={rig.fingerR} position={[-0.17, 0.02, 0]} castShadow>
                  <boxGeometry args={[0.03, 0.24, 0.09]} />
                  <meshStandardMaterial color="#aeb6bd" roughness={0.4} metalness={0.4} />
                </mesh>
                <group ref={rig.tip} position={[0, TIP_LOCAL_Y, 0]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
