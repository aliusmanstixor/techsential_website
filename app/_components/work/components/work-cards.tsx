import { workList } from "@/utils/data";
import Image from "next/image";
import Counter from "./counter";
import separateNumberAndLabel from "@/utils/separateNumber";

export default function WorkCards() {
  return (
    <div className="grid grid-cols-2 gap-y-5 mt-10 gap-x-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
      {workList.map((card, index) => (
        <div
          key={index}
          className="w-full max-w-[19.5rem] mx-auto flex flex-col justify-center items-center bg-workCard rounded-[2rem] p-4"
        >
          <Image
            src={`/work/icon${index + 1}.svg`}
            height={60}
            width={60}
            alt="icon"
            className="mb-3"
          />
          {/* <h3 className="text-center text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] font-inter font-semibold text-white mb-2">
            {card.number}
          </h3> */}
          <Counter
            number={separateNumberAndLabel(card.number).num}
            label={separateNumberAndLabel(card.number).label}
          />

          <span className="text-center text-sm sm:text-base md:text-lg leading-[.0938rem] text-white">
            {card.title}
          </span>
        </div>
      ))}
    </div>
  );
}
