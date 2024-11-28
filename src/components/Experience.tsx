import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import "../Styles/Experience.css";

const Experience: React.FC = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      id: 1,
      year: "2023",
      title: "Software Developer",
      company: "Genamplify Solutions",
      description: "Developed interactive UIs with React and TypeScript.",
      details:
        "Worked on building reusable components, optimizing performance, and implementing responsive designs.",
      icon: <FaLaptopCode />,
    },
    {
      id: 2,
      year: "2021",
      title: "Technical Support Executive",
      company: "Wipro",
      description:
        "Handles troubleshooting and problem-solving for a business's technology systems.",
      details:
        "Provide technical support through the monitoring and maintenance of computer systems and networks.",
      icon: <FaTools />,
    },
  ];

  const handleCardClick = (id: number) => {
    navigate(`/experience/${id}`);
  };

  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="experience-cards">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="experience-card"
            onClick={() => handleCardClick(exp.id)}
          >
            <div className="experience-icon">{exp.icon}</div>
            <div className="experience-details">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.year}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
