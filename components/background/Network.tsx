"use client";

import { Line } from "@react-three/drei";

const nodes: [number, number, number][] = [
  [-2, 1.5, 0],
  [2, 1, 0],
  [0, 0, 0],
  [-1.5, -1.5, 0],
  [2, -1.2, 0],
];

const links = [
  [0, 2],
  [1, 2],
  [2, 3],
  [2, 4],
  [3, 4],
];

export default function Network() {
  return (
    <>
      {links.map(([a, b], index) => (
        <Line
          key={index}
          points={[nodes[a], nodes[b]]}
          color="#38bdf8"
          lineWidth={1.5}
        />
      ))}
    </>
  );
}