
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
  SiGnubash,
  SiNginx,
  SiPrometheus,
} from "react-icons/si";

import { MdSecurity } from "react-icons/md";
import { FiActivity, FiArrowUpRight, FiCloud, FiCpu } from "react-icons/fi";

const skills = [
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
    glow: "group-hover:shadow-blue-500/30",
    category: "Containers",
    tags: ["Images", "Compose", "Registry"],
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/30",
    category: "Orchestration",
    tags: ["Pods", "Services", "Ingress"],
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "text-purple-400",
    glow: "group-hover:shadow-purple-500/30",
    category: "Infrastructure",
    tags: ["IaC", "Modules", "State"],
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "text-red-400",
    glow: "group-hover:shadow-red-500/30",
    category: "CI/CD",
    tags: ["Pipeline", "Build", "Deploy"],
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-blue-300",
    glow: "group-hover:shadow-indigo-500/30",
    category: "Automation",
    tags: ["Workflow", "CI/CD", "Deploy"],
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-yellow-400",
    glow: "group-hover:shadow-yellow-500/30",
    category: "Operating System",
    tags: ["Ubuntu", "Permissions", "System"],
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-300",
    glow: "group-hover:shadow-yellow-500/30",
    category: "Automation",
    tags: ["Boto3", "Scripts", "APIs"],
  },
  {
    name: "Shell",
    icon: <SiGnubash />,
    color: "text-green-400",
    glow: "group-hover:shadow-green-500/30",
    category: "Automation",
    tags: ["Bash", "Cron", "Linux"],
  },
  {
    name: "Networking",
    icon: <FaNetworkWired />,
    color: "text-sky-400",
    glow: "group-hover:shadow-sky-500/30",
    category: "Infrastructure",
    tags: ["TCP/IP", "DNS", "HTTP"],
  },
  {
    name: "Security",
    icon: <MdSecurity />,
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/30",
    category: "Security",
    tags: ["IAM", "Roles", "MFA"],
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
    color: "text-green-500",
    glow: "group-hover:shadow-green-500/30",
    category: "Web",
    tags: ["Proxy", "SSL", "Server"],
  },
  {
    name: "Prometheus",
    icon: <SiPrometheus />,
    color: "text-orange-400",
    glow: "group-hover:shadow-orange-500/30",
    category: "Monitoring",
    tags: ["Metrics", "Alerts", "Monitoring"],
  },
];

