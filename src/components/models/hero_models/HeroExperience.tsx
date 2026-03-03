import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Room } from "./Room";
import { HeroLights } from "./HeroLights";

const HERO_CAMERA = { position: [8, 6, 8] as const, fov: 45 };
const ROOM_TRANSFORM = {
  rotation: [0, -Math.PI / 10, 0] as const,
  position: [0, -1.7, 0] as const,
};
export const HeroExperience = () => {
  return (
    <Canvas camera={HERO_CAMERA}>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 12}
        maxAzimuthAngle={Math.PI / 3}
      />
      <HeroLights />
      <group {...ROOM_TRANSFORM}>
        <Room />
      </group>
    </Canvas>
  );
};
