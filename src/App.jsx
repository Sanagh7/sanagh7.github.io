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
    <div className="relative min-h-screen bg-[#060921] text-white">
      {/* Custom cursor */}
      {isVisible && (
        <div
          className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
          }}
        >
          <div className="w-full h-full rounded-full bg-white opacity-50 animate-ping" />
          <div className="absolute inset-0 w-4 h-4 m-auto rounded-full bg-white" />
        </div>
      )}

      <div className="mx-auto min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section id="home" className="pt-16 md:pt-0">
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
