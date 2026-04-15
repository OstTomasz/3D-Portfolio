import { AbilityCard } from "@/components/AbilityCard";
import { abilities } from "@/constants/constants";

export const Features = () => {
  return (
    <section className="w-full padding-x-lg">
      <div className="mx-auto grid-2-cols">
        {abilities.map(({ icon, title, desc, id }) => (
          <AbilityCard key={id} icon={icon} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
};
