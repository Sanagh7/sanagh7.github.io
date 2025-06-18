import { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import { FaArrowDown, FaEnvelope, FaCode, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* SEO enhancement with additional name identifiers */}
      <div className="sr-only">
        <h1>Sanandan Ghimire - Portfolio</h1>
        <p>Also known as Sana Ghimire or simply Sana</p>
        <p>Full Stack Developer, Software Developer, and Cyber Security Enthusiast</p>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute right-1/4 bottom-1/4 h-[250px] sm:h-[400px] w-[250px] sm:w-[400px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Banner Content */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mt-20 md:mt-0">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-3xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Sanandan Ghimire
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-6 text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-300 h-[40px] sm:h-[50px]"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Software Developer',
                  2000,
                  'Cyber Security Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyan-400"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mx-auto mb-8 max-w-2xl text-base sm:text-lg lg:text-xl text-neutral-400 leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white w-full sm:w-auto"
              >
                <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
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
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <FaCode className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> View Projects
                </span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white w-full sm:w-auto"
              >
                <span className="absolute h-full w-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <FaFileAlt className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Resume
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-6"
            >
              <a
                href="https://github.com/sanagh7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaGithub className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a
                href="https://linkedin.com/in/sanandanghimire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaLinkedin className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-neutral-400 transition-colors hover:text-cyan-400"
        >
          <span className="mb-2 text-xs sm:text-sm">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowDown className="text-sm sm:text-base" />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
