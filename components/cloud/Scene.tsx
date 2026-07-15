"use client";

import { Canvas } from "@react-three/fiber";
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

    <>
  <CloudNode
    position={[1.5, 1.2, -2]}
    color="#00d4ff"
    label="EC2"
  />

  <CloudNode
    position={[3.2, 1.0, -2]}
    color="#22c55e"
    label="S3"
  />

  <CloudNode
    position={[1.2, -0.5, -2]}
    color="#f59e0b"
    label="Docker"
  />

  <CloudNode
    position={[3.4, -0.4, -2]}
    color="#8b5cf6"
    label="Kubernetes"
  />

  <CloudNode
    position={[2.2, 0.2, -2]}
    color="#ef4444"
    label="Jenkins"
  />

  <CloudNode
    position={[4.5, 0.3, -2]}
    color="#06b6d4"
    label="Terraform"
  />
</>
    </Canvas>
  );
}