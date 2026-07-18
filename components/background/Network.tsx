"use client";

import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 9;

export default function Network() {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return [
      new THREE.Vector3(-3.2, 2.2, -0.5),
      new THREE.Vector3(-1.2, 1.3, 0.4),
      new THREE.Vector3(1.8, 2.1, -0.4),
      new THREE.Vector3(3.4, 0.6, 0.5),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-2.4, -1.8, 0.3),
      new THREE.Vector3(2.2, -1.7, -0.3),
      new THREE.Vector3(-0.8, -3, 0.4),
      new THREE.Vector3(2.9, -2.8, -0.5),
    ];
  }, []);

  const links = useMemo(() => {
    const temp: [number, number][] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 3.6) {
          temp.push([i, j]);
        }
      }
    }

    return temp;
  }, [nodes]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y = t * 0.08;
      group.current.rotation.x = Math.sin(t * 0.15) * 0.05;
    }

    group.current?.children.forEach((child, i) => {
      if (child.type === "Mesh") {
        child.position.y =
          nodes[i].y + Math.sin(t * 1.4 + i * 0.6) * 0.08;

        child.position.x =
          nodes[i].x + Math.cos(t * 1.1 + i) * 0.05;

        child.position.z =
          nodes[i].z + Math.sin(t * 0.9 + i) * 0.05;

        const s = 1 + Math.sin(t * 2 + i) * 0.12;
        child.scale.setScalar(s);
      }
    });
  });

  return (
    <group ref={group}>
      {links.map(([a, b], index) => (
        <Line
          key={index}
          points={[nodes[a], nodes[b]]}
          color="#38bdf8"
          lineWidth={1.8}
          transparent
          opacity={0.55}
        />
      ))}

      {nodes.map((node, index) => (
        <mesh key={index} position={node}>
          <sphereGeometry
            args={[
              index === 4
                ? 0.16
                : index === 0 || index === 3
                ? 0.12
                : 0.09,
              32,
              32,
            ]}
          />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={2.5}
            roughness={0.15}
            metalness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}