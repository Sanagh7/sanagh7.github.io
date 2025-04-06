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
import { useEffect, useRef, useState } from "react";

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
  const spotlightRef = useRef(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  // Handle spotlight effect on skill section
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { current: container } = spotlightRef;
      if (!container) return;

      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      container.style.setProperty("--x", `${x}%`);
      container.style.setProperty("--y", `${y}%`);
    };

    const container = spotlightRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  // Handle ripple effect
  const handleRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  // Function to chunk technologies into rows
  const chunkTechnologies = (techArray, size) => {
    const chunkedArr = [];
    for (let i = 0; i < techArray.length; i += size) {
      chunkedArr.push(techArray.slice(i, i + size));
    }
    return chunkedArr;
  };

  return (
    <div className="relative border-b border-neutral-800 pb-24">
      {/* Background effect */}
      <div className="absolute left-0 right-0 top-0 h-full w-full overflow-hidden -z-10">
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-cyan-900/20 blur-3xl animated-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-900/20 blur-3xl animated-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-900/10 blur-3xl morphing-bg"></div>
      </div>

      <h2 className="my-16 text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 glow-text-sm">
        Technologies & Skills
      </h2>

      {/* Category Navigation */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {SKILLS.map((skillCategory, categoryIndex) => (
          <button
            key={categoryIndex}
            className={`relative ripple-container overflow-hidden rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              activeCategory === categoryIndex
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                : "bg-neutral-800/80 text-neutral-400 hover:bg-neutral-700 hover:text-white"
            }`}
            onClick={(e) => {
              setActiveCategory(categoryIndex);
              handleRipple(e);
            }}
          >
            {skillCategory.category}
          </button>
        ))}
      </div>

      <div ref={spotlightRef} className="spotlight">
        {/* Display single active category with enhanced animations */}
        <div className="parallax-container">
          <h3 className="mb-10 text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 slide-in-bottom">
            {SKILLS[activeCategory].category}
          </h3>

          {/* Grid layout for technologies - adaptive rows based on screen size */}
          <div className="container mx-auto px-4">
            {chunkTechnologies(SKILLS[activeCategory].technologies, 5).map(
              (row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-wrap justify-center mb-8"
                >
                  {row.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group flex flex-col items-center px-2 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 mb-6 fade-in-up"
                      style={{
                        animationDelay: `${(rowIndex * 6 + techIndex) * 0.05}s`,
                      }}
                      onMouseEnter={() => setHoveredTech(tech)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <div
                        className={`relative mb-2 rounded-lg border border-neutral-800 overflow-hidden bg-neutral-900/70 backdrop-blur-sm p-3 transition-all duration-300 
                        ${
                          hoveredTech === tech
                            ? "border-cyan-600 shadow-lg shadow-cyan-600/30 scale-110"
                            : "border-neutral-800 hover:border-cyan-700/70 hover:shadow-md hover:shadow-cyan-900/20 scale-100"
                        } 
                        transform hover:scale-105 card-rotate w-full aspect-square flex items-center justify-center`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 text-2xl sm:text-3xl md:text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-400">
                          {getTechIcon(tech)}
                        </div>
                      </div>
                      <span className="text-center text-[10px] sm:text-xs text-neutral-400 md:text-xs group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Proficiency Bars with gradient animation */}
      <div className="mx-auto mt-24 max-w-3xl space-y-8 fade-in-up">
        <h3 className="mb-10 text-center text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Proficiency
        </h3>

        <div className="transform hover:scale-102 transition-transform duration-300">
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium">Frontend Development</span>
            <span className="text-sm font-medium text-cyan-400">95%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-800/70 backdrop-blur-sm shadow-inner">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 pulse-animation"
              style={{ width: "95%" }}
            ></div>
          </div>
        </div>

        <div className="transform hover:scale-102 transition-transform duration-300">
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium">Backend Development</span>
            <span className="text-sm font-medium text-cyan-400">90%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-800/70 backdrop-blur-sm shadow-inner">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 pulse-animation"
              style={{ width: "90%", animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        <div className="transform hover:scale-102 transition-transform duration-300">
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium">Database Management</span>
            <span className="text-sm font-medium text-cyan-400">85%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-800/70 backdrop-blur-sm shadow-inner">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 pulse-animation"
              style={{ width: "85%", animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>

        <div className="transform hover:scale-102 transition-transform duration-300">
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium">DevOps</span>
            <span className="text-sm font-medium text-cyan-400">75%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-800/70 backdrop-blur-sm shadow-inner">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 pulse-animation"
              style={{ width: "75%", animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>

        <div className="transform hover:scale-102 transition-transform duration-300">
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium">Cyber Security</span>
            <span className="text-sm font-medium text-cyan-400">88%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-800/70 backdrop-blur-sm shadow-inner">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 pulse-animation"
              style={{ width: "88%", animationDelay: "0.8s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
