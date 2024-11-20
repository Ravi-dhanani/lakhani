import { company } from "@/components/data/company";
import { ICompany } from "@/components/types/services";
import Slider from "react-slick";

export default function OurClients() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="h-[202px] bg-background border-b-[1px] border-primary">
      <Slider {...settings} className="flex justify-center items-center h-full">
        {company.map((item: ICompany, index: number) => (
          <div className="flex justify-center items-center px-5" key={index}>
            <img src={item.image} className="w-auto h-20 object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
