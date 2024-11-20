import { Icons } from "@/common/icons";
import Image from "next/image";

type Props = {
  name: string;
  review: string;
  image: string;
  position: string;
};
export default function SoftwareReview({
  image,
  review,
  name,
  position,
}: Props) {
  return (
    <div className="flex flex-col gap-4 py-0 md:py-4">
      <div className="flex items-center gap-2">
        <Icons.VerticalLine />
        <span className="text-base text-left lg:w-96 lg:text-wrap bg-gradient-to-r from-[#f76680]  to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text font-light leading-relaxed">
          {review}
        </span>
      </div>
      <div className="flex flex-row items-center gap-2 md:gap-4">
        <div className="h-10 w-10 bg-gray-100 md:h-10 md:w-10 rounded-full shadow-lg overflow-hidden">
          <Image
            src={image}
            loading="lazy"
            alt="Photo by Radu Florin"
            className="h-full w-full object-cover object-center"
            height={100}
            width={100}
          />
        </div>
        <div>
          <p className="sm:text-left md:text-base text-center text-black font-normal">
            {name}
          </p>
          <p className="sm:text-left md:text-xs text-sm text-[#718096]">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}
