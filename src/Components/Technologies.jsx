import { SKILLS } from "../constants";
import { RiReactjsLine, RiTerminalLine } from "react-icons/ri";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
} from "react-icons/tb";
import {
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiJest,
  SiDocker,
  SiPrisma,
  SiExpress,
  SiTerraform,
  SiLinux,
  SiGithubactions,
  SiKubernetes,
} from "react-icons/si";
import { DiRedis, DiSass, DiTerminal } from "react-icons/di";
import {
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaAws,
  FaServer,
  FaCodeBranch,
  FaJenkins,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FaRocket, FaCode as FaCodeIcon, FaUserGraduate } from "react-icons/fa";

// Map of technology names to their respective icons
const techIcons = {
  // Frontend
  React: <RiReactjsLine className="text-cyan-400" />,
  "Next.js": <TbBrandNextjs />,
  TypeScript: <TbBrandTypescript className="text-blue-500" />,
  Redux: <SiRedux className="text-purple-500" />,
  "Tailwind CSS": <TbBrandTailwind className="text-cyan-400" />,
  "SASS/SCSS": <DiSass className="text-pink-500" />,
  Vue: <SiRedux className="text-green-500" />,
  Angular: <SiRedux className="text-red-500" />,

  // Backend
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress />,
  GraphQL: <SiGraphql className="text-pink-600" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  PostgreSQL: <BiLogoPostgresql className="text-sky-700" />,
  Redis: <DiRedis className="text-red-700" />,
  Prisma: <SiPrisma className="text-teal-400" />,

  // DevOps & Tools
  Git: <FaGitAlt className="text-orange-600" />,
  Jest: <SiJest className="text-red-600" />,
  Docker: <SiDocker className="text-blue-600" />,
  AWS: <FaAws className="text-orange-400" />,
  "CI/CD": <SiGithubactions className="text-blue-500" />,
  Kubernetes: <SiKubernetes className="text-blue-500" />,
  Azure: <FaServer className="text-blue-600" />,
  Terraform: <SiTerraform className="text-purple-600" />,
  Jenkins: <FaJenkins className="text-red-500" />,
  Linux: <SiLinux className="text-yellow-400" />,

  // Cyber Security
  "Penetration Testing": <FaCodeBranch className="text-red-500" />,
  "Vulnerability Assessment": <FaServer className="text-orange-500" />,
  "Network Security": <FaServer className="text-blue-400" />,
  "OWASP Top 10": <FaCodeBranch className="text-red-400" />,
  "Ethical Hacking": <RiTerminalLine className="text-green-400" />,
  "Burp Suite": <FaServer className="text-orange-600" />,
  Wireshark: <FaServer className="text-blue-500" />,
  Metasploit: <RiTerminalLine className="text-red-500" />,
  "Secure Coding Practices": <FaCodeBranch className="text-cyan-400" />,
  "Security Auditing": <FaServer className="text-purple-400" />,

  // Miscellaneous
  Database: <FaDatabase className="text-gray-400" />,
  Bash: <DiTerminal className="text-gray-200" />,
  WebSockets: <FaServer className="text-gray-400" />,
  Microservices: <FaServer className="text-blue-300" />,
  REST: <FaServer className="text-blue-300" />,
  Firebase: <SiRedux className="text-yellow-500" />,
};

// Function to get icon for a technology, with a default backup
const getTechIcon = (techName) => {
  return techIcons[techName] || <FaDatabase className="text-gray-400" />;
};

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);

  // Memoize technology cards to prevent unnecessary re-renders
  const technologyCards = useMemo(() => {
    return SKILLS[activeCategory].technologies.map((tech, index) => (
      <motion.div
        key={tech}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="group flex flex-col items-center px-1 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 mb-4"
        onMouseEnter={() => setHoveredTech(tech)}
        onMouseLeave={() => setHoveredTech(null)}
      >
        <div
          className={`relative mb-1 rounded-lg border overflow-hidden bg-neutral-900/70 backdrop-blur-sm p-2 transition-all duration-300 
          ${
            hoveredTech === tech
              ? "border-cyan-500 shadow-lg shadow-cyan-500/20 scale-105"
              : "border-neutral-800 hover:border-cyan-700/70 hover:shadow-md hover:shadow-cyan-900/20"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-400">
            {getTechIcon(tech)}
          </div>
        </div>
        <span className="text-center text-[10px] sm:text-xs text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
          {tech}
        </span>
      </motion.div>
    ));
  }, [activeCategory, hoveredTech]);

  return (
    <div className="relative border-b border-neutral-800 pb-24">
      {/* Background effect */}
      <div className="absolute left-0 right-0 top-0 h-full w-full overflow-hidden -z-10">
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-cyan-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-900/20 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="mb-6 text-5xl font-light tracking-tight text-white">
            <span className="mr-2 inline-block rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-2 py-1 text-3xl font-bold text-white">
              <FaCode />
            </span>
            Technologies & Skills
          </h2>
          <p className="mx-auto max-w-2xl text-neutral-400 leading-relaxed">
            A comprehensive overview of the technologies and tools I work with.
            Each category represents a different aspect of my technical
            expertise.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {SKILLS.map((skillCategory, categoryIndex) => (
            <motion.button
              key={categoryIndex}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden rounded-full px-5 py-1.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === categoryIndex
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-neutral-800/80 text-neutral-400 hover:bg-neutral-700 hover:text-white"
              }`}
              onClick={() => setActiveCategory(categoryIndex)}
            >
              {skillCategory.category}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto px-4"
        >
          <h3 className="mb-6 text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {SKILLS[activeCategory].category}
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {technologyCards}
          </div>
        </motion.div>

        {/* Learning Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 backdrop-blur-sm"
        >
          <h3 className="mb-6 text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Learning Journey
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-neutral-800/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-2">
                  <FaRocket className="text-xl text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Current Focus
                </h4>
              </div>
              <p className="text-neutral-400">
                Deep diving into advanced technologies and frameworks to expand
                my expertise and stay current with industry trends.
              </p>
            </div>
            <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-neutral-800/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2">
                  <FaCodeIcon className="text-xl text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Tech Stack Evolution
                </h4>
              </div>
              <p className="text-neutral-400">
                Continuously evolving my tech stack by exploring new tools,
                libraries, and frameworks to build better solutions.
              </p>
            </div>
            <div className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-neutral-800/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-2">
                  <FaUserGraduate className="text-xl text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">
                  Knowledge Sharing
                </h4>
              </div>
              <p className="text-neutral-400">
                Contributing to the developer community through blog posts,
                open-source projects, and knowledge sharing.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
