import type { Ability } from "@/types";

type AbilityCardProps = Omit<Ability, "id">;

export const AbilityCard = ({ icon: Icon, title, desc }: AbilityCardProps) => (
  <div className="card-border rounded-xl p-8 flex flex-col gap-4 group transition-all duration-500 hover:bg-white/2">
    <div className="size-14 flex items-center justify-center rounded-full glow-hover">
      <Icon
        className="size-8 text-gradient-hover transition-all duration-500 group-hover:scale-110"
        style={{ stroke: "url(#blue-gradient)" }}
        strokeWidth={2}
      />
    </div>

    <h3 className="text-white text-2xl font-semibold mt-2 transition-colors duration-500 group-hover:text-white">
      {title}
    </h3>
    <p className="text-white-50 text-lg transition-colors duration-500 group-hover:text-white/70">
      {desc}
    </p>
  </div>
);
