import { AbilityCard } from "@/components/AbilityCard";
import { abilities } from "@/constants/constants";

export const Features = () => {
  return (
    <section className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc, id }) => (
          <AbilityCard key={id} imgPath={imgPath} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
};
