// src/App.js
import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";

import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import Home from "./Components/Home";
import Hero from "./Hero";
import Technologies from "./Components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-
      [radial-gradial(ellipse_80%_80%_at_50%-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
      </div>
    </div>
  );
}

export default App;
