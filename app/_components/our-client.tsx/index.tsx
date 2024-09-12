"use client";
import Heading from "@/app/_usefulcomponents/heading";
import Paragraph from "@/app/_usefulcomponents/paragraph";
import { useInView } from "react-intersection-observer";
import Partners from "../partners";
import Image from "next/image";

export default function OurClient() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <>
      <div
        ref={ref}
        className="grid bg-light md:grid-cols-[1fr,1fr] grid-cols-1 items-start  md:px-20 px-10 pt-20 pb-10 overflow-hidden relative"
      >
        <Image
          src={"/about-us/our-client/grid.png"}
          width={816}
          height={373}
          alt="grid png"
          className="absolute w-full h-full top-0 left-1/2 -translate-x-1/2 bottom-0 right-0"
        />
        <Heading
          className={`${inView ? "normal" : "leftAnimation"} animationText`}
        >
          Our Clients
        </Heading>
        <Paragraph
          className={` 
        ${inView ? "normal" : "rightAnimation"} animationText`}
        >
          Our diverse client base includes businesses of all sizes, from
          startups to established enterprises, across various industries. We are
          proud to have worked with a range of clients, delivering tailored
          solutions that drive business success. Our commitment to quality and
          innovation has earned us a reputation as a trusted partner in the IT
          services industry.
        </Paragraph>
      </div>
      <Partners className="!mt-0 !mb-0 !pt-5 !pb-20" />
    </>
  );
}
