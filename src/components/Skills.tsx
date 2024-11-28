import React, { useEffect, useState } from "react";
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
  const [progressLevels, setProgressLevels] = useState<number[]>(
    Array(skills.length).fill(0)
  );

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setProgressLevels((prev) => {
          const newLevels = [...prev];
          if (newLevels[index] < skill.level) {
            newLevels[index] += 1; // Increment by 1
          }
          return newLevels;
        });
      }, 100.8); // Adjust speed of increment (lower is faster)
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{progressLevels[index]}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{
                  ["--skill-level" as any]: `${skill.level}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
