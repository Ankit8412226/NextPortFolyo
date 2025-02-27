import React from "react";
import { servicesData, assets } from "../../../assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Paragraph animation variants
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        delay: 0.3,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (item) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        delay: 0.5 + item * 0.1,
      },
    }),
  };

  return (
    <section id="services" className="w-full py-16 px-4 md:px-10 scroll-mt-20">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="text-center mb-12">
          <motion.h4
            className="text-lg font-ovo text-gray-600 mb-3"
            variants={titleVariants}
          >
            What I Offer
          </motion.h4>
          <motion.h2
            className="text-4xl md:text-5xl font-ovo font-semibold mb-6"
            variants={titleVariants}
          >
            My Services
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto font-ovo leading-relaxed"
            variants={paragraphVariants}
          >
            I specialize in developing high-quality, responsive, and efficient
            websites using cutting-edge web technologies. My primary goal is to
            help you achieve your business goals and create a memorable user
            experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map(({ title, subtitle, icon }, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-light hover:bg-lightHover hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start text-left h-full"
              variants={cardVariants}
              custom={index}
              // No whileHover to preserve your original hover effects
            >
              {/* Icon */}
              <div className="mb-4">
                <Image src={icon} alt="icon" className="w-6" />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {title}
              </h3>

              <p className="text-gray-700 font-medium font-ovo">{subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
