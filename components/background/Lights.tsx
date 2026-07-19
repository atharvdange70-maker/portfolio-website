
"use client";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
        color="#67e8f9"
      />

      <pointLight
        position={[-5, -3, 2]}
        intensity={25}
        color="#3b82f6"
      />
    </>
  );
}