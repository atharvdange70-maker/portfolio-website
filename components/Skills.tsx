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
  FiDatabase,
  FiGitBranch,
  FiRadio,
  FiServer,
  FiShield,
  FiZap,
} from "react-icons/fi";

/* =========================================================
   SKILL DATA
========================================================= */

const skills = [
  {
    name: "Docker",
    short: "DOCKER",
    type: "CONTAINER",
    icon: <FaDocker />,
    color: "#38bdf8",
    position: { x: "18%", y: "19%" },
    tags: ["Images", "Compose", "Registry"],
  },

  {
    name: "Kubernetes",
    short: "K8S",
    type: "ORCHESTRATION",
    icon: <SiKubernetes />,
    color: "#22d3ee",
    position: { x: "82%", y: "19%" },
    tags: ["Pods", "Services", "Ingress"],
  },

  {
    name: "Terraform",
    short: "TF",
    type: "INFRASTRUCTURE",
    icon: <SiTerraform />,
    color: "#a855f7",
    position: { x: "10%", y: "49%" },
    tags: ["IaC", "Modules", "State"],
  },

  {
    name: "Jenkins",
    short: "JENKINS",
    type: "CI / CD",
    icon: <FaJenkins />,
    color: "#f87171",
    position: { x: "90%", y: "49%" },
    tags: ["Pipeline", "Build", "Deploy"],
  },

  {
    name: "GitHub Actions",
    short: "ACTIONS",
    type: "AUTOMATION",
    icon: <SiGithubactions />,
    color: "#60a5fa",
    position: { x: "19%", y: "79%" },
    tags: ["Workflow", "CI/CD", "Deploy"],
  },

  {
    name: "Linux",
    short: "LINUX",
    type: "OPERATING SYSTEM",
    icon: <FaLinux />,
    color: "#facc15",
    position: { x: "81%", y: "79%" },
    tags: ["Ubuntu", "System", "Permissions"],
  },

  {
    name: "Python",
    short: "PYTHON",
    type: "AUTOMATION",
    icon: <FaPython />,
    color: "#fde047",
    position: { x: "34%", y: "8%" },
    tags: ["Boto3", "Scripts", "APIs"],
  },

  {
    name: "Security",
    short: "IAM",
    type: "SECURITY",
    icon: <MdSecurity />,
    color: "#34d399",
    position: { x: "66%", y: "8%" },
    tags: ["IAM", "Policies", "MFA"],
  },

  {
    name: "Nginx",
    short: "NGINX",
    type: "WEB SERVER",
    icon: <SiNginx />,
    color: "#4ade80",
    position: { x: "7%", y: "75%" },
    tags: ["Proxy", "SSL", "Routing"],
  },

  {
    name: "Prometheus",
    short: "PROM",
    type: "OBSERVABILITY",
    icon: <SiPrometheus />,
    color: "#fb923c",
    position: { x: "93%", y: "75%" },
    tags: ["Metrics", "Alerts", "Monitoring"],
  },

  {
    name: "Git",
    short: "GIT",
    type: "VERSION CONTROL",
    icon: <FaGitAlt />,
    color: "#fb923c",
    position: { x: "32%", y: "92%" },
    tags: ["Branch", "Merge", "Version"],
  },

  {
    name: "Networking",
    short: "NET",
    type: "NETWORKING",
    icon: <FaNetworkWired />,
    color: "#38bdf8",
    position: { x: "68%", y: "92%" },
    tags: ["TCP/IP", "DNS", "HTTP"],
  },
];

/* =========================================================
   CONNECTIONS
========================================================= */

const connections = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
  [5, 7],
  [6, 8],
  [7, 9],
  [8, 10],
  [9, 11],
];

/* =========================================================
   SKILL NODE
========================================================= */

