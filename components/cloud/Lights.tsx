"use client";

export default function Lights() {
  return (
    <>
      {/* Soft light everywhere */}
      <ambientLight intensity={1} />

      {/* Main blue light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
        color="#38bdf8"
      />

      {/* Cyan light */}
      <pointLight
        position={[-5, 3, 3]}
        intensity={2}
        color="#06b6d4"
      />

      {/* Purple light */}
      <pointLight
        position={[5, -3, -3]}
        intensity={1.5}
        color="#8b5cf6"
      />
    </>
  );
}