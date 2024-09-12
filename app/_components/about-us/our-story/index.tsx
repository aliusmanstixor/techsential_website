"use client";
import GradientContainer from "@/app/_usefulcomponents/gradient-container";
import Heading from "@/app/_usefulcomponents/heading";
import Paragraph from "@/app/_usefulcomponents/paragraph";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function OurStory() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div ref={ref}>
      <GradientContainer
        className={`!opacity-100 !px-14 !py-8 !mb-20 ${
          inView ? "normal" : "leftAnimation"
        } animationText`}
      >
        <div className="grid grid-cols-[3fr,1fr] relative">
          <div>
            <Heading className="text-white">Our Story</Heading>
            <Paragraph className="text-white !mt-3">
              Techsential was born with a collective vision to revolutionize the
              digital world.Founded in 2022 through a strategic joint venture
              between CEO Santosh and Stixor, we are a dynamic tech company with
              a passion for driving digital transformation.From its very
              inception, we have been committed to developing solutions that not
              just meet but exceed client expectations. We have stamped our
              travel with rapid growth, a strong portfolio of successful
              projects, and a reputation for excellence.
            </Paragraph>
          </div>
          <Image
            src={"/about-us/our-story/techsentialLogoHalf.svg"}
            width={197}
            height={320}
            alt="techsential Logo Half svg"
            className="absolute -right-20 scale-75  top-1/2 -translate-y-1/2"
          />
        </div>
      </GradientContainer>
    </div>
  );
}
