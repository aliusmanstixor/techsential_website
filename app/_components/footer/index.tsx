import Image from "next/image";
import SocialLinks from "./components/social-links";
import FooterLinks from "./components/footer-links";

export default function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-secondary  md:px-10 px-5 relative pb-7 pt-20 mt-20  text-white">
      <div className="mx-auto max-w-screen-2xl">
        <Image
          src="/footer/mask.png"
          width={1908}
          height={1678}
          className="absolute w-full h-full -translate-x-1/2 top-0 left-1/2 bottom-0 right-0 z-[1]  "
          alt="grid "
        />
        <div className="relative z-10 ">
          {children}
          <FooterLinks />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
