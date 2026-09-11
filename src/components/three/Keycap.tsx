"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Html } from "@react-three/drei";
import * as THREE from "three";
import { useIconTexture } from "./useIconTexture";
import type { Key } from "@/lib/data";

const ACCENT = "#ff7a45";

// Perceived luminance — light caps get a dark icon for contrast.
function isLight(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62;
}

type Props = {
  keyData: Key;
  position: [number, number, number];
};

export function Keycap({ keyData, position }: Props) {
  const group = useRef<THREE.Group>(null);
  const material = useRef<THREE.MeshStandardMaterial>(null);
  const [hovered, setHovered] = useState(false);
  const iconFill = isLight(keyData.color) ? "#16181d" : "#ffffff";
  const texture = useIconTexture(keyData.slug, iconFill);

  useFrame((_, delta) => {
    if (!group.current || !material.current) return;
    const t = 1 - Math.pow(0.001, delta); // frame-rate independent lerp
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      position[1] + (hovered ? -0.16 : 0),
      t
    );
    material.current.emissiveIntensity = THREE.MathUtils.lerp(
      material.current.emissiveIntensity,
      hovered ? 0.55 : 0,
      t
    );
  });

  return (
    <group
      ref={group}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "auto";
      }}
    >
      <RoundedBox args={[0.92, 0.55, 0.92]} radius={0.1} smoothness={4} castShadow>
        <meshStandardMaterial
          ref={material}
          color={keyData.color}
          roughness={0.38}
          metalness={0.08}
          emissive={ACCENT}
          emissiveIntensity={0}
        />
      </RoundedBox>
      {texture && (
        <mesh position={[0, 0.283, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.8, 0.8]} />
          <meshStandardMaterial
            map={texture}
            transparent
            roughness={0.5}
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </mesh>
      )}
      {hovered && (
        <Html
          center
          position={[0, 0.85, 0]}
          zIndexRange={[1000, 0]}
          style={{ pointerEvents: "none", whiteSpace: "nowrap" }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontFamily: "var(--font-inter), sans-serif",
              letterSpacing: "0.04em",
              padding: "5px 12px",
              borderRadius: "8px",
              background: "rgba(10,14,23,0.92)",
              border: "1px solid rgba(255,122,69,0.55)",
              color: "#e8eaf0",
              backdropFilter: "blur(4px)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            }}
          >
            {keyData.label}
          </span>
        </Html>
      )}
    </group>
  );
}
