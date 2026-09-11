"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

// Sets initial camera distance so the keyboard's bounding sphere fully fits
// the frustum regardless of the container's aspect ratio (portrait
// containers narrow the effective horizontal FOV — that's what clipped the
// mesh before). Runs once on mount only: once OrbitControls takes over it
// owns the camera's spherical state, and re-fitting on resize would fight it.
export function FitCamera({ radius = 4.3 }: { radius?: number }) {
  const { camera, size } = useThree();
  const didFit = useRef(false);

  useEffect(() => {
    if (didFit.current) return;
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    didFit.current = true;

    const aspect = size.width / size.height;
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * aspect);
    const limitingFov = Math.min(vFov, hFov);
    const distance = (radius / Math.sin(limitingFov / 2)) * 0.98;
    camera.position.set(0, 0.5, distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera]);

  return null;
}
