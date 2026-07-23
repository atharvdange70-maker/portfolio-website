"use client";

import { motion } from "framer-motion";

import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaJenkins,
  FaPython,
  FaNetworkWired,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiShell,
  SiNginx,
  SiPrometheus,
} from "react-icons/si";

import { MdSecurity } from "react-icons/md";

const skills = [
  {
    name: "AWS",
    icon: <FaAws />,
    color: "text-orange-400",
    tags: ["EC2", "S3", "IAM", "VPC", "CloudFront", "RDS"],
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
    tags: ["Images", "Containers", "Compose", "Docker Hub"],
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "text-cyan-400",
    tags: ["Pods", "Deployments", "Services", "Ingress"],
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "text-purple-400",
    tags: ["IaC", "Modules", "Provisioning", "State"],
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "text-red-400",
    tags: ["CI/CD", "Pipeline", "Build", "Deploy"],
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "text-orange-500",
    tags: ["Git", "Branching", "Merge", "Version Control"],
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-blue-400",
    tags: ["Workflow", "Automation", "CI/CD", "Deployment"],
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-yellow-400",
    tags: ["Ubuntu", "Shell", "Permissions", "System Admin"],
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-300",
    tags: ["Automation", "Boto3", "Scripts", "REST APIs"],
  },
  {
    name: "Shell Scripting",
    icon: <SiShell />,
    color: "text-green-400",
    tags: ["Bash", "Cron", "Automation", "Linux"],
  },
  {
    name: "Networking",
    icon: <FaNetworkWired />,
    color: "text-sky-400",
    tags: ["TCP/IP", "DNS", "HTTP", "Load Balancer"],
  },
  {
    name: "IAM & Security",
    icon: <MdSecurity />,
    color: "text-emerald-400",
    tags: ["Users", "Roles", "Policies", "MFA"],
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
    color: "text-green-500",
    tags: ["Reverse Proxy", "SSL", "Web Server", "Load Balancer"],
  },
  {
    name: "Monitoring",
    icon: <SiPrometheus />,
    color: "text-orange-400",
    tags: ["Prometheus", "Grafana", "Metrics", "Alerting"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent py-16 px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs text-cyan-300">
            Technical Expertise
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Hands-on experience with cloud infrastructure, DevOps tools,
            automation, containerization, Infrastructure as Code, monitoring,
            and modern CI/CD workflows.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 justify-items-center gap-6 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative w-full max-w-62.5 min-h-47.5 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-[28px] ${skill.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {skill.icon}
              </div>

              {/* Title */}
               <h3 className="mt-4 text-base font-semibold text-white" >
                {skill.name}
              </h3>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}