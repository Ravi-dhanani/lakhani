"use client";

import { Icons } from "@/common/icons";
import { default as LinkButton } from "@/common/LinkButton";
import SectionHeading from "@/common/SectionHeading";
import Image from "next/image";
import { caseStudies } from "../data/caseStudies";
import { ICaseStudies } from "../types/services";

export default function CaseStudies() {
  return (
    <div className="relative flex flex-col gap-10 py-36 sm:py-28 md:py-28">
      <SectionHeading firstTitle="Our recent" secondTitle="Case studies" />
      <div className="flex flex-col gap-y-5 px-7">
        <div className="grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-2 gap-4 h-full">
          {caseStudies.map((item: ICaseStudies, index: number) => (
            <div
              key={index}
              style={{ backgroundColor: item.bgColor }}
              className="grid lg:grid-cols-2 md:grid-cols-1 border border-[#E7DAED] lg:rounded-tr-3xl lg:rounded-tl-xl rounded-t-2xl lg:rounded-bl-xl rounded-bl-3xl rounded-br-3xl group overflow-hidden"
            >
              <a className="relative h-64 lg:h-full w-full cursor-pointer">
                <Image
                  src={item.image}
                  loading="lazy"
                  alt="Case Study Image"
                  className="absolute inset-0 h-full w-full lg:rounded-xl rounded-t-2xl object-cover object-center transition-transform duration-500 transform group-hover:scale-110"
                  width={400}
                  height={400}
                />
              </a>

              <div className="flex flex-col gap-5 p-6 lg:p-10">
                <h2 className="md:text-2xl lg:text-[28px] text-lg text-gray-800 font-bold">
                  Website Design for SCFC Canada
                </h2>
                <p className="text-sm md:text-base text-[#4A5568] font-normal">
                  Born out of a vision, a single-minded objective that puts
                  service before anything else, Swift Clearance and Forwarding
                  Corp. surges forth to deliver the best services in the
                  shipping and logistics scenario. Its meteoric rise stems from
                  a solid foundation. The management boasts over 20 years of
                  rich and varied experience in the shipping and freight
                  forwarding industry.
                </p>
                <div className="flex justify-end">
                  <LinkButton textColor="primary" icon={<Icons.ArrowLeft />}>
                    Read more
                  </LinkButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <LinkButton textColor="primary" icon={<Icons.ArrowLeft />}>
            Read more case studies
          </LinkButton>
        </div>
      </div>

      <div className="absolute hidden sm:hidden md:block md:top-24 md:left-60 lg:top-28 lg:left-80 xl:top-28 xl:left-80">
        <Icons.caseStudies1 />
      </div>
      <div className="absolute md:-top-[75px] md:left-[80px] lg:-top-20 lg:left-20 xl:-top-20 xl:left-20">
        <Icons.caseStudies2 />
      </div>

      <div className="absolute md:-top-[75px] md:right-[80px] lg:-top-20 lg:right-20 xl:-top-20 xl:right-20">
        <Icons.caseStudies3 />
      </div>
      <div className="absolute hidden sm:block md:-top-[70px] md:left-[82px] lg:-top-[68px] lg:left-[78px] xl:-top-[68px] xl:left-[78px]">
        <Icons.caseStudies4 />
      </div>
      <div className="absolute hidden sm:block md:top-[85px] md:right-[195px] lg:top-[116px] lg:right-56 xl:top-[116px] xl:right-56">
        <Icons.caseStudies5 />
      </div>
    </div>
  );
}
