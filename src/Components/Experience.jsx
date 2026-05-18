"use client";

import { motion } from "../lib/motion";
import { EXPERIENCES } from "../constants";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";
import { useState } from "react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative border-b border-neutral-800 py-20 overflow-hidden bg-[#060921]">
      {/* Background decorative elements */}
      <div className="absolute -left-32 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5 blur-3xl"></div>
      <div className="absolute -right-32 bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-cyan-500/5 to-cyan-500/5 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light tracking-tight text-white mb-4">
            <span className="mr-2 inline-block rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-2 py-1 text-3xl font-bold text-white">
              <FaBriefcase className="h-6 w-6" />
            </span>
            Work <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            My professional journey building real-world applications and solving complex problems
          </p>
        </motion.div>

        {/* Horizontal Timeline - Desktop */}
        <div className="hidden lg:block mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500/40 to-purple-500/20"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-3 gap-8">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50"
                          : "bg-neutral-700 hover:bg-neutral-600"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className={`absolute inset-0 rounded-full ${activeIndex === index ? "bg-cyan-500/40" : ""}`}></div>
                    </motion.div>
                  </div>

                  {/* Company Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    onClick={() => setActiveIndex(index)}
                    className={`mt-20 cursor-pointer rounded-xl border transition-all duration-300 p-6 ${
                      activeIndex === index
                        ? "border-cyan-500/50 bg-gradient-to-br from-neutral-900 to-neutral-900 shadow-xl shadow-cyan-500/10"
                        : "border-neutral-800 bg-neutral-900/80 hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`rounded-lg p-2 ${activeIndex === index ? "bg-gradient-to-br from-cyan-500/20 to-cyan-500/20" : "bg-neutral-900/80"}`}>
                        <FaBuilding className={`text-xl ${activeIndex === index ? "text-cyan-400" : "text-neutral-400"}`} />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-lg ${activeIndex === index ? "text-cyan-400" : "text-white"}`}>
                          {exp.company}
                        </h3>
                        <p className="text-sm text-neutral-400">{exp.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3 text-sm text-neutral-400">
                      <FaCalendarAlt className="text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs ${
                            activeIndex === index
                              ? "bg-cyan-900/30 text-cyan-300"
                              : "bg-neutral-900 text-neutral-400"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded-full text-xs bg-neutral-900 text-neutral-400">
                          +{exp.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile/Tablet Timeline - Vertical */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-cyan-500/40 to-purple-500/20"></div>

            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50">
                    <div className="absolute inset-0 rounded-full bg-cyan-500/40"></div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-6 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/20 p-2">
                      <FaBuilding className="text-xl text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-cyan-400 mb-2">{exp.role}</p>
                      <div className="flex items-center gap-2 text-sm text-neutral-400">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs bg-cyan-900/30 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Experience Details - Desktop Only */}
        {EXPERIENCES[activeIndex] && (
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block mt-12"
          >
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-neutral-900 to-neutral-900 p-8 shadow-xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/20 p-4">
                  <FaCode className="text-3xl text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {EXPERIENCES[activeIndex].role}
                  </h3>
                  <p className="text-lg text-cyan-400 mb-2">
                    {EXPERIENCES[activeIndex].company}
                  </p>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <FaCalendarAlt className="text-cyan-400" />
                    <span>{EXPERIENCES[activeIndex].period}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-400" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {EXPERIENCES[activeIndex].responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-neutral-300"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {EXPERIENCES[activeIndex].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg bg-cyan-900/30 text-cyan-300 text-sm font-medium border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {EXPERIENCES[activeIndex].highlights && (
                <div className="rounded-lg bg-gradient-to-r from-cyan-500/10 to-cyan-500/10 border border-cyan-500/20 p-4">
                  <p className="text-cyan-300 text-sm">
                    <strong>✨ Highlight:</strong> {EXPERIENCES[activeIndex].highlights}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Experience;
