import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ShowcaseRefs = {
  sectionRef: React.RefObject<HTMLElement | null>;
  project1Ref: React.RefObject<HTMLDivElement | null>;
  project2Ref: React.RefObject<HTMLDivElement | null>;
  project3Ref: React.RefObject<HTMLDivElement | null>;
  githubDesktopRef: React.RefObject<HTMLDivElement | null>;
  githubMobileRef: React.RefObject<HTMLDivElement | null>;
};

export const useShowcaseAnimations = (): ShowcaseRefs => {
  const sectionRef = useRef<HTMLElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);
  const githubDesktopRef = useRef<HTMLDivElement>(null);
  const githubMobileRef = useRef<HTMLDivElement>(null);

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
      githubDesktopRef.current,
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

  return {
    sectionRef,
    project1Ref,
    project2Ref,
    project3Ref,
    githubDesktopRef,
    githubMobileRef,
  };
};
