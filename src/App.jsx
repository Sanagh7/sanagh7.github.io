// src/App.js
import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";

import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import Achievements from "./Components/Achievements";

import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Handle global cursor effect
  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Hide cursor after 2 seconds of inactivity
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#050816]"></div>
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#080325_1px,transparent_1px),linear-gradient(to_bottom,#080325_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Animated gradient orbs */}
        <div className="absolute left-[10%] top-[20%] z-[-1] h-96 w-96 animate-pulse rounded-full bg-cyan-950/30 blur-[120px]"></div>
        <div className="absolute right-[15%] top-[40%] z-[-1] h-72 w-72 animate-pulse rounded-full bg-indigo-900/20 blur-[120px] delay-700"></div>
        <div className="absolute bottom-[10%] left-[35%] z-[-1] h-80 w-80 animate-pulse rounded-full bg-purple-900/20 blur-[120px] delay-1000"></div>
      </div>

      {/* Custom cursor glow effect */}
      <div
        className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl"></div>
      </div>

      <div className="mx-auto min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="skills">
            <Technologies />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
