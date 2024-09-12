import Image from "next/image";
import Link from "next/link";

export default function ProjectLinks({ href }: { href: string }) {
  return (
    <Link href={href} className="mt-5 group inline-flex  gap-3 items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5037E4] to-[#A576FF] hover:from-[#372bb0] font-syneBold group-hover:to-[#8941e6] transition-all duration-300 ease-in-out text-lg ">
        See Project Details
      </span>
      <Image
        src={"/project/arrow.svg"}
        height={17}
        width={16}
        alt="arrow svg"
        className="group-hover:translate-x-3 transition-all duration-300 ease-in-out"
      />
    </Link>
  );
}
