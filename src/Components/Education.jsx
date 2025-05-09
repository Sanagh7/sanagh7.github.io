import { motion } from "framer-motion";
import { EDUCATION } from "../constants";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const Education = () => {
  return (
    <div className="relative border-b border-neutral-800/50 pb-20 pt-20">
      {/* Decorative elements */}
      <div className="absolute -left-64 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/5 to-cyan-500/5 blur-3xl"></div>
      <div className="absolute -right-64 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 blur-3xl"></div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-light tracking-tight text-white">
            <span className="mr-2 inline-block rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-2 py-1 text-3xl font-bold text-white">
              <FaGraduationCap className="h-6 w-6" />
            </span>
            My <span className="text-cyan-400">Education</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Academic background and qualifications that have shaped my technical
            expertise
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10 overflow-hidden rounded-xl bg-neutral-800/20 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-800/30"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left side - Logo */}
                <div className="flex items-center justify-center p-6 md:w-1/4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-neutral-700">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                {/* Right side - Details */}
                <div className="p-6 md:w-3/4">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {edu.degree}
                  </h3>

                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400">
                    <div className="flex items-center">
                      <FaUniversity className="mr-2 text-cyan-400" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-cyan-400" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-cyan-400" />
                      {edu.period}
                    </div>
                  </div>

                  <p className="text-neutral-300">{edu.description}</p>

                  {/* Skill badges - assuming core skills related to education */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Software Development",
                      "Data Structures",
                      "Algorithms",
                      "System Design",
                    ].map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-cyan-900/20 px-3 py-1 text-xs text-cyan-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add education CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 text-center"
          >
            <p className="mb-4 text-neutral-400">
              Currently pursuing my degree with a focus on software engineering
              and cybersecurity.
            </p>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white"
            >
              <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                <FaGraduationCap className="mr-2" /> View Full Credentials
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
