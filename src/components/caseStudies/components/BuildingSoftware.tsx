"use client";
import { Icons } from "@/common/icons";
import SectionHeading from "@/common/SectionHeading";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import SoftwareReview from "./SoftwareReview";

export default function BuildingSoftware() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-back",
    });
  }, []);
  return (
    <div className="py-20">
      <SectionHeading
        firstTitle="Way of building"
        secondTitle="Great Software"
      />
      <div className="flex flex-col gap-10 w-full py-12 px-7 sm:px-0">
        <div className="flex flex-wrap container mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <div
              data-aos="fade-up"
              data-aos-offset={-40}
              className="flex flex-wrap md:flex-col md:w-full lg:w-1/2 sm:w-full md:pb-10 md:pr-16"
            >
              <div className="flex flex-col gap-3 leading-relaxed max-w-full">
                <h1 className="text-[28px] text-black font-semibold">
                  Build the right team to scale
                </h1>
                <p className="text-lg text-black font-normal">
                  Finding the right talent is not easy. We help you find the
                  talent that suits your needs, follows your processes, and
                  sticks with you long term (not the case with freelancers).
                </p>
                <p className="text-lg text-black font-normal">
                  Our{" "}
                  <span className="bg-gradient-to-r from-[#f76680]  to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text">
                    delivery model
                  </span>{" "}
                  helps you cut costs and deliver within budget.
                </p>
              </div>
              <SoftwareReview
                image="https://s3-alpha-sig.figma.com/img/b9ad/da40/9ebf32654a8f9b76dff8ea4c280bafca?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hehM-h3L1NMSgOKmmwT2bvoEOwXtTk~6B8RNaIKS7ragbcKbFkvrlVq7CerFB39msvvV7UEp1fLK4mUV8mVr26TWNRDlSq9Pvkqt8Q~VhCs-dYsWKojS0BVBaMss2uYCtESk2k52mnzDuEUy4ZrvyyU52uY6j9SlzqcrzgzavgP3gNIfn4dahPpsO~G2KeTaRmXY3v6bK3aaagr7UqNs5~v7O8AJzhhSLdUmKW-uRaqz0KP~dfrEYqibWoCbUQ5tTC-1Xk4npI1F9fb7I1WmPiY9npi4HfCX7KYewFVgfs74i5A~VFnJJ7SRXku9tAiUHrQqCuLr~mGk16XIEJiCtw__"
                review="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules."
                name="Jeewa markram"
                position="CEO"
              />
            </div>
            <div
              data-aos="flip-up"
              data-aos-offset={-40}
              className="relative lg:w-1/2  w-full  md:mt-4 mt-6 sm:mt-0"
            >
              <Image
                className="w-full max-w-full h-full lg:h-[300px] xl:h-[400px] rounded-lg object-cover object-center"
                src="/assets/images/case_studies4.jpg"
                alt="stats"
                height={400}
                width={400}
              />
              <div
                style={{
                  zIndex: -10,
                }}
                className="absolute -top-5 -left-6"
              >
                <Icons.BuildingSoftware1 />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap container mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            <div
              data-aos="flip-up"
              data-aos-offset={-40}
              className="relative w-full lg:w-1/2"
            >
              <Image
                className="w-full h-full lg:h-[300px] xl:h-[400px] rounded-lg object-cover object-center"
                src="/assets/images/case_studies5.jpg"
                alt="stats"
                height={400}
                width={400}
              />
              <div className="absolute -top-3 -right-3 z-[-10]">
                <Icons.BuildingSoftware2 />
              </div>
              <div
                style={{
                  zIndex: -10,
                }}
                className="absolute -bottom-10 left-16 md:-bottom-8 md:left-16 lg:bottom-28 lg:left-36 xl:-bottom-8 xl:left-16"
              >
                <Icons.BuildingSoftware3 />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset={-40}
              className="flex flex-wrap md:flex-col md:w-full sm:w-full lg:w-1/2 md:pb-10 md:pr-16"
            >
              <div className="flex flex-col gap-3 leading-relaxed">
                <h1 className="text-[28px] text-black font-semibold">
                  Build the right team to scale
                </h1>
                <p className="text-lg text-black font-normal">
                  Finding the right talent is not easy. We help you find the
                  talent that suits your needs, follows your processes, and
                  sticks with you long term (not the case with freelancers).
                </p>
                <p className="text-lg text-black font-normal">
                  Our{" "}
                  <span className="bg-gradient-to-r from-[#f76680]  to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text">
                    delivery model
                  </span>{" "}
                  helps you cut costs and deliver within budget.
                </p>
              </div>
              <SoftwareReview
                image="https://s3-alpha-sig.figma.com/img/856d/c16d/8c993fc0b6409da94588939d643ff5f1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6RCieWuLpwQhzaZKCvbS-s56n9krxq0kkeWBZtNf-saHRLIuL3hfYPao4QCDZFWHG4-1FSO9C3mhtHRmCc-HDY-LT0sVp4~3YyEEg2J8ewbhwyD-m3N3ei3YD3~MpBnPEzHUIl-kun69BhzySww7lWRuYsyQaddjKf16sKcZvJJb5hXdq28u~IuRjWs4mcPUxHFpwgV-iYh~y6GZvEZBDk4a9mgtAJQ3CYgBvPCQe5zkSguvURjRUR6OCDMJXxqhPjNRQXDPCwk0~on6NkC6gmKb8w51ewgK3Y6SeTROYte9AnSFkImxGu6MkP9aWIo6b4MhTGRegv9CO1~qy1zrg__"
                review="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules."
                name="Jeewa markram"
                position="CEO"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap container mx-auto">
          <div
            data-aos="fade-up"
            data-aos-offset={-40}
            className="flex flex-wrap md:flex-col md:w-full sm:w-full lg:w-1/2 md:pb-10 md:pr-16"
          >
            <div className="flex flex-col gap-3 leading-relaxed">
              <h1 className="text-[28px] text-black font-semibold">
                Build the right team to scale
              </h1>
              <p className="text-lg text-black font-normal">
                Finding the right talent is not easy. We help you find the
                talent that suits your needs, follows your processes, and sticks
                with you long term (not the case with freelancers).
              </p>
              <p className="text-lg text-black font-normal">
                Our{" "}
                <span className="bg-gradient-to-r from-[#f76680]  to-[#57007b] inline-block text-transparent bg-red-200 bg-clip-text">
                  delivery model
                </span>{" "}
                helps you cut costs and deliver within budget.
              </p>
            </div>
            <SoftwareReview
              image="https://s3-alpha-sig.figma.com/img/45af/0693/89dff60943c6422ed208b79d6796c341?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6PzJu0oBxN7uf7-cziP~BqHJXpDrT6X2RO7Le4oe2hNZdIgNwjEm1dlwqZTJtqLmgeC1SsMwS0dOHP5vz~POZCctgZ4IAIwvkeCUsS4O4PNJUdXeo6oSgVQJZA-~R3gp6O5zkhhdBwgr6NtDvh-8Q2ek262MbjoGsKr6L-6RQSQn~m1XpSbQZkfkd-iZ1M8Tlz4TmWITrl9U8ny71IoFpFO0nEYW1K8VvMdXCOBfHWFW4YNBYblJ4wBy46HzHW-roN39lMmt0qLh0cjLdHLIcQNtnYTXNYrz0nLRFqTdksRNiOwQZSqZjB5U8OzIrXdJUkiGWYES5ZAkJeLfveH3w__"
              review="Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules."
              name="Jeewa markram"
              position="CTO"
            />
          </div>
          <div
            style={{
              zIndex: -10,
            }}
            data-aos="flip-up"
            data-aos-offset={-40}
            className="relative lg:w-1/2 w-full md:w-full mt-4 lg:mt-0"
          >
            <Image
              className="w-full h-full lg:h-[300px] xl:h-[400px] rounded-lg object-cover object-center"
              src="/assets/images/case_studies6.jpg"
              alt="stats"
              height={400}
              width={400}
            />
            <div
              style={{
                zIndex: -10,
              }}
              className="absolute -bottom-5 -left-5 md:-bottom-3 md:-left-4 lg:bottom-28 lg:-left-5 xl:-bottom-3 xl:-left-4"
            >
              <Icons.BuildingSoftware4 />
            </div>
            <div className="absolute -top-4 right-72 z-[-10]">
              <Icons.BuildingSoftware5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
