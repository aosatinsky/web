import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="education-container">
      <h2>Information Systems Engineering (2015-2020)</h2>
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

      <h3>Self-Taught Learning</h3>
      <p>
        Apart from my formal education, I'm also a self-taught learner who's
        passionate about expanding my knowledge base. Here are some online
        courses I've completed:
      </p>
      <ul>
        <li>
          <a href="https://www.coursera.org/account/accomplishments/certificate/82NYB78RA367">
            Introduction to Data Science in Python: University of Michigan
            (Coursera)
          </a>
        </li>
        <li>
          <a href="https://www.coursera.org/account/accomplishments/certificate/CUSHG79Q2YDF">
            Applied Plotting, Charting & Data Representation in Python:
            University of Michigan (Coursera)
          </a>
        </li>
        <li>
          <a href="https://www.coursera.org/account/accomplishments/certificate/48JRLXRUYJYZ">
            Applied Machine Learning in Python: University of Michigan
            (Coursera)
          </a>
        </li>
        <li>
          <a
            href="
https://www.coursera.org/account/accomplishments/certificate/L6N3ABH8LPMM"
          >
            The Future of Payment Technologies: University of Michigan
            (Coursera)
          </a>
        </li>
        <li>
          <a
            href="
https://www.coursera.org/account/accomplishments/certificate/UDDC4QXSXDD3"
          >
            AWS Fundamentals: Building Serverless Applications: AWS (Coursera)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Education;
