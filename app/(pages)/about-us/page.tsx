import About from "@/app/_components/about-us/about";
import OurStory from "@/app/_components/about-us/our-story";
import Team from "@/app/_components/about-us/team";
import Values from "@/app/_components/about-us/values";
import Footer from "@/app/_components/footer";
import ContactUs from "@/app/_components/footer/components/contact-us";
import FQA from "@/app/_components/footer/components/fqa";
import OurClient from "@/app/_components/our-client.tsx";
import SubPagesHeader from "@/app/_usefulcomponents/subpages-header";
import Header from "@/app/_usefulcomponents/subpages-header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `We bridge the gap between vision and impact, building next-gen solutions that redefine the boundaries of what's possible.`,
};
export default function Page() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-10">
        <SubPagesHeader
          heading="Making an impact that matters."
          paragraph="We build robust digital solutions across industries with a highly creative and dedicated team of professionals."
        />
        <About />
        <OurStory />
        <Values />
      </div>
      <OurClient />
      <Footer>
        <Team />
        <FQA />
        <ContactUs />
      </Footer>
    </>
  );
}
