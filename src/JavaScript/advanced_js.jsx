import React from "react";
import { Link } from "react-router-dom";


const Advance_js = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>

      <Link to="/pages/profile" className="profile-circle">
        <div className="profile-avatar">
          <span className="profile-text">👤</span>
        </div>
        <div className="profile-status"></div>
      </Link>
      
      <h1 className="text-3xl font-bold text-blue-600">Java Intermediate</h1>
      <p>Welcome to the Intermediate section. Start learning core Python concepts!</p>
    </div>
  );
};

export default Advance_js;
