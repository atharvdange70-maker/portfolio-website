"use client";

import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8] }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <ambientLight intensity={2} />

      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="cyan" />
      </mesh>
    </Canvas>
  );
}