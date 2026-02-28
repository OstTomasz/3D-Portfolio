import { GlowingCard } from "@/components/GlowingCard";
import { TitleHeader } from "@/components/TitleHeader";
import { testimonials } from "@/constants/constants";
import { useGlowingCards } from "@/hooks/useGlowingCards";

export const Testemonials = () => {
  const { cardRefs, handleMouseMove } = useGlowingCards();
  return (
    <section id="testemonials" className="flex=center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People say about me?"
          subtitle="⭐ Client feedback highlights"
        />
      </div>
      <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
        {testimonials.map(({ name, mentions, review, imgPath, id }, index) => (
          <div className="mb-5">
            <GlowingCard
              key={id}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              review={review}
              onMouseMove={handleMouseMove(index)}
            >
              <div className="flex items-center gap-3">
                <img src={imgPath} alt={name} />
                <div className="flex flex-col">
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowingCard>
          </div>
        ))}
      </div>
    </section>
  );
};
