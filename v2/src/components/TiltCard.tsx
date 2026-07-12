"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

// Pointer-driven 3D tilt with a glass-blur surface — used for the
// certification cards.
export function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0.5);
  const mvY = useMotionValue(0.5);
  const springX = useSpring(mvX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [10, -10]);
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mvX.set((e.clientX - rect.left) / rect.width);
    mvY.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mvX.set(0.5);
    mvY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      whileHover={{ scale: 1.03 }}
      className={`relative overflow-hidden rounded-2xl border border-line/70 bg-surface/40 backdrop-blur-xl transition-colors hover:border-accent/50 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(180px circle at ${glowX} ${glowY}, var(--accent-soft), transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
