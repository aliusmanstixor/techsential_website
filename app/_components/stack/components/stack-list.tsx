import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function StackList() {
  return (
    <Marquee>
      {[
        {
          src: "/stack/image1.png",
          width: 150,
          height: 98,
          alt: "Stack image 1",
        },
        {
          src: "/stack/image2.png",
          width: 94,
          height: 94,
          alt: "Next.js image",
        },
        {
          src: "/stack/image3.png",
          width: 98,
          height: 98,
          alt: "React.js image",
        },
        {
          src: "/stack/image4.png",
          width: 128,
          height: 128,
          alt: "Nest.js image",
        },
        {
          src: "/stack/image5.png",
          width: 116,
          height: 116,
          alt: "Docker image",
        },
        {
          src: "/stack/image6.png",
          width: 160,
          height: 160,
          alt: "Python image",
        },
      ].map((image, index) => (
        <div
          key={index}
          className="bg-workCard xl:mx-7 mx-3 md:w-[12.5625rem] h-[6.25rem] w-[6.25rem] md:h-[12.5625rem] flex justify-center items-center rounded-2xl p-5"
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="object-cover"
          />
        </div>
      ))}
    </Marquee>
  );
}
