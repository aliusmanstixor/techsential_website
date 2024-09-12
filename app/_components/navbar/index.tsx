"use client";
import { NavItems } from "@/lib/type";
import { navItems } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Navbar() {
  const pathName = usePathname();
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  // Handle click outside the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  function handleDropdown(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    setDropdown((c) => !c);
    e.stopPropagation();
  }

  function handleOpen() {
    setOpen((c) => !c);
  }

  return (
    <header ref={ref}>
      <nav
        className={`max-w-screen-2xl  mx-auto py-5 flex items-center justify-between xl:px-10 px-5 ${
          inView ? "md:topNormal" : "md:topAnimation"
        } md:animationText`}
      >
        {/* LOGO */}
        <div className="xl:max-w-[15.3125rem] max-w-[185px]">
          <Image
            src={"/navbar/logo.svg"}
            height={53.1}
            width={245}
            alt="techsential website logo"
            className="object-cover"
          />
        </div>
        {/* NAVITEMS */}
        <div className="hidden justify-between basis-[calc(100%-330px)] md:flex items-center">
          <ul className="flex justify-center items-center lg:gap-10 md:gap-5 md:py-3 lg:py-4 lg:px-5 md:px-4 shadow-custom rounded-full">
            {navItems.map((link: NavItems, index: number) => (
              <li key={index}>
                <Link
                  className={`font-syneBold lg:text-lg text-xs text-primary animation hover:text-purple ${
                    pathName === link.path
                      ? "border-border rounded-full !hover:text-purple text-purple px-3 py-2 bg-light border"
                      : ""
                  }`}
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li
              onClick={handleDropdown}
              className="font-syneBold lg:text-lg md:text-xs text-primary border border-border rounded-full flex items-center justify-evenly py-[.475rem] gap-3 bg-light lg:px-4 md:px-3 relative cursor-pointer"
            >
              <span>Pages</span>
              <span className="w-[1rem] h-[.4375rem] inline-block">
                <Image
                  src={"/navbar/arrowDown.svg"}
                  height={7}
                  width={16}
                  alt="Arrow Down Icon"
                  className={`w-[1rem] h-[.4375rem] animation ${
                    dropdown ? "rotate-180" : ""
                  }`}
                />
              </span>
              <div
                ref={dropdownRef}
                className={`bg-light font-syneSemiBold shadow-custom border border-border absolute w-32 rounded-lg lg:top-[3.4375rem] md:top-10 p-2 z-30 animation ${
                  dropdown ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col">
                  {navItems.map((link: NavItems, index: number) => (
                    <li
                      key={index}
                      className="hover:bg-purple p-2 hover:text-white animation"
                    >
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          <div className="p-2 flex justify-center items-center rounded-full shadow-custom bg-white">
            <button className="flex justify-between py-3 gap-2 px-4 items-center bg-secondary rounded-full group font-syneBold lg:text-lg md:text-xs text-white">
              <span className="text-nowrap">Contact Us</span>
              <span className="flex-shrink-0">
                <Image
                  src={"/navbar/arrowRight.svg"}
                  height={16}
                  width={16}
                  alt="Arrow Down Icon"
                  className="group-hover:translate-x-2 transition-all duration-300 ease-in-out xl:mr-0 md:mr-3"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed  z-50 bg-gradient-to-r from-[#5037E4] via-[#7E4CEE] to-[#A576FF] top-0 right-0 left-0 bottom-0 justify-between basis-[calc(100%-330px)] md:hidden items-center ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-all duration-300 ease-linear`}
        >
          <ul className="flex flex-col justify-center items-center lg:gap-10 md:gap-5 md:py-3 lg:py-4 lg:px-5 md:px-4 gap-5 mt-20 rounded-full">
            {navItems.map((link: NavItems, index: number) => (
              <li key={index}>
                <Link
                  className={`font-syneBold text-lg text-primary animation ${
                    pathName === link.path
                      ? "border-border hover:text-purple rounded-full text-purple px-3 py-2 bg-light border"
                      : "hover:text-white"
                  }`}
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li
              onClick={handleDropdown}
              className="font-syneBold text-lg text-primary border border-border rounded-full flex items-center justify-evenly py-[.475rem] gap-3 bg-light px-4 relative cursor-pointer"
            >
              <span>Pages</span>
              <span className="w-[1rem] h-[.4375rem] inline-block">
                <Image
                  src={"/navbar/arrowDown.svg"}
                  height={7}
                  width={16}
                  alt="Arrow Down Icon"
                  className={`animation ${dropdown ? "rotate-180" : ""}`}
                />
              </span>
            </li>
            <div
              className={`bg-light font-syneSemiBold shadow-custom border border-border w-3/4 rounded-lg left-32 top-0 p-2 z-30 animation ${
                dropdown ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col">
                {navItems.map((link: NavItems, index: number) => (
                  <li
                    key={index}
                    className="hover:bg-purple p-2 hover:text-white animation"
                  >
                    <Link href={link.path}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </ul>

          <div className="p-2 flex justify-center mt-10 items-center rounded-full">
            <button className="flex justify-between py-3 gap-2 px-6 items-center bg-secondary rounded-full group font-syneBold lg:text-lg md:text-xs text-white">
              <span className="text-nowrap">Contact Us</span>
              <span>
                <Image
                  src={"/navbar/arrowRight.svg"}
                  height={16}
                  width={16}
                  alt="Arrow Down Icon"
                  className="group-hover:translate-x-3 transition-all duration-300 ease-in-out"
                />
              </span>
            </button>
          </div>
          <button
            onClick={handleOpen}
            className={`md:hidden w-11 h-11 rounded-full bg-gradient-to-r from-[#5037E4] via-[#7E4CEE] to-[#A576FF] hover:opacity-80 transition-opacity duration-200 flex justify-center items-center absolute top-5 right-5`}
          >
            <Image
              src={"/navbar/burger.svg"}
              width={27}
              height={17}
              alt={"Burger icon"}
            />
          </button>
        </div>

        {/* Button */}
        <div className="md:hidden">
          <button
            onClick={handleOpen}
            className={`md:hidden w-11 h-11 rounded-full bg-gradient-to-r from-[#5037E4] via-[#7E4CEE] to-[#A576FF] hover:opacity-80 transition-opacity duration-200 flex justify-center items-center`}
          >
            <Image
              src={"/navbar/burger.svg"}
              width={27}
              height={17}
              alt={"Burger icon"}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
