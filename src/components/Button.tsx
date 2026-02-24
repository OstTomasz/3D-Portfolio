type ButtonProps = {
  classes?: string;
  text: string;
  id: string;
};

export const Button = ({ classes, text, id }: ButtonProps) => {
  return (
    <a id={id} className={`${classes ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/assets/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};
