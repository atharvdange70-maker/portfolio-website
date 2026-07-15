"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function DataPackets() {
  const packet = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = (Math.sin(state.clock.elapsedTime) + 1) / 2;

    packet.current.position.x = 0.5 + t * 3;
    packet.current.position.y = 2.2 + t * (-1.7);
    packet.current.position.z = -2;
  });

  return (
    <mesh ref={packet}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#00ffff" />
    </mesh>
  );
}