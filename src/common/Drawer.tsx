"use client";

import { routes } from "@/components/data/routes";
import { Inspiration } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import Button from "./Button";
import { Icons } from "./icons";
const inspiration = Inspiration({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

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

export default function Drawer({ isOpen, setIsOpen }: Props) {
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const ids = ["About us", "services", "caseStudies", "blog", "works", "Hire"];
  const activeId = useScrollspy(ids, 54);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);

  return (
    <div
      className={`fixed bg-white h-screen w-64 border border-r top-0 left-0 z-40 overflow-y-auto p-4 transition-transform ${
        isOpen ? "translate-x-0 z-50 drop-shadow-2xl" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between ">
        <div
          className={`inline-flex items-center gap-2.5 text-2xl font-normal text-black md:text-3xl ${inspiration.className}`}
        >
          <Icons.Logo />
          Ik developers
        </div>
        <div>
          <button
            type="button"
            onClick={toggleDrawer}
            className="inline-flex items-center justify-center bg-secondary w-8 h-8 rounded-lg   text-white"
          >
            <Icons.Close />
          </button>
        </div>
      </div>

      <div className="py-5  overflow-y-auto">
        <nav className="flex flex-col gap-4">
          {routes.map((route, index) => (
            <div key={index} className="px-2">
              <h6
                className={`relative w-fit text-base text-secondary cursor-pointer after:block after:content-[''] after:absolute after:h-[2.4px] after:bg-primary after:w-full after:scale-x-0 ${
                  activeId === ids[index]
                    ? "font-bold after:scale-x-100 bg-gradient-to-r from-[#f76680]  to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text"
                    : "after:hover:scale-x-100 font-medium"
                } after:transition after:duration-300 after:origin-center`}
                onClick={() => {
                  router.push(route.path);
                  setIsOpen(false);
                }}
              >
                {route.name}
              </h6>
            </div>
          ))}
        </nav>
      </div>
      <Button bgColor="secondary">Contact us</Button>
    </div>
  );
}
