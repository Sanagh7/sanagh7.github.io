// src/components/Projects.js
import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { PROJECTS } from "../constants";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Optimize mouse move handler with debounce
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Memoize project cards to prevent unnecessary re-renders
  const projectCards = useMemo(() => {
    return PROJECTS.map((project, index) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="group relative overflow-hidden rounded-xl bg-neutral-900/70 backdrop-blur-sm border border-neutral-800/50 hover:border-cyan-500/30 transition-all duration-300"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Project Image with Overlay */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Project Links Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-neutral-900/90 text-white backdrop-blur-sm transition-transform hover:scale-110 hover:bg-cyan-500"
              aria-label="View on GitHub"
            >
              <FaGithub size={18} className="sm:text-xl" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition-transform hover:scale-110"
              aria-label="View Live Demo"
            >
              <FaExternalLinkAlt size={16} className="sm:text-lg" />
            </a>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-4 sm:p-6">
          <h3 className="mb-2 text-lg sm:text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed text-neutral-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-3 sm:mb-4 flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="rounded-full bg-neutral-800/50 px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-neutral-400 transition-colors group-hover:bg-cyan-900/30 group-hover:text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ));
  }, []);

  return (
    <div className="relative border-b border-neutral-800/50 py-12 sm:py-20">
      {/* Background Effects */}
      <div className="absolute left-0 top-1/4 -z-10 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 -z-10 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-gradient-to-br from-purple-500/5 to-blue-500/5 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-4"
      >
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-5xl font-light tracking-tight text-white">
            <span className="mr-2 inline-block rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-2 py-1 text-2xl sm:text-3xl font-bold text-white">
              <FaCode />
            </span>
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-neutral-400 leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            experience. Each project demonstrates different aspects of my
            technical expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectCards}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 sm:mt-16 text-center"
        >
          <a
            href="https://github.com/Sanagh7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>View More Projects on GitHub</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
