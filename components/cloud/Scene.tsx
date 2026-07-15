"use client";
import FloatingIcons from "./FloatingIcons";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Lights from "./Lights";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 60,
      }}
    >
      {/* Background Color */}
      <color attach="background" args={["#020617"]} />

      {/* Fog */}
      <fog attach="fog" args={["#020617", 8, 20]} />

      {/* Camera */}
      <Camera />

      {/* Lights */}
      <Lights />
      <FloatingIcons />
    </Canvas>
  );
}