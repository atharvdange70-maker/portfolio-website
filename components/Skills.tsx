

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

import {
  FiActivity,
  FiArrowUpRight,
  FiCloud,
  FiCpu,
  FiZap,
} from "react-icons/fi";

/* =========================================================
   PRIMARY INFRASTRUCTURE NODES
========================================================= */

const nodes = [
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
    category: "CONTAINER",
    tags: ["Images", "Compose"],
    position: "docker",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "text-cyan-400",
    category: "ORCHESTRATION",
    tags: ["Pods", "Services"],
    position: "kubernetes",
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "text-purple-400",
    category: "IaC",
    tags: ["Modules", "State"],
    position: "terraform",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "text-red-400",
    category: "CI/CD",
    tags: ["Build", "Deploy"],
    position: "jenkins",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-blue-300",
    category: "AUTOMATION",
    tags: ["Workflow", "CI/CD"],
    position: "github",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-yellow-400",
    category: "SYSTEM",
    tags: ["Ubuntu", "Shell"],
    position: "linux",
  },
];

/* =========================================================
   SUPPORTING TOOLS
========================================================= */

const tools = [
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-400",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-300",
  },
  {
    name: "Shell",
    icon: <SiShell />,
    color: "text-green-400",
  },
  {
    name: "Networking",
    icon: <FaNetworkWired />,
    color: "text-sky-400",
  },
  {
    name: "Security",
    icon: <MdSecurity />,
    color: "text-emerald-400",
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
    color: "text-green-500",
  },
  {
    name: "Monitoring",
    icon: <SiPrometheus />,
    color: "text-orange-400",
  },
];

/* =========================================================
   SMALL INFRASTRUCTURE NODE
========================================================= */

