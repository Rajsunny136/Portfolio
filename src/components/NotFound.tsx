import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="go-home">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
