type TitleHeaderProps = {
  title: string;
  subtitle: string;
};

export const TitleHeader = ({ title, subtitle }: TitleHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <p className="hero-badge">{subtitle}</p>
      <h3 className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </h3>
    </div>
  );
};
