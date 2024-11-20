"use client";
import { footer } from "@/components/data/footer";
import { Inspiration } from "next/font/google";
import Image from "next/image";
import { Icons } from "./icons";

const inspiration = Inspiration({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const iconClass = {
  className: "tw-w-3 tw-h-2 tw-text-inherit",
  color: "inherit",
};
export default function Footer() {
  return (
    <div className="bg-white pt-4">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-10">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 text-center sm:text-left lg:pt-12 pt-10">
          <div className="col-span-full lg:col-span-2">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-2xl md:text-3xl text-black font-normal mb-4 lg:-mt-2">
                <Icons.Logo />
                <span className={`${inspiration.className}`}>
                  Ik developers
                </span>
              </div>
              <p className="text-[#718096] mb-6 sm:pr-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Image
                src="/assets/images/footer.png"
                alt="footer image"
                height={150}
                width={150}
                className="mx-auto sm:mx-0"
              />
            </div>
          </div>

          <div className="col-span-full sm:col-span-1">
            <h4 className="text-lg text-center sm:text-start tracking-widest text-secondary font-bold mb-4">
              Links
            </h4>
            <nav className="flex flex-col gap-4 text-base text-[#718096] font-normal">
              {footer.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  className="hover:bg-gradient-to-r hover:from-[#f76680]  hover:to-[#57007b] hover:text-transparent bg-clip-text"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-2 lg:pr-20">
            <h4 className="text-lg tracking-widest text-secondary font-bold mb-4">
              Contact us
            </h4>
            <p className="text-[#718096] leading-[30px] mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. +923183561921
            </p>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end mb-16">
          <div className="grid grid-cols-4 gap-3">
            <div className="flex justify-center items-center bg-white h-12 w-12 p-2 rounded-full drop-shadow-[0px_-1px_7px_rgba(0,0,0,0.25)] cursor-pointer">
              <Icons.facebook {...iconClass} />
            </div>
            <div className="flex justify-center items-center bg-white h-12 w-12 p-2 rounded-full drop-shadow-[0px_-1px_7px_rgba(0,0,0,0.25)] cursor-pointer">
              <Icons.instagram {...iconClass} />
            </div>
            <div className="flex justify-center items-center bg-white h-12 w-12 p-2 rounded-full drop-shadow-[0px_-1px_7px_rgba(0,0,0,0.25)] cursor-pointer">
              <Icons.twitter {...iconClass} />
            </div>
            <div className="flex justify-center items-center bg-white h-12 w-12 p-2 rounded-full drop-shadow-[0px_-1px_7px_rgba(0,0,0,0.25)] cursor-pointer">
              <Icons.linkedin {...iconClass} />
            </div>
          </div>
        </div>
      </footer>
      <div className="border-t py-8 text-center text-sm text-secondary font-normal">
        © 2024 Copyright by IK Developers. All rights reserved.
      </div>
    </div>
  );
}
