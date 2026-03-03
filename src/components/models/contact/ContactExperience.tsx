import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Computer } from "./Computer";
import { ContactLights } from "./ContactLights";

export const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 55 }}>
      <ContactLights />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />

      <group>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#2b9cff" />
        </mesh>
      </group>

      <group scale={0.025} position={[0, -1.49, -2]}>
        <Computer />
      </group>
    </Canvas>
  );
};
