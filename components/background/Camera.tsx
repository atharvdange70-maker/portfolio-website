"use client";

import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";

export default function Camera() {
  const { camera } = useThree();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    camera.position.x = Math.sin(t * 0.15) * 0.4;
    camera.position.y = Math.cos(t * 0.2) * 0.3;

    camera.lookAt(0, 0, 0);
  });

  return null;
}