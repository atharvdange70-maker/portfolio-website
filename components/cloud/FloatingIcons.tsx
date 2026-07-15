"use client";

import { Float } from "@react-three/drei";

const positions = [
  [-4, 2, -2],
  [4, 2, -1],
  [-3, -2, 0],
  [3, -2, -2],
  [0, 3, -3],
  [0, -3, -1],
];

export default function FloatingIcons() {
  return (
    <>
      {positions.map((position, index) => (
        <Float
          key={index}
          speed={2}
          rotationIntensity={2}
          floatIntensity={2}
        >
          <mesh position={position as [number, number, number]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />

            <meshStandardMaterial
              color="#22d3ee"
              emissive="#06b6d4"
              emissiveIntensity={2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}