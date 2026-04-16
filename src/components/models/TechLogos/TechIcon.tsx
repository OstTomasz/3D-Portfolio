import { useWindowSize } from "@/hooks/useWindowSize";
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  Center,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

type TechIconProps = {
  iconName: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
};

export const TechIcon = ({ modelPath, scale, rotation }: TechIconProps) => {
  const { scene } = useGLTF(modelPath); // Destrukturyzacja dla czystości

  const { width } = useWindowSize();
  const responsiveScale = width < 1500 ? scale : scale * 1.2;

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={responsiveScale} rotation={rotation}>
          <Center>
            <primitive object={scene} />
          </Center>
        </group>
      </Float>
    </Canvas>
  );
};
