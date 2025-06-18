// src/components/Projects.js
import React, { useState, useCallback } from "react";
import { PROJECTS } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 hover:border-cyan-500/30 transition-all duration-500 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        
        {/* Project Links Overlay */}
        <div 
          className={`absolute inset-0 flex items-center justify-center gap-5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900/80 text-white backdrop-blur-sm transition-all hover:bg-cyan-500"
            aria-label="View on GitHub"
          >
            <FaGithub className="text-xl" />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition-all"
            aria-label="View Live Demo"
          >
            <FaExternalLinkAlt className="text-lg" />
          </motion.a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded-full bg-neutral-800/80 px-3 py-1 text-xs text-neutral-300 transition-colors duration-300 group-hover:bg-cyan-900/30 group-hover:text-cyan-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-full bg-neutral-800/80 px-3 py-1 text-xs text-neutral-300">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Decorative gradient corner effect */}
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // You could add categories if there are more projects later
  const categories = ["All", "Web", "Mobile", "Design"];
  
  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <div className="relative border-b border-neutral-800/50 py-16 sm:py-24">
      {/* Background Effects */}
      <div className="absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-3xl"></div>

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
            My <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is a unique challenge
            that I've tackled with modern technologies and best practices.
          </p>

          {/* Project filter - can be enabled if you have enough projects to categorize */}
          {/*
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          */}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        {/* View More Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex justify-center"
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
