import { useState, useEffect, useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/san.jpg";
import { FaArrowDown, FaEnvelope, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="mb-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Sanandan Ghimire
              </span>
            </h1>
            <h2 className="mb-6 text-lg sm:text-xl lg:text-2xl font-medium text-neutral-400">
              {displayText}
            </h2>
            <p className="mx-auto lg:mx-0 mb-8 max-w-2xl text-sm sm:text-base lg:text-lg text-neutral-400">
              {HERO_CONTENT}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white w-full sm:w-auto"
              >
                <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <FaEnvelope className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Get in Touch
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white w-full sm:w-auto"
              >
                <span className="absolute h-full w-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <FaCode className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> View Projects
                </span>
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a
                href="https://github.com/sanagh7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a
                href="https://linkedin.com/in/sanandanghimire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-xl"></div>
              <img
                src={profilepic}
                alt="Profile"
                className="relative h-full w-full rounded-full object-cover ring-4 ring-neutral-800"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 -z-10 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

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
  );
};

export default Hero;
