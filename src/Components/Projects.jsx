// src/components/Projects.js
import React, { useRef } from "react";
import { PROJECTS } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
  const scrollRef = useRef(null);

  return (
    <div className="relative border-b border-neutral-800/50 pb-24 pt-12">
      {/* Background decorative elements */}
      <div className="absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-900/5 blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-900/5 blur-3xl"></div>

      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-6 text-5xl font-light tracking-tight text-white"
        >
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
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </span>
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-neutral-400"
        >
          Explore my recent work showcasing my skills in web development, UI/UX
          design, and problem-solving. Each project represents different
          challenges and technologies I've mastered.
        </motion.p>
      </div>

      <div
        ref={scrollRef}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-900/20"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-0.5 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="absolute inset-0 rounded-xl bg-neutral-900"></div>
            </div>

            <div className="relative">
              {/* Image overlay */}
              <div className="relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent opacity-60"></div>

                {/* Floating technologies badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-neutral-800/80 px-3 py-1 text-xs backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded-full bg-neutral-800/80 px-3 py-1 text-xs backdrop-blur-sm">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative p-6">
                <h3 className="mb-2 text-xl font-medium text-white">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm text-neutral-400">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-cyan-400"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-cyan-400"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover effect - View details button */}
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/70 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
                >
                  View Details
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "See more" button */}
      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/sanandan-ghimire"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-neutral-300"
        >
          <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:animate-spin-slow"></span>
          <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 transition-all group-hover:bg-opacity-90">
            See More on GitHub <FaGithub className="ml-2" />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Projects;
