import React, { useEffect, useRef } from "react";
import { projectData } from "../../../assets/assets";
import Image from "next/image";

const MyWork = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    // Use a simpler animation approach that works reliably on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Simple fade-in animation for all devices
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("translate-y-0");
            entry.target.classList.remove("translate-y-10");
          }
        });
      },
      {
        root: null,
        threshold: 0.15, // Increase threshold slightly
        rootMargin: "20px", // Add some margin to trigger earlier
      }
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".card-animate");
      cards.forEach((card) => {
        observer.observe(card);
      });

      return () => {
        cards.forEach((card) => {
          observer.unobserve(card);
        });
      };
    }
  }, []);

  return (
    <div
      id="work"
      className="w-full py-10 md:py-16 px-4 md:px-10 scroll-mt-24 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h4 className="text-base md:text-lg font-ovo text-gray-600 mb-2 md:mb-3">
            Some Projects
          </h4>
          <h2 className="text-3xl md:text-5xl font-ovo font-semibold mb-4 md:mb-6">
            My Latest Work
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto font-ovo leading-relaxed mb-6 md:mb-10">
            Welcome to my web development portfolio! Explore a collection of
            projects showcasing my expertise in full-stack development.
          </p>
        </div>

        {/* Cards Container */}
        <div ref={cardsRef} className="flex flex-col space-y-6 md:space-y-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`card-animate opacity-0 translate-y-10 border border-gray-200 rounded-xl shadow-sm   hover:border-gray-300 hover:shadow-light hover:bg-lightHover transition-all duration-500 ease-out cursor-pointer w-full flex flex-col md:flex-row ${
                index === 0 ? "delay-100" : `delay-${(index + 1) * 100}`
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                  layout="fill"
                />
              </div>

              <div className="p-5 md:p-6 flex flex-col justify-between md:w-2/3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 font-medium font-ovo">
                    {project.description}
                  </p>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold mt-3 md:mt-4 inline-block hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
