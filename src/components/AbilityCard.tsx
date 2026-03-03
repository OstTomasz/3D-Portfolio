import type { Ability } from "@/types";

type AbilityCardProps = Omit<Ability, "id">;

export const AbilityCard = ({ imgPath, title, desc }: AbilityCardProps) => (
  <div className="card-border rounded-xl p-8 flex flex-col gap-4">
    <div className="size-14 flex items-center justify-center rounded-full">
      <img src={imgPath} alt={title} />
    </div>
    <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
    <p className="text-white-50 text-lg">{desc}</p>
  </div>
);
