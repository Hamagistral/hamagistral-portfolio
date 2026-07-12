"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { Keycap } from "./Keycap";
import { KEYS } from "@/lib/data";

const COLS = 6;
const ROWS = 4;
const PITCH = 0.96; // key spacing

export function Keyboard() {
  const group = useRef<THREE.Group>(null);

  // Idle drift + gentle pointer parallax. Positive X-rotation tilts the
  // keycap tops toward the camera (negative would show the underside).
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const targetX = 0.58 - state.pointer.y * 0.08 + Math.sin(t * 0.4) * 0.02;
    const targetY = -0.55 + state.pointer.x * 0.12 + Math.sin(t * 0.25) * 0.04;
    const targetZ = -0.12 + Math.cos(t * 0.3) * 0.015;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetZ, 0.05);
    group.current.position.y = Math.sin(t * 0.6) * 0.12;
  });

  const width = COLS * PITCH;
  const depth = ROWS * PITCH;

  return (
    <group ref={group} rotation={[0.58, -0.55, -0.12]}>
      {/* base plate */}
      <RoundedBox
        args={[width + 0.7, 0.75, depth + 0.7]}
        radius={0.18}
        smoothness={4}
        position={[0, -0.55, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#15181f" roughness={0.55} metalness={0.25} />
      </RoundedBox>

      {KEYS.map((key, i) => {
        const col = i % COLS;
        const row = Math.floor(i / COLS);
        const x = (col - (COLS - 1) / 2) * PITCH;
        const z = (row - (ROWS - 1) / 2) * PITCH;
        return <Keycap key={key.slug} keyData={key} position={[x, 0, z]} />;
      })}
    </group>
  );
}
