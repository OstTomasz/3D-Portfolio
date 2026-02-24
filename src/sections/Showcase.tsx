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
          {/* Left */}
          <div ref={project1Ref} className="first-project-wrapper">
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
          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Library Menagment Platform"
                />
              </div>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                iusto quo? Numquam voluptas neque inventore obcaecati illum,
                voluptates accusantium odit!
              </h2>
            </div>
            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffe2db]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>

              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                iusto quo? Numquam voluptas neque inventore obcaecati illum,
                voluptates accusantium odit!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
