import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import "./Styles/App.css";
import Skills from "./components/Skills";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main sections */}
          <Route path="/" element={
              <>
                <Header />
                <About />
                <Skills/>
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* Project detail page */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
