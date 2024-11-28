import React from "react";
import "../Styles/Header.css";
// import SunnyImage from "../Images/sunny.jpg";
import Resume from "../Resume/Raju Anneboina.pdf";

const Header: React.FC = () => {
  return (
    <header className="header profile-header">
      <div className="container">
        <p>Hello 👋 I'm</p>
        <section className="animation">
          <div className="first">
            <div>Raju Anneboina</div>
          </div>
          <div className="second">
            <div>Full-Stack Developer</div>
          </div>
          <div className="third">
            <div>Software Engineer</div>
          </div>
        </section>
      </div>
      <p className="animate-header">
        Full Stack Developer | Expertise in PERN Stack | Delivering Scalable
        Solutions
      </p>
      <div className="btn-group">
        <a href="#projects" className="btn btn-primary">
          Explore My Work
        </a>
        <a href={Resume} download className="btn btn-secondary">
          Download Resume
        </a>
      </div>

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </header>
  );
};

export default Header;
