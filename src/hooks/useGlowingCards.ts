// hooks/useGlowingCards.ts
import { useRef } from "react";

export const useGlowingCards = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;
      card.style.setProperty("--start", `${angle + 60}`);
    };

  return { cardRefs, handleMouseMove };
};
