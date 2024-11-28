import React from "react";
import "../Styles/Footer.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2024 Raju Anneboina. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/raju-anneboina-870561276/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a
            href="https://www.instagram.com/rajsunny_136/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="social-icon instagram" />
          </a>
          <a
            href="https://github.com/Rajsunny136"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
