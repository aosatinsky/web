import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="/images/profile.jpg" alt="About Me" className="about-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Highly motivated Systems Engineer graduate with honors, dedicated to
            contributing to team achievements through diligent work, attention
            to detail, and organizational abilities. Skilled in Node.JS
            development and proficient in Cloud technologies. Possesses
            excellent teamworking and communication skills, with a passion for
            discussing ideas and having an impact on the product.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
