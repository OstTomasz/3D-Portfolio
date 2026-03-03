import { TitleHeader } from "@/components/TitleHeader";
import { techStackIcons } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { TechCard } from "@/components/TechCard";
import { useGLTF } from "@react-three/drei";

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
          title="My preferred Tech Stack"
          subtitle="🤝 What skills I bring to the table"
        />
      </div>
      <div className="tech-grid">
        {techStackIcons.map(({ name, modelPath, scale, rotation, id }) => (
          <TechCard
            key={id}
            name={name}
            modelPath={modelPath}
            scale={scale}
            rotation={rotation}
          />
        ))}
      </div>
    </section>
  );
};

techStackIcons.forEach(({ modelPath }) => useGLTF.preload(modelPath));
