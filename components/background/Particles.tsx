"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
  const points = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(1500);

    for (let i = 0; i < 3000; i++) {
      positions[i] = (Math.random() - 0.5) * 40;
    }

    return positions;
  }, []);

 useFrame((state) => {
  if (!points.current) return;

  const t = state.clock.getElapsedTime();

  points.current.rotation.y = t * 0.02;
  points.current.rotation.x = t * 0.01;
});
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#38bdf8"
        size={0.03}
        sizeAttenuation
      />
    </points>
  );
}