"use client";

import { Stars } from "@react-three/drei";

export default function BackgroundStars() {
  return (
    <Stars
  radius={100}
  depth={40}
  count={1000}
  factor={4}
  saturation={0}
  fade
  speed={0.4}
/>
  );
}