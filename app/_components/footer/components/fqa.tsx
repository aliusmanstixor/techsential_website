"use client";
import Heading from "@/app/_usefulcomponents/heading";
import { faqData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FQA() {
  const [open, setOpen] = useState(-1);
  return (
    <div className="relative z-10">
      <div className="w-full">
        <Heading className="!text-center !mb-5">FAQ's</Heading>
        {faqData.map((accordian, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setOpen((c) => (c === index ? -1 : index));
              }}
              className=" mt-3 mx-auto rounded-md bg-white/20  p-5 w-full max-w-[46.125rem]"
            >
              <div className="flex gap-8 text-white cursor-pointer w-full">
                <p className="md:text-lg text-sm font-leagueSpartan font-medium w-full">
                  {accordian.question}
                </p>
                <Image
                  src={"/footer/sum.svg"}
                  width={24}
                  height={24}
                  alt="sum icon"
                  className={`${
                    open === index ? "rotate-45" : "rotate-0"
                  } transition-all duration-100 ease-linear`}
                />
              </div>
              <div
                className={`transition-all md:text-base text-xs font-light font-leagueSpartan duration-100 ease-linear ${
                  open === index
                    ? "mt-5 py-5 border-t  border-white "
                    : "h-0 overflow-hidden"
                }`}
              >
                {accordian.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
