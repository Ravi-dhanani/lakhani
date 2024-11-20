"use client";
import { Icons } from "@/common/icons";
import LinkButton from "@/common/LinkButton";
import SectionHeading from "@/common/SectionHeading";
import { resources } from "@/components/data/resources";
import { IResources } from "@/components/types/services";
import Image from "next/image";
import Slider from "react-slick";

export default function Resources() {
  const settings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="blog" className="pt-28 pb-5">
      <SectionHeading firstTitle="Featured" secondTitle="Resources" />
      <div className="container px-5 py-16 mx-auto">
        <Slider {...settings} className="flex flex-wrap sm:-m-4 -mx-4 -mb-10">
          {resources?.map((item: IResources, index: number) => (
            <div className="sm:mb-0 mb-6 p-5" key={index}>
              <div className="h-[175px] rounded-[10px] overflow-hidden">
                <Image
                  alt="content"
                  className="h-full w-full object-cover object-center"
                  src={item.image}
                  width={900}
                  height={900}
                />
              </div>
              <p className="text-base font-medium text-[#2D3748] leading-relaxed my-3">
                How to Build a Scalable Application up to 1 Million Users on AWS
              </p>
              <div className="flex justify-end">
                <LinkButton textColor="secondary" icon={<Icons.LinkIcon />}>
                  Read More
                </LinkButton>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
