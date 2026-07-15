"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  position: [number, number, number];
  color: string;
  label: string;
};

export default function CloudNode({
  position,
  color,
  label,
}: Props) {
  const ref = useRef<THREE.Mesh>(null!);
const ringRef = useRef<THREE.Mesh>(null!);
 useFrame((state) => {
  if (!ref.current) return;

  // Floating animation
  ref.current.position.y =
    position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.15;

  // Sphere rotation
  ref.current.rotation.y += 0.01;

  // Ring rotation
  if (ringRef.current) {
    ringRef.current.rotation.z += 0.02;
  }
});

  return (
    <>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.35, 32, 32]} />
       <meshPhysicalMaterial
  color={color}
  emissive={color}
  emissiveIntensity={2}
  roughness={0}
  metalness={1}
  clearcoat={1}
  clearcoatRoughness={0}
/>
      <mesh
  ref={ringRef}
  rotation={[-Math.PI / 2, 0, 0]}
  position={[
    position[0],
    position[1] - 0.45,
    position[2],
  ]}
> </mesh>
  <ringGeometry args={[0.45, 0.5, 64]} />

  <meshBasicMaterial color={color} />
</mesh>

      <Text
        position={[position[0], position[1] - 0.55, position[2]]}
        fontSize={0.18}
        color="white"
        anchorX="center"
      >
        {label}
      </Text>
    </>
  );
}