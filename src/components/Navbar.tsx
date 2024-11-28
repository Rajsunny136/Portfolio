import React, { useState } from "react";
import "../Styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="keyboard">
        <span className="key">R</span>
        <span className="key">a</span>
        <span className="key">j</span>
        <span className="key">u</span>
        <span className="key">A</span>
        <span className="key">n</span>
        <span className="key">n</span>
        <span className="key">e</span>
        <span className="key">b</span>
        <span className="key">o</span>
        <span className="key">i</span>
        <span className="key">n</span>
        <span className="key">a</span>
      </div>
      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : "closed"}`}>
        <li>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
