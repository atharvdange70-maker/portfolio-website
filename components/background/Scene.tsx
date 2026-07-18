"use client";

import Camera from "./Camera";
import Lights from "./Lights";
import Stars from "./Stars";
import Particles from "./Particles";
import CloudNode from "./CloudNode";
import Network from "./Network";
import InfiniteGrid from "./Grid";

export default function Scene() {
  return (
    <>
      <Camera />

      <Lights />
      <Stars />

      {/* Move everything to the right */}
      <group position={[3, 0, 0]}>
        <Particles />

        <CloudNode
          position={[0, 0, 0]}
          scale={1.8}
          color="#22d3ee"
        />

        <CloudNode
          position={[3.2, 1.5, -2]}
          scale={1}
          color="#67e8f9"
        />

        <CloudNode
          position={[-3.2, 1.2, -2.5]}
          scale={0.9}
          color="#06b6d4"
        />

        <CloudNode
          position={[2.8, -2.2, -3]}
          scale={0.75}
          color="#3b82f6"
        />

        <CloudNode
          position={[-2.8, -2, -3.2]}
          scale={0.75}
          color="#0ea5e9"
        />

        <CloudNode
          position={[0, 3.2, -4]}
          scale={0.65}
          color="#a5f3fc"
        />

        <CloudNode
          position={[0, -3, -4]}
          scale={0.65}
          color="#38bdf8"
        />

        <CloudNode
          position={[4.5, 0.5, -5]}
          scale={0.5}
          color="#22d3ee"
        />

        <CloudNode
          position={[-4.5, -0.5, -5]}
          scale={0.5}
          color="#67e8f9"
        />

        <Network />
        <InfiniteGrid />
      </group>
    </>
  );
}