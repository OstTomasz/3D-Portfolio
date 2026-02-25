import { logoIconsList } from "@/constants/constants";

export const Logos = () => {
  return (
    <section className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map(({ imgPath, id }) => (
            <img
              className="flex-none flex-center marquee-item"
              key={`1-${id}`}
              src={imgPath}
              alt={id}
            />
          ))}
          {logoIconsList.map(({ imgPath, id }) => (
            <img
              className="flex-none flex-center marquee-item"
              key={`2-${id}`}
              src={imgPath}
              alt={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
