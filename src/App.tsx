import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ChatWidget from "./components/ChatWidget";
import ExperienceDetail from "./components/ExperienceDetail";
import "./Styles/App.css";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main sections */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Experience />
                <Skills />
                <ChatWidget />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* Individual routes */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* 404 Not Found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
