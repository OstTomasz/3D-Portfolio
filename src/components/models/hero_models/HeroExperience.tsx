import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import { HeroLights } from "./HeroLights";

export const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas camera={{ position: [0, 10, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 5}
        maxAzimuthAngle={Math.PI / 5}
      />
      <HeroLights />
      <group scale={isMobile ? 0.5 : 0.6} rotation={[0, -Math.PI / 3, 0]}>
        <Room />
      </group>
    </Canvas>
  );
};
