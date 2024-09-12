"use client";
import Image from "next/image";
import Grid from "./components/grid";
import { useInView } from "react-intersection-observer";
export default function Header() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="relative xl:px-10 px-5 overflow-hidden">
      <div className="grid gap-y-5 xl:gap-x-10 md:grid-cols-2 grid-cols-1 items-center justify-items-center mt-10 ">
        <Image
          src="/header/grid.png"
          height={873}
          width={690}
          alt="Rocket gif"
          className="-top-20 absolute -z-10 w-[54.5625rem] left-1/2 -translate-x-1/2"
        />
        <div ref={ref}>
          <h1
            className={`text-secondary heading md:text-left text-center font-syneBold xl:text-[80px] xl:leading-[96px] lg:text-7xl sm:text-5xl text-4xl ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            } animationText`}
          >
            Transforming Ideas into
            <span>
              <Image
                src="/header/rocket.gif"
                height={90}
                width={90}
                alt="Rocket gif"
                className="rotate-45 md:inline-block hidden ml-3"
              />
            </span>{" "}
            Digital Realities
          </h1>
        </div>
        <div>
          <p
            className={`sm:text-xl paragraph text-base md:text-left text-center mx-auto text-primary max-w-[27.125rem]  ${
              inView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            } animationText`}
          >
            We bridge the gap between vision and impact, building next-gen
            solutions that redefine the boundaries of what's possible. Lorem
            ipsum dolor sit amet consectetur. Aliquet duis aliquet maecenas nibh
            ultrices.
          </p>
        </div>
      </div>
      <Grid />
    </div>
  );
}
