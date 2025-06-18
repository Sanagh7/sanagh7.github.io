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
    <div className="relative border-b border-neutral-800/50 pb-24 pt-20">
      {/* Enhanced background elements */}
      <div className="absolute -right-64 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl animate-pulse" style={{ animationDuration: "8s" }}></div>
      <div className="absolute -left-64 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }}></div>

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
                <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-white">
                  My Journey
                </h3>
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
                <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-white">
                  My Philosophy
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  I believe in creating solutions that are not only functional but also intuitive and enjoyable to use. 
                  My approach combines technical expertise with creative thinking to solve complex problems and deliver 
                  exceptional user experiences.
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

        {/* Experience Cards Grid */}
        <div className="mt-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-2xl sm:text-3xl font-semibold text-white mb-10"
          >
            What I <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Do</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-xl p-6 shadow-xl group"
              >
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r ${card.color} text-white text-xl`}>
                    {card.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="text-sm text-neutral-400">
                  {card.description}
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
