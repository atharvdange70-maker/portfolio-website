"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen">
     <Canvas
  camera={{
    position: [0, 0, 8],
    fov: 60,
  }}
  dpr={1}
  gl={{
    antialias: false,
    powerPreference: "high-performance",
  }}
>
      <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-slate-950/40" />
    </div>
  );
}