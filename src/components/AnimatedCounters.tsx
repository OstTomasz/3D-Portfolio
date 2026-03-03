import { counterItems } from "@/constants/constants";
import { Counter } from "./Counter";

export const AnimatedCounters = () => {
  return (
    <div id="counters" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map(({ id, value, suffix, label }) => (
          <Counter key={id} value={value} suffix={suffix} label={label} />
        ))}
      </div>
    </div>
  );
};
