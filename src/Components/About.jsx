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
  FaBriefcase,
  FaServer,
  FaShieldAlt,
  FaTools
} from "react-icons/fa";

// Experience cards data
const experienceCards = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description: "Creating responsive, accessible, and performant user interfaces with modern frameworks and libraries.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Building scalable APIs, database management, and server architecture for robust applications.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Cyber Security",
    description: "Implementing security best practices, vulnerability assessments, and penetration testing.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaTools />,
    title: "DevOps & Tools",
    description: "Streamlining development workflows using containerization, CI/CD pipelines, and cloud services.",
    color: "from-pink-500 to-orange-500",
  },
];

const About = () => {
  return (
    <div className="relative border-b border-neutral-800/50 pb-24 pt-20 overflow-hidden bg-[#060921]">
      {/* Enhanced background elements */}
      <div className="absolute -right-32 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl animate-pulse" style={{ animationDuration: "8s" }}></div>
      <div className="absolute -left-32 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }}></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me as a
            developer.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column - Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img
                src={aboutImg}
                alt="About Me"
                className="h-full w-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/30 to-transparent"></div>
              
              {/* Floating skill badges */}
              <motion.div 
                className="absolute top-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-4 py-2 text-white font-medium text-sm shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                style={{ transition: "all 3s ease-in-out", animationIterationCount: "infinite", animationDuration: "5s" }}
              >
                <FaCode className="inline mr-2" /> Frontend Developer
              </motion.div>
              
              <motion.div 
                className="absolute top-24 left-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-2 text-white font-medium text-sm shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                style={{ transition: "all 4s ease-in-out", animationIterationCount: "infinite", animationDuration: "6s", animationDelay: "1s" }}
              >
                <FaServer className="inline mr-2" /> Backend Developer
              </motion.div>
              
              <motion.div 
                className="absolute bottom-24 right-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-4 py-2 text-white font-medium text-sm shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                style={{ transition: "all 3.5s ease-in-out", animationIterationCount: "infinite", animationDuration: "5.5s", animationDelay: "0.5s" }}
              >
                <FaShieldAlt className="inline mr-2" /> Security Expert
              </motion.div>
            </div>
            
            {/* Background glow */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl animate-pulse" style={{ animationDuration: "5s" }}></div>
            <div className="absolute -top-6 -left-6 -z-10 h-40 w-40 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "1s" }}></div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  {ABOUT_TEXT}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  I aim to work on backend systems and AI-driven solutions that solve real-world problems at scale.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white"
                >
                  <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
                  <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
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
                  <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0">
                    <FaDownload className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Download Resume
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quick Info Section */}
        <div className="mt-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-2xl sm:text-3xl font-semibold text-white mb-10"
          >
            Quick <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Info</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Backend-Focused Developer",
              "2+ Years Practical Experience",
              "Built ERP & Learning Platforms",
              "Interested in AI & R&D"
            ].map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-800 rounded-xl p-5 group hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"></div>
                <p className="text-base sm:text-lg text-neutral-300 group-hover:text-white transition-colors duration-300">
                  {info}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
