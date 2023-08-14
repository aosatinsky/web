import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="skill-category">
          <h3>Technologies</h3>
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
          <h3>Languages</h3>
          <ul>
            <li>Spanish - Native</li>
            <li>English - Fluent</li>
            <li>Hebrew - Basic (and improving 🚀)</li>
          </ul>
        </div>

        <div className="personal-info">
          <p>
            Over the years, I've found myself diving deep into the AWS
            ecosystem, and boy, it's been a ride! From crafting intricate data
            models in RDS using good ol' MySQL, to navigating the dynamic world
            of DynamoDB, every project has been a learning curve. Oh, and let's
            not forget the times I've played around with Redis using ElastiCache
            to give applications that extra speed boost. On the deployment side,
            tools like Lambda, SAM, and CloudFormation have been absolute
            game-changers. And yep, I've had my fair share of adventures with
            CI/CD, setting up pipelines, and experimenting with container
            solutions. Every tool, every service, has its own story, and I've
            relished every moment of piecing them together to create something
            impactful. And finally yes, this was written by ChatGPT.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
