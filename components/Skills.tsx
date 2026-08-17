
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
  FiCloud,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiRadio,
  FiServer,
  FiZap,
} from "react-icons/fi";

const infrastructure = [
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "#38bdf8",
    type: "CONTAINER",
    x: "17%",
    y: "18%",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "#22d3ee",
    type: "ORCHESTRATOR",
    x: "83%",
    y: "18%",
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "#a855f7",
    type: "INFRASTRUCTURE",
    x: "12%",
    y: "48%",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "#f87171",
    type: "CI / CD",
    x: "88%",
    y: "48%",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "#60a5fa",
    type: "AUTOMATION",
    x: "22%",
    y: "77%",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "#facc15",
    type: "SYSTEM",
    x: "78%",
    y: "77%",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "#fde047",
    type: "AUTOMATION",
    x: "35%",
    y: "9%",
  },
  {
    name: "Security",
    icon: <MdSecurity />,
    color: "#34d399",
    type: "SECURITY",
    x: "65%",
    y: "9%",
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
    color: "#4ade80",
    type: "WEB",
    x: "6%",
    y: "72%",
  },
  {
    name: "Prometheus",
    icon: <SiPrometheus />,
    color: "#fb923c",
    type: "OBSERVABILITY",
    x: "94%",
    y: "72%",
  },
];

const bottomTools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Shell", icon: <SiShell /> },
  { name: "Networking", icon: <FaNetworkWired /> },
];

