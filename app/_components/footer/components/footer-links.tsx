import { contactLinks, itServices, quickLinks } from "@/utils/data";
import Image from "next/image";

import FooterLinkColumn from "./footer-link-column";

export default function FooterLinks() {
  return (
    <div className="mt-32 grid lg:gap-y-0 gap-y-10 lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-[12.5rem,1fr,14.75rem]">
      <FooterLinkColumn
        label="Quick Link"
        className="lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 row-start-2 row-end-3 col-start-1 col-end-2"
        links={quickLinks}
      />
      <FooterLinkColumn
        label="IT Services"
        className="lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3 row-start-2 row-end-3 col-start-2 col-end-3"
        links={itServices}
      />
      <FooterLinkColumn
        label="Contact Us"
        className="lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4 row-start-3 row-end-4 col-start-1 col-end-3"
        links={contactLinks}
      />

      <div className="lg:row-start-1 lg:row-end-2 lg:col-start-4 lg:col-end-5 row-start-1 row-end-2 col-start-1 col-end-3 ">
        <Image
          src={"/footer/logo.png"}
          width={245}
          height={53}
          alt="Techsential Logo"
        />
        <p className="max-w-[22.0625rem] text-xl text-footerText mt-5">
          Established in 2022, we’re a global IT Services provider delivering
          innovative business solutions and technology services worldwide.
        </p>
      </div>
    </div>
  );
}
