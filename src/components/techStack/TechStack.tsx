"use client";
import SectionHeading from "@/common/SectionHeading";
import Image from "next/image";
import { useState } from "react";
import { stepsData } from "../data/techStack";
import { ITechStack } from "../types/services";

export default function TechStack() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className="py-20">
      <SectionHeading firstTitle="Our" secondTitle="Tech Stack" />
      <div className="container mx-auto px-5 py-10 h-80">
        <div className="flex flex-wrap justify-center gap-5 mb-20 relative">
          <div className="relative flex flex-wrap justify-center gap-2 sm:gap-5 w-full">
            {stepsData.map((step: ITechStack, index: number) => (
              <div
                key={index}
                className="relative inline-flex items-center cursor-pointer space-x-10"
                onClick={() => handleStepClick(index)}
              >
                <span
                  className={`relative w-fit text-sm sm:text-lg text-secondary  font-medium cursor-pointer mx-3 md:mx-4 xl:mx-6 after:block after:content-[''] after:absolute after:h-[2.4px] after:bg-primary after:w-full after:scale-x-0 ${
                    activeStep === index
                      ? "font-bold after:scale-x-100 bg-gradient-to-r from-[#f76680]  to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text"
                      : "after:hover:scale-x-100 font-medium"
                  } after:transition after:duration-300 after:origin-center`}
                >
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center relative">
          {stepsData.map(
            (step: ITechStack, stepIndex) =>
              activeStep === stepIndex && (
                <div
                  key={stepIndex}
                  data-aos="fade-up"
                  data-aos-offset={-40}
                  className="flex flex-wrap max-w-3xl justify-center gap-4 sm:gap-8"
                >
                  {step.image.map((image: string, imageIndex: number) => (
                    <div key={imageIndex} className="w-16 h-16 sm:w-20 sm:h-20">
                      <Image
                        src={image}
                        alt={`${step.name} Image ${imageIndex + 1}`}
                        height={900}
                        width={900}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
