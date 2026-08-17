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
  FiCpu,
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
    name: "AWS",
    category: "CLOUD",
    icon: <FaAws />,
    accent: "#22d3ee",
    x: 0,
    y: -285,
  },

  {
    name: "Kubernetes",
    category: "ORCHESTRATION",
    icon: <SiKubernetes />,
    accent: "#22d3ee",
    x: 205,
    y: -215,
  },

  {
    name: "Docker",
    category: "CONTAINERS",
    icon: <FaDocker />,
    accent: "#22d3ee",
    x: 335,
    y: -55,
  },

  {
    name: "Terraform",
    category: "INFRASTRUCTURE",
    icon: <SiTerraform />,
    accent: "#a78bfa",
    x: 310,
    y: 125,
  },

  {
    name: "Jenkins",
    category: "CI / CD",
    icon: <FaJenkins />,
    accent: "#fb7185",
    x: 200,
    y: 255,
  },

  {
    name: "GitHub Actions",
    category: "AUTOMATION",
    icon: <SiGithubactions />,
    accent: "#22d3ee",
    x: 45,
    y: 295,
  },

  {
    name: "Linux",
    category: "SYSTEM",
    icon: <FaLinux />,
    accent: "#facc15",
    x: -135,
    y: 275,
  },

  {
    name: "Nginx",
    category: "WEB SERVER",
    icon: <SiNginx />,
    accent: "#34d399",
    x: -285,
    y: 185,
  },

  {
    name: "Networking",
    category: "NETWORK",
    icon: <FaNetworkWired />,
    accent: "#22d3ee",
    x: -335,
    y: 20,
  },

  {
    name: "Python",
    category: "AUTOMATION",
    icon: <FaPython />,
    accent: "#facc15",
    x: -300,
    y: -135,
  },

  {
    name: "Git",
    category: "VERSION CONTROL",
    icon: <FaGitAlt />,
    accent: "#fb923c",
    x: -195,
    y: -245,
  },

  {
    name: "Shell",
    category: "SCRIPTING",
    icon: <SiShell />,
    accent: "#34d399",
    x: -70,
    y: -290,
  },

  {
    name: "Security",
    category: "SECURITY",
    icon: <MdSecurity />,
    accent: "#34d399",
    x: -420,
    y: -70,
  },

  {
    name: "Prometheus",
    category: "OBSERVABILITY",
    icon: <SiPrometheus />,
    accent: "#22d3ee",
    x: 420,
    y: 25,
  },
];

/* =========================================================
   CONNECTION PATH
========================================================= */

