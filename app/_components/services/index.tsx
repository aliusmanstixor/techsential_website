"use client";
import ServicesList from "./components/services-list";
import Button from "@/app/_usefulcomponents/button";
import Heading from "@/app/_usefulcomponents/heading";
import Paragraph from "@/app/_usefulcomponents/paragraph";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="xl:px-10 px-5 md:mt-32 mt-20 servicecontainer overflow-hidden">
      <div
        ref={ref}
        className="grid md:grid-cols-2 grid-cols-1 items-center mb-14"
      >
        <Heading
          className={`${inView ? "normal" : "leftAnimation"} animationText`}
        >
          We Offer Several Services for You
        </Heading>
        <Paragraph
          className={`max-w-[449px] 
              ${inView ? "normal" : "rightAnimation"} animationText`}
        >
          Forget Photoshop. Discover thousands of image or video templates.
          Create manually within our dashboard or automatically - all powered by
          our Al.
        </Paragraph>
      </div>
      <ServicesList />
      <div className="mt-20 flex justify-center">
        <Button className="max-w-[368px] py-3 inline-block w-full">
          Explore More
        </Button>
      </div>
    </div>
  );
}