function SkillNode({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.055,
      }}
      whileHover={{
        scale: 1.12,
        zIndex: 50,
      }}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: skill.position.x,
        top: skill.position.y,
      }}
    >
      {/* ambient glow */}
      <motion.div
        animate={{
          opacity: [0.05, 0.18, 0.05],
          scale: [0.9, 1.25, 0.9],
        }}
        transition={{
          duration: 3 + index * 0.15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-7 rounded-full blur-xl"
        style={{
          backgroundColor: skill.color,
        }}
      />

      {/* orbital ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8 + index,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-2.5 rounded-full border border-dashed opacity-30"
        style={{
          borderColor: skill.color,
        }}
      />

      {/* node */}
      <div
        className="relative flex h-13.5 w-13.5 items-center justify-center rounded-full border bg-[#020817]/95 backdrop-blur-xl transition-all duration-300 group-hover:h-15.5 group-hover:w-15.5"
        style={{
          borderColor: `${skill.color}55`,
          boxShadow: `0 0 30px ${skill.color}10`,
        }}
      >
        {/* icon */}
        <span
          className="text-[19px] transition-transform duration-300 group-hover:scale-110"
          style={{
            color: skill.color,
          }}
        >
          {skill.icon}
        </span>

        {/* status */}
        <span
          className="absolute right-0 top-0 h-2 w-2 rounded-full border-2 border-[#020817]"
          style={{
            backgroundColor: skill.color,
          }}
        />
      </div>

      {/* name */}
      <div className="mt-2 text-center">
        <p className="whitespace-nowrap text-[8px] font-semibold tracking-wide text-slate-500 transition-colors group-hover:text-white">
          {skill.short}
        </p>
      </div>

      {/* hover panel */}
      <div
        className="pointer-events-none absolute left-1/2 top-[calc(100%+18px)] z-100 w-38.75 -translate-x-1/2 translate-y-2 rounded-xl border border-white/10 bg-[#020817]/95 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-white">
              {skill.name}
            </p>

            <p
              className="mt-0.5 font-mono text-[6px] tracking-[0.16em]"
              style={{
                color: skill.color,
              }}
            >
              {skill.type}
            </p>
          </div>

          <FiArrowUpRight className="text-xs text-slate-600" />
        </div>

        <div className="mt-2 h-px bg-white/[0.07]" />

        <div className="mt-2 flex flex-wrap gap-1">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/6 bg-white/2.5 px-1.5 py-1 font-mono text-[6px] text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-1.5 font-mono text-[6px] text-emerald-400">
          <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
          MODULE ACTIVE
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   TELEMETRY ITEM
========================================================= */

function Telemetry({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-cyan-400">{icon}</span>

      <div>
        <p className="font-mono text-[6px] tracking-[0.15em] text-slate-700">
          {label}
        </p>

        <p className="font-mono text-[8px] text-slate-400">
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent px-5 py-20 md:px-8"
    >
      {/* background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* large atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-150 w-150 -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-9 text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/4 px-4 py-1.5 font-mono text-[8px] tracking-[0.28em] text-cyan-300">
            <FiRadio className="animate-pulse" />
            ENGINEERING CONTROL PLANE
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            My{" "}
            <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              DevOps Stack
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 md:text-sm">
            A visual map of the technologies I use to build, automate,
            deploy and monitor cloud infrastructure.
          </p>
        </motion.div>

        {/* =====================================================
            COMMAND CENTER
        ===================================================== */}

        <div className="relative mx-auto max-w-280">
          <div className="relative h-150 overflow-hidden rounded-4xl border border-white/[0.07] bg-[#010611]/75 shadow-[0_30px_100px_rgba(0,0,0,.4)]">
            {/* =================================================
                GRID
            ================================================= */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            {/* =================================================
                CORNERS
            ================================================= */}

            <div className="absolute left-5 top-5 h-4 w-4 border-l border-t border-cyan-400/30" />
            <div className="absolute right-5 top-5 h-4 w-4 border-r border-t border-cyan-400/30" />
            <div className="absolute bottom-5 left-5 h-4 w-4 border-b border-l border-cyan-400/30" />
            <div className="absolute bottom-5 right-5 h-4 w-4 border-b border-r border-cyan-400/30" />

            {/* =================================================
                TOP STATUS BAR
            ================================================= */}

            <div className="absolute left-6 top-5 z-30 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.7)]" />

              <span className="font-mono text-[7px] tracking-[0.2em] text-slate-600">
                INFRASTRUCTURE / LIVE
              </span>
            </div>

            <div className="absolute right-6 top-5 z-30 flex items-center gap-3 font-mono text-[7px] text-slate-700">
              <span>12 NODES</span>

              <span className="text-emerald-400">
                HEALTHY
              </span>
            </div>

            {/* =================================================
                NETWORK
            ================================================= */}

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1120 600"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* main rays */}
              <g
                stroke="rgba(34,211,238,.12)"
                strokeWidth="1"
                strokeDasharray="3 8"
              >
                <path d="M560 300 L202 114" />
                <path d="M560 300 L918 114" />

                <path d="M560 300 L112 294" />
                <path d="M560 300 L1008 294" />

                <path d="M560 300 L213 474" />
                <path d="M560 300 L907 474" />

                <path d="M560 300 L380 48" />
                <path d="M560 300 L740 48" />

                <path d="M560 300 L78 450" />
                <path d="M560 300 L1042 450" />

                <path d="M560 300 L360 552" />
                <path d="M560 300 L760 552" />
              </g>

              {/* central crosshair */}
              <path
                d="M40 300 H1080"
                stroke="rgba(34,211,238,.035)"
              />

              <path
                d="M560 40 V560"
                stroke="rgba(34,211,238,.035)"
              />

              {/* radar circle */}
              <circle
                cx="560"
                cy="300"
                r="170"
                stroke="rgba(34,211,238,.05)"
              />

              <circle
                cx="560"
                cy="300"
                r="215"
                stroke="rgba(34,211,238,.025)"
              />

              {/* animated packets */}

              <motion.circle
                r="2.5"
                fill="#22d3ee"
                animate={{
                  cx: [560, 202],
                  cy: [300, 114],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="2.5"
                fill="#a855f7"
                animate={{
                  cx: [560, 112],
                  cy: [300, 294],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="2.5"
                fill="#60a5fa"
                animate={{
                  cx: [560, 213],
                  cy: [300, 474],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="2.5"
                fill="#f87171"
                animate={{
                  cx: [560, 918],
                  cy: [300, 114],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                r="2.5"
                fill="#34d399"
                animate={{
                  cx: [560, 1008],
                  cy: [300, 294],
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>

            {/* =================================================
                RADAR SCAN
            ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-107.5 w-107.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,.08) 18deg, transparent 40deg)",
              }}
            />

            {/* =================================================
                AWS COMMAND CORE
            ================================================= */}

            <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
              {/* outer orbit */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-26.25 rounded-full border border-dashed border-cyan-400/6"
              />

              {/* orbit marker */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-26.25"
              >
                <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              </motion.div>

              {/* core glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.07, 0.17, 0.07],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -inset-20 rounded-full bg-cyan-400 blur-[70px]"
              />

              {/* core */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="relative flex h-42 w-42 flex-col items-center justify-center rounded-full border border-cyan-400/25 bg-[#020817] shadow-[0_0_70px_rgba(34,211,238,.15)]"
              >
                {/* AWS */}
                <FaAws className="text-[43px] text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,.2)]" />

                <h3 className="mt-1 text-xl font-black text-white">
                  AWS
                </h3>

                <p className="font-mono text-[7px] tracking-[0.35em] text-cyan-400">
                  COMMAND CORE
                </p>

                {/* health */}
                <div className="mt-3 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/3 px-2.5 py-1">
                  <motion.span
                    animate={{
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  />

                  <span className="font-mono text-[6px] tracking-wider text-emerald-400">
                    SYSTEM ONLINE
                  </span>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                SKILL NODES
            ================================================= */}

            <div className="hidden md:block">
              {skills.map((skill, index) => (
                <SkillNode
                  key={skill.name}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>

            {/* =================================================
                MOBILE
            ================================================= */}

            <div className="relative z-50 grid grid-cols-3 gap-4 p-5 pt-14 md:hidden">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full border bg-[#020817]"
                    style={{
                      borderColor: `${skill.color}45`,
                      color: skill.color,
                    }}
                  >
                    {skill.icon}
                  </div>

                  <span className="mt-1 text-center font-mono text-[6px] text-slate-500">
                    {skill.short}
                  </span>
                </div>
              ))}
            </div>

            {/* =================================================
                TELEMETRY
            ================================================= */}

            <div className="absolute bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-7 rounded-xl border border-white/6 bg-black/20 px-5 py-2.5 backdrop-blur-md sm:flex">
              <Telemetry
                icon={<FiCpu />}
                label="CPU"
                value="LOW"
              />

              <Telemetry
                icon={<FiServer />}
                label="NODES"
                value="12 / 12"
              />

              <Telemetry
                icon={<FiShield />}
                label="SECURITY"
                value="ACTIVE"
              />

              <Telemetry
                icon={<FiActivity />}
                label="STATUS"
                value="HEALTHY"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            DELIVERY PIPELINE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mx-auto mt-5 max-w-280"
        >
          <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-white/6 bg-[#020817]/50 md:grid-cols-4">
            {/* Build */}
            <div className="group flex items-center justify-center gap-2 border-b border-white/5 px-4 py-3 transition-colors hover:bg-white/2 md:border-b-0 md:border-r">
              <FiCpu className="text-cyan-400" />

              <div>
                <p className="font-mono text-[6px] tracking-[0.15em] text-slate-700">
                  01 / BUILD
                </p>

                <p className="text-[9px] font-semibold text-slate-400">
                  INFRASTRUCTURE
                </p>
              </div>
            </div>

            {/* Test */}
            <div className="group flex items-center justify-center gap-2 border-b border-white/5 px-4 py-3 transition-colors hover:bg-white/2 md:border-b-0 md:border-r">
              <FiZap className="text-purple-400" />

              <div>
                <p className="font-mono text-[6px] tracking-[0.15em] text-slate-700">
                  02 / AUTOMATE
                </p>

                <p className="text-[9px] font-semibold text-slate-400">
                  CI / CD
                </p>
              </div>
            </div>

            {/* Deploy */}
            <div className="group flex items-center justify-center gap-2 border-r border-white/5 px-4 py-3 transition-colors hover:bg-white/2">
              <FiCloud className="text-blue-400" />

              <div>
                <p className="font-mono text-[6px] tracking-[0.15em] text-slate-700">
                  03 / DEPLOY
                </p>

                <p className="text-[9px] font-semibold text-slate-400">
                  CLOUD
                </p>
              </div>
            </div>

            {/* Observe */}
            <div className="group flex items-center justify-center gap-2 px-4 py-3 transition-colors hover:bg-white/2">
              <FiActivity className="text-emerald-400" />

              <div>
                <p className="font-mono text-[6px] tracking-[0.15em] text-slate-700">
                  04 / OBSERVE
                </p>

                <p className="text-[9px] font-semibold text-slate-400">
                  MONITORING
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TERMINAL SIGNATURE
        ===================================================== */}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-[7px] text-slate-700">
          <span className="text-cyan-500">
            atharv@aws
          </span>

          <span>:</span>

          <span className="text-purple-400">
            ~/infrastructure
          </span>

          <span>$</span>

          <span>
            kubectl get nodes
          </span>

          <span className="text-emerald-500">
            ● 12/12 Ready
          </span>
        </div>
      </div>
    </section>
  );
}