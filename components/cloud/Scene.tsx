"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Cube() {
  const cubeRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00e5ff" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
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

      <Cube />
    </Canvas>
  );
}