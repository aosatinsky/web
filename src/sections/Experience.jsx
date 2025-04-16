import React from "react";
import Job from "../components/Job";

function Experience() {
  return (
    <div>
      <Job
        title="Zengo"
        url="https://zengo.com"
        logo="/images/icons/zengo.jpeg"
        period="2021 - Present"
        position="Backend Software Engineer"
        location="Tel Aviv, Israel 🇮🇱"
        description="MPC-Powered crypto wallet"
        tasks={[
          "Leading backend development for a cutting-edge crypto wallet, where I've mastered blockchain technologies and integrated them into our core systems. I've built expertise in Web3 ecosystems and implemented solutions using various crypto API providers including Alchemy, WalletConnect, Etherscan, Banxa, and Moonpay.",

          "Architected and developed robust microservices using NestJS to modernize our platform, successfully transitioning critical functionalities from a monolithic system to a more scalable and maintainable architecture.",

          "Established comprehensive Infrastructure as Code (IaC) practices, significantly improving deployment reliability and system stability while reducing manual configuration errors.",

          "Built and maintained a sophisticated tech stack including NodeJS, TypeScript, and a wide range of AWS services (Lambda, DynamoDB, RDS, ElastiCache, CloudFormation, S3, EC2, ECS, Fargate, SES, SNS, CloudWatch, Beanstalk, CodePipeline) to support our rapidly growing user base and transaction volume.",

          "Implemented automated testing frameworks and CI/CD pipelines that enhanced code quality and accelerated our release cycles, allowing for more frequent and reliable product updates.",
        ]}
      />

      <Job
        title="Southworks"
        url="https://www.southworks.com"
        logo="/images/icons/southworks.png"
        period="2020"
        position="Software Engineer"
        location="Tucumán, Argentina (Remote) 🇦🇷 🏆"
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
