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
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import {
  MdSecurity,
  MdCloudQueue,
  MdNetworkCheck,
} from "react-icons/md";

const skills = [
  {
    name: "Amazon Web Services",
    icon: <FaAws />,
    color: "from-orange-500 to-yellow-400",
    level: "Advanced",
    category: "Cloud",
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "from-violet-500 to-indigo-500",
    level: "Advanced",
    category: "Infrastructure",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "from-sky-500 to-cyan-500",
    level: "Advanced",
    category: "Containers",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "from-blue-500 to-indigo-500",
    level: "Intermediate",
    category: "Orchestration",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "from-red-500 to-orange-500",
    level: "Intermediate",
    category: "CI/CD",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "from-orange-500 to-red-500",
    level: "Advanced",
    category: "Version Control",
  },
  {
    name: "CloudWatch",
    icon: <MdCloudQueue />,
    color: "from-cyan-500 to-sky-500",
    level: "Intermediate",
    category: "Monitoring",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "from-yellow-500 to-amber-500",
    level: "Advanced",
    category: "Operating System",
  },
  {
    name: "IAM & Security",
    icon: <MdSecurity />,
    color: "from-emerald-500 to-green-500",
    level: "Intermediate",
    category: "Security",
  },
  {
    name: "Networking",
    icon: <MdNetworkCheck />,
    color: "from-cyan-500 to-blue-500",
    level: "Intermediate",
    category: "Networking",
  },
  {
    name: "Cloud Architecture",
    icon: <MdCloudQueue />,
    color: "from-indigo-500 to-purple-500",
    level: "Intermediate",
    category: "Architecture",
  },
  {
    name: "Monitoring",
    icon: <SiGrafana />,
    color: "from-orange-500 to-red-500",
    level: "Learning",
    category: "Observability",
  },
  {
    name: "Prometheus",
    icon: <SiPrometheus />,
    color: "from-orange-400 to-amber-500",
    level: "Learning",
    category: "Monitoring",
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
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-slate-950 via-slate-900 to-blue" />

      {/* Floating Orbs */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mt-6 text-5xl font-extrabold md:text-6xl">
            Technical{" "}
            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Passionate about building scalable cloud infrastructure,
            automating deployments, managing containers, and creating reliable
            DevOps workflows using modern technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${skill.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
              />

              {/* Top Border */}
              <div
                className={`h-1 w-full bg-linear-to-r ${skill.color}`}
              />

              <div className="relative p-7">
                {/* Category */}
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
                  {skill.category}
                </span>

                {/* Icon */}
                <div
                  className={`mt-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${skill.color} text-3xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                >
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {skill.name}
                </h3>

                {/* Level Badge */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    Proficiency
                  </span>

                  <span
                    className={`rounded-full bg-linear-to-r ${skill.color} px-3 py-1 text-xs font-semibold text-white`}
                  >
                    {skill.level}
                  </span>
                </div>
                              {/* Progress Bar */}
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width:
                      skill.level === "Advanced"
                        ? "95%"
                        : skill.level === "Intermediate"
                        ? "75%"
                        : "55%",
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                  }}
                  className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                />
              </div>

              {/* Bottom Label */}
              <p className="mt-3 text-xs uppercase tracking-widest text-slate-500">
                DevOps • Cloud • Automation
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
}