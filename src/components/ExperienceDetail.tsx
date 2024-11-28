import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaPalette,
  FaStar,
  FaShareAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../Styles/ExperienceDetail.css";
import Genamplify from "../Images/Genamplify.png"

const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // For navigating back
  const [showDetails, setShowDetails] = useState(false); // For toggling the details section

  const experiences = [
    {
      id: 1,
      year: "2023",
      title: "Software Developer",
      company: "Genamplify Solutions",
      description: "Developed interactive UIs with React and TypeScript.",
      details:
        "Worked on building reusable components, optimizing performance, and implementing responsive designs.",
      logo: Genamplify, // Example logo image
      location:
        "NEXUS BUSINESS CENTRE, near YSR Statue, SBH Officers Colony, Mega Hills, Madhapur, Hyderabad, Telangana 500081",
      icon: <FaLaptopCode />,
    },
    // {
    //   id: 2,
    //   year: "2021",
    //   title: "UI/UX Designer",
    //   company: "Creative Studio",
    //   description: "Designed responsive layouts and user flows.",
    //   details:
    //     "Collaborated with developers to create wireframes, prototypes, and high-fidelity designs for web and mobile applications.",
    //   logo: "creative-studio-logo.png", // Example logo image
    //   location: "San Francisco, USA",
    //   icon: <FaPalette />,
    // },
  ];

  const experience = experiences.find((exp) => exp.id === Number(id));

  if (!experience) {
    return <div className="experience-detail-error">Experience not found</div>;
  }

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const handleShare = () => {
    // Share the experience details
    const url = `https://example.com/experience/${id}`;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <section className="experience-detail-card">
      <div className="experience-header">
        <div className="company-logo">
          <img src={experience.logo} alt={experience.company} />
        </div>
        <div className="experience-title-section">
          <span className="experience-icon">{experience.icon}</span>
          <h2 className="experience-title">{experience.title}</h2>
          <h4 className="experience-company">{experience.company}</h4>
          <div className="location">
            <FaMapMarkerAlt /> {experience.location}
          </div>
        </div>
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>

      <div className="experience-content">
        <p>
          <strong>Year:</strong> {experience.year}
        </p>
        <p>
          <strong>Description:</strong> {experience.description}
        </p>
        <button className="toggle-details" onClick={handleToggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <p>
            <strong>Details:</strong> {experience.details}
          </p>
        )}

        {/* Rating Section */}
        <div className="rating">
          <span>Rating: </span>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color={index < 4 ? "#ffd700" : "#e1e1e1"} />
          ))}
        </div>
      </div>

      <div className="experience-footer">
        <button className="share-btn" onClick={handleShare}>
          <FaShareAlt /> Share
        </button>
      </div>
    </section>
  );
};

export default ExperienceDetail;
