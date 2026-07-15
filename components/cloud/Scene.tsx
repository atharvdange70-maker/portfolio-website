"use client";

import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      {/* Lights */}
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      {/* Main Cloud */}
      <mesh position={[2.5, 0, -2]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.25}
        />
      </mesh>
    </Canvas>
  );
}