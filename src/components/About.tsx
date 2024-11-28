import React from "react";
import "../Styles/About.css";
import ProfilePic from "../Images/sunny-removebg-preview.png";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={ProfilePic} alt="Raju Anneboina" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Raju Anneboina</strong>, a passionate software
            developer with expertise in React, TypeScript, and the PERN stack
            (PostgreSQL, Express, React, Node.js). I love building scalable and
            user-friendly web applications that make a difference.
          </p>
          <p>
            With <strong>1+ years of experience</strong> in full-stack
            development, I’ve delivered projects ranging from enterprise
            solutions to creative personal endeavors. My goal is to blend
            technical skills with creativity to craft efficient and engaging
            digital experiences.
          </p>
          <p>
            When I'm not coding, you'll find me exploring the latest tech
            trends, contributing to open-source projects, or diving into a good
            book.
          </p>
          <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
