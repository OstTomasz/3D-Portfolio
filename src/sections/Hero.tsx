import { words } from "@/constants/constants";
import { useRef } from "react";
import { useWordSlider } from "@/hooks/useWordSlider";
import { Button } from "@/components/Button";
import { HeroExperience } from "@/components/models/hero_models/HeroExperience";

export const Hero = () => {
  const wrapperRef = useRef<HTMLDivElement>(null!);
  useWordSlider(wrapperRef);
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="./images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper" ref={wrapperRef}>
                    {words.map(({ text, imgPath, id }) => (
                      <span
                        key={id}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={imgPath}
                          alt={text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{text}</span>
                      </span>
                    ))}
                  </span>
                </span>
                <br />
                Into real projects <br />
                that deliver results.
              </h1>
            </div>
            <p className="md:text-xl xl:text-2xl relative z-10 pointer-events-none">
              Hello, I'm Tomasz, a Poland-based developer who finds the sweet
              spot between clean code and great UX.
            </p>
            <Button
              classes="md:w-80 md:h-16 w-60 h-12"
              text="See my Work"
              id="CTA-button"
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout border-red-200 border-2">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};
