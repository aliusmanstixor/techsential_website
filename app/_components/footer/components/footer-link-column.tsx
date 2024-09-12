import type { NavItems } from "@/lib/type";
import Link from "next/link";

type FooterLinkColumnProps = React.ComponentPropsWithRef<"div"> & {
  label: string;
  links: NavItems[];
};
export default function FooterLinkColumn({
  label,
  className,
  links,
}: FooterLinkColumnProps) {
  return (
    <div className={className}>
      <h3 className="font-syneBold text-2xl mb-5">{label}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                className="hover:underline text-xl text-footerText  hover:underline-offset-8 animation"
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
