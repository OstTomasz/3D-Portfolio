import type { Ability } from "@/types";

type AbilityCardProps = Omit<Ability, "id">;

export const AbilityCard = ({ icon: Icon, title, desc }: AbilityCardProps) => (
  <div className="card-border rounded-xl p-8 flex flex-col gap-4 group transition-all duration-300 hover:bg-white/2">
    <div
      className="size-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 
                    shadow-[0_0_15px_rgba(96,165,250,0.2)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300"
    >
      <Icon
        className="size-8 transition-transform duration-300 group-hover:scale-110"
        style={{ stroke: "url(#blue-gradient)" }} // Referencja do Twojego wyciągniętego gradientu
        strokeWidth={2}
      />
    </div>

    <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
    <p className="text-white-50 text-lg">{desc}</p>
  </div>
);
