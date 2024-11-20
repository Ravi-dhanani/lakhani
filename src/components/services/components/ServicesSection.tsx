"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { servicesData } from "../../data/services";

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);
  const totalSlides = servicesData.length;

  const settings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerPadding: "60px",
    slidesToShow: 5,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 500,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="relative bg-background border-b-[1px] border-primary py-36 sm:py-28">
      <h2 className="text-4xl font-bold text-black text-center">
        Services We Offer
      </h2>

      <Slider ref={sliderRef} {...settings}>
        {servicesData.map((item, index) => (
          <div className="px-2" key={index}>
            <div
              className={`my-10 p-[2px] rounded-lg bg-transparent transition-all duration-300 ${
                currentSlide === index
                  ? "flex justify-center transition-all bg-gradient-to-br from-pink-500 to-purple-700  transform duration-300 translate-y-4"
                  : ""
              }`}
            >
              <div className={`bg-white rounded-lg shadow-card -w-sm p-6`}>
                <div className="w-[58px] h-[58px] p-[1px] rounded-full bg-gradient-to-br from-pink-500 to-purple-700 my-2">
                  <div className="bg-white rounded-full p-[11px]">
                    <Image
                      src={item.icon}
                      alt="icon"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>

                <span className="bg-gradient-to-r from-[#f76680]  to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text text-xl font-semibold tracking-tight">
                  {item.title}
                </span>
                <p className="text-gray-500 font-normal my-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8">
        {servicesData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              width: currentSlide === index ? "16px" : "13px",
              height: currentSlide === index ? "16px" : "13px",
              background:
                index === currentSlide
                  ? "linear-gradient(225deg, #F76680 0%, #57007B 100%)"
                  : "#F9F9FF",
              borderRadius: "50%",
              border: "1px solid #CBD5E0",
              margin: "0 5px",
              cursor: "pointer",
              transition: "background 0.3s, transform 0.3s",
              transform: currentSlide === index ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-20 right-20 hidden md:block">
        <div className="flex items-center gap-1">
          <span className="text-base text-[#A0AEC0] font-medium">
            0{currentSlide + 1}
          </span>
          <div className="h-1 w-28 bg-gray-200 rounded-full">
            <div
              className="h-1 bg-[#57007B] rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="text-base font-medium text-[#57007B]">
            0{totalSlides}
          </span>
        </div>
      </div>
    </div>
  );
}
