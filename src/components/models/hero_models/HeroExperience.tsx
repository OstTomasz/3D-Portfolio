import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Room } from "./Room";
import { HeroLights } from "./HeroLights";

export const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [8, 6, 8], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 12}
        maxAzimuthAngle={Math.PI / 3}
      />
      <HeroLights />
      <group rotation={[0, -Math.PI / 10, 0]} position={[0, -1.7, 0]}>
        <Room />
      </group>
    </Canvas>
  );
};
