import { GitHubButton } from "@/components/GitHubButton";
import { GITHUB_URL, projects } from "@/constants/constants";
import { useShowcaseAnimations } from "@/hooks/useShowcaseAnimations";

// Showcase.tsx
export const Showcase = () => {
  const {
    sectionRef,
    project1Ref,
    project2Ref,
    project3Ref,
    githubDesktopRef,
    githubMobileRef,
  } = useShowcaseAnimations();

  const [project1, project2, project3] = projects;

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full flex flex-col">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-col">
            <div className="relative flex flex-col flex-1">
              <GitHubButton href={project1.githubLink} />
              <a
                className="first-project-wrapper transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105"
                href={project1.liveLink}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  ref={project1Ref}
                  className="relative border-2 rounded-2xl bg-black-200 border-white-50 p-3 flex flex-col"
                >
                  <div className="image-wrapper">
                    <img src={project1.imgPath} alt={project1.title} />
                  </div>
                  <div className="text-content">
                    <h2>{project1.title}</h2>
                    <p className="text-white-50 md:text-xl">{project1.desc}</p>
                  </div>
                </div>
              </a>
            </div>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="github-link-wrapper hidden 2xl:block transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105"
            >
              <div
                ref={githubDesktopRef}
                className="border-2 rounded-2xl bg-black-200 border-white-50 p-5 flex-col-center h-full"
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

          {/* Right */}
          <div className="project-list-wrapper">
            <div className="relative flex-1">
              <GitHubButton href={project2.githubLink} />
              <a
                href={project2.liveLink}
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105 block h-full"
              >
                <div
                  ref={project2Ref}
                  className="relative project border-2 rounded-2xl bg-black-200 border-white-50 p-3 flex flex-col items-center justify-center h-full"
                >
                  <div className="image-wrapper">
                    <img src={project2.imgPath} alt={project2.title} />
                  </div>
                  <div className="text-content">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                      {project2.title}
                    </h2>
                    <p className="text-white-50 md:text-xl mt-2">
                      {project2.desc}
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="relative flex-1">
              <GitHubButton href={project3.githubLink} />
              <a
                href={project3.liveLink}
                target="_blank"
                rel="noreferrer"
                className="transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105 block h-full"
              >
                <div
                  ref={project3Ref}
                  className="relative project border-2 rounded-2xl bg-black-200 border-white-50 p-3 flex flex-col h-full items-center justify-center"
                >
                  <div className="image-wrapper">
                    <img src={project3.imgPath} alt={project3.title} />
                  </div>
                  <div className="text-content">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                      {project3.title}
                    </h2>
                    <p className="text-white-50 md:text-xl mt-2">
                      {project3.desc}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* GitHub mobile */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="github-link-wrapper  block 2xl:hidden w-full transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-105"
          >
            <div
              ref={githubMobileRef}
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
