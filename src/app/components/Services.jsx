import React from "react";
import { servicesData, assets } from "../../../assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="w-full py-16 px-4 md:px-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-lg font-ovo text-gray-600 mb-3">What I Offer</h4>
          <h2 className="text-4xl md:text-5xl font-ovo font-semibold mb-6">
            My Services
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto font-ovo leading-relaxed">
            I specialize in developing high-quality, responsive, and efficient
            websites using cutting-edge web technologies. My primary goal is to
            help you achieve your business goals and create a memorable user
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map(({ title, subtitle, icon }, index) => (
            <div
              key={index}
              className=" border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-light hover:bg-lightHover hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start text-left h-full"
            >
              {/* Icon */}
              <div className="mb-4">
                <Image src={icon} alt="icon" className="w-6" />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {title}
              </h3>

              <p className="text-gray-700 font-medium font-ovo">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
