import { useState, useEffect } from "react";
import { HERO_CONTENT } from "./constants";
import profilepic from "./assets/san.jpg";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated typing effect for job titles
  const [displayedJobTitleIndex, setDisplayedJobTitleIndex] = useState(0);
  const jobTitles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedJobTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mt-24 border-b border-neutral-800/50 pb-16 pt-16 sm:pt-24 lg:mt-0 lg:pt-32">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl"></div>
      <div className="absolute -left-20 top-1/2 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>

      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-1/2">
          <div className="relative flex flex-col items-center lg:items-start">
            {/* Floating badges */}
            <div
              className="absolute -left-6 -top-6 hidden animate-float rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-4 shadow-xl lg:block"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>

            <div
              className="absolute -right-10 bottom-10 hidden animate-float rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-3 shadow-xl delay-300 lg:block"
              style={{ transform: `translateY(${scrollY * -0.08}px)` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>

            <h1 className="relative text-center font-light tracking-tight text-white lg:text-left lg:text-7xl">
              <span className="mb-2 block pb-2 text-4xl font-light tracking-wide text-neutral-400 lg:text-5xl">
                Hello, I'm
              </span>
              <span className="relative">
                Sanandan
                <span className="absolute -right-4 -top-4 h-16 w-16 animate-ping rounded-full bg-cyan-500/10"></span>
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text font-bold text-transparent">
                Ghimire
              </span>
            </h1>

            <div className="mt-4 h-16 overflow-hidden">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-2 h-2 w-2 rounded-full bg-cyan-400"></div>
                <div
                  className="text-center text-2xl font-medium tracking-wide text-transparent lg:text-left lg:text-3xl"
                  style={{
                    background: "linear-gradient(to right, #ff80b5, #9089fc)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  }}
                >
                  {jobTitles[displayedJobTitleIndex]}
                </div>
              </div>
            </div>

            <p className="my-8 max-w-xl text-center font-light leading-relaxed tracking-wide text-neutral-300 lg:text-left">
              {HERO_CONTENT}
            </p>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 text-lg font-medium text-white hover:shadow-md hover:shadow-cyan-500/20"
              >
                <span className="relative flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                  Let's Connect
                </span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center rounded-full border border-neutral-700 bg-transparent px-6 py-3 text-lg font-medium text-white transition-all hover:border-cyan-400 hover:text-cyan-400"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
          <div className="relative mx-auto flex max-w-md items-center justify-center lg:max-w-none">
            {/* Decorative orbit circles */}
            <div className="absolute h-[350px] w-[350px] animate-slow-spin rounded-full border border-neutral-800/50"></div>
            <div
              className="absolute h-[500px] w-[500px] animate-slow-spin rounded-full border border-neutral-800/30"
              style={{ animationDuration: "25s" }}
            ></div>

            {/* Profile image with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-neutral-700 sm:h-80 sm:w-80">
                <img
                  src={profilepic}
                  alt="Sanandan Ghimire"
                  className="h-full w-full object-cover object-center transition-transform hover:scale-105"
                />
              </div>

              {/* Tech stack floating badges */}
              <div className="absolute -right-5 top-20 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/90 shadow-lg">
                <span className="text-lg font-bold text-cyan-400">R</span>
              </div>
              <div className="absolute -left-5 bottom-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/90 shadow-lg">
                <span className="text-lg font-bold text-green-500">N</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/90 shadow-lg">
                <span className="text-lg font-bold text-yellow-500">JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center">
        <span className="mb-1 text-sm text-neutral-500">Scroll Down</span>
        <FaArrowDown className="text-cyan-500" />
      </div>
    </div>
  );
};

export default Hero;
