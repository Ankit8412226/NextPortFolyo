import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "../../../assets/assets";

const Header = () => {
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

  // Child animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Button container variants
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2,
      },
    },
  };

  // Button variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  return (
    <section id="home" className="mt-24">
      <motion.div
        className="w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-2"
          initial={{ opacity: 0, rotateY: 180 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={assets.pp}
            alt="Ankit Kumar profile"
            width={148}
            height={148}
            priority
            className="rounded-full w-32 sm:w-28 md:w-32 h-auto object-cover border-2 border-gray-200"
          />
        </motion.div>

        <motion.h3
          className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-ovo"
          variants={itemVariants}
        >
          Hii I'm Ankit Kumar{" "}
          <motion.div
            animate={{
              rotate: [0, 15, -5, 15, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <Image
              src={assets.hand_icon}
              alt="Waving hand"
              width={24}
              height={24}
              className="w-5 sm:w-6 h-auto"
            />
          </motion.div>
        </motion.h3>

        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-ovo leading-tight mb-4"
          variants={itemVariants}
        >
          <motion.span
            initial={{ display: "inline-block" }}
            animate={{
              color: ["#000000", "#3b82f6", "#000000"],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            Full Stack Web Developer
          </motion.span>{" "}
          Turning Ideas into Impact

        </motion.h1>

        <motion.p
  className="max-w-2xl mx-auto font-ovo text-sm sm:text-base md:text-lg text-gray-700 mb-6"
  variants={itemVariants}
>
  I am a Full Stack Developer currently working at Suh Tech Private Limited, with internship experience at Farmershop, Buildmyn, and Seorce, along with five completed freelancing projects.
</motion.p>


        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
          variants={buttonContainerVariants}
        >
          <motion.a
            href="#contact"
            className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-800 transition-colors"
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Image
                src={assets.right_arrow_white}
                alt="Arrow Icon"
                width={16}
                height={16}
                className="w-3.5 sm:w-4 h-auto"
              />
            </motion.div>
          </motion.a>
          <motion.a
            href="/AnkitCv1.pdf"
            download
            className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 border rounded-full border-gray-500 flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-100 transition-colors"
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            My Resume
            <motion.div
              animate={{
                rotate: [0, 0, 180, 180, 0],
                scale: [1, 1, 1.2, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Image
                src={assets.download_icon}
                alt="Download Icon"
                width={16}
                height={16}
                className="w-3.5 sm:w-4 h-auto"
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
