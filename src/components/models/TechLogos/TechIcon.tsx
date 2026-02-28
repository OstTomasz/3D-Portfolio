import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

type TechIconProps = {
  iconName: string;
  modelPath: string;
  scale: number;
  rotation: readonly [number, number, number];
};

export const TechIcon = ({
  iconName,
  modelPath,
  scale,
  rotation,
}: TechIconProps) => {
  const scene = useGLTF(modelPath);

  useEffect(() => {
    if (iconName === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({
            color: "#000080",
          });
        }
      });
    }
  }, [scene, iconName]);

  const responsiveScale = window.innerWidth < 1500 ? scale : scale * 1.2;

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={responsiveScale} rotation={rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};
