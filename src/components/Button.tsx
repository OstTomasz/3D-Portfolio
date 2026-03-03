import type { MouseEventHandler } from "react";
type ButtonProps = {
  className?: string;
  text: string;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({
  className,
  text,
  id,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) {
      onClick(e);
    } else if (id) {
      e.preventDefault();
      const target = document.getElementById(id);

      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      className={`${className ?? ""} cta-wrapper`}
      onClick={handleClick}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </button>
  );
};
