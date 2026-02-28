import { TechIcon } from "@/components/models/TechLogos/TechIcon";
import { TitleHeader } from "@/components/TitleHeader";
import { techStackIcons } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
export const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      },
    );
  }, []);

  return (
    <section id="skills" className="flex-center flex-col section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preffered Tech Stack"
          subtitle="🤝 What skills I bring to the table"
        />
      </div>
      <div className="tech-grid">
        {techStackIcons.map(({ name, modelPath, scale, rotation, id }) => (
          <div
            key={id}
            className="tech-card card-border overflow-hidden group xl:rounded-full rounded-lg"
          >
            <div className="tech-card-animated-bg" />
            <div className="tech-card-content">
              <div className="tech-icon-wrapper">
                <TechIcon
                  iconName={name}
                  modelPath={modelPath}
                  scale={scale}
                  rotation={rotation}
                />
              </div>
              <div className="padding-x w-full z-10">
                <p>{name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
