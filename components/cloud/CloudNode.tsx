"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CloudNode() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.2;

    ref.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={ref} position={[2.5, 0, -2]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />

        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={1}
        />
      </mesh>

      <Text
        position={[2.5, -0.8, -2]}
        fontSize={0.25}
        color="white"
      >
        EC2
      </Text>
    </>
  );
}