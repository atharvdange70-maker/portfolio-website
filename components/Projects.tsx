"use client";
import { useState, useEffect } from "react";



const projects = [
 {
  title: "EBS Backup Automation (Serverless AWS)",
  short: "Automated EBS snapshot creation using AWS serverless services.",
  image: [ "/images/projects/ebs-backup.png-1.png",
         "/images/projects/ebs-backup.png-2.png",
         "/images/projects/ebs-backup.png-3.png",
         "/images/projects/ebs-backup.png-4.png",
         "/images/projects/ebs-backup.png-5.png",
         "/images/projects/ebs-backup.png-6.png",
         "/images/projects/ebs-backup.png-7.png",      
         
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
    image: [ "/images/projects/3-tier-project-image-1.png",
         "/images/projects/3-tier-project-image-2.png",
         "/images/projects/3-tier-project-image-3.png",
         "/images/projects/3-tier-project-image-4.png",
         "/images/projects/3-tier-project-image-5.png",
         "/images/projects/3-tier-project-image-6.png",    
         "/images/projects/3-tier-project-image-7.png",  
         "/images/projects/3-tier-project-image-8.png", 
         "/images/projects/3-tier-project-image-9.png", 

         ],

         github: "https://github.com/atharvdange70-maker/edublitz-3tier-web-application",
   
  
      description:"EduBlitz is a beginner-friendly AWS project where students submit an enquiry form through a website. The frontend is hosted on Amazon S3 and delivered using CloudFront. The Java backend runs on an EC2 instance, processes the form submission, and stores the data securely in an Amazon RDS MySQL database. The project demonstrates a complete 3-tier architecture using AWS services.",
    
    tools: ["EC2", "Security Groups", "RDS", "VPC", "S3" , "CloudFront" ],
    features: [
      "Private & Public Subnets",
      "CloudFront",
      "Secure Architecture",
      "Database Layer",
      "Amazon S3",
    ],
  },

 
];

export default function Projects() {
  const [selected, setSelected] = useState(projects[0]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [selected]);

  return (
   <section
  id="projects"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent text-white px-6 py-24"
>
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

    <div className="relative">

      <img
        src={selected.image[currentImage]}
        alt={selected.title}
        className="w-full rounded-2xl border border-slate-700 object-contain"
      />

      {/* Previous Button */}
      <button
        onClick={() =>
          setCurrentImage(
            currentImage === 0
              ? selected.image.length - 1
              : currentImage - 1
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2
        w-12 h-12 rounded-full bg-black/60 hover:bg-blue-600
        flex items-center justify-center
        text-white text-2xl transition duration-300 shadow-lg"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={() =>
          setCurrentImage(
            currentImage === selected.image.length - 1
              ? 0
              : currentImage + 1
          )
        }
        className="absolute right-4 top-1/2 -translate-y-1/2
        w-12 h-12 rounded-full bg-black/60 hover:bg-blue-600
        flex items-center justify-center
        text-white text-2xl transition duration-300 shadow-lg"
      >
        &#10095;
      </button>

      {/* Image Counter */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2
        bg-black/70 px-3 py-1 rounded-full text-sm text-white"
      >
        {currentImage + 1} / {selected.image.length}
      </div>

    </div>

    {/* Dots */}
    <div className="flex justify-center gap-2 mt-5">
      {selected.image.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentImage === index
              ? "bg-blue-500 scale-125"
              : "bg-gray-500 hover:bg-white"
          }`}
        />
      ))}
    </div>

  </div>
)}

          <h3 className="text-3xl font-bold mb-4">{selected.title}</h3>

          <p className="text-gray-300 leading-8 mb-8">
            {selected.description}
          </p>

          <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>

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

          <h4 className="text-xl font-semibold mb-4">Key Features</h4>

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