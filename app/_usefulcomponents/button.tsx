import Image from "next/image";

type ButtonProps = React.ComponentPropsWithRef<"button">;

export default function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button
      className={`${className} bg-gradient-to-br from-[#5037E4] to-[#A576FF] px-6 py-2 text-white  hover:from-[#372bb0] hover:to-[#8941e6] transition-all duration-300 ease-in-out rounded-full gap-3 flex justify-center items-center group border border-white text-[1.125rem] font-syneSemiBold h-[3.75rem]`}
      onClick={onClick}
    >
      {children}
      <Image
        alt="techsential website button"
        src={"/button/SVG.svg"}
        width={16}
        height={16}
        className="group-hover:translate-x-3 transition-all duration-300 ease-in-out"
      />
    </button>
  );
}
