"use client";

import { useEffect, useState } from "react";
import * as THREE from "three";

const cache = new Map<string, Promise<THREE.CanvasTexture>>();

// Rasterize a monochrome simple-icons SVG onto a transparent canvas texture.
function loadIconTexture(slug: string, fill: string): Promise<THREE.CanvasTexture> {
  const cacheKey = `${slug}:${fill}`;
  const existing = cache.get(cacheKey);
  if (existing) return existing;

  const promise = fetch(`/icons/${slug}.svg`)
    .then((res) => res.text())
    .then(
      (svg) =>
        new Promise<THREE.CanvasTexture>((resolve, reject) => {
          const sized = svg.replace(
            "<svg ",
            `<svg width="512" height="512" fill="${fill}" `
          );
          const url = URL.createObjectURL(
            new Blob([sized], { type: "image/svg+xml" })
          );
          const img = new Image();
          img.onload = () => {
            URL.revokeObjectURL(url);
            const canvas = document.createElement("canvas");
            canvas.width = canvas.height = 256;
            const ctx = canvas.getContext("2d")!;
            // icon occupies the middle ~62% of the cap
            const pad = 48;
            ctx.drawImage(img, pad, pad, 256 - pad * 2, 256 - pad * 2);
            const texture = new THREE.CanvasTexture(canvas);
            texture.anisotropy = 8;
            texture.colorSpace = THREE.SRGBColorSpace;
            resolve(texture);
          };
          img.onerror = reject;
          img.src = url;
        })
    );

  cache.set(cacheKey, promise);
  return promise;
}

export function useIconTexture(slug: string, fill: string) {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let alive = true;
    loadIconTexture(slug, fill).then((t) => {
      if (alive) setTexture(t);
    });
    return () => {
      alive = false;
    };
  }, [slug, fill]);

  return texture;
}
