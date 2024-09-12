"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heading from "@/app/_usefulcomponents/heading";
import Paragraph from "@/app/_usefulcomponents/paragraph";

gsap.registerPlugin(ScrollTrigger);

export default function UniqueValues() {
  // Initialize with an empty array to avoid type issues
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Ensure cardRefs.current is treated as an array
    const cards = cardRefs.current;

    cards.forEach((card, index) => {
      // Define different trigger points based on the index
      const triggerOffset = (index + 1) * 30; // Customize this logic for different trigger points

      gsap.fromTo(
        card,
        { height: "75px", opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: `top ${triggerOffset}%`, // Dynamic start based on index
            once: true, // Only trigger once
          },
        }
      );
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="max-w-[36.25rem] sticky top-0 self-start">
        <Heading>Our Unique Values</Heading>
        <Paragraph>
          We have a unique vision and values guiding us in a specific direction.
          Our experience and commitment to operational excellence guarantee
          successful deliveries. But we go beyond creating exceptional solutions
          – we aim to be your trusted business partner.
        </Paragraph>
      </div>
      <div className="space-y-4 relative">
        {["Innovation", "Commitment", "Excellence"].map((title, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className="max-w-[36.75rem] p-5 overflow-hidden text-white rounded-2xl bg-secondary"
          >
            <h3 className="md:text-[2rem] md:leading-[2.4rem] font-syneBold text-lg">
              {title}
            </h3>
            <p className="md:text-base text-sm mt-3">
              We are constantly exploring new technologies and methodologies to
              stay ahead of the curve. Innovation is at the heart of everything
              we do, driving us to develop creative and effective solutions for
              our clients.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
