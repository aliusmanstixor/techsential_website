"use client";
import Image from "next/image";
import WorkCards from "./components/work-cards";
import Heading from "@/app/_usefulcomponents/heading";
import Paragraph from "@/app/_usefulcomponents/paragraph";
import { useInView } from "react-intersection-observer";

export default function Work() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="bg-secondary overflow-hidden workcontainer relative py-20 px-5 text-center text-white">
      <Image
        src="/work/grid.png"
        width={1440}
        height={704}
        className="absolute top-0 left-0 bottom-0 right-0 z-[1]  "
        alt="grid "
      />

      <div className="relative z-[10]" ref={ref}>
        <Heading
          className={`max-w-[52.5625rem] Workheading !mx-auto  text-center ${
            inView ? "normal" : "leftAnimation"
          } animationText`}
        >
          We Are Proud of Our Work
        </Heading>
        <Paragraph
          className={`max-w-[65.375rem] workParagraph !mx-auto mt-2  text-center text-white ${
            inView ? "normal" : "rightAnimation"
          } animationText`}
        >
          Techsential as a software development agency provides services ranging
          from product design to delivery and launch. We are ready to design
          your product and implement web and mobile apps that accomplish your
          business goals!
        </Paragraph>
        <WorkCards />
      </div>
    </div>
  );
}
