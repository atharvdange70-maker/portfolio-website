"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type CloudNodeProps = {
  position: [number, number, number];
  color?: string;
  scale?: number;
};

export default function CloudNode({
  position,
  color = "#22d3ee",
  scale = 1,
}: CloudNodeProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;

    const t = clock.getElapsedTime();

    mesh.current.position.y =
      position[1] + Math.sin(t + position[0]) * 0.15;

    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.x += 0.001;
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={scale}
    >
      <icosahedronGeometry args={[0.35, 3]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        roughness={0.2}
        metalness={0.7}
      />
    </mesh>
  );
}