import { Icons } from "@/common/icons";
import SectionHeading from "@/common/SectionHeading";
import Image from "next/image";
import { works } from "../data/work";
import { IWorks } from "../types/services";

export default function Alcalineworks() {
  return (
    <div className="py-28">
      <SectionHeading
        firstTitle="How development"
        secondTitle="through Alcaline works"
      />
      <div className="hidden lg:block py-6 sm:py-8 lg:py-16">
        <div className="flex justify-center gap-10 xl:gap-20 w-full overflow-hidden">
          {works
            .filter((item) => ["#1", "#3", "#5"].includes(item.id))
            .map((item: IWorks, index: number) => (
              <div data-aos="fade-right" data-aos-offset={-40} key={index}>
                <div className="max-w-[299px] bg-white border rounded-[9px] p-6">
                  <div className="flex gap-4">
                    <h1 className="bg-gradient-to-r from-[#f76680] to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text text-lg font-bold">
                      {item.id}
                    </h1>
                    <h5 className="text-lg text-[#1A202C] font-bold mb-2">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-sm text-[#718096] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="relative flex py-10 h-full">
          <Icons.AlcalineworksLine />
          <Image
            src="/assets/images/trophy.png"
            alt="line"
            height={10}
            width={50}
            className="absolute top-3 -right-10"
          />
          <div className="absolute top-[9px] left-32 xl:left-52">
            <Icons.AlcalineworksUpAndDown />
          </div>
          <div className="absolute bottom-2 left-52 xl:left-72">
            <Icons.AlcalineworksUpAndDown />
          </div>
          <div className="absolute top-[9px] lg:right-[500px] xl:right-[580px]">
            <Icons.AlcalineworksUpAndDown />
          </div>
          <div className="absolute bottom-2 lg:right-[425px] xl:right-[507px]">
            <Icons.AlcalineworksUpAndDown />
          </div>
          <div className="absolute top-[9px] right-52">
            <Icons.AlcalineworksUpAndDown />
          </div>
          <div className="absolute bottom-2 right-32">
            <Icons.AlcalineworksUpAndDown />
          </div>
        </div>
        <div className="flex justify-end gap-10 xl:gap-20 w-full overflow-hidden">
          {works
            .filter((item) => ["#2", "#4", "#6"].includes(item.id))
            .map((item: IWorks, index: number) => (
              <div data-aos="fade-left" data-aos-offset={-40} key={index}>
                <div className="max-w-[299px] bg-white border rounded-[9px] p-6">
                  <div className="flex gap-4">
                    <h1 className="bg-gradient-to-r from-[#f76680] to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text text-lg font-bold">
                      {item.id}
                    </h1>
                    <h5 className="text-lg text-[#1A202C] font-bold mb-2">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-sm text-[#718096] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex lg:hidden py-6 sm:py-8 lg:py-10 px-4 md:px-0">
        <div className="flex flex-col gap-4 w-full">
          {works
            .filter((item) => ["#1", "#3", "#5"].includes(item.id))
            .map((item: IWorks, index: number) => (
              <div
                data-aos="fade-right"
                data-aos-offset={-40}
                key={index}
                className="relative pr-8"
              >
                <div className="max-w-[280px] bg-white border rounded-[9px] p-6">
                  <div className="flex gap-4">
                    <h1 className="bg-gradient-to-r from-[#f76680] to-[#57007b] inline-block text-transparent bg-clip-text text-lg font-bold">
                      {item.id}
                    </h1>
                    <h5 className="text-lg text-[#1A202C] font-bold mb-2">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-sm text-[#718096] font-normal">
                    {item.description}
                  </p>
                  <div className="absolute top-1/4 right-0 w-7 h-0.5 bg-red-500"></div>
                </div>
              </div>
            ))}
        </div>

        <div className="w-1 bg-red-500"></div>
        <div className="flex flex-col gap-4 w-full overflow-hidden">
          {works
            .filter((item) => ["#2", "#4", "#6"].includes(item.id))
            .map((item: IWorks, index: number) => (
              <div
                data-aos="fade-left"
                data-aos-offset={-40}
                key={index}
                className="relative flex justify-end pl-8"
              >
                <div className="max-w-[280px] bg-white border rounded-[9px] p-6">
                  <div className="flex gap-4">
                    <h1 className="bg-gradient-to-r from-[#f76680] to-[#57007b] inline-block text-transparent bg-clip-text text-lg font-bold">
                      {item.id}
                    </h1>
                    <h5 className="text-lg text-[#1A202C] font-bold mb-2">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-sm text-[#718096] font-normal">
                    {item.description}
                  </p>
                  <div className="absolute top-1/5 left-0 w-7 h-0.5 bg-red-500"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
