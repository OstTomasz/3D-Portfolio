import {
  useThreeMaterialOverride,
  type MaterialOverride,
} from "@/hooks/useThreeMaterialOverride";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

type TechIconProps = {
  iconName: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
};

const THREEJS_LOGO_OVERRIDE: MaterialOverride[] = [
  {
    meshName: "Object_5",
    material: new THREE.MeshStandardMaterial({ color: "#000080" }),
  },
];

const EMPTY_OVERRIDES: MaterialOverride[] = [];

export const TechIcon = ({
  iconName,
  modelPath,
  scale,
  rotation,
}: TechIconProps) => {
  const scene = useGLTF(modelPath);

  const shouldOverride = iconName === "Interactive Developer";
  useThreeMaterialOverride(
    scene.scene,
    shouldOverride ? THREEJS_LOGO_OVERRIDE : EMPTY_OVERRIDES,
  );

  const { width } = useWindowSize();
  const responsiveScale = width < 1500 ? scale : scale * 1.2;

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
