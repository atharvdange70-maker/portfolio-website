
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
    color: "text-amber-300",
    accent: "from-amber-400/25 to-orange-500/10",
    tags: ["EC2", "S3", "IAM", "VPC", "CloudFront", "RDS"],
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-sky-300",
    accent: "from-sky-400/25 to-cyan-500/10",
    tags: ["Images", "Containers", "Compose", "Docker Hub"],
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "text-cyan-200",
    accent: "from-cyan-300/25 to-teal-500/10",
    tags: ["Pods", "Deployments", "Services", "Ingress"],
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "text-violet-300",
    accent: "from-violet-400/25 to-indigo-500/10",
    tags: ["IaC", "Modules", "Provisioning", "State"],
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "text-rose-300",
    accent: "from-rose-400/25 to-pink-500/10",
    tags: ["CI/CD", "Pipeline", "Build", "Deploy"],
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "text-orange-300",
    accent: "from-orange-400/25 to-amber-500/10",
    tags: ["Git", "Branching", "Merge", "Version Control"],
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-indigo-300",
    accent: "from-indigo-400/25 to-blue-500/10",
    tags: ["Workflow", "Automation", "CI/CD", "Deployment"],
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-lime-300",
    accent: "from-lime-400/20 to-emerald-500/10",
    tags: ["Ubuntu", "Shell", "Permissions", "System Admin"],
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-200",
    accent: "from-yellow-300/20 to-cyan-500/10",
    tags: ["Automation", "Boto3", "Scripts", "REST APIs"],
  },
  {
    name: "Shell Scripting",
    icon: <SiShell />,
    color: "text-emerald-300",
    accent: "from-emerald-400/25 to-teal-500/10",
    tags: ["Bash", "Cron", "Automation", "Linux"],
  },
  {
    name: "Networking",
    icon: <FaNetworkWired />,
    color: "text-teal-300",
    accent: "from-teal-400/25 to-cyan-500/10",
    tags: ["TCP/IP", "DNS", "HTTP", "Load Balancer"],
  },
  {
    name: "IAM & Security",
    icon: <MdSecurity />,
    color: "text-green-300",
    accent: "from-green-400/25 to-emerald-500/10",
    tags: ["Users", "Roles", "Policies", "MFA"],
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
    color: "text-emerald-200",
    accent: "from-emerald-300/25 to-green-500/10",
    tags: ["Reverse Proxy", "SSL", "Web Server", "Load Balancer"],
  },
  {
    name: "Monitoring",
    icon: <SiPrometheus />,
    color: "text-orange-300",
    accent: "from-orange-400/25 to-rose-500/10",
    tags: ["Prometheus", "Grafana", "Metrics", "Alerting"],
  },
];
export default function Skills() {
  return ( 
    
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent py-12 px-6"
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
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
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
  className="group relative overflow-hidden rounded-xl border border-white/70 bg-white/90 p-3.5 shadow-[0_8px_30px_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-[0_12px_40px_rgba(34,211,238,0.12)]"
>
  {/* Top Gradient Border */}
  <div
    className={`absolute left-0 top-0 h-1 w-full bg-linear-to-r ${skill.accent}`}
  />

  {/* Glow */}
  <div
    className={`absolute inset-0 bg-linear-to-br ${skill.accent} opacity-0 transition-all duration-500 group-hover:opacity-100`}
  />

  {/* Icon */}
  <div
    className={`relative flex h-11 w-11 items-center justify-center rounded-lg bg-linear-to-br ${skill.accent} text-2xl ${skill.color} shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}
  >
    {skill.icon}
  </div>

  {/* Title */}
  <h3 className="relative mt-3 text-base font-semibold text-slate-900">
    {skill.name}
  </h3>

  {/* Tags */}
  <div className="relative mt-3 flex flex-wrap gap-1.5">
    {skill.tags.map((tag) => (
      <span
        key={tag}
        className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-600"
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