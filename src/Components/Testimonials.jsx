import { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "../constants";
import { FaQuoteLeft, FaPaw, FaFeather, FaDove } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-sliding effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex, isAnimating]);

  return (
    <div className="relative border-b border-neutral-800/50 py-24">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-900/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 -z-10 h-72 w-72 rounded-full bg-purple-900/5 blur-3xl"></div>

      {/* Floating animal elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-10 top-20 text-cyan-500/20"
      >
        <FaPaw className="h-8 w-8" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute right-20 top-40 text-purple-500/20"
      >
        <FaFeather className="h-6 w-6" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute left-1/4 bottom-20 text-blue-500/20"
      >
        <FaDove className="h-7 w-7" />
      </motion.div>

      <h2 className="mb-16 text-center text-5xl font-light tracking-tight text-white">
        <span className="mr-2 inline-block rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-2 py-1 text-3xl font-bold text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </span>
        Testimonials
      </h2>

      <div className="relative mx-auto max-w-4xl px-4">
        {/* Testimonial Carousel */}
        <div
          ref={containerRef}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 shadow-xl transition-all duration-300 hover:shadow-cyan-900/20 sm:p-12"
        >
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-6xl text-cyan-500 opacity-10 sm:text-8xl">
            <FaQuoteLeft />
          </div>

          {/* Decorative accent */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>

          <div className="relative z-10">
            <div
              className={`transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-neutral-800/50"
              >
                {/* Animal paw print effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -right-8 -top-8 text-cyan-500/20"
                >
                  <FaPaw className="h-16 w-16" />
                </motion.div>

                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl transition-all duration-500 group-hover:from-cyan-500/20 group-hover:to-blue-500/20"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-neutral-800">
                      <img
                        src={
                          TESTIMONIALS[activeIndex].name === "Sarthak Pokhrel"
                            ? "https://avatars.githubusercontent.com/u/54739445?v=4"
                            : TESTIMONIALS[activeIndex].image
                        }
                        alt={TESTIMONIALS[activeIndex].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {TESTIMONIALS[activeIndex].name}
                      </h4>
                      <p className="text-sm text-neutral-400">
                        {TESTIMONIALS[activeIndex].role}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-neutral-300 leading-relaxed">
                    <span className="mr-1 text-2xl text-cyan-500">"</span>
                    {TESTIMONIALS[activeIndex].text}
                    <span className="ml-1 text-2xl text-cyan-500">"</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:-translate-x-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`relative h-2.5 w-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-cyan-500 w-8"
                    : "bg-neutral-700 hover:bg-neutral-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === activeIndex && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-cyan-500 opacity-75"></span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
