import { GlowingCard } from "@/components/GlowingCard";
import { TitleHeader } from "@/components/TitleHeader";
import { expCards } from "@/constants/constants";
import { useGlowingCards } from "@/hooks/useGlowingCards";

export const Experience = () => {
  const { cardRefs, handleMouseMove } = useGlowingCards();

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Profesional Work Experience"
          subtitle="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.id} className="exp-car-wrapper">
                <div className="xl:w-2/6">
                  <GlowingCard
                    ref={(el) => {
                      if (el) cardRefs.current[index] = el;
                    }}
                    review={card.review}
                    onMouseMove={handleMouseMove(index)}
                  >
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowingCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
