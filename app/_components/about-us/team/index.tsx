"use client";
import Heading from "@/app/_usefulcomponents/heading";
import IconButton from "./components/icon-button";
import { Swiper as SwiperInstance, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import modules from 'swiper/modules'
import { Swiper as SwiperCore } from "swiper"; // Import the actual Swiper class to use as a type
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);

  return (
    <div className="mb-20 lg:px-20 px-6">
      {/* Adjust padding for mobile */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] items-end gap-6 md:gap-0">
        {/* Stack elements on small screens */}
        <Heading className="!max-w-[35.4375rem] text-white">
          We Are a Creative, Rockin' Team
        </Heading>
        {/* Custom navigation buttons */}
        <div className="flex gap-5 justify-center md:justify-self-end">
          {/* Center on small screens */}
          <IconButton left={true} className="custom-prev" />
          <IconButton left={false} className="custom-next" />
        </div>
      </div>
      <div className="w-full mt-8">
        <SwiperInstance
          onSwiper={(swiper) => setSwiperRef(swiper)}
          slidesPerView={1} // Default slidesPerView for mobile
          centeredSlides={false}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 }, // For small screens
            800: { slidesPerView: 2, spaceBetween: 10 }, // For medium screens
            1280: { slidesPerView: 3, spaceBetween: 10 }, // For larger screens
            1540: { slidesPerView: 4, spaceBetween: 10 },
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {Array.from({ length: 10 }, (_, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="text-center relative cursor-pointer group w-full max-w-[23.5rem] h-[28.875rem] mx-auto">
                  {" "}
                  {/* Ensure max width */}
                  <Image
                    src="/about-us/team/image1.jpg"
                    height={376}
                    width={462}
                    alt="image of team member"
                    quality={100}
                    className="object-cover filter grayscale group-hover:grayscale-0 rounded-tr-[2rem] rounded-tl-[2rem] w-full h-full"
                  />
                  <Image
                    src="/about-us/team/mask.png"
                    height={376}
                    width={462}
                    alt="image mask"
                    quality={100}
                    className="absolute w-full bottom-0"
                  />
                  <div className="absolute  group-hover:bottom-24 bottom-7 animationText left-1/2 -translate-x-1/2">
                    <h3 className="text-[2.375rem] text-nowrap text-center font-syneBold text-white leading-[2.8125rem]">
                      Faraz Khan
                    </h3>
                    <span className="text-2xl text-center text-white font-syneMedium">
                      Program Manager
                    </span>
                  </div>
                  <div>
                    <Link
                      href={""}
                      className={`relative group-hover:bottom-20 animationText -bottom-20 group cursor-pointer z-10 h-[3.9375rem] inline-block w-[3.9375rem] rounded-full bg-transparent hover:bg-gradient-to-br  from-[#5037E4] to-[#A576FF] p-2 border-[.125rem] border-white `}
                    >
                      <Image
                        src={"/about-us/team/linkedin.svg"}
                        width={32}
                        height={32}
                        alt="arrow svg"
                        className={`absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2`}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </SwiperInstance>
      </div>
    </div>
  );
}
