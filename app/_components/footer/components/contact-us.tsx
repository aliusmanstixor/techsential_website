import GradientContainer from "@/app/_usefulcomponents/gradient-container";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <GradientContainer>
      <div className="md:p-20 p-7 w-full flex md:flex-row justify-center flex-col items-center md:justify-between md:items-end">
        <h3 className="w-full md:max-w-[45.5rem] text-center md:text-left mx-auto md:mx-0 font-syneBold lg:text-[3.5rem] lg:leading-[4.5rem] sm:text-[2.5rem] sm:leading-[3.5rem] text-[2.5rem] leading-[3rem]">
          Contact us and get a free project estimation!
        </h3>

        <Link
          href=""
          className="py-5 px-10 md:mt-0 mt-5 bg-white group rounded-full flex gap-3 items-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5037E4] to-[#A576FF] hover:from-[#372bb0] font-syneBold group-hover:to-[#8941e6] transition-all duration-300 ease-in-out text-lg whitespace-nowrap">
            Contact Us Now
          </span>
          <Image
            src={"/project/arrow.svg"}
            height={17}
            width={16}
            alt="arrow svg"
            className="group-hover:translate-x-3 transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>
    </GradientContainer>
  );
}
