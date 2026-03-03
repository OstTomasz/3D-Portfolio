import type { MouseEventHandler } from "react";
import { GlowingCard } from "./GlowingCard";
import type { Testimonial } from "@/types";

type TestimonialCardProps = Omit<Testimonial, "id"> & {
  index: number;
  setCardRef: (index: number) => (el: HTMLDivElement | null) => void;
  handleMouseMove: (index: number) => MouseEventHandler<HTMLDivElement>;
};

export const TestimonialCard = ({
  index,
  name,
  mentions,
  review,
  imgPath,
  setCardRef,
  handleMouseMove,
}: TestimonialCardProps) => (
  <div className="mb-5">
    <GlowingCard
      ref={setCardRef(index)}
      review={review}
      onMouseMove={handleMouseMove(index)}
    >
      <div className="flex items-center gap-3">
        <img src={imgPath} alt={name} />
        <div className="flex flex-col">
          <p className="font-bold">{name}</p>
          <p className="text-white-50">{mentions}</p>
        </div>
      </div>
    </GlowingCard>
  </div>
);
