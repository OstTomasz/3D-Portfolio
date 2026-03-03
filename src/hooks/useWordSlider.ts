import { useEffect } from "react";
import gsap from "gsap";

export const useWordSlider = (ref: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (!ref.current) return;

    let tl: gsap.core.Timeline;

    const startAnimation = () => {
      if (!ref.current) return;

      tl?.kill();
      gsap.set(ref.current, { y: 0 });

      const items = ref.current.children;
      const firstItem = items[0];
      if (!(firstItem instanceof HTMLElement)) return;
      const itemHeight = firstItem.offsetHeight;
      // words array is duplicated in constants to create seamless loop
      const uniqueCount = items.length / 2;

      tl = gsap.timeline({ repeat: -1, delay: 1 });

      for (let i = 0; i < uniqueCount; i++) {
        tl.to(ref.current, {
          y: -itemHeight * (i + 1),
          duration: 1,
          ease: "power2.inOut",
        }).to(ref.current, { duration: 1 });
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
