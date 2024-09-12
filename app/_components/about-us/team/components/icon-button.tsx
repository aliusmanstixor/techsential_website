import Image from "next/image";

type IconButtonProps = React.ComponentPropsWithRef<"button"> & {
  left: boolean;
};

export default function IconButton({ left, className }: IconButtonProps) {
  return (
    <div className={className}>
      <button
        className={`relative group cursor-pointer z-10 h-[4.875rem] w-[4.875rem] rounded-full bg-gradient-to-br  from-[#5037E4] to-[#A576FF] p-2 ${
          left ? "custom-prev" : "custom-next"
        } `}
      >
        <div className="bg-secondary group-hover:bg-gradient-to-br group-hover:from-[#5037E4] group-hover:to-[#A576FF] animationText absolute top-[2px] bottom-[2px] left-[2px] right-[2px] rounded-full"></div>
        <Image
          src={"/about-us/team/arrow.svg"}
          width={13}
          height={26}
          alt="arrow svg"
          className={`absolute ${
            !left ? "rotate-180" : "rotate-0"
          } left-1/2 -translate-x-1/2 -translate-y-1/2`}
        />
      </button>
    </div>
  );
}