const orbitPositions = [
  "top-[4%] left-[8%]",
  "top-[2%] right-[8%]",
  "top-[35%] left-[0%]",
  "top-[35%] right-[0%]",
  "bottom-[5%] left-[8%]",
  "bottom-[3%] right-[8%]",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent px-6 py-24"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/6 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 font-mono text-[11px] tracking-[0.25em] text-cyan-300 uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            DevOps Control Center
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Engineering{" "}
            <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            A production-focused toolkit for building, deploying, automating,
            securing and monitoring modern cloud infrastructure.
          </p>
        </motion.div>

        {/* MAIN CONTROL CENTER */}
        <div className="relative mx-auto min-h-180 max-w-6xl">
          {/* Connection Lines */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <svg
              viewBox="0 0 1000 720"
              className="h-full w-full"
              fill="none"
            >
              <motion.path
                d="M100 80 C300 120 350 300 500 360"
                stroke="rgba(34,211,238,.16)"
                strokeWidth="1"
                strokeDasharray="6 8"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.path
                d="M900 80 C700 120 650 300 500 360"
                stroke="rgba(34,211,238,.16)"
                strokeWidth="1"
                strokeDasharray="6 8"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.path
                d="M70 360 C250 350 350 360 500 360"
                stroke="rgba(34,211,238,.14)"
                strokeWidth="1"
                strokeDasharray="5 9"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.path
                d="M930 360 C750 350 650 360 500 360"
                stroke="rgba(34,211,238,.14)"
                strokeWidth="1"
                strokeDasharray="5 9"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.path
                d="M100 640 C300 600 350 430 500 360"
                stroke="rgba(34,211,238,.16)"
                strokeWidth="1"
                strokeDasharray="6 8"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.path
                d="M900 640 C700 600 650 430 500 360"
                stroke="rgba(34,211,238,.16)"
                strokeWidth="1"
                strokeDasharray="6 8"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>
          </div>

          {/* Orbit Skill Cards */}
          <div className="hidden md:block">
            {skills.slice(0, 6).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -6,
                }}
                className={`group absolute ${orbitPositions[index]} z-20 w-52`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl transition-all duration-300 ${skill.glow} hover:border-cyan-400/40 hover:shadow-2xl`}
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-400/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-2xl ${skill.color}`}
                    >
                      {skill.icon}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {skill.name}
                      </h3>

                      <p className="mt-0.5 font-mono text-[9px] text-slate-500">
                        {skill.category}
                      </p>
                    </div>

                    <FiArrowUpRight className="ml-auto text-slate-600 transition-all group-hover:text-cyan-400" />
                  </div>

                  <div className="relative mt-3 flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.07] bg-white/3 px-2 py-1 font-mono text-[9px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTRAL AWS CORE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 md:block"
          >
            {/* Outer Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-16 rounded-full border border-dashed border-cyan-400/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-10 rounded-full border border-cyan-400/10"
            />

            {/* Core Glow */}
            <div className="absolute -inset-12 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Core */}
            <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/90 shadow-[0_0_80px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute h-28 w-28 rounded-full bg-orange-400/10 blur-2xl"
              />

              <div className="relative text-6xl text-orange-400">
                <FaAws />
              </div>

              <h3 className="relative mt-3 text-xl font-black text-white">
                AWS
              </h3>

              <p className="relative mt-1 font-mono text-[10px] tracking-[0.25em] text-cyan-400 uppercase">
                Cloud Core
              </p>

              <div className="mt-4 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="font-mono text-[9px] text-emerald-300">
                  INFRASTRUCTURE ONLINE
                </span>
              </div>
            </div>
          </motion.div>

          {/* MOBILE GRID */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                whileTap={{ scale: 0.97 }}
                className="group rounded-2xl border border-white/10 bg-slate-950/60 p-3 backdrop-blur-xl"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/4 text-xl ${skill.color}`}
                >
                  {skill.icon}
                </div>

                <h3 className="mt-3 text-xs font-bold text-white">
                  {skill.name}
                </h3>

                <p className="mt-1 font-mono text-[8px] text-slate-500">
                  {skill.category}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {skill.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/10 px-1.5 py-0.5 text-[8px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM STATUS PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-0 left-1/2 hidden w-[80%] -translate-x-1/2 md:block"
          >
            <div className="grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-xl">
              <div className="flex items-center justify-center gap-3 p-4">
                <FiCloud className="text-cyan-400" />
                <div>
                  <p className="font-mono text-[9px] text-slate-500 uppercase">
                    Cloud
                  </p>
                  <p className="text-xs font-bold text-white">AWS</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 p-4">
                <FiCpu className="text-purple-400" />
                <div>
                  <p className="font-mono text-[9px] text-slate-500 uppercase">
                    Automation
                  </p>
                  <p className="text-xs font-bold text-white">IaC + CI/CD</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 p-4">
                <FiActivity className="text-emerald-400" />
                <div>
                  <p className="font-mono text-[9px] text-slate-500 uppercase">
                    Operations
                  </p>
                  <p className="text-xs font-bold text-white">
                    Monitor + Secure
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER TERMINAL LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mx-auto mt-8 flex w-fit items-center gap-2 font-mono text-[10px] text-slate-600"
        >
          <span className="text-cyan-500">atharv@devops</span>
          <span>:</span>
          <span className="text-purple-400">~/skills</span>
          <span>$</span>
          <span className="text-slate-500">systemctl status engineering-stack</span>
          <span className="text-emerald-500">● active</span>
        </motion.div>
      </div>
    </section>
  );
}
