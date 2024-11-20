"use client";
import Drawer from "@/common/Drawer";
import { Inspiration } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import { Icons } from "./icons";
const inspiration = Inspiration({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className="fixed w-full top-0 z-50 bg-white border-b border-white shadow-custom "
      ref={drawerRef}
    >
      <div className="flex items-center mx-auto max-w-screen-2xl h-[79px] md:px-6 py-[10px] px-4">
        <header className="flex items-center justify-between w-full">
          <div
            className={`inline-flex items-center gap-2.5 text-2xl font-normal text-black md:text-3xl ${inspiration.className}`}
          >
            <Icons.Logo />
            Ik developers
          </div>
          <Navbar />
          <Button bgColor="secondary" className="hidden lg:block">
            Contact us
          </Button>

          <div className="inline-flex lg:hidden items-center justify-center gap-2 rounded-lg bg-secondary h-10 w-12">
            <button
              onClick={handleClick}
              className="flex flex-col justify-center items-center"
            >
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-[2px] w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-[2px] w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-[2px] w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
              ></span>
            </button>
          </div>
        </header>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
