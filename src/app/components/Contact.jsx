import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { motion } from "framer-motion";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Focus state for input fields
  const inputFocus = {
    scale: 1.01,
    borderColor: "#000",
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ce55fee9-62c2-484b-8e9a-94fa60313548", // Replace with your actual Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div
      id="contact"
      className="w-full px-4 md:px-[12%] py-16 md:py-24 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] relative"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-12 left-6 w-16 h-16 md:w-24 md:h-24 opacity-10 rounded-full bg-blue-500 -z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-10 w-20 h-20 md:w-32 md:h-32 opacity-10 rounded-full bg-purple-500 -z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto"
      >
        <motion.h4
          variants={itemVariants}
          className="text-base text-center md:text-lg font-ovo text-gray-600 mb-2 md:mb-3"
        >
          Connect With Me
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-center text-3xl md:text-5xl font-ovo font-semibold mb-4"
        >
          Get in touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-center text-gray-700 max-w-2xl mx-auto font-ovo leading-relaxed mb-8 md:mb-12"
        >
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </motion.p>

        <motion.form
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-100"
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          {/* Status message */}
          {submitStatus && (
            <div
              className={`p-4 mb-6 rounded-lg text-center ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <motion.div variants={formItemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1 ml-1"
              >
                Your Name
              </label>
              <motion.input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                required
                className="w-full p-3 outline-none border border-gray-300 rounded-lg bg-white/70 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                whileFocus={inputFocus}
                value={formData.name}
                onChange={handleChange}
              />
            </motion.div>

            <motion.div variants={formItemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1 ml-1"
              >
                Your Email
              </label>
              <motion.input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                required
                className="w-full p-3 outline-none border border-gray-300 rounded-lg bg-white/70 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                whileFocus={inputFocus}
                value={formData.email}
                onChange={handleChange}
              />
            </motion.div>
          </div>

          <motion.div variants={formItemVariants}>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1 ml-1"
            >
              Your Message
            </label>
            <motion.textarea
              id="message"
              rows={6}
              placeholder="Enter Your Message"
              required
              className="w-full p-4 outline-none border border-gray-300 rounded-lg bg-white/70 mb-6 transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              whileFocus={inputFocus}
              value={formData.message}
              onChange={handleChange}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="py-3 px-10 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>
                Submit now{" "}
                <Image
                  src={assets.right_arrow_white}
                  alt="icon"
                  className="w-4 ml-1"
                />
              </>
            )}
          </motion.button>

          {/* Web3Forms attribution */}
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
