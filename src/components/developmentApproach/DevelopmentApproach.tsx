"use client";
import SectionHeading from "@/common/SectionHeading";
import Image from "next/image";
import { developmentApproachData } from "../data/developmentApproach";
import { IDevelopmentApproach } from "../types/services";

export default function DevelopmentApproach() {
  return (
    <div className="flex flex-col gap-10 mx-auto px-4 py-32 sm:px-0">
      <SectionHeading
        firstTitle="Our design and"
        secondTitle="development approach"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden">
        {developmentApproachData.map(
          (data: IDevelopmentApproach, index: number) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-offset={-40}
            >
              <div className="group flex space-x-3 border bg-white border-primary  transition-transform duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg p-4 lg:p-5 xl:p-9">
                <div
                  className="flex justify-center items-center border border-primary max-w-[59px] max-h-[59px] rounded-[10px] p-2 transition-transform duration-1000 ease-in-out transform group-hover:rotate-[360deg]"
                  style={{ background: data.bgColor }}
                >
                  <Image
                    src={data.image}
                    alt="developmentImage"
                    width={100}
                    height={100}
                    className="transition-transform duration-300 ease-in-out transform"
                  />
                </div>

                <div className="flex flex-col">
                  <h1 className="text-xl text-[#1A202C] font-semibold">
                    {data.title}
                  </h1>
                  <p className="text-sm text-[#4A5568] font-normal">
                    Unlike other companies, we are a
                    <span
                      className="bg-clip-text text-transparent px-1 font-normal"
                      style={{
                        backgroundImage: data.textColor,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                      }}
                    >
                      UX first
                    </span>
                    development company. Projects are driven by designers,
                    ensuring that design and experiences translate seamlessly to
                    code.
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
