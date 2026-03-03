import { TitleHeader } from "@/components/TitleHeader";
import { expCards } from "@/constants/constants";

import { ExperienceCard } from "@/components/ExperienceCard";
import { useGlowingCards } from "@/hooks/useGlowingCards";
import { useExperienceAnimations } from "@/hooks/useExperienceAnimation";

export const Experience = () => {
  const { handleMouseMove, setCardRef } = useGlowingCards();

  useExperienceAnimations();

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5 max-w-360 mx-auto">
        <TitleHeader
          title="Professional Work Experience"
          subtitle="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <ExperienceCard
                key={card.id}
                {...card}
                index={index}
                setCardRef={setCardRef}
                handleMouseMove={handleMouseMove}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
