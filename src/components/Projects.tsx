import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Projects.css";
import ShipEase from "../Images/ShipEase.png";
import Elemove from "../Images/Elemove.png";
import Scientific from "../Images/Scientific.png";

const Projects: React.FC = () => {
  const projectList = [
    {
      id: 1,
      title: "Shipease",
      description:
        "A comprehensive logistics and delivery platform designed to simplify shipping.",
      technologies: ["React", "Node.js", "Express"],
      image: ShipEase, // Replace with actual image URL
      liveDemo: "https://shipease-demo-link.com",
    },
    {
      id: 2,
      title: "Scientific Erevna",
      description:
        "A research-focused application facilitating scientific data analysis and collaboration.",
      technologies: ["Python", "Django", "PostgreSQL"],
      image: Scientific, // Replace with actual image URL
      liveDemo: "https://scientific-erevna-demo-link.com",
    },
    {
      id: 3,
      title: "EleMove",
      description:
        "A platform tailored for electric vehicle services and driver onboarding.",
      technologies: ["React", "Firebase", "Redux"],
      image: Elemove, // Replace with actual image URL
      liveDemo: "https://elemover-demo-link.com",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="project-card-link"
          >
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-tech">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
