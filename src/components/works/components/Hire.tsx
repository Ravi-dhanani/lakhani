import { Icons } from "@/common/icons";
const iconUpper = {
  className: "absolute -top-[53px] right-12 sm:-top-[55px] sm:right-[80px]",
};
const iconLower = {
  className: "absolute top-[75px] right-12 sm:top-[77px] sm:right-[80px]",
};
export default function Hire() {
  return (
    <section id="hire" className="pt-28 pb-5">
      <div className="grid grid-cols-2 gap-8 min-h-[250px] max-w-[1230px] bg-card rounded-lg my-12 mx-2 p-7 sm:p-12">
        <div className="flex flex-col justify-center">
          <h5 className="text-4xl text-black font-bold">
            Hire the best developers and designers around!
          </h5>
        </div>
        <div className="flex flex-col justify-center">
          <div className="relative flex justify-end">
            <button className="bg-buttonBackground h-[57px] w-[262px] border rounded-[5px]  text-base sm:text-lg font-bold py-[14px] px-6 cursor-pointer">
              Hire Top Developers
            </button>

            <Icons.upperArrow {...iconUpper} />
            <Icons.lowerArrow {...iconLower} />
          </div>
        </div>
      </div>
    </section>
  );
}
