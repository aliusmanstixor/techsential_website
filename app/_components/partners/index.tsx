"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
type PartnersProps = React.ComponentPropsWithRef<"div">;
export default function Partners({ className }: PartnersProps) {
  return (
    <div className={`py-20 mt-10 bg-light ${className}`}>
      <Marquee>
        {["cattlexpert", "stxior", "odc", "nuvomint", "connect", "brent"].map(
          (image, index) => {
            return (
              <div className="mx-10">
                <Image
                  key={index}
                  src={`/partners/${image}.png`}
                  width={339}
                  height={70}
                  alt={image}
                  className="h-[70px] w-full"
                />
              </div>
            );
          }
        )}
      </Marquee>
    </div>
  );
}
