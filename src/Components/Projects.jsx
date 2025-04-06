// src/components/Projects.js
import React, { useRef, useState, useEffect, useMemo } from "react";
import { PROJECTS } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(null);
  const cardRefs = useRef([]);

  // Handle mouse cursor effect
  useEffect(() => {
    // Create cursor glow element
    const cursorGlowContainer = document.createElement("div");
    cursorGlowContainer.className = "cursor-glow-container";
    const cursorGlow = document.createElement("div");
    cursorGlow.className = "cursor-glow";
    cursorGlowContainer.appendChild(cursorGlow);
    document.body.appendChild(cursorGlowContainer);

    // Handle mouse movement
    const handleMouseMove = (e) => {
      cursorGlow.style.opacity = "1";
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      cursorGlow.style.opacity = "0";
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeChild(cursorGlowContainer);
    };
  }, []);

  // Spotlight effect for cards
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  };

  // Memoize project cards to prevent unnecessary re-renders
  const projectCards = useMemo(
    () =>
      PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="group relative overflow-hidden rounded-xl bg-neutral-900/50 backdrop-blur-sm hover-lift glass-effect"
        >
          {/* Project Image with overlay */}
          <div className="relative overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          {/* Project Info */}
          <div className="relative p-6">
            <h3 className="mb-2 text-2xl font-bold text-white hover-glow">
              {project.title}
            </h3>
            <p className="mb-4 text-neutral-400">{project.description}</p>

            {/* Technologies */}
            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-full bg-cyan-900/20 px-3 py-1 text-xs text-cyan-400 animate-gradient"
                  style={{ animationDelay: `${techIndex * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-cyan-600 animate-glow-border"
              >
                <FaGithub className="text-lg" />
                <span>View Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm text-white transition-all duration-300 hover:opacity-90 animate-glow-border"
              >
                <FaExternalLinkAlt className="text-sm" />
                <span>Live Demo</span>
              </a>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        </motion.div>
      )),
    []
  );

  return (
    <div className="relative border-b border-neutral-800 pb-20 pt-20">
      {/* Background effects */}
      <div className="absolute left-0 right-0 top-0 h-full w-full overflow-hidden -z-10">
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl animate-float"></div>
        <div
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl font-light tracking-tight animate-neon-pulse">
          Featured <span className="gradient-text font-bold">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
          Explore some of my recent work and personal projects
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projectCards}
      </div>
    </div>
  );
}

export default Projects;
