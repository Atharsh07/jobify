// src/pages/notFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default NotFound;
