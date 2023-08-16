import React from "react";
import Job from "../components/Job";

function Experience() {
  return (
    <div>
      <Job
        title="Zengo"
        url="https://zengo.com"
        period="2021 - Present"
        position="Backend Software Engineer"
        location="Tel Aviv, Israel 🇮🇱"
        description="MPC-Powered crypto wallet"
        tasks={[
          "Rapidly acquired new competencies in blockchain and applied them to daily responsibilities, enhancing efficiency and output. Proficient in Web3, as well as popular crypto API providers like Alchemy, Tatum, WalletConnect, etherscan, Banxa, Moonpay, and cryptocompare.",
          "Working with NodeJS, Typescript, AWS, SAM, CloudFormation, ElastiCache (Redis), CodePipeline, Beanstalk, SES, SNS, S3, DynamoDB, RDS, Lambda, CloudWatch, EC2, Fargate, Serverless framework, Bash, and more.",
          "Developed numerous Infrastructure as Code (IaC) solutions, elevated test quality by incorporating automated testing and CI/CD.",
          "Designed and built NestJS microservices to replace and enhance core functionalities of the monolithic system, covering everything from documentation to Infrastructure as Code.",
        ]}
      />

      <Job
        title="Southworks"
        url="https://www.southworks.com"
        period="2020"
        position="Software Engineer"
        location="Tucuman, Argentina (Remote) 🇦🇷 🏆"
        description="Software Factory"
        tasks={[
          "Collaborated with software development and testing colleagues to create robust solutions that fulfilled client requirements in terms of functionality, scalability, and performance for the well-known retail company 7-11.",
          "Utilized Node.JS, MongoDB, Automated Testing (with Jest), AWS, and Serverless framework. Additional technologies employed include Redis, New Relic, and Docker.",
        ]}
      />
    </div>
  );
}

export default Experience;
