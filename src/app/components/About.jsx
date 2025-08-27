import { motion } from "framer-motion";
import Image from "next/image";
import { assets, infoList, toolsData } from "../../../assets/assets";

const About = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // Image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  // Text content animation
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        delay: 0.5,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (item) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        delay: 0.6 + item * 0.1,
      },
    }),
  };

  // Tools animation variants
  const toolVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (item) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 1 + item * 0.07,
      },
    }),
  };

  return (
    <div
      id="about"
      className="w-full px-4 md:px-[8%] lg:px-[12%] py-12 md:py-20 scroll-mt-20"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h4
          className="text-center mb-2 text-lg md:text-xl font-ovo"
          variants={titleVariants}
        >
          Introduction
        </motion.h4>
        <motion.h2
          className="text-center text-4xl md:text-5xl lg:text-6xl font-ovo mb-10 md:mb-16"
          variants={titleVariants}
        >
          About me
        </motion.h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            className="w-64 sm:w-80 lg:w-96 flex-shrink-0"
            variants={imageVariants}
          >
            <Image
              src={assets.pp}
              alt="user"
              className="w-full rounded-3xl shadow-md"
              priority
            />
          </motion.div>

          <div className="flex-1 w-full">
          <motion.p
  className="mb-10 md:mb-14 text-lg font-ovo text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
  variants={textVariants}
>
  I am a full-stack developer passionate about building innovative and
  user-friendly applications. My experience ranges from small-scale projects
  to large-scale enterprise solutions. I’m always eager to learn, improve my
  skills, and share knowledge with others.
</motion.p>


            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {infoList.map(({ icon, title, description }, index) => (
                <motion.li
                  key={index}
                  className="border border-gray-300 rounded-xl p-5 md:p-6 cursor-pointer hover:shadow-light hover:-translate-y-1 hover:bg-lightHover transition-all duration-500"
                  variants={cardVariants}
                  custom={index}
                  // Removed the whileHover to keep your original hover effect
                >
                  <Image src={icon} alt={title} width={32} height={32} />
                  <h3 className="my-3 md:my-4 font-semibold text-gray-800 text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </motion.li>
              ))}
            </ul>
            <motion.h4
              className="my-6 text-gray-700 font-ovo"
              variants={textVariants}
            >
              Tools I use
            </motion.h4>
            <ul className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition duration-500"
                  variants={toolVariants}
                  custom={index}
                  // Removed the whileHover to keep your original hover effect
                >
                  <Image
                    src={tool}
                    alt={`Tool ${index}`}
                    width={20}
                    height={20}
                    className="w-5"
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
