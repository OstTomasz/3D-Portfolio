import { useEffect, useState } from "react";

type counterProps = {
  id?: string;
  value: number;
  suffix: "+" | "%" | "";
  label: string;
};

export const Counter = ({ value, suffix, label }: counterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
      <div className="counter-number text-white text-5xl font-bold mb-2">
        {count}
        {suffix}
      </div>
      <div>{label}</div>
    </div>
  );
};
