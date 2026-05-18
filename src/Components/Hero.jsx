"use client";

import { HERO_CONTENT } from "../constants";
import { FaArrowDown, FaEnvelope, FaCode, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#060921]">
      {/* SEO enhancement with additional name identifiers */}
      <div className="sr-only">
        <h1>Sanandan Ghimire - Portfolio</h1>
        <p>Also known as Sana Ghimire or simply Sana</p>
        <p>Backend Engineer, AI & R&D Enthusiast, Full Stack Developer</p>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10 bg-[#060921]">
        {/* Main gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-[400px] sm:h-[600px] w-[400px] sm:w-[600px] rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.03]"></div>
      </div>

      {/* Banner Content */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            {/* Name with elegant underline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-neutral-300 mb-2">
                Hi, I'm
              </h1>
              <div className="relative inline-block">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent pb-2">
                  Sanandan Ghimire
                </h2>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0, left: "50%" }}
                  animate={{ width: "100%", left: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </div>
            </motion.div>
            
            {/* Main Heading - Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mb-6"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {HERO_CONTENT.mainHeading}
              </h3>
            </motion.div>

            {/* Subheading - Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mb-8"
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto">
                {HERO_CONTENT.subheading}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="mb-12"
            >
              <p className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                {HERO_CONTENT.description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white w-full sm:w-auto shadow-lg shadow-cyan-500/20"
              >
                <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-gradient-x"></span>
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-8 py-4 text-base sm:text-lg transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <FaEnvelope className="mr-2.5 h-5 w-5" /> Let's Connect
                </span>
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium text-white w-full sm:w-auto border-2 border-neutral-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900/50 px-8 py-4 text-base sm:text-lg">
                  <FaCode className="mr-2.5 h-5 w-5 text-cyan-400" /> 
                  <span className="text-neutral-300 group-hover:text-white transition-colors">View Projects</span>
                </span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium text-white w-full sm:w-auto border-2 border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900/50 px-8 py-4 text-base sm:text-lg">
                  <FaFileAlt className="mr-2.5 h-5 w-5 text-purple-400" /> 
                  <span className="text-neutral-300 group-hover:text-white transition-colors">Resume</span>
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href="https://github.com/sanagh7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-neutral-800/50 border-2 border-neutral-700/50 group-hover:border-cyan-500 transition-all duration-300 backdrop-blur-sm">
                  <FaGithub className="text-neutral-400 group-hover:text-cyan-400 transition-colors h-6 w-6" />
                </div>
              </a>
              <a
                href="https://linkedin.com/in/sanandanghimire"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-neutral-800/50 border-2 border-neutral-700/50 group-hover:border-blue-500 transition-all duration-300 backdrop-blur-sm">
                  <FaLinkedin className="text-neutral-400 group-hover:text-blue-400 transition-colors h-6 w-6" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-neutral-500 hover:text-cyan-400 transition-colors group"
        >
          <span className="mb-2 text-xs font-light uppercase tracking-wider">Explore</span>
          <div className="p-2.5 rounded-full border-2 border-neutral-700/50 group-hover:border-cyan-500 transition-colors">
            <FaArrowDown className="text-base" />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
