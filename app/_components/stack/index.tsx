"use client";
import Image from "next/image";
import StackList from "./components/stack-list";
import Heading from "@/app/_usefulcomponents/heading";
import Paragraph from "@/app/_usefulcomponents/paragraph";
import { useInView } from "react-intersection-observer";
export default function Stack() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="bg-secondary relative py-20 mt-20   text-white">
      <Image
        src="/stack/grid.png"
        width={1745}
        height={675}
        className="absolute md:w-full md:h-full w-[46.5rem] h-[18.8125rem] md:top-0 top-1/2 md:translate-y-0 -translate-y-1/2 left-0 bottom-0 right-0 z-[1]  "
        alt="grid "
      />

      <div className="relative z-[10] mb-20  px-10">
        <div
          ref={ref}
          className="grid md:grid-cols-2 grid-cols-1 overflow-hidden "
        >
          <Heading
            className={` max-w-[841px] ${
              inView ? "normal" : "leftAnimation"
            } animationText`}
          >
            Our Tech Stack
          </Heading>
          <Paragraph
            className={`max-w-[452px] text-white ${
              inView ? "normal" : "rightAnimation"
            } animationText`}
          >
            Our software development company is composed of certified experts
            with comprehensive knowledge and experience in:
          </Paragraph>
        </div>
      </div>

      <StackList />
    </div>
  );
}
