"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import * as THREE from "three";

export default function EarthScene() {
  const earthRef = useRef<THREE.Mesh>(null!);

  const texture = useLoader(
    TextureLoader,
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
  );

  useFrame(() => {
    earthRef.current.rotation.y += 0.0015;
  });

  return (
    <mesh ref={earthRef} position={[2.5, 0, -2]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}