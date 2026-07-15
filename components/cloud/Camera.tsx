"use client";

import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Camera() {
  const { camera, mouse } = useThree();

  const target = useRef(new THREE.Vector3(0, 0, 8));

  useFrame(() => {
    target.current.x = mouse.x * 0.8;
    target.current.y = mouse.y * 0.5;
    target.current.z = 8;

    camera.position.lerp(target.current, 0.05);

    camera.lookAt(0, 0, 0);
  });

  return null;
}