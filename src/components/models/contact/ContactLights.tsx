export const ContactLights = () => (
  <>
    <ambientLight intensity={0.5} color="#fff4e6" />
    <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
    <directionalLight
      position={[5, 9, 1]}
      castShadow
      intensity={2.5}
      color="#ffd9b3"
    />
  </>
);
