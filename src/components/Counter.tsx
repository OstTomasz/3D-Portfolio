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
    <div className="bg-zinc-900 rounded-xl p-10 flex flex-col items-center text-center group transition-all duration-300 hover:bg-zinc-800/50">
      <div className="counter-number relative mb-2 cursor-default select-none">
        <span className="text-6xl font-bold bg-linear-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          {count}
          {suffix}
        </span>
      </div>

      <div className="text-white-50 text-lg cursor-default uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );
};
