import { SKILLS } from "../constants";
import { RiReactjsLine } from "react-icons/ri";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandAws,
} from "react-icons/tb";
import {
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiJest,
  SiDocker,
  SiPrisma,
  SiExpress,
} from "react-icons/si";
import { DiRedis, DiSass } from "react-icons/di";
import { FaNodeJs, FaGitAlt, FaDatabase, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

// Map of technology names to their respective icons
const techIcons = {
  React: <RiReactjsLine className="text-cyan-400" />,
  "Next.js": <TbBrandNextjs />,
  TypeScript: <TbBrandTypescript className="text-blue-500" />,
  Redux: <SiRedux className="text-purple-500" />,
  "Tailwind CSS": <TbBrandTailwind className="text-cyan-400" />,
  "SASS/SCSS": <DiSass className="text-pink-500" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress />,
  GraphQL: <SiGraphql className="text-pink-600" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  PostgreSQL: <BiLogoPostgresql className="text-sky-700" />,
  Redis: <DiRedis className="text-red-700" />,
  Prisma: <SiPrisma className="text-teal-400" />,
  Git: <FaGitAlt className="text-orange-600" />,
  Jest: <SiJest className="text-red-600" />,
  Docker: <SiDocker className="text-blue-600" />,
  AWS: <FaAws className="text-orange-400" />,
  Database: <FaDatabase className="text-gray-400" />,
};

// Function to get icon for a technology, with a default backup
const getTechIcon = (techName) => {
  return techIcons[techName] || <FaDatabase className="text-gray-400" />;
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies & Skills</h2>

      <div className="space-y-16">
        {SKILLS.map((skillCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="mb-8 text-center text-2xl font-medium text-cyan-400">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {skillCategory.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="group flex flex-col items-center"
                >
                  <div className="mb-2 rounded-2xl border-4 border-neutral-800 bg-neutral-900/50 p-4 transition-all duration-300 group-hover:border-cyan-800 group-hover:shadow-lg group-hover:shadow-cyan-900/20">
                    <div className="text-5xl sm:text-6xl md:text-7xl">
                      {getTechIcon(tech)}
                    </div>
                  </div>
                  <span className="text-center text-xs text-neutral-400 md:text-sm">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Proficiency Bars */}
      <div className="mx-auto mt-16 max-w-3xl space-y-6">
        <h3 className="mb-8 text-center text-2xl font-medium">Proficiency</h3>

        <div>
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium">Frontend Development</span>
            <span className="text-sm font-medium">95%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-800">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              style={{ width: "95%" }}
            ></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium">Backend Development</span>
            <span className="text-sm font-medium">90%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-800">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium">Database Management</span>
            <span className="text-sm font-medium">85%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-800">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium">DevOps</span>
            <span className="text-sm font-medium">75%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-800">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
