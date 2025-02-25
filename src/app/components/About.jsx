import Image from "next/image";
import React from "react";
import { assets, infoList, toolsData } from "../../../assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-4 md:px-[8%] lg:px-[12%] py-12 md:py-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h4 className="text-center mb-2 text-lg md:text-xl font-ovo">
          Introduction
        </h4>
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-ovo mb-10 md:mb-16">
          About me
        </h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-64 sm:w-80 lg:w-96 flex-shrink-0">
            <Image
              src={assets.pp}
              alt="user"
              className="w-full rounded-3xl shadow-md"
              priority
            />
          </div>

          <div className="flex-1 w-full">
            <p className="mb-10 md:mb-14 text-lg font-ovo text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
              I am a full-stack developer, passionate about creating innovative
              and user-friendly applications. I have worked on various projects,
              from small-scale projects to large-scale enterprise applications.
              I am always eager to learn and improve my skills, and I am excited
              to share my knowledge with others.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {infoList.map(({ icon, title, description }, index) => (
                <li
                  key={index}
                  className="border border-gray-300 rounded-xl p-5 md:p-6 cursor-pointer hover:shadow-light hover:-translate-y-1 hover:bg-lightHover transition-all duration-500  "
                >
                  <Image src={icon} alt={title} width={32} height={32} />
                  <h3 className="my-3 md:my-4 font-semibold text-gray-800 text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </li>
              ))}
            </ul>
            <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>
            <ul className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition duration-500"
                >
                  <Image
                    src={tool}
                    alt={`Tool ${index}`}
                    width={20}
                    height={20}
                    className="w-5"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
