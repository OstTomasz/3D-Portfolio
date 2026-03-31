import type { ExpCard } from "@/types";
import { GlowingCard } from "./GlowingCard";
import type { MouseEventHandler } from "react";

type ExperienceCardProps = ExpCard & {
  index: number;
  setCardRef: (index: number) => (el: HTMLDivElement | null) => void;
  handleMouseMove: (index: number) => MouseEventHandler<HTMLDivElement>;
};

export const ExperienceCard = ({
  index,
  title,
  logoPath,
  imgPath,
  review,
  date,
  responsibilities,
  setCardRef,
  handleMouseMove,
}: ExperienceCardProps) => {
  return (
    <div className="exp-card-wrapper">
      <div className="timeline-card xl:w-2/6 z-40">
        <GlowingCard
          ref={setCardRef(index)}
          review={review}
          onMouseMove={handleMouseMove(index)}
        >
          <img src={imgPath} alt={title} width={150} />
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
              <img src={logoPath} alt="logo" width={70} />
            </div>

            <div className="exp-text">
              <h3 className="font-semibold text-3xl">{title}</h3>
              <p className="my-5 text-white-50">🗓️ {date}</p>
              <p className="text-blue-50 italic">Responsibilities</p>
              <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                {responsibilities.map((responsibility) => (
                  <li key={responsibility.slice(0, 20)} className="text-lg">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
