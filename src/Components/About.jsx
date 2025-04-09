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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
            <img
              src={aboutImg}
              alt="Sanandan Ghimire"
              className="relative h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-800/50"></div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-neutral-400">
              {ABOUT_TEXT}
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-2">
                  <FaRocket className="text-xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Continuous Learning
                  </h3>
                  <p className="text-neutral-400">
                    I'm passionate about staying at the forefront of technology.
                    Currently exploring:
                  </p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-400">
                    <li>Advanced AI/ML implementations</li>
                    <li>Blockchain and Web3 technologies</li>
                    <li>Cloud-native architectures</li>
                    <li>Cybersecurity best practices</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2">
                  <FaCode className="text-xl text-purple-400" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Tech Exploration
                  </h3>
                  <p className="text-neutral-400">
                    Always experimenting with new tools and frameworks to expand
                    my skill set and deliver innovative solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white transition-transform hover:scale-105"
              >
                <FaEnvelope /> Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-6 py-3 text-white backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:bg-neutral-800/50"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
