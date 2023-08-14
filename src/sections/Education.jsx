import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education-container">
      <h2>Information Systems Engineering</h2>
      <h5>Universidad Tecnológica Nacional</h5>
      <ul>
        <li>
          Completed a 5-year degree with honors, achieving the highest GPA (8.72
          out of 10) of the entire university{" "}
          <a href="http://www.frt.utn.edu.ar/index.php?s=noticia&id=2352">
            (read more here)
          </a>
          . Developed a system using computer vision to detect firearms as the
          final project of my degree.
        </li>
      </ul>
    </div>
  );
}

export default Education;
