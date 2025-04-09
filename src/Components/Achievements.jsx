import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../constants/index.js";
import { FaUsers, FaProjectDiagram, FaClock, FaCode } from "react-icons/fa";

const Achievements = () => {
  // Icons for stats
  const statIcons = {
    "Projects Completed": <FaProjectDiagram className="h-6 w-6" />,
    "Happy Clients": <FaUsers className="h-6 w-6" />,
    "Years Experience": <FaClock className="h-6 w-6" />,
    Technologies: <FaCode className="h-6 w-6" />,
  };

  return (
    <div className="relative border-b border-neutral-800/50 py-24">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/5 to-pink-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <h2 className="mb-6 text-5xl font-light tracking-tight text-white">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            Achievements & Experience
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-neutral-400">
            A summary of my professional journey and the impact I've made in the
            tech industry.
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-neutral-800/50"
              >
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl transition-all duration-500 group-hover:from-cyan-500/20 group-hover:to-blue-500/20"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3 text-cyan-400">
                    {statIcons[stat.label]}
                  </div>
                  <h3 className="mb-2 text-4xl font-bold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-neutral-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
