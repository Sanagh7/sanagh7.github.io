import { useState, useEffect, useRef } from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/san.jpg";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const profileRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Cyber Security Enthusiastic",
  ];

  useEffect(() => {
    let timeout;
    const currentText = texts[currentIndex];

    if (displayText.length < currentText.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } else {
      // Wait before starting to erase
      timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, texts]);

  // Add mouse parallax effect
  const handleMouseMove = (e) => {
    // Update mouse coordinates relative to the center of the screen
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) / 30,
      y: (e.clientY - window.innerHeight / 2) / 30,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3D tilt effect for profile image
  useEffect(() => {
    const profileEl = profileRef.current;
    if (!profileEl) return;

    const handleMouseMove = (e) => {
      const rect = profileEl.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const tiltX = (y - 0.5) * 20; // tilt angle in degrees
      const tiltY = (x - 0.5) * -20;

      profileEl.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      profileEl.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    };

    profileEl.addEventListener("mousemove", handleMouseMove);
    profileEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      profileEl.removeEventListener("mousemove", handleMouseMove);
      profileEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl animate-float"></div>
        <div
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="particle-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-500"
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 8 + 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            <span className="animate-neon-pulse">Hi, I'm </span>
            <span className="gradient-text">Sanandan Ghimire</span>
          </h1>

          <div className="mb-8 text-2xl font-light text-neutral-400 sm:text-3xl">
            <span className="gradient-text inline-block min-h-[1.5em]">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-lg text-neutral-400"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white animate-glow-border hover-scale"
            >
              <span className="absolute h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500"></span>
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-8 py-3.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                View Projects
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 font-medium text-white hover-scale"
            >
              <span className="absolute h-full w-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-neutral-900 px-8 py-3.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                Contact Me
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-neutral-400 transition-colors hover:text-cyan-400"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <FaArrowDown className="animate-float" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
