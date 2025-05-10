import React from "react";
import Container from "./container";
import { BenefitData } from "./data";
import Image, { StaticImageData } from "next/image";

interface BulletPoint {
  title: string;
  desc: string;
  icon: React.ReactElement;
}

interface BenefitsProps {
  data: {
    title: string;
    desc: string;
    image: StaticImageData;
    bullets: BulletPoint[];
  };
  imgPos?: "right" | "left";
}

export default function Benefits(props: BenefitsProps) {
  const { data, imgPos = "right" } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-10 md:mb-20 lg:gap-10 lg:flex-nowrap">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="w-full max-w-md lg:max-w-full">
            <Image
              src={data.image}
              width="521"
              height="482"
              alt="Benefits"
              placeholder="blur"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full mt-8 lg:mt-0 lg:w-1/2 ${
            imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full">
              <h3 className="max-w-2xl mt-0 text-2xl font-bold leading-snug tracking-tight text-gray-800 sm:text-3xl lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-3 sm:py-4 text-base sm:text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-3 sm:mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

interface BenefitProps {
  title: string;
  icon: React.ReactElement;
  desc: string;
}

function Benefit({ title, icon, desc }: BenefitProps) {
  return (
    <div className="flex items-start mt-6 md:mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-9 h-9 sm:w-11 sm:h-11">
        {React.cloneElement(icon, {
          className: "w-5 h-5 sm:w-7 sm:h-7 text-indigo-50",
          'aria-hidden': "true"
        } as React.SVGProps<SVGSVGElement>)}
      </div>
      <div>
        <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200">
          {title}
        </h4>
        <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </div>
  );
}