"use client";
import { Icons } from "@/common/icons";
import SectionHeading from "@/common/SectionHeading";
import Image from "next/image";
import { FC, useRef, useState } from "react";
import Slider from "react-slick";
import { clientReview } from "../../data/review";
import { IClientReview } from "../../types/services";

interface ArrowProps {
  onClick?: () => void;
  visible?: boolean;
}

const NextArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-32 right-0 cursor-pointer text-black transform -translate-y-1/2"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        border: "2px solid #57007B",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <Icons.NextArrow />
    </div>
  );
};

const PrevArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-32 left-0 cursor-pointer text-black transform -translate-y-1/2"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        border: "2px solid #57007B",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <Icons.PrevArrow />
    </div>
  );
};

export default function ClientReview() {
  const sliderRef = useRef<Slider | null>(null);
  const avatarSliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settingsMain = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    afterChange: (index: number) => {
      setCurrentSlide(index);
      avatarSliderRef.current?.slickGoTo(index);
    },
    nextArrow: <NextArrow visible={currentSlide < clientReview.length} />,
    prevArrow: <PrevArrow visible={currentSlide > 0} />,
  };

  const settingsAvatar = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    afterChange: (index: number) => {
      setCurrentSlide(index);
      sliderRef.current?.slickGoTo(index);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="border-b-[1px] border-primary px-10 py-20">
      <SectionHeading
        firstTitle="Why customers love"
        secondTitle="working with us"
      />
      <Slider {...settingsMain} ref={sliderRef} className="h-auto md:h-72">
        {clientReview.map((review: IClientReview, index: number) => (
          <section className="text-center py-10" key={index}>
            <div className="container mx-auto px-5">
              <div className="xl:w-1/2 lg:w-3/4 w-96 text-center md:w-[550px] mx-auto">
                <div className="flex gap-4 justify-between">
                  <div>
                    <Icons.quotes1 />
                  </div>
                  <p className="text-lg text-[#718096] leading-relaxed">
                    {review?.review}
                  </p>

                  <div className="flex flex-col justify-end">
                    <Icons.quotes2 />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Slider>
      <Slider
        {...settingsAvatar}
        ref={avatarSliderRef}
        className="mt-4 px-0 sm:px-20"
      >
        {clientReview.map((item: IClientReview, index: number) => (
          <div key={index}>
            <div className={`flex flex-col justify-center items-center gap-3`}>
              <div className="relative h-21 w-21 rounded-full">
                <Image
                  src={item?.image}
                  alt="mainImage"
                  width={100}
                  height={100}
                  className="h-[85px] w-[85px] rounded-full object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    currentSlide === index ? "bg-none" : "bg-[#E7DAED99]"
                  }  bg-opacity-25 rounded-full`}
                ></div>
              </div>
              <div className="flex">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Image
                    key={index}
                    src="/assets/images/rating.png"
                    alt="rating"
                    width={17}
                    height={17}
                  />
                ))}
              </div>
              <div className="text-center">
                <h2
                  className={`${
                    currentSlide === index
                      ? "text-lg text-review font-bold"
                      : "text-base text-[#A0AEC0]"
                  } `}
                >
                  {item?.name}
                </h2>
                <h2
                  className={`${
                    currentSlide === index
                      ? "text-sm text-black font-normal"
                      : "text-xs text-[#CBD5E0]"
                  }`}
                >
                  {item.position}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
