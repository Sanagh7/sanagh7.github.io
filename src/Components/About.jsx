import { motion } from "framer-motion";
import aboutImg from "../assets/san.jpg";
import { ABOUT_TEXT } from "../constants";
import {
  FaDownload,
  FaUserGraduate,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="relative border-b border-neutral-800/50 pb-20 pt-20">
      {/* Decorative elements */}
      <div className="absolute -right-64 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl"></div>
      <div className="absolute -left-64 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and what drives me as a
              developer.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src={aboutImg}
                  alt="About Me"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 blur-xl"></div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-white">
                    My Journey
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400">
                    {ABOUT_TEXT}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-white">
                    My Approach
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400">
                    Always experimenting with new tools and frameworks to expand
                    my skill set and deliver innovative solutions.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white"
                  >
                    <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                      <FaEnvelope className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Let's Work Together
                    </span>
                  </motion.a>

                  <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white"
                  >
                    <span className="absolute h-full w-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                      <FaDownload className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Download Resume
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
