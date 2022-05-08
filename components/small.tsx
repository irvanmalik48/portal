import * as THREE from "three";
// @ts-ignore
import vertex from "../graphics/shader.vert";
// @ts-ignore
import fragment from "../graphics/shader.frag";
import { shaderMaterial, OrbitControls, Edges } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ColorShiftMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0x88c0d0),
  },
  vertex,
  fragment
);

ColorShiftMaterial.key = THREE.MathUtils.generateUUID();

extend({ ColorShiftMaterial });

export default function SmallOcta({ position, scale }: any) {
  const meshRef: any = useRef(null);

  useFrame((state: any, delta: any) => {
    const check = meshRef.current;
    const checkMaterial = meshRef.current.material;

    if (check) {
      meshRef.current.rotation.y += 0.02;
    }

    if (checkMaterial) {
      meshRef.current.material.uniforms.time.value +=
        Math.sin(delta / 2) * Math.cos(delta / 2);
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <octahedronBufferGeometry args={[0.25, 0]} />
      {/* @ts-ignore */}
      <colorShiftMaterial key={ColorShiftMaterial.key} time={3} />
      <Edges scale={scale ?? 1.25} threshold={15} color="#eceff4" />
    </mesh>
  );
}
