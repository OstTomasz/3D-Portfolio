export const HeroLights = () => {
  return (
    <>
      <spotLight position={[10, 10, 10]} intensity={500} />
      <spotLight
        position={[12, 10, 7]}
        angle={0.2}
        intensity={800}
        color="#fff"
        penumbra={0.8}
      />
    </>
  );
};
