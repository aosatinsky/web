import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="skill-category">
          <h3 style={{ color: "orange" }}>Technologies</h3>
          <ul>
            <li>Javascript / Typescript / NodeJS / React</li>
            <li>Next.js / React Native</li>
            <li>Frontend & Mobile Development</li>
            <li>AWS</li>
            <li>NestJS / Jest</li>
            <li>Web3</li>
            <li>Redis / SQL / NoSQL</li>
            <li>Python / Flask</li>
            <li>HTML / CSS</li>
            <li>Microservices</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3 style={{ color: "orange" }}>Languages</h3>
          <ul>
            <li>Spanish - Native</li>
            <li>English - Fluent</li>
            <li>Hebrew - Basic (and improving 🚀)</li>
          </ul>
        </div>

        <div className="personal-info">
          <p>
            I have extensive experience with AWS, particularly in serverless
            architectures. My expertise encompasses CloudFormation, SAM, RDS,
            DynamoDB, and Redis via ElastiCache. I've also delved into ECS with
            Fargate, SQS, and several other AWS services. In the crypto domain,
            my knowledge is broad and deep, having developed with main API
            providers such as Alchemy. Furthermore, I've navigated the
            complexities of working in monorepo settings and developing with a
            microservices approach. Beyond these, I've mastered backend
            development with Node, particularly with the NestJS framework. While
            I am well-versed in backend technologies, I'm expanding my skills in
            frontend and mobile development with React, Next.js, and React
            Native. This personal website showcases my growing frontend
            capabilities, and I continue to deepen my understanding of modern
            UI/UX practices and cross-platform development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
