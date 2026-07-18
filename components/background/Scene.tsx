"use client";

import Lights from "./Lights";
import Camera from "./Camera";
import Stars from "./Stars";
import Particles from "./Particles";

export default function Scene() {
  return (
    <>
      <Camera />

      <Lights />
      <Stars />
      <Particles />

      {/* Temporary object */}
      <mesh rotation={[0.4, 0.5, 0]}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#22d3ee"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </>
  );
}