function InfraNode({
  item,
  index,
}: {
  item: (typeof infrastructure)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.4,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
      }}
      whileHover={{
        scale: 1.12,
        zIndex: 50,
      }}
      className="group absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: item.x,
        top: item.y,
      }}
    >
      {/* orbital glow */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 3 + index * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-5 rounded-full blur-xl"
        style={{
          background: item.color,
        }}
      />

      {/* node */}
      <div
        className="relative flex h-14.5 w-14.5 items-center justify-center rounded-full border bg-[#020817]/90 backdrop-blur-xl transition-all duration-300 group-hover:h-16.5 group-hover:w-16.5"
        style={{
          borderColor: `${item.color}45`,
          boxShadow: `0 0 25px ${item.color}12`,
        }}
      >
        {/* rotating ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-2 rounded-full border border-dashed opacity-40"
          style={{
            borderColor: item.color,
          }}
        />

        <span
          className="text-xl transition-transform duration-300 group-hover:scale-110"
          style={{
            color: item.color,
          }}
        >
          {item.icon}
        </span>

        {/* status dot */}
        <span
          className="absolute right-0 top-0 h-2 w-2 rounded-full border-2 border-[#020817]"
          style={{
            background: item.color,
          }}
        />

        {/* hover information */}
        <div className="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-50 w-36.25 -translate-x-1/2 translate-y-1 rounded-xl border border-white/10 bg-[#020817]/95 p-2.5 text-left opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-white">
              {item.name}
            </span>

            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: item.color,
              }}
            />
          </div>

          <p
            className="mt-1 font-mono text-[7px] tracking-[0.12em]"
            style={{
              color: item.color,
            }}
          >
            {item.type}
          </p>

          <div className="mt-2 h-px bg-white/6" />

          <p className="mt-2 font-mono text-[7px] text-slate-500">
            STATUS: OPERATIONAL
          </p>
        </div>
      </div>

      {/* label */}
      <div className="mt-3 text-center">
        <p className="whitespace-nowrap text-[9px] font-semibold text-slate-400 transition-colors group-hover:text-white">
          {item.name}
        </p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent px-5 py-20"
    >
      {/* background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ambient center */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-400/4 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 font-mono text-[9px] tracking-[0.25em] text-cyan-300">
            <FiRadio className="animate-pulse" />
            LIVE INFRASTRUCTURE
          </div>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            DevOps{" "}
            <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
            The technologies I use to design, automate, deploy and operate
            cloud infrastructure.
          </p>
        </motion.div>

        {/* =====================================================
            INFRASTRUCTURE CANVAS
        ===================================================== */}

        <div className="relative mx-auto h-147.5 max-w-280 overflow-hidden rounded-[30px] border border-white/6 bg-[#010611]/60 shadow-[0_30px_100px_rgba(0,0,0,.35)]">
          {/* tiny corner decorations */}
          <div className="absolute left-4 top-4 h-3 w-3 border-l border-t border-cyan-400/30" />

          <div className="absolute right-4 top-4 h-3 w-3 border-r border-t border-cyan-400/30" />

          <div className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-cyan-400/30" />

          <div className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-cyan-400/30" />

          {/* =================================================
              NETWORK SVG
          ================================================= */}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1120 590"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* central network */}
            <path
              d="M560 295
                 L190 105
                 M560 295
                 L930 105
                 M560 295
                 L135 285
                 M560 295
                 L985 285
                 M560 295
                 L245 455
                 M560 295
                 L875 455
                 M560 295
                 L390 55
                 M560 295
                 L730 55
                 M560 295
                 L70 425
                 M560 295
                 L1050 425"
              stroke="rgba(34,211,238,.12)"
              strokeWidth="1"
              strokeDasharray="3 8"
            />

            {/* secondary horizontal network */}
            <path
              d="M40 295 H1080"
              stroke="rgba(34,211,238,.035)"
            />

            <path
              d="M560 35 V555"
              stroke="rgba(34,211,238,.035)"
            />

            {/* animated packets */}
            <motion.circle
              r="3"
              fill="#22d3ee"
              animate={{
                cx: [560, 190],
                cy: [295, 105],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="3"
              fill="#a855f7"
              animate={{
                cx: [560, 135],
                cy: [295, 285],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="3"
              fill="#60a5fa"
              animate={{
                cx: [560, 245],
                cy: [295, 455],
              }}
              transition={{
                duration: 2.7,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="3"
              fill="#f87171"
              animate={{
                cx: [560, 930],
                cy: [295, 105],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="3"
              fill="#facc15"
              animate={{
                cx: [560, 875],
                cy: [295, 455],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* =================================================
              TOP TELEMETRY
          ================================================= */}

          <div className="absolute left-5 top-5 z-20 flex items-center gap-2 font-mono text-[8px] tracking-[0.18em] text-slate-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            CLOUD NETWORK
          </div>

          <div className="absolute right-5 top-5 z-20 flex items-center gap-2 font-mono text-[8px] text-slate-600">
            <span>10 NODES</span>
            <span className="text-emerald-400">●</span>
          </div>

          {/* =================================================
              AWS CORE
          ================================================= */}

          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            {/* orbit */}
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

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-18 rounded-full border border-cyan-400/[0.07]"
            />

            {/* glow */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.08, 0.16, 0.08],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -inset-16 rounded-full bg-cyan-400 blur-3xl"
            />

            {/* core */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="relative flex h-38.75 w-38.75 flex-col items-center justify-center rounded-full border border-cyan-400/25 bg-[#020817] shadow-[0_0_70px_rgba(34,211,238,.12)]"
            >
              <FaAws className="text-[43px] text-orange-400" />

              <div className="mt-1 text-lg font-black text-white">
                AWS
              </div>

              <div className="mt-0.5 font-mono text-[7px] tracking-[0.35em] text-cyan-400">
                CLOUD CORE
              </div>

              <div className="mt-3 flex items-center gap-1.5 rounded-full border border-emerald-400/20 px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="font-mono text-[7px] text-emerald-400">
                  ONLINE
                </span>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              NODES
          ================================================= */}

          <div className="hidden md:block">
            {infrastructure.map((item, index) => (
              <InfraNode
                key={item.name}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* =================================================
              MOBILE NODES
          ================================================= */}

          <div className="relative z-40 grid grid-cols-2 gap-3 p-5 pt-14 md:hidden">
            {infrastructure.map((item, index) => (
              <div
                key={item.name}
                className="relative flex flex-col items-center"
              >
                <InfraNode
                  item={{
                    ...item,
                    x: "50%",
                    y: "50%",
                  }}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* =================================================
              CENTER TELEMETRY
          ================================================= */}

          <div className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-5 rounded-full border border-white/5 bg-black/20 px-4 py-2 font-mono text-[7px] text-slate-600 backdrop-blur-md sm:flex">
            <span className="flex items-center gap-1.5">
              <FiServer />
              INFRA
            </span>

            <span className="h-2.5 w-px bg-white/6" />

            <span className="flex items-center gap-1.5">
              <FiGitBranch />
              CI/CD
            </span>

            <span className="h-2.5 w-px bg-white/6" />

            <span className="flex items-center gap-1.5">
              <FiDatabase />
              CLOUD
            </span>

            <span className="h-2.5 w-px bg-white/6" />

            <span className="flex items-center gap-1.5 text-emerald-400">
              <FiActivity />
              ACTIVE
            </span>
          </div>
        </div>

        {/* =====================================================
            PIPELINE
        ===================================================== */}

        <div className="mx-auto mt-5 max-w-280">
          <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-white/6 bg-[#020817]/50">
            <div className="flex items-center justify-center gap-2 border-r border-white/6 py-3">
              <FiCloud className="text-cyan-400" />

              <div>
                <p className="font-mono text-[7px] text-slate-600">
                  CLOUD
                </p>

                <p className="text-[9px] font-semibold text-slate-300">
                  BUILD
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 border-r border-white/6 py-3">
              <FiGitBranch className="text-purple-400" />

              <div>
                <p className="font-mono text-[7px] text-slate-600">
                  AUTOMATION
                </p>

                <p className="text-[9px] font-semibold text-slate-300">
                  SHIP
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 py-3">
              <FiActivity className="text-emerald-400" />

              <div>
                <p className="font-mono text-[7px] text-slate-600">
                  OBSERVABILITY
                </p>

                <p className="text-[9px] font-semibold text-slate-300">
                  RUN
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SUPPORTING TOOLS
        ===================================================== */}

        <div className="mx-auto mt-4 flex max-w-175 items-center justify-center gap-2">
          {bottomTools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{
                y: -3,
                borderColor: "rgba(34,211,238,.2)",
              }}
              className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/1.5 px-3 py-2"
            >
              <span className="text-xs text-slate-500">
                {tool.icon}
              </span>

              <span className="font-mono text-[8px] text-slate-600">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* terminal */}
        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[8px] text-slate-700">
          <span className="text-cyan-500">
            atharv@cloud
          </span>

          <span>:</span>

          <span className="text-purple-400">
            ~/devops
          </span>

          <span>$</span>

          <span>
            infrastructure --status
          </span>

          <span className="text-emerald-500">
            ✓ healthy
          </span>
        </div>
      </div>
    </section>
  );
}