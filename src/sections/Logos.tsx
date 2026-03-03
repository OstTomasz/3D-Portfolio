import { logoIconsList } from "@/constants/constants";

const doubledLogos = [...logoIconsList, ...logoIconsList];
export const Logos = () => {
  return (
    <section className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {doubledLogos.map(({ imgPath, id }, index) => (
            <img
              className="flex-none flex-center marquee-item"
              key={`${index}-${id}`}
              src={imgPath}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};
