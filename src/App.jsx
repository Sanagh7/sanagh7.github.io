// src/App.js
import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "./App.css";
import Home from "./Components/Home";
import Hero from "./Hero";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-cyan-300 selection:text-cyan-900">
      <div className="flixed top-0 -z-10 h-full w-full"></div>
      <div
        className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-
      [radial-gradial(ellipse_80%_80%_at_50%-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
      </div>

      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
