"use client";

// src/components/Projects.js
import { useState } from "react";
import { PROJECTS } from "../constants";
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProjectItem = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate description if it's longer than 150 characters
  const shouldTruncate = project.description.length > 150;
  const displayDescription = !isExpanded && shouldTruncate 
    ? project.description.slice(0, 150) + "..." 
    : project.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Project Container */}
      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent"></div>
            
            {/* Decorative overlay */}
            <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-500 rounded-xl"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-4">
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative bg-neutral-900/50 backdrop-blur-sm rounded-lg p-5 border border-neutral-800 group-hover:border-neutral-700 transition-colors duration-300"
          >
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {displayDescription}
            </p>
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
                <span className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
            )}
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs sm:text-sm text-cyan-400 font-mono px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 pt-2"
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700 hover:border-cyan-500/50 text-neutral-300 hover:text-white transition-all duration-300"
              >
                <FaGithub className="text-lg" />
                <span className="text-sm font-medium">Code</span>
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white transition-all duration-300 shadow-lg shadow-cyan-500/20"
              >
                <FaExternalLinkAlt className="text-sm" />
                <span className="text-sm font-medium">Live Demo</span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Real-World / Client Projects");

  const categories = [
    {
      name: "Real-World / Client Projects",
      icon: <FaBriefcase className="text-lg" />,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "College / Academic Projects",
      icon: <FaGraduationCap className="text-lg" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Self-Oriented / Personal / R&D Projects",
      icon: <FaLightbulb className="text-lg" />,
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="relative border-b border-neutral-800/50 py-16 sm:py-24 overflow-hidden bg-[#060921]">
      {/* Background Effects */}
      <div className="absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto">
            Production-ready systems and applications I've built, focusing on backend architecture, scalability, and real-world impact.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category.name
                  ? 'text-white shadow-lg'
                  : 'text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-neutral-800'
              }`}
            >
              {activeCategory === category.name && (
                <motion.span
                  layoutId="activeTab"
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-full -z-10`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={activeCategory === category.name ? 'relative z-10' : ''}>
                {category.icon}
              </span>
              <span className={`hidden sm:inline ${activeCategory === category.name ? 'relative z-10' : ''}`}>
                {category.name}
              </span>
              <span className={`sm:hidden ${activeCategory === category.name ? 'relative z-10' : ''}`}>
                {category.name.split(' / ')[0]}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-16 sm:space-y-20"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectItem key={project.title} project={project} index={index} />
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-neutral-400 text-lg">No projects in this category yet.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* View More Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 flex justify-center"
        >
          <motion.a
            href="https://github.com/sanagh7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium"
          >
            <span className="absolute h-full w-full bg-gradient-to-r from-purple-500 to-cyan-500"></span>
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm sm:text-base transition-all duration-300 ease-out group-hover:bg-opacity-0 text-white">
              View More on GitHub
              <FaGithub className="ml-2" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
