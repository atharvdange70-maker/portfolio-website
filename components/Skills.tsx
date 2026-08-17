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
import { FiArrowUpRight, FiActivity, FiCloud, FiCpu } from "react-icons/fi";

const coreSkills = [
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
    category: "CONTAINERS",
    tags: ["Images", "Compose", "Registry"],
    position: "docker",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "text-cyan-400",
    category: "ORCHESTRATION",
    tags: ["Pods", "Services", "Ingress"],
    position: "kubernetes",
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "text-purple-400",
    category: "INFRASTRUCTURE",
    tags: ["IaC", "Modules", "State"],
    position: "terraform",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "text-red-400",
    category: "CI/CD",
    tags: ["Pipeline", "Build", "Deploy"],
    position: "jenkins",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-blue-300",
    category: "AUTOMATION",
    tags: ["Workflow", "CI/CD", "Deploy"],
    position: "github",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-yellow-400",
    category: "OPERATING SYSTEM",
    tags: ["Ubuntu", "System", "Permissions"],
    position: "linux",
  },
];

const toolchain = [
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "text-orange-400",
    tags: ["Git", "Branching", "Merge"],
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-300",
    tags: ["Boto3", "Scripts", "APIs"],
  },
  {
    name: "Shell",
    icon: <SiShell />,
    color: "text-green-400",
    tags: ["Bash", "Cron", "Automation"],
  },
  {
    name: "Networking",
    icon: <FaNetworkWired />,
    color: "text-sky-400",
    tags: ["TCP/IP", "DNS", "HTTP"],
  },
  {
    name: "Security",
    icon: <MdSecurity />,
    color: "text-emerald-400",
    tags: ["IAM", "Roles", "MFA"],
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
    color: "text-green-500",
    tags: ["Proxy", "SSL", "Server"],
  },
  {
    name: "Monitoring",
    icon: <SiPrometheus />,
    color: "text-orange-400",
    tags: ["Metrics", "Alerts", "Grafana"],
  },
];

