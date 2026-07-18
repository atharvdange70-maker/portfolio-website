"use client";

import { Stars } from "@react-three/drei";

export default function BackgroundStars() {
  return (
    <Stars
      radius={150}
      depth={60}
      count={6000}
      factor={6}
      saturation={0}
      fade
      speed={1}
    />
  );
}