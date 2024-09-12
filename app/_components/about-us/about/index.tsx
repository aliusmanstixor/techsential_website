"use client";
import Heading from "@/app/_usefulcomponents/heading";
import Paragraph from "@/app/_usefulcomponents/paragraph";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 grid-cols-1 items-center mb-20"
    >
      <div
        className={`max-w-[38.125rem] ${
          inView ? "normal" : "leftAnimation"
        } animationText`}
      >
        <Heading>About Techsential</Heading>
        <Paragraph className="!mt-5">
          Welcome to Techsential, we are more than just an IT solutions
          provider; we are your partners in innovation. With a relentless focus
          on pushing the boundaries of technology, we deliver cutting-edge
          solutions that redefine business possibilities.We offer a suite of
          services, from software development to digital marketing, under one
          roof, powering businesses for growth in a world that is going fully
          digital.
        </Paragraph>
      </div>
      <Image
        src={"/about-us/about/image.png"}
        width={466}
        height={468}
        alt="office image"
        className={`justify-self-end ${
          inView ? "normal" : "leftAnimation"
        } animationText`}
      />
    </div>
  );
}
