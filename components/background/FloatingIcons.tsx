
"use client";

import { Float } from "@react-three/drei";

const positions = [
  [-3, 2, 0],
  [3, 1, -1],
  [-2, -2, 1],
  [2, -2, 0],
  [0, 3, -2],
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
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#0891b2"
              emissiveIntensity={2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}