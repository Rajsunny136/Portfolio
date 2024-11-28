import React from "react";
import "../Styles/Header.css";
// import SunnyImage from "../Images/sunny.jpg";
import Resume from "../Resume/Raju Anneboina.pdf";

const Header: React.FC = () => {
  return (
    <header className="header profile-header">
      <div className="container">
        {/* <img src={SunnyImage} alt="Raju Anneboina" className="profile-image" /> */}
        <h1 className="animate-header breathe-animation">
          Hi, I'm  <span> Raju Anneboina</span>
        </h1>
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
