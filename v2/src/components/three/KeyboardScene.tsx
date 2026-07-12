"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Keyboard } from "./Keyboard";
import { FitCamera } from "./FitCamera";

export default function KeyboardScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.6, 11.5], fov: 30 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      shadows
      style={{ background: "transparent", overflow: "visible" }}
    >
      <FitCamera radius={4.3} />

      {/* soft studio: fill + key + warm rim */}
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[4, 8, 6]}
        intensity={1.6}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-6, 3, -4]} intensity={12} color="#ff7a45" />
      <pointLight position={[6, -2, 4]} intensity={6} color="#6ea8ff" />

      <Suspense fallback={null}>
        <Keyboard />
        <ContactShadows
          position={[0, -3.2, 0]}
          opacity={0.45}
          scale={16}
          blur={2.6}
          far={4.5}
        />
      </Suspense>

      {/* Drag to rotate — no zoom/pan so it can't get lost off-frame. */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        target={[0, 0, 0]}
        rotateSpeed={0.5}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}
