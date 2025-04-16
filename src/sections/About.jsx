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
        <div className="about-image-and-badge-container">
          <img
            src="/images/profile.png"
            alt="About Me"
            className="about-image"
          />

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
        </div>

        <div className="about-text">
          <h2>
            Hello there! I'm{" "}
            <span style={{ color: "orange" }}>Agustín Osatinsky</span>
          </h2>
          <p>
            Welcome to my personal space on the web. As a Systems Engineer with
            honors, I'm passionate about building innovative solutions using
            Node.JS and cloud technologies. My professional journey has been
            driven by a commitment to excellence, collaborative problem-solving,
            and creating impactful digital experiences.
          </p>
          <p>
            With a strong expertise in cryptocurrency and blockchain
            technologies, I'm also increasingly involved in frontend and mobile
            development. This diverse technical background allows me to approach
            problems holistically and create comprehensive solutions.
          </p>
          <p>
            Beyond coding, I'm passionate about finance, artificial
            intelligence, travel, and photography. These interests not only
            enrich my personal life but also bring a unique perspective to my
            technical work.
          </p>
          <p>
            When I'm not coding, I enjoy sharing insights and experiences on my
            blog. Feel free to explore my work, skills, and connect with me to
            discuss potential collaborations or just to say hi!
          </p>
        </div>
      </div>

      <IconsCarousel imageSources={iconsImages} />
    </div>
  );
}

export default About;
