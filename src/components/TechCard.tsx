import type { TechStackIcon } from "@/types";
import { TechIcon } from "./models/TechLogos/TechIcon";

type TechCardProps = Omit<TechStackIcon, "id">;

export const TechCard = ({
  name,
  modelPath,
  scale,
  rotation,
}: TechCardProps) => (
  <div className="tech-card card-border overflow-hidden group xl:rounded-full rounded-lg">
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
);
