export const HeroLights = () => {
  return (
    <>
      <spotLight position={[5, 3, 6]} intensity={200} />
      <spotLight
        position={[1.5, 3, 2]}
        angle={0.3}
        intensity={80}
        color="#fff"
        penumbra={0.7}
      />
    </>
  );
};
