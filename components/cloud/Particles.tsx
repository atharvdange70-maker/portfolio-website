"use client";

import { Float } from "@react-three/drei";

export default function Particles() {
  const particles = Array.from({ length: 50 });

  return (
    <>
      {particles.map((_, i) => (
        <Float
          key={i}
          speed={1}
          rotationIntensity={1}
          floatIntensity={1}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 8,
            ]}
          >
            <sphereGeometry args={[0.03, 12, 12]} />

            <meshBasicMaterial
              color="#67e8f9"
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}