import { motion } from "framer-motion";
import aboutImg from "../assets/san.jpg";
import { ABOUT_TEXT } from "../constants";
import {
  FaDownload,
  FaUserGraduate,
  FaCode,
  FaLaptopCode,
  FaRocket,
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

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-light tracking-tight text-white">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Get to know me better, my journey, skills and what drives my passion
            for web development
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center">
          <motion.div
            className="w-full lg:w-1/2 lg:pr-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative mx-auto max-w-md lg:mx-0">
              {/* Image frame with gradient border */}
              <div className="relative">
                <div className="absolute -inset-3 -z-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={aboutImg}
                    alt="Sanandan Ghimire"
                    className="w-full transform rounded-xl transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Experience highlights */}
              <div className="relative mt-8 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center rounded-lg bg-neutral-800/50 p-4 backdrop-blur-sm">
                  <span className="text-3xl font-bold text-cyan-400">3+</span>
                  <span className="text-center text-sm text-neutral-400">
                    Years of Experience
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-neutral-800/50 p-4 backdrop-blur-sm">
                  <span className="text-3xl font-bold text-cyan-400">30+</span>
                  <span className="text-center text-sm text-neutral-400">
                    Projects Completed
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-neutral-800/50 p-4 backdrop-blur-sm">
                  <span className="text-3xl font-bold text-cyan-400">20+</span>
                  <span className="text-center text-sm text-neutral-400">
                    Happy Clients
                  </span>
                </div>
                <div className="flex flex-col items-center rounded-lg bg-neutral-800/50 p-4 backdrop-blur-sm">
                  <span className="text-3xl font-bold text-cyan-400">10+</span>
                  <span className="text-center text-sm text-neutral-400">
                    Technologies
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 w-full lg:mt-0 lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Biography */}
            <div className="mb-8 space-y-6">
              <p className="text-lg leading-relaxed text-neutral-300">
                {ABOUT_TEXT}
              </p>

              {/* Highlighted services/skills */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <FaLaptopCode size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-white">
                      Frontend Development
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Creating responsive, engaging user interfaces with modern
                      frameworks
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <FaCode size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-white">
                      Backend Development
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Building robust server-side applications and APIs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <FaUserGraduate size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-white">
                      Continuous Learning
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Always expanding my knowledge in new technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <FaRocket size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-white">
                      Performance Optimization
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Creating fast, efficient applications with optimal user
                      experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV button */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="/resume.pdf"
                download="Sanandan_Ghimire_Resume.pdf"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white"
              >
                <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-8 py-3.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  <FaDownload className="mr-2" /> Download CV
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
