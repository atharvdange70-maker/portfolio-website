"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type CloudNodeProps = {
  position: [number, number, number];
  color?: string;
  scale?: number;
};

export default function CloudNode({
  position,
  color = "#22d3ee",
  scale = 1,
}: CloudNodeProps) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    group.current.position.y =
      position[1] + Math.sin(t * 1.8 + position[0]) * 0.18;

    group.current.rotation.y += 0.003;

    if (core.current) {
      core.current.rotation.x += 0.01;
      core.current.rotation.y += 0.015;

      const pulse = 1 + Math.sin(t * 3) * 0.08;
      core.current.scale.setScalar(pulse);
    }

    if (ring1.current) {
      ring1.current.rotation.x += 0.015;
      ring1.current.rotation.y += 0.01;
    }

    if (ring2.current) {
      ring2.current.rotation.z -= 0.018;
      ring2.current.rotation.x += 0.008;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {/* Energy Core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.32, 2]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={4}
          metalness={1}
          roughness={0.05}
          clearcoat={1}
          transmission={0.35}
        />
      </mesh>

      {/* Outer Ring */}
      <mesh ref={ring1}>
        <torusGeometry args={[0.55, 0.02, 24, 120]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={5}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Tilted Ring */}
      <mesh ref={ring2} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
        <torusGeometry args={[0.72, 0.015, 20, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={4}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Floating Satellites */}
      {[...Array(4)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 0.95;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 0.15,
              Math.sin(angle) * radius,
            ]}
          >
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#67e8f9"
              emissiveIntensity={8}
            />
          </mesh>
        );
      })}

      {/* Inner Glow */}
      <pointLight
        color={color}
        intensity={12}
        distance={4}
      />

      {/* Ambient Glow */}
      <pointLight
        color="#67e8f9"
        intensity={6}
        distance={6}
      />
    </group>
  );
}