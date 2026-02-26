import { GlowingCard } from "@/components/GlowingCard";
import { TitleHeader } from "@/components/TitleHeader";
import { expCards } from "@/constants/constants";
import { useGlowingCards } from "@/hooks/useGlowingCards";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const { cardRefs, handleMouseMove } = useGlowingCards();

  useGSAP(() => {
    gsap.utils.toArray<HTMLDivElement>(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.InOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",

        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
    gsap.utils.toArray<HTMLDivElement>(".exp-text").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.InOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

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
            {expCards.map(
              (
                {
                  imgPath,
                  title,
                  review,
                  logoPath,
                  id,
                  date,
                  responsibilities,
                },
                index,
              ) => (
                <div key={id} className="exp-card-wrapper">
                  <div className="timeline-card xl:w-2/6 z-40">
                    <GlowingCard
                      ref={(el) => {
                        if (el) cardRefs.current[index] = el;
                      }}
                      review={review}
                      onMouseMove={handleMouseMove(index)}
                    >
                      <img src={imgPath} alt={title} />
                    </GlowingCard>
                  </div>
                  <div className="xl:w-4/6">
                    <div className="flex items-start">
                      <div className="timeline-wrapper">
                        <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>

                      <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div className="timeline-logo">
                          <img src={logoPath} alt="logo" />
                        </div>

                        <div className="exp-text">
                          <h1 className="font-semibold text-3xl">{title}</h1>
                          <p className="my-5 text-white-50">🗓️ {date}</p>
                          <p className="text-blue-50 italic">Responsibilites</p>
                          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                            {responsibilities.map((responsibility, index) => (
                              <li key={`resp${index}`} className="text-lg">
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
