import React from "react";
import "./About.css";
import IconsCarousel from "../components/IconsCarousel";

function About() {
  const iconsImages = [
    "/images/icons/javascript.svg",
    "/images/icons/typescript.svg",
    "/images/icons/aws.svg",
    "/images/icons/nestjs.svg",
    "/images/icons/python.svg",
    "/images/icons/react.svg",
    "/images/icons/redis.svg",
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        <img src="/images/profile.jpg" alt="About Me" className="about-image" />

        <div className="about-text">
          <h2>
            Hi, nice to e-meet you! I'm Agustin Osatinsky and this is my resume
            :)
          </h2>
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
      <div className="badge-container">
        <a href="https://www.credly.com/badges/f0a0fc25-b058-4166-8f43-8c7b41919c9a/public_url">
          <img
            src="/images/aws-certified-cloud-practitioner.png"
            alt="Certification Badge 1"
            className="badge"
          />
        </a>
        <a href="https://www.credly.com/badges/bc329f0c-5a87-4dac-8286-03110c8616f8/public_url">
          <img
            src="/images/aws-certified-dev.png"
            alt="Certification Badge 2"
            className="badge"
          />
        </a>
      </div>
      <br></br>
      <IconsCarousel imageSources={iconsImages} />
    </div>
  );
}

export default About;
