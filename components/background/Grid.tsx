"use client";

import { Grid } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function InfiniteGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!gridRef.current) return;

    const t = state.clock.elapsedTime;

    // Very subtle floating animation
    gridRef.current.position.y = -3.6 + Math.sin(t * 0.2) * 0.03;

    // Gentle rotation for a more dynamic scene
    gridRef.current.rotation.z = Math.sin(t * 0.08) * 0.015;
  });

  return (
    <group ref={gridRef}>
      <Grid
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[120, 120]}
        cellSize={0.6}
        cellThickness={0.25}
        cellColor="#164e63"
        sectionSize={8}
        sectionThickness={1.8}
        sectionColor="#22d3ee"
        fadeDistance={120}
        fadeStrength={1.6}
        infiniteGrid
      />
    </group>
  );
}