"use client";

import Button from "@/common/Button";
import Lottie from "lottie-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import animationImage from "../../../public/assets/images/Animation - 1731565275586.json";
export default function HeroSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updateScrollPosition);

    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  useEffect(() => {
    if (scrollPosition >= 0 && scrollPosition <= 600) {
      setShowTypewriter(true);
    } else if (scrollPosition >= 2 && scrollPosition <= 600) {
      setShowTypewriter(true);
    }
  }, [scrollPosition]);

  return (
    <section className="relative overflow-hidden bg-white h-full  md:h-full xl:h-auto">
      <div className="flex flex-col md:flex-row items-center pt-[148px] mb-20 lg:mb-14 md:mb-20">
        <div className="flex flex-col md:items-start lg:flex-grow text-center md:text-left max-w-lg md:w-1/2 mb-16 md:mb-0">
          <h1 className="mb-4 title-font text-5xl font-[300] text-[#1A202C] leading-[58px]">
            Great
            <span className="bg-gradient-to-r from-[#c75ca9] via-[#bc74b8]  to-[#ba81c1] inline-block text-transparent bg-[#ba81c1] bg-clip-text font-extrabold mx-2">
              {showTypewriter && (
                <Typewriter
                  words={["Product"]}
                  loop={showTypewriter ? 1 : false}
                  cursor
                  typeSpeed={220}
                  deleteSpeed={50}
                  cursorColor="#57007b"
                  delaySpeed={1000}
                  onLoopDone={() => setShowTypewriter(false)}
                />
              )}
            </span>
            is
            <br className="hidden lg:inline-block" />
            <span className="font-extrabold"> built by great </span>
            <span className="bg-gradient-to-r from-[#c75ca9] via-[#ae68a9] to-[#9469be] inline-block text-transparent bg-[#ba81c1] bg-clip-text font-extrabold">
              {showTypewriter && (
                <Typewriter
                  words={["teams"]}
                  loop={1}
                  cursor
                  typeSpeed={220}
                  deleteSpeed={50}
                  cursorColor="#57007b"
                  delaySpeed={1000}
                  onLoopDone={() => setShowTypewriter(false)}
                />
              )}
            </span>
          </h1>

          <p className="text-gray-600 leading-9 text-lg font-normal mb-8 md:mb-16 px-6 md:px-0">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <Button bgColor="default">Let’s get started!</Button>
        </div>
        <div className="lg:max-w-2xl md:w-1/2 w-full">
          <Lottie
            animationData={animationImage}
            loop={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <Image
        src="/assets/images/Ellipse.png"
        alt="decorative element"
        width={80}
        height={80}
        className="absolute -bottom-14 md:-bottom-10 left-1/3 transform -translate-x-1/2"
      />
    </section>
  );
}
