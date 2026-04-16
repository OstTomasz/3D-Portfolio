import type { TitleHeaderProps } from "@/types";

export const TitleHeader = ({
  title,
  subtitle,
  icon: Icon,
}: TitleHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge flex items-center gap-3">
        <Icon
          size={18}
          style={{ stroke: "url(#blue-gradient)" }}
          className="min-w-[18px]"
        />
        <span>{subtitle}</span>
      </div>
      <h3 className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </h3>
    </div>
  );
};
