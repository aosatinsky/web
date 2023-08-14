import React from "react";
import "./Section.css";

function Section({ content }) {
  return (
    <div className="section-container">
      <div className="section-content">{content}</div>
    </div>
  );
}

export default Section;
