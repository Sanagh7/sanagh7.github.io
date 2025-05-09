import { useState, useEffect, useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/san.jpg";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Cyber Security Enthusiastic",
  ];

  useEffect(() => {
    let timeout;
    const currentText = texts[currentIndex];

    if (displayText.length < currentText.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } else {
      // Wait before starting to erase
      timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, texts]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 sm:pb-0">
      {/* Simplified background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span>Hi, I'm </span>
            <span className="gradient-text">Sanandan Ghimire</span>
          </h1>

          <div className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-light text-neutral-400">
            <span className="gradient-text inline-block min-h-[1.5em]">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-8 sm:mb-12 max-w-3xl text-base sm:text-lg text-neutral-400 px-4"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16 sm:mb-0"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white hover-scale w-full sm:w-auto"
            >
              <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                View Projects
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white hover-scale w-full sm:w-auto"
            >
              <span className="absolute h-full w-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                Contact Me
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="fixed sm:absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-neutral-400 transition-colors hover:text-cyan-400"
          >
            <span className="mb-2 text-xs sm:text-sm">Scroll Down</span>
            <FaArrowDown className="animate-float text-sm sm:text-base" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
