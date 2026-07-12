"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import EarthScene from "./EarthScene";

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1} />

        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={5}
          saturation={0}
          fade
          speed={1}
        />

        <EarthScene />
      </Canvas>
    </div>
  );
}