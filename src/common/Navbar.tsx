import { routes } from "@/components/data/routes";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("/");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: 0, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};
export default function Navbar() {
  const router = useRouter();
  const ids = ["About us", "services", "caseStudies", "blog", "works", "hire"];
  const activeId = useScrollspy(ids, 54);

  return (
    <nav className="hidden lg:flex gap-12 ">
      {routes.map((route, index) => (
        <div key={index} className="block pb-1">
          <h6
            className={`relative w-fit text-base text-secondary cursor-pointer after:block after:content-[''] after:absolute after:h-[2.4px] after:bg-primary after:w-full after:scale-x-0 ${
              activeId === ids[index]
                ? "font-bold after:scale-x-100 bg-gradient-to-r from-[#f76680]  to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text"
                : "after:hover:scale-x-100 font-medium"
            } after:transition after:duration-300 after:origin-center`}
            onClick={() => {
              router.push(route.path);
            }}
          >
            {route.name}
          </h6>
        </div>
      ))}
    </nav>
  );
}
