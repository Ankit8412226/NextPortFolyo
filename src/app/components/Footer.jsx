import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets"; // Ensure the assets path is correct

const Footer = () => {
  return (
    <footer className="w-full px-[12%] py-10 scroll-mt-20 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Ankit Kumar
        </h2>

        {/* Email with Icon */}
        <a
          href="mailto:ankitpandey841226@gmail.com"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition mb-4"
        >
          <Image
            src={assets.mail_icon} // Ensure this icon exists in assets
            alt="Email"
            width={20}
            height={20}
          />
          <span>ankitpandey841226@gmail.com</span>
        </a>

        {/* Horizontal Line */}
        <hr className="w-full max-w-md border-t border-gray-300 my-6" />

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Ankit8412226"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-kumar-33b3b9233/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          Copyright © 2023 Ankit Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
