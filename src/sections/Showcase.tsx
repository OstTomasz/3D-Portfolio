import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const githubRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
    );

    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      githubRef.current,
    ];

    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.2 * (index + 1),
          scrollTrigger: { trigger: project, start: "top bottom-=100" },
        },
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left - Main Project */}
          <div className="first-project-col">
            <a
              className="first-project-wrapper transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105"
              href="https://www.google.com"
              target="_blank"
            >
              <div
                ref={project1Ref}
                className="border-2 rounded-2xl bg-black-200 border-white-50 p-3 flex flex-col"
              >
                <div className="image-wrapper">
                  <img src="/images/project1.png" alt="Ryde" />
                </div>
                <div className="text-content">
                  <h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora, voluptate!
                  </h2>
                  <p className="text-white-50 md:text-xl">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </a>

            {/* GitHub Link - tylko w dwukolumnowym */}
            <a
              href="https://www.github.com/OstTomasz"
              target="_blank"
              className="github-link-wrapper hidden 2xl:block transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105;"
            >
              <div
                ref={githubRef}
                className="border-2 rounded-2xl bg-black-200 border-white-50 p-3 flex-col-center"
              >
                <div className="mb-4">
                  <img src="/images/github-logo.png" alt="GitHub" />
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-center">
                  See rest of my work on GitHub!
                </h2>
              </div>
            </a>
          </div>

          {/* Right - Project List */}
          <div className="project-list-wrapper">
            <a
              href="https://www.google.com"
              target="_blank"
              className="transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105;"
            >
              <div
                ref={project2Ref}
                className="project border-2 rounded-2xl bg-black-200 border-white-50 p-3 flex flex-col"
              >
                <div className="image-wrapper">
                  <img
                    src="/images/project2.png"
                    alt="Library Management Platform"
                  />
                </div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, iusto quo? Numquam voluptas neque inventore obcaecati
                  illum, voluptates accusantium odit!
                </h2>
              </div>
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              className="transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105;"
            >
              <div
                ref={project3Ref}
                className="project border-2 rounded-2xl bg-black-200 border-white-50 p-3 flex flex-col"
              >
                <div className="image-wrapper">
                  <img src="/images/project3.png" alt="YC Directory" />
                </div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Error, iusto quo? Numquam voluptas neque inventore obcaecati
                  illum, voluptates accusantium odit!
                </h2>
              </div>
            </a>
          </div>

          {/* GitHub Link - na końcu dla mobilnego/tabletu */}
          <a
            href="https://www.github.com/OstTomasz"
            target="_blank"
            className="github-link-wrapper block 2xl:hidden w-full transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105;"
          >
            <div
              ref={githubRef}
              className="border-2 rounded-2xl bg-black-200 border-white-50 p-3 flex-col-center"
            >
              <div className="mb-4">
                <img src="/images/github-logo.png" alt="GitHub" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-center">
                See rest of my work on GitHub!
              </h2>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
