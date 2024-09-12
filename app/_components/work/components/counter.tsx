"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function Counter({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  const { ref, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  return (
    <h3
      ref={ref}
      className="text-center text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] font-inter font-semibold text-white mb-2"
    >
      {entry?.isIntersecting && (
        <CountUp
          start={0}
          end={number}
          duration={3}
          separator=","
          decimals={number % 1 !== 0 ? 1 : 0}
          suffix={label}
        />
      )}
    </h3>
  );
}