function InfraNode({
  node,
}: {
  node: (typeof nodes)[number];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      className="group relative w-39.5"
    >
      {/* Node pulse */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-2 rounded-2xl bg-cyan-400/4 blur-xl"
      />

      <div className="relative overflow-hidden rounded-xl border border-white/8 bg-[#030a18]/95 px-3 py-2.5 backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-[#061020]">
        {/* Top line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent opacity-70" />

        {/* Tiny status */}
        <div className="absolute right-2 top-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
          </span>
        </div>

        {/* Main */}
        <div className="flex items-center gap-2.5">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.035] text-lg ${node.color}`}
          >
            {node.icon}
          </div>

          <div className="min-w-0">
            <h3 className="truncate pr-3 text-[11px] font-bold text-white">
              {node.name}
            </h3>

            <p className="mt-0.5 font-mono text-[7px] tracking-[0.14em] text-slate-500">
              {node.category}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-2 flex gap-1">
          {node.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/6 bg-white/2.5 px-1.5 py-0.5 font-mono text-[7px] text-slate-500 transition-colors group-hover:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover arrow */}
        <FiArrowUpRight className="absolute bottom-2 right-2 text-[10px] text-slate-700 transition-all group-hover:text-cyan-400" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent px-5 py-20 md:px-8"
    >
      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-1.5 font-mono text-[9px] tracking-[0.25em] text-cyan-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            DEVOPS ENGINEERING STACK
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Skills{" "}
            <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
            Cloud infrastructure, automation, containers, CI/CD and
            observability — connected as one engineering ecosystem.
          </p>
        </motion.div>

        {/* =====================================================
            TOPOLOGY AREA
        ===================================================== */}

        <div className="relative mx-auto h-135 max-w-262.5 overflow-hidden rounded-[26px] border border-white/6.5 bg-[#010611]/65 shadow-[0_25px_80px_rgba(0,0,0,0.3)]">
          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Header labels */}
          <div className="absolute left-5 top-4 z-40 flex items-center gap-2 font-mono text-[8px] tracking-[0.18em] text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.7)]" />
            INFRASTRUCTURE MAP
          </div>

          <div className="absolute right-5 top-4 z-40 hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/2.5 px-2.5 py-1 font-mono text-[7px] text-emerald-400 sm:flex">
            <FiActivity />
            OPERATIONAL
          </div>

          {/* ===================================================
              NETWORK SVG
          =================================================== */}

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <svg
              viewBox="0 0 1050 540"
              className="h-full w-full"
              fill="none"
            >
              {/* Docker */}
              <path
                d="M185 100 C310 100 370 195 475 250"
                stroke="rgba(34,211,238,.16)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />

              {/* Kubernetes */}
              <path
                d="M865 100 C740 100 680 195 575 250"
                stroke="rgba(34,211,238,.16)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />

              {/* Terraform */}
              <path
                d="M185 270 H455"
                stroke="rgba(168,85,247,.18)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />

              {/* Jenkins */}
              <path
                d="M865 270 H595"
                stroke="rgba(248,113,113,.16)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />

              {/* GitHub */}
              <path
                d="M185 440 C310 440 370 350 475 305"
                stroke="rgba(96,165,250,.16)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />

              {/* Linux */}
              <path
                d="M865 440 C740 440 680 350 575 305"
                stroke="rgba(250,204,21,.16)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />

              {/* Central horizontal line */}
              <path
                d="M40 270 H1010"
                stroke="rgba(34,211,238,.035)"
                strokeWidth="1"
              />

              {/* Central vertical line */}
              <path
                d="M525 65 V480"
                stroke="rgba(34,211,238,.035)"
                strokeWidth="1"
              />

              {/* Data packets */}

              <motion.circle
                r="2.5"
                fill="#22d3ee"
                animate={{
                  cx: [185, 310, 370, 475],
                  cy: [100, 100, 195, 250],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="2.5"
                fill="#22d3ee"
                animate={{
                  cx: [865, 740, 680, 575],
                  cy: [100, 100, 195, 250],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="2.5"
                fill="#a855f7"
                animate={{
                  cx: [185, 300, 455],
                  cy: [270, 270, 270],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="2.5"
                fill="#f87171"
                animate={{
                  cx: [865, 750, 595],
                  cy: [270, 270, 270],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="2.5"
                fill="#60a5fa"
                animate={{
                  cx: [185, 310, 370, 475],
                  cy: [440, 440, 350, 305],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="2.5"
                fill="#facc15"
                animate={{
                  cx: [865, 740, 680, 575],
                  cy: [440, 440, 350, 305],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Junction dots */}
              <circle cx="475" cy="250" r="3" fill="#22d3ee" opacity=".45" />
              <circle cx="575" cy="250" r="3" fill="#22d3ee" opacity=".45" />
              <circle cx="455" cy="270" r="3" fill="#a855f7" opacity=".45" />
              <circle cx="595" cy="270" r="3" fill="#f87171" opacity=".45" />
            </svg>
          </div>

          {/* ===================================================
              AWS CENTRAL CORE
          =================================================== */}

          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            {/* Outer orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-19.5 rounded-full border border-dashed border-cyan-400/[0.07]"
            />

            {/* Second orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-12 rounded-full border border-cyan-400/[0.07]"
            />

            {/* Glow */}
            <div className="absolute -inset-16 rounded-full bg-cyan-400/[0.07] blur-3xl" />

            {/* Core */}
            <motion.div
              whileHover={{ scale: 1.035 }}
              className="relative flex h-43.75 w-43.75 flex-col items-center justify-center rounded-full border border-cyan-400/25 bg-[#020817] shadow-[0_0_60px_rgba(34,211,238,.12)]"
            >
              <FaAws className="text-[48px] text-orange-400 drop-shadow-[0_0_12px_rgba(251,146,60,.25)]" />

              <h3 className="mt-1 text-lg font-black text-white">
                AWS
              </h3>

              <p className="mt-0.5 font-mono text-[8px] tracking-[0.3em] text-cyan-400">
                CLOUD CORE
              </p>

              <div className="mt-3 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.035] px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="font-mono text-[7px] text-emerald-300">
                  ONLINE
                </span>
              </div>
            </motion.div>
          </div>

          {/* ===================================================
              DESKTOP NODES
          =================================================== */}

          <div className="absolute inset-0 hidden md:block">
            {/* Docker */}
            <div className="absolute left-[4%] top-[11%]">
              <InfraNode node={nodes[0]} />
            </div>

            {/* Kubernetes */}
            <div className="absolute right-[4%] top-[11%]">
              <InfraNode node={nodes[1]} />
            </div>

            {/* Terraform */}
            <div className="absolute left-[4%] top-[43%]">
              <InfraNode node={nodes[2]} />
            </div>

            {/* Jenkins */}
            <div className="absolute right-[4%] top-[43%]">
              <InfraNode node={nodes[3]} />
            </div>

            {/* GitHub */}
            <div className="absolute bottom-[8%] left-[7%]">
              <InfraNode node={nodes[4]} />
            </div>

            {/* Linux */}
            <div className="absolute bottom-[8%] right-[7%]">
              <InfraNode node={nodes[5]} />
            </div>
          </div>

          {/* ===================================================
              MOBILE
          =================================================== */}

          <div className="relative z-40 grid grid-cols-2 gap-2.5 p-4 pt-12 md:hidden">
            {nodes.map((node) => (
              <InfraNode key={node.name} node={node} />
            ))}
          </div>

          {/* Bottom tiny telemetry */}
          <div className="absolute bottom-3 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-5 font-mono text-[7px] text-slate-700 md:flex">
            <span className="flex items-center gap-1">
              <FiCloud />
              CLOUD
            </span>

            <span className="flex items-center gap-1">
              <FiCpu />
              AUTOMATION
            </span>

            <span className="flex items-center gap-1">
              <FiZap />
              DELIVERY
            </span>
          </div>
        </div>

        {/* =====================================================
            SUPPORTING TOOLCHAIN
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-5 max-w-262.5"
        >
          <div className="mb-2 flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <FiCpu className="text-cyan-400 text-xs" />

              <span className="font-mono text-[8px] tracking-[0.2em] text-slate-600">
                SUPPORTING TOOLCHAIN
              </span>
            </div>

            <span className="font-mono text-[7px] text-slate-700">
              07 MODULES
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:grid-cols-7">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                className="flex items-center gap-2 rounded-lg border border-white/6 bg-slate-950/50 px-2.5 py-2 backdrop-blur-md transition-all hover:border-cyan-400/20"
              >
                <span className={`text-sm ${tool.color}`}>
                  {tool.icon}
                </span>

                <span className="truncate font-mono text-[8px] text-slate-400">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            TERMINAL FOOTER
        ===================================================== */}

        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[8px] text-slate-700">
          <span className="text-cyan-500">atharv@devops</span>

          <span>:</span>

          <span className="text-purple-400">~/skills</span>

          <span>$</span>

          <span>systemctl status devops-stack</span>

          <span className="text-emerald-500">
            ● active
          </span>
        </div>
      </div>
    </section>
  );
}