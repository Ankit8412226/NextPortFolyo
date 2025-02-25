import Image from "next/image";
import React from "react";
import { assets } from "../../../assets/assets";

const Header = () => {
  return (
    <section id="home" className="mt-24">
      <div className="w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4 px-4">
        <div className="mb-2">
          <Image
            src={assets.pp}
            alt="Ankit Kumar profile"
            width={148}
            height={148}
            priority
            className="rounded-full w-32 sm:w-28 md:w-32 h-auto object-cover border-2 border-gray-200"
          />
        </div>

        <h3 className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-ovo">
          Hii I'm Ankit Kumar{" "}
          <Image
            src={assets.hand_icon}
            alt="Waving hand"
            width={24}
            height={24}
            className="w-5 sm:w-6 h-auto"
          />
        </h3>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-ovo leading-tight mb-4">
          Full Stack Web Developer Based In Chandigarh
        </h1>

        <p className="max-w-2xl mx-auto font-ovo text-sm sm:text-base md:text-lg text-gray-700 mb-6">
          I am a Full Stack Developer from Bihar, India, with experience as an
          intern at Farmershop and Buildmyn, along with three completed
          freelancing projects.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
          <a
            href="#contact"
            className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-800 transition-colors"
          >
            Contact Me
            <Image
              src={assets.right_arrow_white}
              alt="Arrow Icon"
              width={16}
              height={16}
              className="w-3.5 sm:w-4 h-auto"
            />
          </a>
          <a
            href="/sample-resume.pdf"
            download
            className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 border rounded-full border-gray-500 flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-100 transition-colors"
          >
            My Resume
            <Image
              src={assets.download_icon}
              alt="Download Icon"
              width={16}
              height={16}
              className="w-3.5 sm:w-4 h-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
