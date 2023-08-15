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
            I am well-versed in backend technologies, I'm on my journey towards
            becoming a full-stack developer. I've been making strides in
            frontend development, as evidenced by this webpage, which I've
            crafted using React. Nonetheless, I continue to learn and deepen my
            understanding of frontend practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
