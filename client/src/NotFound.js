// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
