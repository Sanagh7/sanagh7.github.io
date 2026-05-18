// src/App.js
import dynamic from "next/dynamic";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import Achievements from "./Components/Achievements";

import Hero from "./Components/Hero";

const Experience = dynamic(() => import("./Components/Experience"));
const Technologies = dynamic(() => import("./Components/Technologies"));
const Projects = dynamic(() => import("./Components/Projects"));
const Testimonials = dynamic(() => import("./Components/Testimonials"));
const Contact = dynamic(() => import("./Components/Contact"));

function App() {
  return (
    <div className="relative min-h-screen bg-[#060921] text-white overflow-x-hidden w-full">
      <div className="mx-auto min-h-screen overflow-x-hidden bg-[#060921] w-full">
        <div className="w-full bg-[#060921] overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#060921] max-w-7xl">
            <section id="home" className="pt-16 md:pt-0 bg-[#060921] overflow-x-hidden">
              <Hero />
            </section>
            <section id="about" className="bg-[#060921] overflow-x-hidden">
              <About />
            </section>
            <section id="education" className="bg-[#060921] overflow-x-hidden">
              <Education />
            </section>
            <section id="experience" className="bg-[#060921] overflow-x-hidden">
              <Experience />
            </section>
            <section id="skills" className="bg-[#060921] overflow-x-hidden">
              <Technologies />
            </section>
            <section id="achievements" className="bg-[#060921] overflow-x-hidden">
              <Achievements />
            </section>
            <section id="projects" className="bg-[#060921] overflow-x-hidden">
              <Projects />
            </section>
            <section id="testimonials" className="bg-[#060921] overflow-x-hidden">
              <Testimonials />
            </section>
            <section id="contact" className="bg-[#060921] overflow-x-hidden">
              <Contact />
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
