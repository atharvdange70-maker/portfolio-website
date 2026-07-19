"use client";

import { memo, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type CloudNodeProps = {
  position: [number, number, number];
  color?: string;
  scale?: number;
};

function CloudNode({
  position,
  color = "#22d3ee",
  scale = 1,
}: CloudNodeProps) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  const satellites = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => {
      const angle = (i / 4) * Math.PI * 2;
      const radius = 0.95;

      return [
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.15,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    group.current.position.y =
      position[1] + Math.sin(t * 1.8 + position[0]) * 0.18;

    group.current.rotation.y = t * 0.3;

    if (core.current) {
      core.current.rotation.x = t * 0.6;
      core.current.rotation.y = t * 0.9;

      const pulse = 1 + Math.sin(t * 3) * 0.08;
      core.current.scale.setScalar(pulse);
    }

    if (ring1.current) {
      ring1.current.rotation.x = t * 0.9;
      ring1.current.rotation.y = t * 0.6;
    }

    if (ring2.current) {
      ring2.current.rotation.z = -t;
      ring2.current.rotation.x = t * 0.5;
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
        <torusGeometry args={[0.55, 0.02, 16, 64]} />
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
        <torusGeometry args={[0.72, 0.015, 16, 64]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={4}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Floating Satellites */}
      {satellites.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#67e8f9"
            emissiveIntensity={8}
          />
        </mesh>
      ))}

      {/* Main Glow */}
      <pointLight
        color={color}
        intensity={10}
        distance={4}
      />
    </group>
  );
}

export default memo(CloudNode);