function SkillCard({
  skill,
}: {
  skill: (typeof coreSkills)[number];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -6,
        scale: 1.025,
      }}
      className="group relative w-52.5"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/9 bg-[#020817]/90 p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-400/35 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.10)]">
        {/* Hover glow */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-400/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Top indicator */}
        <div className="absolute left-0 top-0 h-0.5 w-full bg-linear-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 opacity-60" />

        <div className="relative flex items-center gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.035] text-xl ${skill.color}`}
          >
            {skill.icon}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-[13px] font-bold text-white">
              {skill.name}
            </h3>

            <p className="mt-0.5 font-mono text-[8px] tracking-[0.12em] text-slate-500">
              {skill.category}
            </p>
          </div>

          <FiArrowUpRight className="ml-auto shrink-0 text-sm text-slate-600 transition-colors group-hover:text-cyan-400" />
        </div>

        <div className="relative mt-3 flex flex-wrap gap-1.5">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.07] bg-white/2.5 px-1.5 py-1 font-mono text-[8px] text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ToolCard({
  tool,
}: {
  tool: (typeof toolchain)[number];
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-xl border border-white/[0.07] bg-slate-950/60 p-3 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/25"
    >
      <div className="flex items-center gap-2.5">
        <div className={`text-lg ${tool.color}`}>{tool.icon}</div>

        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold text-white">
            {tool.name}
          </p>

          <p className="mt-0.5 font-mono text-[8px] text-slate-500">
            {tool.tags.join(" • ")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent px-5 py-24 md:px-8"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[40%] h-137.5 w-137.5 -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/6 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-cyan-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            ENGINEERING STACK
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Cloud &{" "}
            <span className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              DevOps
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400">
            A production-focused technology stack for cloud infrastructure,
            containerization, automation, CI/CD and observability.
          </p>
        </motion.div>

        {/* =========================================================
            TOPOLOGY
        ========================================================= */}

        <div className="relative mx-auto h-162.5 max-w-275 overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#010611]/60 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-[2px]">
          {/* Inner grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.5) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          {/* Top-left label */}
          <div className="absolute left-5 top-5 z-40 flex items-center gap-2 font-mono text-[9px] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" />
            INFRASTRUCTURE MAP
          </div>

          {/* Top-right status */}
          <div className="absolute right-5 top-5 z-40 hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/3 px-3 py-1.5 font-mono text-[8px] text-emerald-400 sm:flex">
            <FiActivity />
            SYSTEMS OPERATIONAL
          </div>

          {/* =====================================================
              CONNECTION NETWORK
          ===================================================== */}

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <svg
              viewBox="0 0 1100 650"
              className="h-full w-full"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Docker → AWS */}
              <path
                d="M165 115 C280 115 350 220 470 285"
                stroke="rgba(34,211,238,.16)"
                strokeWidth="1"
                strokeDasharray="5 8"
              />

              {/* Kubernetes → AWS */}
              <path
                d="M935 115 C820 115 750 220 630 285"
                stroke="rgba(34,211,238,.16)"
                strokeWidth="1"
                strokeDasharray="5 8"
              />

              {/* Terraform → AWS */}
              <path
                d="M155 325 C270 325 350 325 455 325"
                stroke="rgba(168,85,247,.18)"
                strokeWidth="1"
                strokeDasharray="5 8"
              />

              {/* Jenkins → AWS */}
              <path
                d="M945 325 C830 325 750 325 645 325"
                stroke="rgba(248,113,113,.15)"
                strokeWidth="1"
                strokeDasharray="5 8"
              />

              {/* GitHub → AWS */}
              <path
                d="M180 545 C300 545 355 420 470 370"
                stroke="rgba(96,165,250,.15)"
                strokeWidth="1"
                strokeDasharray="5 8"
              />

              {/* Linux → AWS */}
              <path
                d="M920 545 C800 545 745 420 630 370"
                stroke="rgba(250,204,21,.15)"
                strokeWidth="1"
                strokeDasharray="5 8"
              />

              {/* Horizontal infrastructure line */}
              <path
                d="M40 390 H1060"
                stroke="rgba(34,211,238,.05)"
                strokeWidth="1"
              />

              {/* Vertical infrastructure line */}
              <path
                d="M550 80 V570"
                stroke="rgba(34,211,238,.05)"
                strokeWidth="1"
              />

              {/* Animated data packets */}
              <motion.circle
                r="3"
                fill="#22d3ee"
                animate={{
                  cx: [165, 280, 350, 470],
                  cy: [115, 115, 220, 285],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="3"
                fill="#a855f7"
                animate={{
                  cx: [155, 270, 350, 455],
                  cy: [325, 325, 325, 325],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="3"
                fill="#60a5fa"
                animate={{
                  cx: [180, 300, 355, 470],
                  cy: [545, 545, 420, 370],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="3"
                fill="#22d3ee"
                animate={{
                  cx: [935, 820, 750, 630],
                  cy: [115, 115, 220, 285],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="3"
                fill="#f87171"
                animate={{
                  cx: [945, 830, 750, 645],
                  cy: [325, 325, 325, 325],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="3"
                fill="#facc15"
                animate={{
                  cx: [920, 800, 745, 630],
                  cy: [545, 545, 420, 370],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>
          </div>

          {/* =====================================================
              CENTRAL AWS CORE
          ===================================================== */}

          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-20 rounded-full border border-dashed border-cyan-400/8"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-12 rounded-full border border-cyan-400/8"
            />

            <div className="absolute -inset-14 rounded-full bg-cyan-400/[0.07] blur-3xl" />

            {/* Core */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="relative flex h-51.25 w-51.25 flex-col items-center justify-center rounded-full border border-cyan-400/25 bg-[#020817] shadow-[0_0_70px_rgba(34,211,238,.12)]"
            >
              {/* AWS glow */}
              <div className="absolute inset-0 rounded-full bg-linear-to-b from-orange-400/4 to-transparent" />

              <FaAws className="relative text-[58px] text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,.25)]" />

              <h3 className="relative mt-2 text-xl font-black text-white">
                AWS
              </h3>

              <p className="mt-1 font-mono text-[9px] tracking-[0.3em] text-cyan-400">
                CLOUD CORE
              </p>

              <div className="mt-4 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/4 px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="font-mono text-[8px] text-emerald-300">
                  INFRASTRUCTURE ONLINE
                </span>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              DESKTOP SKILL CARDS
          ===================================================== */}

          <div className="absolute inset-0 hidden md:block">
            {/* Docker */}
            <div className="absolute left-[5%] top-[8%]">
              <SkillCard skill={coreSkills[0]} />
            </div>

            {/* Kubernetes */}
            <div className="absolute right-[5%] top-[8%]">
              <SkillCard skill={coreSkills[1]} />
            </div>

            {/* Terraform */}
            <div className="absolute left-[4%] top-[42%]">
              <SkillCard skill={coreSkills[2]} />
            </div>

            {/* Jenkins */}
            <div className="absolute right-[4%] top-[42%]">
              <SkillCard skill={coreSkills[3]} />
            </div>

            {/* GitHub */}
            <div className="absolute bottom-[7%] left-[7%]">
              <SkillCard skill={coreSkills[4]} />
            </div>

            {/* Linux */}
            <div className="absolute bottom-[7%] right-[7%]">
              <SkillCard skill={coreSkills[5]} />
            </div>
          </div>

          {/* =====================================================
              MOBILE
          ===================================================== */}

          <div className="relative z-30 grid grid-cols-2 gap-3 p-5 pt-16 md:hidden">
            {coreSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* =========================================================
            TOOLCHAIN
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-5 max-w-275"
        >
          <div className="mb-3 flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <FiCpu className="text-cyan-400" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-slate-500">
                SUPPORTING TOOLCHAIN
              </span>
            </div>

            <span className="font-mono text-[8px] text-slate-600">
              07 MODULES
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7">
            {toolchain.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM TERMINAL
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-8 flex w-fit max-w-full items-center gap-2 overflow-hidden font-mono text-[9px] text-slate-600"
        >
          <span className="shrink-0 text-cyan-500">
            atharv@devops
          </span>

          <span>:</span>

          <span className="shrink-0 text-purple-400">
            ~/infrastructure
          </span>

          <span>$</span>

          <span className="truncate text-slate-500">
            terraform plan
          </span>

          <span className="shrink-0 text-emerald-500">
            ✓ ready
          </span>
        </motion.div>
      </div>
    </section>
  );
}