"use client";
import Button from "@/app/_usefulcomponents/button";
import Heading from "@/app/_usefulcomponents/heading";
import Paragraph from "@/app/_usefulcomponents/paragraph";
import Image from "next/image";
import ProjectLinks from "./compontents/project-link";
import { useInView } from "react-intersection-observer";

export default function Project() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div className="xl:px-10 px-5">
      {/* Project Introduction */}
      <div className="grid md:grid-cols-2  overflow-hidden  grid-cols-1 mt-20  mb-10">
        <div ref={ref} className="max-w-[53.125rem] ">
          <Heading
            className={`${inView ? "normal" : "leftAnimation"} animationText`}
          >
            Our Projects
          </Heading>
          <Paragraph
            className={`${
              inView ? "normal" : "md:leftAnimation rightAnimation"
            } animationText`}
          >
            With a track record of successful projects and satisfied clients, we
            strive for excellence in every endeavor, ensuring that our best work
            becomes a catalyst for our client's success.
          </Paragraph>
        </div>
        <div className="md:flex md:justify-end md:mt-0 mt-5  hidden  justify-center items-center">
          <Button
            className={`max-w-[13.6875rem] w-full projectButton ${
              inView ? "normal" : "rightAnimation"
            } animationText`}
          >
            Explore More
          </Button>
        </div>
      </div>
      {/* Project Containers */}
      <div className="grid lg:sticky top-0 bg-white py-5 lg:grid-cols-[2fr,1fr] gap-5 grid-cols-1">
        <div className=" w-full h-full">
          <Image
            src={"/project/image1.png"}
            height={690}
            width={850}
            alt="project one png"
            className="w-full h-full object-cover rounded-[2rem]"
          />
        </div>
        <div className="bg-services py-10 px-6 h-full rounded-[2rem]">
          <h3 className="md:text-[2.5rem] md:leading-[3rem] text-[2rem] leading-[2.375rem]">
            EQ & You
          </h3>
          <p className="2xl:text-2xl md:text-xl text-primary text-sm font-syneSemiBold mt-7">
            The EI App is a comprehensive mobile application developed for
            emotional intelligence training. It includes features such as
            progress tracking, activity monitoring, and content from emotional
            intelligence expert Brent Darnell. Users can develop and improve
            their emotional intelligence skills while staying motivated and
            engaged with the app.
          </p>
          <ProjectLinks href="/" />
        </div>
      </div>

      <div className="grid lg:sticky top-0 bg-white py-5 items-center lg:grid-cols-[1fr,2fr] gap-5 mt-5 grid-cols-1">
        <div className="bg-services py-10 px-6 h-full rounded-[2rem] lg:order-none order-2">
          <h3 className="md:text-[2.5rem] md:leading-[3rem] text-[2rem] leading-[2.375rem]">
            CineConnect
          </h3>
          <p className="2xl:text-2xl md:text-xl text-primary text-sm font-syneSemiBold mt-7">
            The CineConnect app is a web and mobile platform designed to connect
            actors and directors in the entertainment industry. The app aims to
            bridge the gap between these two sides by providing a streamlined
            and efficient way for them to connect and collaborate. Techsential’s
            expertise in app development shines through this project,
            demonstrating our capability to create specialized, user-friendly
            applications that address specific industry needs.
          </p>
          <ProjectLinks href="/" />
        </div>
        <div className="lg:order-none order-1 h-full w-full">
          <Image
            src={"/project/image2.png"}
            height={690}
            width={850}
            alt="project two png"
            className="object-cover h-full w-full rounded-[2rem]"
          />
        </div>
      </div>

      <div className="grid lg:sticky top-0 bg-white py-5  items-center lg:grid-cols-[2fr,1fr] gap-5 mt-5 grid-cols-1">
        <div className="h-full w-full">
          <Image
            src={"/project/image3.png"}
            height={690}
            width={850}
            alt="project two png"
            className="object-cover w-full h-full rounded-[2rem]"
          />
        </div>
        <div className="bg-services py-10 px-6 h-full rounded-[2rem]">
          <h3 className="md:text-[2.5rem] md:leading-[3rem] text-[2rem] leading-[2.375rem]">
            Nuvomint
          </h3>
          <p className="2xl:text-2xl md:text-xl text-primary text-sm font-syneSemiBold mt-7">
            Nuvomint is a cutting-edge marketplace for NFTs, offering a platform
            where users can rate and trade NFTs. Developed by Techsential, the
            frontend is crafted with React Native, ensuring a smooth and
            responsive user experience. AWS handles the backend services,
            providing secure and reliable transactions through blockchain
            integration.
          </p>
          <ProjectLinks href="/" />
        </div>
      </div>
    </div>
  );
}
