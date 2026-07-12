"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { KEYS } from "@/lib/data";

// Static fallback for mobile / reduced-motion / while the canvas loads.
function StaticKeys() {
  return (
    <div className="grid grid-cols-6 gap-2 max-w-sm mx-auto rotate-[-4deg]">
      {KEYS.map((key) => (
        <div
          key={key.slug}
          title={key.label}
          className="aspect-square rounded-xl flex items-center justify-center shadow-lg shadow-black/30"
          style={{ backgroundColor: key.color }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/icons/${key.slug}.svg`}
            alt={key.label}
            className="w-1/2 h-1/2 opacity-95 invert"
          />
        </div>
      ))}
    </div>
  );
}

const KeyboardScene = dynamic(() => import("./three/KeyboardScene"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <StaticKeys />
    </div>
  ),
});

type Props = {
  className?: string;
};

export default function KeyboardHero({
  className = "h-[340px] sm:h-[400px] md:h-[460px] w-full",
}: Props) {
  const [enable3d, setEnable3d] = useState<boolean | null>(null);
  const [inView, setInView] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const small = window.matchMedia("(max-width: 767px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnable3d(!small && !reduced);
  }, []);

  // Only mount the WebGL canvas once this instance scrolls near the viewport
  // — cheap when there's more than one keyboard on the page.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={className} aria-label="3D tech-stack keyboard">
      {enable3d === null ? null : enable3d && inView ? (
        <KeyboardScene />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <StaticKeys />
        </div>
      )}
    </div>
  );
}
