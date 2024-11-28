import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styles/ProjectDetail.css";

interface ProfessionalInfo {
  techStack: string;
  features: string;
  role: string;
  duration: string;
}

interface Project {
  title: string;
  description: string;
  professionalInfo: ProfessionalInfo;
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState<boolean>(true);
  const [project, setProject] = useState<Project | null>(null);

  // Explicitly define the type of projectData
  const projectData: Record<number, Project> = {
    1: {
      title: "Shipease",
      description:
        "Shipease is a powerful logistics platform aimed at simplifying and optimizing shipping operations. It is designed for businesses to efficiently manage driver onboarding, track shipments in real-time, and provide a seamless user experience for customers. The platform addresses the common challenges in delivery operations, ensuring smooth shipment management.",
      professionalInfo: {
        techStack:
          "React Native, Node.js, Express, PostgreSQL, Google Maps API",
        features:
          "Driver onboarding system, Real-time shipment tracking, Shipment management dashboard, User-friendly and responsive UI design",
        role: "Full Stack Developer",
        duration: "6 months",
      },
    },
    2: {
      title: "Scientific Erevna",
      description:
        "Scientific Erevna is a research-oriented platform that facilitates scientific collaboration and data analysis. It provides researchers with advanced data visualization tools and collaborative features to enhance productivity in research projects. The platform ensures secure data handling, making it suitable for academic and scientific communities.",
      professionalInfo: {
        techStack: "React, PostgreSQL (Supabase),",
        features:
          "Dynamic data visualization, Collaborative tools for researchers, Secure user authentication, Real-time data sharing and updates",
        role: "Frontend Developer",
        duration: "4 months",
      },
    },
    3: {
      title: "EleMove",
      description:
        "EleMove is an electric vehicle (EV) fleet management platform designed for service providers to optimize their operations. The app supports real-time EV tracking, driver onboarding, and location-based services, empowering businesses to improve their operational efficiency while contributing to sustainable mobility solutions.",
      professionalInfo: {
        techStack: "React Native, Firebase, Google Maps API",
        features:
          "Real-time electric vehicle tracking, OTP-based driver verification, Integration with Google Maps for optimized navigation, Location-based services for customers",
        role: "Mobile App Developer",
        duration: "3 months",
      },
    },
  };

  // Ensure the `id` is converted to a number and within the valid keys (1, 2, or 3)
  useEffect(() => {
    const timer = setTimeout(() => {
      const projectId = Number(id);
      if (projectId >= 1 && projectId <= 3) {
        setProject(projectData[projectId]);
      }
      setLoading(false);
    }, 1000); // 1 second delay to simulate loading

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <div className="loading">Loading project details.....</div>;
  }

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <div className="professional-info">
        <h3>Professional Information</h3>
        <ul>
          <li>
            <strong>Tech Stack:</strong> {project.professionalInfo.techStack}
          </li>
          <li>
            <strong>Features:</strong> {project.professionalInfo.features}
          </li>
          <li>
            <strong>Role:</strong> {project.professionalInfo.role}
          </li>
          <li>
            <strong>Duration:</strong> {project.professionalInfo.duration}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;
