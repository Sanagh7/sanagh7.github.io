import { HERO_CONTENT, CONTACT } from "../constants";
import heroImg from "../assets/sanandan.jpg";
import {
  FaCode,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "../lib/motion";

const heroStats = [
  { value: "2+", label: "Years practical work" },
  { value: "5+", label: "Production systems" },
  { value: "10k+", label: "Daily API requests" },
];

const focusAreas = [
  { icon: FaServer, label: "Backend Systems" },
  { icon: FaCode, label: "Full Stack Delivery" },
  { icon: FaShieldAlt, label: "Secure Architecture" },
];

const Hero = () => {
  const heroImageSrc = typeof heroImg === "string" ? heroImg : heroImg.src;

  return (
    <section className="relative w-full overflow-hidden bg-[#060921]">
      <div className="sr-only">
        <h1>Sanandan Ghimire - Portfolio</h1>
        <p>Also known as Sana Ghimire or simply Sana</p>
        <p>Backend Engineer, AI & R&D Enthusiast, Full Stack Developer</p>
      </div>

      <div className="absolute inset-0 -z-10 bg-[#060921]">
        <div className="absolute left-[-12rem] top-20 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.025]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-2rem)] w-full max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-8 xl:max-w-7xl xl:grid-cols-[minmax(0,1fr)_460px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-sm font-medium text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
            Available for backend and full stack work
          </div>

          <p className="mb-2 text-base font-medium text-neutral-300">Hi, I am</p>
          <h2 className="max-w-3xl text-5xl font-bold leading-[1.02] text-white sm:text-6xl xl:text-7xl">
            Sanandan{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ghimire
            </span>
          </h2>

          <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-cyan-300 sm:text-3xl xl:text-4xl">
            {HERO_CONTENT.mainHeading}
          </h3>

          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">
            {HERO_CONTENT.subheading}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/30 sm:text-base"
            >
              <FaEnvelope className="mr-2 h-5 w-5" />
              Let's Connect
            </a>
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 px-5 text-sm font-semibold text-neutral-200 transition hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-white sm:text-base"
            >
              <FaCode className="mr-2 h-5 w-5 text-cyan-400" />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 px-5 text-sm font-semibold text-neutral-200 transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white sm:text-base"
            >
              <FaFileAlt className="mr-2 h-5 w-5 text-purple-400" />
              Resume
            </a>
          </div>

          <div className="mt-7 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-neutral-800 bg-neutral-950/45 p-3 sm:p-4"
              >
                <div className="text-xl font-bold text-white sm:text-2xl">{stat.value}</div>
                <div className="mt-1 text-[11px] leading-4 text-neutral-400 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/70 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="aspect-[4/4.35] max-h-[520px] overflow-hidden">
              <img
                src={heroImageSrc}
                alt="Sanandan Ghimire"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="border-t border-neutral-800 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-cyan-300">
                    Core Focus
                  </p>
                  <p className="mt-1 max-w-xs text-base font-semibold leading-6 text-white">
                    Scalable backend and product engineering
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={CONTACT.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition hover:border-cyan-500/50 hover:text-cyan-400"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href={CONTACT.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 transition hover:border-cyan-500/50 hover:text-cyan-400"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {focusAreas.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex min-h-11 items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 px-3 py-2.5 text-neutral-300"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-cyan-400" />
                    <span className="text-xs font-medium sm:text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
