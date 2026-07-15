"use client";

import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      {/* Lights */}
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      {/* Cloud Part 1 */}
<mesh position={[2.2, 0, -2]}>
  <sphereGeometry args={[1.3, 64, 64]} />
  <meshStandardMaterial
    color="#38bdf8"
    transparent
    opacity={0.18}
  />
</mesh>

{/* Cloud Part 2 */}
<mesh position={[3.2, 0.4, -2]}>
  <sphereGeometry args={[1.1, 64, 64]} />
  <meshStandardMaterial
    color="#38bdf8"
    transparent
    opacity={0.18}
  />
</mesh>

{/* Cloud Part 3 */}
<mesh position={[3.8, -0.3, -2]}>
  <sphereGeometry args={[1.2, 64, 64]} />
  <meshStandardMaterial
    color="#38bdf8"
    transparent
    opacity={0.18}
  />
</mesh>

{/* Cloud Part 4 */}
<mesh position={[2.9, -0.7, -2]}>
  <sphereGeometry args={[1.1, 64, 64]} />
  <meshStandardMaterial
    color="#38bdf8"
    transparent
    opacity={0.18}
  />
</mesh>

{/* Cloud Part 5 */}
<mesh position={[2.8, 0.9, -2]}>
  <sphereGeometry args={[0.9, 64, 64]} />
  <meshStandardMaterial
    color="#38bdf8"
    transparent
    opacity={0.18}
  />
</mesh>
    </Canvas>
  );
}