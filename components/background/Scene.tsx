"use client";

import Lights from "./Lights";
import Camera from "./Camera";
import Stars from "./Stars";
import Particles from "./Particles";
import CloudNode from "./CloudNode";

export default function Scene() {
  return (
    <>
      <Camera />

      <Lights />
      <Stars />
      <Particles />
      <CloudNode position={[0, 0, 0]} /> 

      <CloudNode
        position={[0, 0, 0]}
        scale={1.6}
      />

      <CloudNode
        position={[2.5, 1.2, -1]}
        scale={0.8}
      />

      <CloudNode
        position={[-2.5, -0.5, -1]}
        scale={0.7}
      />

      <CloudNode
        position={[1.5, -2, -2]}
        scale={0.5}
      />

      <CloudNode
        position={[-1.8, 2, -1]}
        scale={0.6}
      />
    </>
  );
}
     