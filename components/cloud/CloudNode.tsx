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

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.15;

    ref.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
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