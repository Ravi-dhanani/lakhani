"use client";
import { Icons } from "@/common/icons";
import LinkButton from "@/common/LinkButton";
import AOS from "aos";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import { servicesData } from "../../data/services";
interface ArrowProps {
  onClick?: () => void;
  visible?: boolean;
}
const icon = {
  className: "white",
  color: "white",
};
const NextArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute -bottom-6 right-5 cursor-pointer text-black"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#57007B",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Icons.NextArrow {...icon} />
    </div>
  );
};

const PrevArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute -bottom-6 right-20 z-50 cursor-pointer text-white"
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#57007B",
        border: "2px solid #57007B",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 10,
      }}
    >
      <Icons.PrevArrow {...icon} />
    </div>
  );
};

const CompanyInfo: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    loop: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
    nextArrow: <NextArrow visible={currentSlide < servicesData.length} />,
    prevArrow: <PrevArrow visible={currentSlide > 0} />,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <div className="relative bg-white overflow-hidden py-20">
      <Slider {...settings}>
        {servicesData.map((item, index) => (
          <section key={index} className="!inline-flex justify-center !w-full">
            <div className="container flex flex-col md:flex-row items-center px-10 sm:px-0 lg:py-20 md:py-20 py-10">
              <div className="flex flex-col md:items-start lg:flex-grow items-center text-center md:text-left md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-5">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex justify-center xl:justify-start lg:justify-start  md:justify-start">
                    <div className="h-[5px] w-[69px] bg-gradient-to-r from-[#f76680] to-[#57007b] inline-block"></div>
                  </div>
                  <div>
                    <h1
                      data-aos="fade-right"
                      data-aos-offset={-40}
                      className="text-3xl lg:max-w-[550px] sm:text-4xl !leading-[60px] md:text-5xl text-[#1A202C] font-normal mb-4"
                    >
                      Leading companies trust us
                      <span className="font-bold"> to develop software</span>
                    </h1>
                  </div>

                  <p
                    data-aos="fade-right"
                    data-aos-offset={-40}
                    className="text-lg sm:text-xl font-normal text-[#718096] leading-loose mb-8"
                  >
                    We
                    <a className="bg-gradient-to-r mx-1.5 from-[#f76680]  to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text">
                      add development capacity
                    </a>
                    to tech teams. Our value isn’t limited to building teams but
                    is equally distributed across the project lifecycle. We are
                    a custom software development company that guarantees the
                    successful delivery of your project.
                  </p>
                </div>
                <LinkButton textColor="secondary" icon={<Icons.LinkIcon />}>
                  See more Information
                </LinkButton>
              </div>

              <div
                data-aos="fade-left"
                data-aos-offset={-40}
                className="lg:max-w-lg md:w-1/2 sm:w-full mb-8 md:mb-0 lg:ml-10"
              >
                <Image
                  className="object-cover object-center rounded-[20px]"
                  alt="services"
                  src="/assets/images/companyInfo.png"
                  height={700}
                  width={700}
                  objectFit="cover"
                />
              </div>
            </div>
          </section>
        ))}
      </Slider>
      <div className="flex flex-col gap-3 container text-center mt-10 md:px-0 px-10">
        <div className="h-[5px] w-[69px] bg-gradient-to-r from-[#f76680] to-[#57007b] inline-block"></div>

        <h2 className="text-2xl !leading-[50px] sm:text-[35px] text-primary text-left font-normal mt-3">
          Meet the People
          <br className="inline-block" />
          <span className="text-primary font-bold">We are Working With</span>
        </h2>
      </div>
      <div className="absolute -top-10 left-2">
        <Image
          src="/assets/images/Ellipse.png"
          alt="decorative"
          width={80}
          height={80}
        />
      </div>
      <div className="absolute -bottom-14 md:-bottom-10 right-1/3 transform translate-x-1/2">
        <Image
          src="/assets/images/Ellipse.png"
          alt="decorative"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
