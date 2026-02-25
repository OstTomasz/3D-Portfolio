type TitleHeader = {
  title: string;
  subtitle: string;
};

export const TitleHeader = ({ title, subtitle }: TitleHeader) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h4 className="hero-badge">{subtitle}</h4>
      <h3 className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </h3>
    </div>
  );
};
