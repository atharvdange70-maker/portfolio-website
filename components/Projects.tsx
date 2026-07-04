"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    title: "React Static Website Deployment (AWS)",
    short: "Hosted a React application on AWS using S3 and CloudFront.",
    description:
      "Designed and deployed a highly available static website using AWS S3 Static Website Hosting and CloudFront CDN. Configured bucket policies, optimized content delivery, and improved performance through caching and global edge locations.",
    tools: ["React", "AWS S3", "CloudFront", "Route53"],
    features: [
      "Static Website Hosting",
      "CloudFront CDN",
      "Route53 DNS",
      "High Availability",
    ],
  },

 {
  title: "EBS Backup Automation (Serverless AWS)",
  short: "Automated EBS snapshot creation using AWS serverless services.",
  image: [ "/images/projects/ebs-backup.png.png",
         "/images/projects/ebs-backup.png-2.png",
         "/images/projects/ebs-backup.png-3.png",
         "/images/projects/ebs-backup.png-4.png",
         "/images/projects/ebs-backup.png-5.png",
        
          
         
  ],
  github: "https://github.com/atharvdange70-maker/EduBlitz-EBS-Backup-Automation",

  description:
    "Built a fully automated backup solution using AWS Lambda, API Gateway, CloudFront, S3, IAM, and EBS Snapshots. The solution performs scheduled backups and provides a simple web interface for snapshot creation.",
  tools: ["Lambda", "API Gateway", "CloudFront", "S3", "IAM", "EBS"],
  features: [
    "Automatic Snapshots",
    "Scheduled Backups",
    "Serverless Architecture",
    "Disaster Recovery",
  ],
},

  {
    title: "3-Tier Architecture Deployment",
    short: "Designed and deployed a scalable AWS 3-tier architecture.",
    description:
      "Implemented a production-style 3-tier architecture consisting of Presentation Layer, Application Layer, and Database Layer using EC2, VPC, Load Balancer, Security Groups, and RDS.",
    tools: ["EC2", "RDS", "VPC", "ALB"],
    features: [
      "Private & Public Subnets",
      "Load Balancer",
      "Secure Architecture",
      "Database Layer",
    ],
  },

  {
    title: "Docker cloudblitz-student-app",
    short: "Containerized and deployed a student management application.",
    description:
      "Created Docker images, configured containers, and deployed the application on AWS EC2. Improved portability, scalability, and deployment consistency.",
    tools: ["Docker", "EC2", "Linux", "Node.js"],
    features: ["Containerization", "Docker Images", "AWS Deployment", "CI/CD Ready"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [selected]);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          Projects
        </h2>

        <p className="text-center text-gray-400 mb-12">
          AWS • DevOps • Cloud Engineering
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelected(project)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2
              ${
                selected.title === project.title
                  ? "border-blue-500 bg-slate-900"
                  : "border-slate-800 hover:border-blue-500"
              }`}
            >
              <h3 className="font-bold text-xl mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.short}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-8">
         {selected.image && (
  <div className="mb-8">

    <img
      src={selected.image[currentImage]}
      alt={selected.title}
      className="w-full rounded-2xl border border-slate-700 object-contain"
    />

    <div className="flex justify-between mt-4">

      <button
        onClick={() =>
          setCurrentImage(
            currentImage === 0
              ? selected.image.length - 1
              : currentImage - 1
          )
        }
        className="px-5 py-2 bg-slate-800 rounded-lg hover:bg-blue-600"
      >
        ◀ Previous
      </button>

      <button
        onClick={() =>
          setCurrentImage(
            currentImage === selected.image.length - 1
              ? 0
              : currentImage + 1
          )
        }
        className="px-5 py-2 bg-slate-800 rounded-lg hover:bg-blue-600"
      >
        Next ▶
      </button>

    </div>

  </div>
)}

       <h3 className="text-3xl font-bold mb-4">
            {selected.title}
          </h3>

          <p className="text-gray-300 leading-8 mb-8">
            {selected.description}
          </p>

          <h4 className="text-xl font-semibold mb-4">
            Technologies Used
          </h4>

          <div className="flex flex-wrap gap-3 mb-8">
            {selected.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>

          <h4 className="text-xl font-semibold mb-4">
            Key Features
          </h4>

          <ul className="grid md:grid-cols-2 gap-4">
            {selected.features.map((feature) => (
              <li key={feature} className="bg-slate-800 p-4 rounded-xl">
                ✓ {feature}
              </li>
            ))}
          </ul>
          {selected.github && (
  <div className="mt-8">
    <a
      href={selected.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
    >
      View Source Code on GitHub
    </a>
  </div>
)}

        </div>
      </div>
    </section>
  );
}