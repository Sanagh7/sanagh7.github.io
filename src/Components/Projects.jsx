// src/components/Projects.js
import React from "react";

function Projects() {
  const projectList = [
    { name: "Project 1", description: "Description of project 1", link: "#" },
    { name: "Project 2", description: "Description of project 2", link: "#" },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
