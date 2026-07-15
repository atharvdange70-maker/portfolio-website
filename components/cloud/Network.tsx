"use client";

import { Line } from "@react-three/drei";

export default function Network() {
  return (
    <>
      {/* EC2 → Docker */}
      <Line
        points={[
          [0.5, 2.2, -2],
          [-0.2, 0.5, -2],
        ]}
        color="#00d4ff"
        lineWidth={2}
      />

      {/* EC2 → S3 */}
      <Line
        points={[
          [0.5, 2.2, -2],
          [3.6, 2.0, -2],
        ]}
        color="#00d4ff"
        lineWidth={2}
      />

      {/* Docker → Jenkins */}
      <Line
        points={[
          [-0.2, 0.5, -2],
          [0.8, -1.2, -2],
        ]}
        color="#00d4ff"
        lineWidth={2}
      />

      {/* S3 → Kubernetes */}
      <Line
        points={[
          [3.6, 2.0, -2],
          [4.2, 0.4, -2],
        ]}
        color="#00d4ff"
        lineWidth={2}
      />

      {/* Jenkins → Terraform */}
      <Line
        points={[
          [0.8, -1.2, -2],
          [3.8, -1.3, -2],
        ]}
        color="#00d4ff"
        lineWidth={2}
      />

      {/* Terraform → Kubernetes */}
      <Line
        points={[
          [3.8, -1.3, -2],
          [4.2, 0.4, -2],
        ]}
        color="#00d4ff"
        lineWidth={2}
      />
    </>
  );
}