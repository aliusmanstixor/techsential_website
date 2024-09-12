"use client";
import Image from "next/image";
import Button from "./button";
import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import { useInView } from "react-intersection-observer";

export default function SubPagesHeader({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="max-w-[41.75rem] mx-auto pt-28 pb-32 relative">
      <Image
        src={"/about-us/grid.png"}
        width={816}
        height={644}
        alt="grid png"
        className="absolute z-[1] w-full  h-full -top-10  left-1/2 -translate-x-1/2 bottom-0 right-0"
      />
      <div ref={ref} className="relative z-10">
        <SubHeading
          className={`${inView ? "normal" : "leftAnimation"} animationText`}
        >
          {heading}
        </SubHeading>
        <Paragraph
          className={`!text-center !mt-3 ${
            inView ? "normal" : "rightAnimation"
          } animationText`}
        >
          {paragraph}
        </Paragraph>
        <div
          className={`flex !mt-10 justify-center items-center ${
            inView ? "normal" : "rightAnimation"
          } animationText`}
        >
          <Button className=" !max-w-[23.875rem] w-full">Contact us</Button>
        </div>
      </div>
    </div>
  );
}
