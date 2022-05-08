import * as THREE from "three";
// @ts-ignore
import vertex from "../graphics/shader.vert";
// @ts-ignore
import fragment from "../graphics/shader.frag";
import {
  shaderMaterial,
  OrbitControls,
  Edges,
  PerspectiveCamera,
} from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import SmallOcta from "./small";

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

export default function Shader(props: any) {
  const meshRef: any = useRef(null);
  const rotateRef: any = useRef(null);

  useFrame((state: any, delta: any) => {
    const check = meshRef.current && rotateRef.current;
    const checkMaterial = meshRef.current.material;

    if (check) {
      meshRef.current.rotation.y += 0.01;
      rotateRef.current.rotation.y += 0.01;
    }

    if (checkMaterial) {
      meshRef.current.material.uniforms.time.value +=
        Math.sin(delta / 2) * Math.cos(delta / 2);
    }
  });

  return (
    <mesh ref={rotateRef}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <octahedronBufferGeometry args={[1, 0]} />
        {/* @ts-ignore */}
        <colorShiftMaterial key={ColorShiftMaterial.key} time={3} />
        <OrbitControls enabled enableRotate enablePan={false} enableZoom />
        <Edges scale={1.1} threshold={15} color="#eceff4" />
      </mesh>
      <SmallOcta position={[1, -1, 1]} />
      <SmallOcta position={[-1, 1, -1]} />
      <SmallOcta position={[1, 1, 1]} />
      <SmallOcta position={[-1, -1, -1]} />
      <SmallOcta position={[-1, -1, 1]} />
      <SmallOcta position={[1, -1, -1]} />
      <SmallOcta position={[-1, 1, 1]} />
      <SmallOcta position={[1, 1, -1]} />
      <SmallOcta position={[0, 1.75, 0]} />
      <SmallOcta position={[0, -1.75, 0]} />
    </mesh>
  );
}
