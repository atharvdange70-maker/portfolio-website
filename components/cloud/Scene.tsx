"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import CloudNode from "./CloudNode";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />
<Stars
  radius={80}
  depth={50}
  count={4000}
  factor={4}
  saturation={0}
  fade
  speed={1}
/>
<fog attach="fog" args={["#020617", 8, 20]} />
<>
  <CloudNode
    position={[0.5, 2.2, -2]}
    color="#00d4ff"
    label="EC2"
  />

  <CloudNode
    position={[3.6, 2.0, -2]}
    color="#22c55e"
    label="S3"
  />

  <CloudNode
    position={[-0.2, 0.5, -2]}
    color="#f59e0b"
    label="Docker"
  />

  <CloudNode
    position={[4.2, 0.4, -2]}
    color="#8b5cf6"
    label="Kubernetes"
  />

  <CloudNode
    position={[0.8, -1.2, -2]}
    color="#ef4444"
    label="Jenkins"
  />

  <CloudNode
    position={[3.8, -1.3, -2]}
    color="#06b6d4"
    label="Terraform"
  />
</> 

    </Canvas>
  );
}