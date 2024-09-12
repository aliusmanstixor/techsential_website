import { socialLinks } from "@/utils/data";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="mt-16 relative z-10  border-t border-gray-500">
      <div className=" flex justify-between pt-10 items-center md:flex-row flex-col md:gap-y-0 gap-y-5">
        <ul className="flex md:gap-3 gap-1 items-center ">
          {socialLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.path}
                  className="py-2 hover:scale-105 hover:-translate-y-1 animation inline-block  px-4 rounded-full border border-footerText bg-transparent md:text-xl text-sm"
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className=" md:text-xl text-lg">
          <span className="font-syneRegular">Copyright ©</span>{" "}
          <span className="font-syneSemiBold">Techsential</span>
        </div>
      </div>
    </div>
  );
}
