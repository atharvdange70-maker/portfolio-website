"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaJenkins,
} from "react-icons/fa";

import {
  SiTerraform,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import {
  MdSecurity,
  MdCloudQueue,
  MdNetworkCheck,
} from "react-icons/md";

const skillGroups = [
  {
    title: "☁ Cloud",
    skills: [
      {
        name: "Amazon Web Services",
        icon: <FaAws />,
        level: "Advanced",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/30",
        description: "Cloud Infrastructure",
        tags: ["EC2", "S3", "IAM", "VPC", "CloudFront"],
      },
      {
        name: "CloudWatch",
        icon: <MdCloudQueue />,
        level: "Intermediate",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        description: "AWS Monitoring",
        tags: ["Logs", "Metrics", "Alarms"],
      },
      {
        name: "IAM & Security",
        icon: <MdSecurity />,
        level: "Intermediate",
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/30",
        description: "Identity & Access",
        tags: ["Users", "Roles", "Policies"],
      },
    ],
  },

  {
    title: "⚙ DevOps & Automation",
    skills: [
      {
        name: "Terraform",
        icon: <SiTerraform />,
        level: "Advanced",
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/30",
        description: "Infrastructure as Code",
        tags: ["AWS", "Modules", "State"],
      },
      {
        name: "Docker",
        icon: <FaDocker />,
        level: "Advanced",
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/30",
        description: "Containerization",
        tags: ["Images", "Compose", "Volumes"],
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes />,
        level: "Intermediate",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        description: "Container Orchestration",
        tags: ["Pods", "Deployments", "Services"],
      },
      {
        name: "Jenkins",
        icon: <FaJenkins />,
        level: "Intermediate",
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        description: "CI/CD Pipelines",
        tags: ["Build", "Deploy", "Automation"],
      },
      {
        name: "Git & GitHub",
        icon: <FaGitAlt />,
        level: "Advanced",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/30",
        description: "Version Control",
        tags: ["Git", "GitHub", "Branches"],
      },
    ],
  },

  {
    title: "📊 Monitoring",
    skills: [
      {
        name: "Prometheus",
        icon: <SiPrometheus />,
        level: "Learning",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/30",
        description: "Metrics Collection",
        tags: ["Metrics", "Alerts"],
      },
      {
        name: "Grafana",
        icon: <SiGrafana />,
        level: "Learning",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        description: "Dashboards",
        tags: ["Charts", "Visualization"],
      },
    ],
  },

  {
    title: "🐧 System & Networking",
    skills: [
      {
        name: "Linux",
        icon: <FaLinux />,
        level: "Advanced",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        description: "Operating System",
        tags: ["Ubuntu", "Shell", "CLI"],
      },
      {
        name: "Networking",
        icon: <MdNetworkCheck />,
        level: "Intermediate",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        description: "Networking Fundamentals",
        tags: ["TCP/IP", "DNS", "HTTP"],
      },
      {
        name: "Cloud Architecture",
        icon: <MdCloudQueue />,
        level: "Intermediate",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/30",
        description: "Scalable Design",
        tags: ["ALB", "ASG", "3-Tier"],
      },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
    },
  },
};
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-300">
            DevOps • Cloud • Automation
          </span>

          <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            Technical{" "}
            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Hands-on experience with AWS Cloud, Infrastructure as Code,
            CI/CD, Containerization, Monitoring, and Linux. Passionate
            about building scalable, secure, and production-ready cloud
            solutions.
          </p>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid gap-6 md:grid-cols-4"
        >
          {[
            {
              value: "13+",
              label: "Technologies",
            },
            {
              value: "10+",
              label: "Projects",
            },
            {
              value: "6 Months",
              label: "Experience",
            },
            {
              value: "AWS",
              label: "Cloud Focus",
            },
          ].map((stat) => (
            <motion.div
              whileHover={{
                y: -6,
              }}
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-900/80"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}

        <div className="mt-20 space-y-16"></div>
        {skillGroups.map((group) => (
  <motion.div
    key={group.title}
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {/* Category Header */}

    <div className="mb-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-lg font-semibold text-cyan-300">
        {group.title}
      </span>

      <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />
    </div>

    {/* Skills Grid */}

    <motion.div
      variants={container}
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {group.skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={item}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className={`group relative overflow-hidden rounded-2xl border ${skill.border} bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-slate-900/80`}
        >
          {/* Glow */}

          <div
            className={`absolute inset-0 ${skill.bg} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
          />

          <div className="relative">

            {/* Top */}

            <div className="flex items-start justify-between">

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl border ${skill.border} ${skill.bg} text-3xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
              >
                {skill.icon}
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  skill.level === "Advanced"
                    ? "border border-emerald-500/30 bg-emerald-500/15 text-emerald-400"
                    : skill.level === "Intermediate"
                    ? "border border-sky-500/30 bg-sky-500/15 text-sky-400"
                    : "border border-amber-500/30 bg-amber-500/15 text-amber-400"
                }`}
              >
                {skill.level}
              </span>
            </div>

            {/* Name */}

            <h3 className="mt-6 text-xl font-bold text-white">
              {skill.name}
            </h3>

            {/* Description */}

            <p className="mt-2 text-sm leading-7 text-slate-400">
              {skill.description}
            </p>

            {/* Technology Tags */}

            <div className="mt-5 flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}

            <div className="mt-6 h-px w-full bg-white/10" />

            {/* Bottom */}

            <div className="mt-4 flex items-center justify-between">

              <span className="text-sm text-slate-500">
                DevOps Stack
              </span>

              <span className={`font-medium ${skill.color}`}>
                ● Active
              </span>

            </div>

          </div>
        </motion.div>
      ))}
    </motion.div>

  </motion.div>
))}
      {/* Currently Learning */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >

        <div className="mb-8 flex items-center gap-4">

          <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

          <h3 className="rounded-full border border-purple-400/20 bg-purple-400/10 px-5 py-2 text-lg font-semibold text-purple-300">
            🚀 Currently Learning
          </h3>

          <div className="h-px flex-1 bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

        </div>


        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              name: "ArgoCD",
              desc: "GitOps Deployment",
            },
            {
              name: "Helm",
              desc: "Kubernetes Package Manager",
            },
            {
              name: "Prometheus",
              desc: "Monitoring & Metrics",
            },
            {
              name: "Grafana",
              desc: "Cloud Dashboards",
            },
          ].map((tool) => (

            <motion.div
              key={tool.name}
              whileHover={{
                y: -6,
              }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl transition-all hover:border-purple-400/40"
            >

              <h4 className="text-lg font-semibold text-white">
                {tool.name}
              </h4>


              <p className="mt-2 text-sm text-slate-400">
                {tool.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>


      {/* Tech Stack Footer */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
      >

        <h3 className="text-2xl font-bold text-white">
          DevOps Technology Stack
        </h3>


        <div className="mt-6 flex flex-wrap justify-center gap-3">

          {[
            "AWS",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Jenkins",
            "Linux",
            "Git",
            "GitHub Actions",
            "CloudWatch",
            "Prometheus",
            "Grafana",
          ].map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
            >
              {tech}
            </span>

          ))}

        </div>

      </motion.div>


      </div>

    </section>
  );
}
      
