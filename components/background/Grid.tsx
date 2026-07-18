"use client";

import { Grid } from "@react-three/drei";

export default function InfiniteGrid() {
  return (
    <Grid
      position={[0, -3, 0]}
      args={[40, 40]}
      cellSize={1}
      cellThickness={0.4}
      cellColor="#0ea5e9"
      sectionSize={5}
      sectionThickness={1.2}
      sectionColor="#22d3ee"
      fadeDistance={60}
      fadeStrength={1}
      infiniteGrid
    />
  );
}