import { forwardRef, type ReactNode } from "react";

type GlowingCardProps = {
  review: string;
  children: ReactNode;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
};

export const GlowingCard = forwardRef<HTMLDivElement, GlowingCardProps>(
  ({ review, children, onMouseMove }, ref) => {
    return (
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="card card-border timeline-card rounded-xl p-10"
      >
        <div className="glow" />
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }, (_, i) => (
            <img src="images/star.png" key={i} alt="Star" className="size-5" />
          ))}
        </div>
        <p className="mb-5 text-white-50 text-lg">{review}</p>
        {children}
      </div>
    );
  },
);