function Connection({
  x,
  y,
  accent,
  delay,
}: {
  x: number;
  y: number;
  accent: string;
  delay: number;
}) {
  const length = Math.sqrt(x * x + y * y);

  const angle = Math.atan2(y, x) * (180 / Math.PI);

  return (
    <>
      {/* Base line */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-px origin-left"
        style={{
          width: `${length}px`,
          transform: `rotate(${angle}deg)`,
          background: `linear-gradient(
            90deg,
            rgba(34,211,238,0.10),
            ${accent}35,
            transparent
          )`,
        }}
      />

      {/* Dashed line */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-px origin-left"
        style={{
          width: `${length}px`,
          transform: `rotate(${angle}deg)`,
          background: `repeating-linear-gradient(
            90deg,
            ${accent}55 0px,
            ${accent}55 3px,
            transparent 3px,
            transparent 10px
          )`,
          opacity: 0.25,
        }}
      />

      {/* Moving packet */}

      <motion.span
        className="pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 rounded-full"
        style={{
          backgroundColor: accent,
          boxShadow: `0 0 12px ${accent}`,
        }}
        animate={{
          x: [0, x],
          y: [0, y],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.8,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}

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
    <div
      className="absolute left-1/2 top-1/2 z-30"
      style={{
        transform: `translate(
          calc(-50% + ${skill.x}px),
          calc(-50% + ${skill.y}px)
        )`,
      }}
    >
      {/* Connection */}

      <Connection
        x={skill.x}
        y={skill.y}
        accent={skill.accent}
        delay={index * 0.18}
      />

      {/* Node */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.6,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          delay: index * 0.06,
          duration: 0.55,
          type: "spring",
          stiffness: 130,
          damping: 14,
        }}
        whileHover={{
          scale: 1.12,
        }}
        className="group relative"
      >
        {/* Ambient glow */}

        <motion.div
          animate={{
            scale: [0.85, 1.15, 0.85],
            opacity: [0.05, 0.13, 0.05],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-8 rounded-full blur-2xl"
          style={{
            backgroundColor: skill.accent,
          }}
        />

        {/* Outer rotating ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-3 rounded-full border border-dashed"
          style={{
            borderColor: `${skill.accent}30`,
          }}
        />

        {/* Small orbital dot */}

        <motion.span
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
          style={{
            backgroundColor: skill.accent,
            boxShadow: `0 0 10px ${skill.accent}`,
          }}
        />

        {/* Main icon */}

        <div
          className="relative flex h-18 w-18 items-center justify-center rounded-full border bg-[#020812]/95 backdrop-blur-xl"
          style={{
            borderColor: `${skill.accent}38`,
            boxShadow: `
              0 0 35px ${skill.accent}10,
              inset 0 0 25px rgba(34,211,238,0.025)
            `,
          }}
        >
          {/* inner ring */}

          <div
            className="absolute inset-1.25 rounded-full border"
            style={{
              borderColor: "rgba(255,255,255,0.035)",
            }}
          />

          {/* ICON
              Mostly monochrome cyan/ice.
          */}

          <span
            className="relative z-10 text-[28px] text-cyan-100/90"
            style={{
              filter: `drop-shadow(0 0 8px ${skill.accent}30)`,
            }}
          >
            {skill.icon}
          </span>

          {/* status */}

          <span
            className="absolute right-1.5 top-1.75 h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: skill.accent,
              boxShadow: `0 0 9px ${skill.accent}`,
            }}
          />
        </div>

        {/* =================================================
            LABEL
        ================================================= */}

        <div className="absolute left-1/2 top-21 -translate-x-1/2 text-center">
          <div className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-slate-200">
            {skill.name}
          </div>

          <div
            className="mt-1 whitespace-nowrap font-mono text-[6px] tracking-[0.28em]"
            style={{
              color: `${skill.accent}aa`,
            }}
          >
            {skill.category}
          </div>
        </div>

        {/* =================================================
            HOVER INFORMATION
        ================================================= */}

        <div className="pointer-events-none absolute left-1/2 top-28 z-200 w-45 -translate-x-1/2 translate-y-2 rounded-xl border border-white/8 bg-[#020711]/95 p-3 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold text-white">
                {skill.name}
              </p>

              <p
                className="mt-1 font-mono text-[6px] tracking-[0.2em]"
                style={{
                  color: skill.accent,
                }}
              >
                {skill.category}
              </p>
            </div>

            <FiArrowUpRight className="text-xs text-slate-600" />
          </div>

          <div className="my-2 h-px bg-white/6" />

          <div className="flex flex-wrap gap-1">
            {["ACTIVE", "READY", "CONNECTED"].map((item) => (
              <span
                key={item}
                className="rounded border border-white/[0.07] bg-white/2.5 px-1.5 py-1 font-mono text-[5px] text-slate-500"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-1.5 font-mono text-[6px] text-emerald-400">
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
            MODULE ONLINE
          </div>
        </div>
      </motion.div>
    </div>
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
          BACKGROUND
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[55%] h-162.5 w-162.5 -translate-x-1/2 rounded-full bg-cyan-400/2.5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADING
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
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/3 px-4 py-1.5 font-mono text-[8px] tracking-[0.3em] text-cyan-300/80">
            <FiRadio className="animate-pulse" />
            ENGINEERING TOOLCHAIN
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Technical{" "}
            <span className="bg-linear-to-r from-cyan-200 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 md:text-sm">
            The infrastructure, automation and cloud technologies I use
            to design, deploy and operate production systems.
          </p>
        </motion.div>

        {/* =====================================================
            TOPOLOGY CONTAINER
        ===================================================== */}

        <div className="relative mx-auto h-190 max-w-312.5 overflow-hidden rounded-4xl border border-white/[0.07] bg-[#01060d]/80 shadow-[0_40px_120px_rgba(0,0,0,.5)]">
          {/* grid */}

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* =================================================
              HEADER STATUS
          ================================================= */}

          <div className="absolute left-6 top-5 z-50 flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />

            <span className="font-mono text-[7px] tracking-[0.25em] text-slate-600">
              INFRASTRUCTURE / TOPOLOGY
            </span>
          </div>

          <div className="absolute right-6 top-5 z-50 flex items-center gap-2 font-mono text-[7px] text-slate-700">
            <FiZap className="text-cyan-400/50" />

            SYSTEMS ONLINE
          </div>

          {/* =================================================
              ORBIT RINGS
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-152.5 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/4.5"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-115 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/4.5"
          />

          <div className="absolute left-1/2 top-1/2 h-85 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/6" />

          {/* =================================================
              NETWORK SVG
          ================================================= */}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1250 760"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="topologyGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22d3ee"
                  stopOpacity="0"
                />

                <stop
                  offset="50%"
                  stopColor="#22d3ee"
                  stopOpacity=".25"
                />

                <stop
                  offset="100%"
                  stopColor="#a78bfa"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* central cross */}

            <path
              d="M0 380 H1250"
              stroke="rgba(34,211,238,.025)"
            />

            <path
              d="M625 0 V760"
              stroke="rgba(34,211,238,.025)"
            />

            {/* diagonal infrastructure routes */}

            <path
              d="M100 110 L625 380 L1150 110"
              stroke="url(#topologyGradient)"
              strokeDasharray="4 10"
              fill="none"
            />

            <path
              d="M90 650 L625 380 L1160 650"
              stroke="url(#topologyGradient)"
              strokeDasharray="4 10"
              fill="none"
            />

            <path
              d="M625 70 L625 690"
              stroke="rgba(34,211,238,.05)"
              strokeDasharray="2 12"
            />

            {/* moving packets */}

            <motion.circle
              r="3"
              fill="#67e8f9"
              animate={{
                cx: [100, 625, 1150],
                cy: [110, 380, 110],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="3"
              fill="#a78bfa"
              animate={{
                cx: [1160, 625, 90],
                cy: [650, 380, 650],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* =================================================
              CENTER CORE
          ================================================= */}

          <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
            {/* glow */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.08, 0.02, 0.08],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-32 rounded-full bg-cyan-400 blur-[90px]"
            />

            {/* rotating core ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-9 rounded-full border border-dashed border-cyan-300/20"
            />

            {/* core */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              className="relative flex h-42.5 w-42.5 flex-col items-center justify-center rounded-full border border-cyan-300/20 bg-[#020913] shadow-[0_0_100px_rgba(34,211,238,.12)]"
            >
              {/* chip */}

              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.035]">
                <FiCpu className="text-xl text-cyan-200" />
              </div>

              <h3 className="text-[18px] font-bold tracking-tight text-white">
                Platform Core
              </h3>

              <p className="mt-1 font-mono text-[6px] tracking-[0.4em] text-cyan-300/80">
                DEVOPS ENGINE
              </p>

              {/* operational */}

              <div className="mt-4 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/3 px-3 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_7px_#34d399]" />

                <span className="font-mono text-[6px] tracking-wider text-emerald-400">
                  OPERATIONAL
                </span>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              DESKTOP SKILLS
          ================================================= */}

          <div className="absolute inset-0 hidden md:block">
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

          <div className="relative z-50 grid grid-cols-3 gap-y-8 px-8 pt-20 md:hidden">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/15 bg-[#020711]"
                >
                  <span className="text-xl text-cyan-100/90">
                    {skill.icon}
                  </span>
                </div>

                <span className="mt-2 text-center font-mono text-[7px] text-slate-500">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* =================================================
              TELEMETRY BAR
          ================================================= */}

          <div className="absolute bottom-6 left-1/2 z-100 hidden -translate-x-1/2 items-center gap-8 rounded-xl border border-white/[0.07] bg-[#020711]/90 px-7 py-3 backdrop-blur-2xl md:flex">
            {/* latency */}

            <div className="flex items-center gap-2">
              <FiActivity className="text-cyan-300" />

              <div>
                <p className="font-mono text-[6px] tracking-wider text-slate-700">
                  LATENCY
                </p>

                <p className="font-mono text-[8px] text-slate-400">
                  24ms
                </p>
              </div>
            </div>

            {/* services */}

            <div className="flex items-center gap-2">
              <FiServer className="text-cyan-300" />

              <div>
                <p className="font-mono text-[6px] tracking-wider text-slate-700">
                  SERVICES
                </p>

                <p className="font-mono text-[8px] text-slate-400">
                  14 / 14
                </p>
              </div>
            </div>

            {/* security */}

            <div className="flex items-center gap-2">
              <FiShield className="text-emerald-400" />

              <div>
                <p className="font-mono text-[6px] tracking-wider text-slate-700">
                  SECURITY
                </p>

                <p className="font-mono text-[8px] text-slate-400">
                  ACTIVE
                </p>
              </div>
            </div>

            {/* pipeline */}

            <div className="flex items-center gap-2">
              <FiGitBranch className="text-purple-300" />

              <div>
                <p className="font-mono text-[6px] tracking-wider text-slate-700">
                  PIPELINE
                </p>

                <p className="font-mono text-[8px] text-slate-400">
                  READY
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              CORNER DECORATIONS
          ================================================= */}

          <div className="absolute bottom-5 left-6 hidden items-center gap-2 font-mono text-[6px] text-slate-700 md:flex">
            <span className="text-cyan-400/50">01</span>
            NODE_DISCOVERY
          </div>

          <div className="absolute bottom-5 right-6 hidden font-mono text-[6px] text-slate-700 md:block">
            MESH::STABLE
          </div>
        </div>

        {/* =====================================================
            TERMINAL STATUS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mx-auto mt-5 flex max-w-312.5 flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[7px] text-slate-700"
        >
          <span className="text-cyan-400/70">
            atharv@devops
          </span>

          <span>:</span>

          <span className="text-purple-400/70">
            ~/infrastructure
          </span>

          <span>$</span>

          <span>
            systemctl status platform-core
          </span>

          <span className="text-emerald-400">
            ● active (running)
          </span>
        </motion.div>
      </div>
    </section>
  );
}