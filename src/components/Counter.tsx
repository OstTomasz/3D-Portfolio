import type { CounterSuffix } from "@/types";
import { useEffect, useState } from "react";

type CounterProps = {
  value: number;
  suffix: CounterSuffix;
  label: string;
};

const ANIMATION_DURATION_MS: number = 1000;
const FRAME_INTERVAL_MS: number = 16;

export const Counter = ({ value, suffix, label }: CounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (ANIMATION_DURATION_MS / FRAME_INTERVAL_MS);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, FRAME_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
      <div className="counter-number text-white text-5xl font-bold mb-2 cursor-default">
        {count}
        {suffix}
      </div>
      <div className="cursor-default">{label}</div>
    </div>
  );
};
