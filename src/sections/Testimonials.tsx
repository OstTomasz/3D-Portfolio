import { TestimonialCard } from "@/components/TestimonialCard";
import { TitleHeader } from "@/components/TitleHeader";
import { testimonials } from "@/constants/constants";
import { useGlowingCards } from "@/hooks/useGlowingCards";
import type { Testimonial } from "@/types";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const { handleMouseMove, setCardRef } = useGlowingCards();
  return (
    <section id="testimonials" className="flex-center flex-col section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People say about me?"
          subtitle=" Client feedback highlights"
          icon={Star}
        />
      </div>
      <div className="lg:columns-3 md:columns-2 columns-1 mt-16 md:px-10 px-5 w-full">
        {testimonials.map(
          (
            { name, mentions, review, imgPath, id }: Testimonial,
            index: number,
          ) => (
            <TestimonialCard
              key={id}
              name={name}
              mentions={mentions}
              review={review}
              imgPath={imgPath}
              index={index}
              setCardRef={setCardRef}
              handleMouseMove={handleMouseMove}
            />
          ),
        )}
      </div>
    </section>
  );
};
