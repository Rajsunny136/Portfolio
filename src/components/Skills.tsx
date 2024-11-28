import React from "react";
import "../Styles/Skills.css";

interface Skill {
  name: string;
  level: number; // Level in percentage (e.g., 80 for 80%)
}

const skills: Skill[] = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 85 },
  { name: "React Native", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "PostgreSQL", level: 70 },
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
