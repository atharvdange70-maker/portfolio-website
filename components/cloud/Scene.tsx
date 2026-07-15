"use client";

import { Canvas } from "@react-three/fiber";
import CloudNode from "./CloudNode";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <CloudNode />
    </Canvas>
  );
}