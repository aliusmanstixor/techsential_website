"use client";
import Image from "next/image";
export default function BookingCard() {
  return (
    <div className="relative bg-blue rounded-3xl sm:p-10 p-5 lg:col-start-1 lg:col-end-2 lg:row-end-2 lg:row-start-1 sm:col-end-3 sm:col-start-1 sm:row-start-1 sm:row-end-2">
      <Image
        src={"/header/Mask.png"}
        width={872}
        height={688}
        alt="grid svg"
        className="left-0 absolute w-full h-full top-0 z-[1]"
      />
      <div className="relative xs:h-[9.25rem] sm:h-[12rem] sm:max-w-[30.25rem] lg:h-[15rem] h-[8.375rem] z-10">
        <h2 className="sm:max-w-[26.25rem]  font-syneBold xl:text-[3.5rem] text-white xl:leading-[4.5rem] md:text-6xl xs:text-[2.625rem] text-3xl xs:leading-[48px] max-w-[200px]">
          Book a Consultation
        </h2>

        <Image
          src={"/header/arrow.svg"}
          width={87}
          height={104}
          alt="arrow svg"
          className="bottom-0 lg:right-0 md:-right-20 sm:right-0 right-10 sm:w-[5.4375rem] sm:h-[6.5rem] xs:w-[3.1875rem] xs:h-[3.5rem] w-[2.8125rem] h-[3.125rem] absolute  -translate-x-1/2"
        />
      </div>

      <div className="flex justify-between sm:items-center xs:items-end items-center mt-5 relative z-20">
        <div className="flex sm:self-end ">
          {Array.from({ length: 3 }, (_, index) => {
            return (
              <Image
                src={`/header/team${index + 1}.png`}
                width={81}
                height={81}
                alt="Team PNG"
                className={`xl:h-[5rem] xl:w-[5rem] lg:w-[3.125rem] lg:h-[3.125rem] sm:h-[5rem] sm:w-[5rem] xs:w-[3.75rem] xs:h-[3.75rem] h-[2.5rem] w-[2.5rem]  ${
                  index === 1 ? "-translate-x-3" : ""
                } ${index === 2 ? "-translate-x-6" : ""}`}
              />
            );
          })}
        </div>
        <div className="text-center flex-1 flex flex-col sm:items-center items-end">
          <h3 className="text-white text-nowrap mb-3 text-right font-syneSemiBold sm:text-[1.625rem] xs:text-[1.125rem] text-base">
            Whats Your Idea tell us
          </h3>
          <div className="h-[3.75rem] relative ">
            <button className="font-syneBold cursor-pointer  sm:h-[3.75rem] sm:w-[12.75rem] w-[6.6875rem] h-[2.1875rem] xs:w-[8.6875rem] xs:h-[3.1875rem] sm:text-lg bg-[linear-gradient(139.05deg,_#14D5BB_14.34%,_#A3DA25_86.13%)] text-white font-bold py-2 px-4 rounded-full hover:bg-[linear-gradient(139.05deg,_#A3DA25_14.34%,_#14D5BB_86.13%)] animation  text-xs">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
