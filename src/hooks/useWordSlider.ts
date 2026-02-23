import { useEffect } from "react";
import gsap from "gsap";

export const useWordSlider = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (!ref.current) return;

    let tl: gsap.core.Timeline;

    const startAnimation = () => {
      if (!ref.current) return;

      tl?.kill(); // zatrzymaj poprzednią animację
      gsap.set(ref.current, { y: 0 });

      const items = ref.current.children;
      const itemHeight = (items[0] as HTMLElement).offsetHeight;
      const uniqueCount = items.length / 2;

      tl = gsap.timeline({ repeat: -1 });

      for (let i = 0; i < uniqueCount; i++) {
        tl.to(ref.current, {
          y: -itemHeight * (i + 1),
          duration: 1,
          ease: "power2.inOut",
        }).to(ref.current, { duration: 2 });
      }

      tl.set(ref.current, { y: 0, immediateRender: false });
    };

    const observer = new ResizeObserver(startAnimation);
    observer.observe(ref.current);
    startAnimation();

    return () => {
      observer.disconnect();
      tl?.kill();
    };
  }, [ref]);
};
