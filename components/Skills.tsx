"use client";

import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiTerraform,
  SiKubernetes,
  SiCloudflare,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { motion } from "framer-motion";

const skills = [
  { name: "AWS (EC2, EBS, CloudFront, S3, Route53)", icon: <FaAws /> },
  { name: "IAM & Security", icon: <MdSecurity /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "CI/CD Basics", icon: <SiCloudflare /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Networking", icon: <SiCloudflare /> },
  { name: "Cloud Architecture", icon: <FaAws /> },
];

export default function Skills() {
  return (
    <section
  id="skills"
  className="py-20 px-10 text-white"
>
      <h2 className="text-4xl font-bold mb-10 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 perspective-1000">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{
              rotateY: 15,
              rotateX: -10,
              scale: 1.08,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-linear-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-xl flex flex-col items-center justify-center gap-3 cursor-pointer transform-gpu hover:shadow-cyan-500/30"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="text-4xl text-cyan-400 animate-bounce">
              {skill.icon}
            </div>

            <p className="text-sm text-center font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Floating animation CSS */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .grid > div {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}   