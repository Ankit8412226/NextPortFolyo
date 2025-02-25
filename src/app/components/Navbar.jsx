import React, { useRef, useEffect, useState } from "react";
import { assets } from "../../../assets/assets";
import Image from "next/image";

const Navbar = () => {
  const sideMenuRef = useRef();

  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Open menu"]')
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-50 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="Header Background"
          layout="responsive"
          priority
          className="w-full"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        } bg-white/50 backdrop-blur-md`}
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center cursor-pointer mr-4 sm:mr-14"
        >
          <h1 className="text-2xl sm:text-3xl font-outfit font-semibold flex items-center">
            Ankit
            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full ml-2"></span>
          </h1>
        </a>

        {/* Navigation Links */}
        <ul
          className={`hidden md:flex items-center gap-4 lg:gap-8 rounded-full px-6 lg:px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } `}
        >
          <li className="font-ovo hover:text-red-500 transition-colors">
            <a href="#home">Home</a>
          </li>
          <li className="font-ovo hover:text-red-500 transition-colors">
            <a href="#about">About me</a>
          </li>
          <li className="font-ovo hover:text-red-500 transition-colors">
            <a href="#services">Services</a>
          </li>
          <li className="font-ovo hover:text-red-500 transition-colors">
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-2 sm:gap-4">
          <button aria-label="Toggle dark mode">
            <Image
              src={assets.moon_icon}
              alt="Dark mode toggle"
              width={24}
              className="w-5 sm:w-6"
            />
          </button>
          <a
            className="hidden font-ovo md:flex items-center gap-2 px-4 lg:px-10 py-2 border border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
            href="#contact"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow Icon"
              width={12}
              className="w-3"
            />
          </a>
          <button
            onClick={openMenu}
            className="block ml-2 md:hidden"
            aria-label="Open menu"
          >
            <Image
              src={assets.menu_black}
              alt="Menu icon"
              width={24}
              className="w-5 sm:w-6"
            />
          </button>
        </div>

        {/* Mobile Menu - Fixed positioning with overlay */}
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-40 opacity-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity:
              sideMenuRef.current?.style.transform === "translateX(0)"
                ? "1"
                : "0",
            pointerEvents:
              sideMenuRef.current?.style.transform === "translateX(0)"
                ? "auto"
                : "none",
          }}
        ></div>

        <div
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out"
        >
          <button
            onClick={closeMenu}
            className="absolute right-6 top-6 p-2"
            aria-label="Close menu"
          >
            <Image
              src={assets.close_black}
              alt="Close menu"
              className="w-5 cursor-pointer"
            />
          </button>
          <li
            onClick={closeMenu}
            className="font-ovo list-none hover:text-red-500 transition-colors"
          >
            <a href="#home" className="block py-2">
              Home
            </a>
          </li>
          <li
            onClick={closeMenu}
            className="font-ovo list-none hover:text-red-500 transition-colors"
          >
            <a href="#about" className="block py-2">
              About me
            </a>
          </li>
          <li
            onClick={closeMenu}
            className="font-ovo list-none hover:text-red-500 transition-colors"
          >
            <a href="#services" className="block py-2">
              Services
            </a>
          </li>
          <li
            onClick={closeMenu}
            className="font-ovo list-none hover:text-red-500 transition-colors"
          >
            <a href="#contact" className="block py-2">
              Contact me
            </a>
          </li>
          <a
            className="font-ovo flex items-center justify-center gap-2 px-6 py-2 mt-4 border border-gray-500 rounded-full hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
            href="#contact"
            onClick={closeMenu}
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
