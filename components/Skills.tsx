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
  FiDatabase,
  FiGitBranch,
  FiRadio,
  FiServer,
  FiTerminal,
  FiZap,
} from "react-icons/fi";

/* =========================================================
   SKILL DATA
========================================================= */

const skills = [
  {
    name: "AWS",
    icon: <FaAws />,
    category: "CLOUD",
    level: "CORE",
    metric: "14+",
    label: "SERVICES",
    accent: "#ff9900",
    x: "50%",
    y: "50%",
    core: true,
  },

  {
    name: "Docker",
    icon: <FaDocker />,
    category: "CONTAINER",
    level: "ACTIVE",
    metric: "08",
    label: "MODULES",
    accent: "#38bdf8",
    x: "17%",
    y: "19%",
  },

  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    category: "ORCHESTRATION",
    level: "ACTIVE",
    metric: "06",
    label: "OBJECTS",
    accent: "#22d3ee",
    x: "83%",
    y: "19%",
  },

  {
    name: "Terraform",
    icon: <SiTerraform />,
    category: "INFRASTRUCTURE",
    level: "ACTIVE",
    metric: "05",
    label: "MODULES",
    accent: "#a78bfa",
    x: "12%",
    y: "50%",
  },

  {
    name: "Jenkins",
    icon: <FaJenkins />,
    category: "DELIVERY",
    level: "ACTIVE",
    metric: "04",
    label: "PIPELINES",
    accent: "#f87171",
    x: "88%",
    y: "50%",
  },

  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    category: "AUTOMATION",
    level: "ACTIVE",
    metric: "07",
    label: "WORKFLOWS",
    accent: "#60a5fa",
    x: "22%",
    y: "81%",
  },

  {
    name: "Linux",
    icon: <FaLinux />,
    category: "OPERATING SYSTEM",
    level: "ACTIVE",
    metric: "03",
    label: "DISTROS",
    accent: "#d4d4d8",
    x: "78%",
    y: "81%",
  },
];

/* =========================================================
   SECONDARY SKILLS
========================================================= */

const secondarySkills = [
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "Shell",
    icon: <SiShell />,
  },
  {
    name: "Networking",
    icon: <FaNetworkWired />,
  },
  {
    name: "Security",
    icon: <MdSecurity />,
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
  },
  {
    name: "Prometheus",
    icon: <SiPrometheus />,
  },
];

/* =========================================================
   SMALL NODE
========================================================= */

function SkillNode({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  if (skill.core) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
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
        delay: index * 0.07,
      }}
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      className="group absolute z-30 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: skill.x,
        top: skill.y,
      }}
    >
      {/* outer glow */}

      <div
        className="pointer-events-none absolute -inset-4 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"
        style={{
          background: skill.accent,
        }}
      />

      {/* CARD */}

      <div className="relative w-43.5 overflow-hidden rounded-[14px] border border-white/9 bg-[#080b12]/95 shadow-[0_15px_40px_rgba(0,0,0,.35)] backdrop-blur-xl transition-all duration-300 group-hover:border-white/20">
        {/* top accent */}

        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${skill.accent}, transparent)`,
          }}
        />

        {/* scan line */}

        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.4,
          }}
          className="pointer-events-none absolute top-0 h-full w-8 bg-linear-to-r from-transparent via-white/[0.035] to-transparent skew-x-[-20deg]"
        />

        <div className="relative p-3">
          {/* header */}

          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              {/* icon */}

              <div
                className="relative flex h-9 w-9 items-center justify-center rounded-lg border bg-[#0c111b]"
                style={{
                  borderColor: `${skill.accent}35`,
                  color: skill.accent,
                }}
              >
                <span className="text-lg">
                  {skill.icon}
                </span>

                {/* tiny corner */}

                <span
                  className="absolute -right-px -top-px h-1.5 w-1.5 rounded-full"
                  style={{
                    background: skill.accent,
                  }}
                />
              </div>

              <div>
                <h3 className="text-[11px] font-bold tracking-tight text-zinc-100">
                  {skill.name}
                </h3>

                <p className="mt-0.5 font-mono text-[6px] tracking-[0.18em] text-zinc-600">
                  {skill.category}
                </p>
              </div>
            </div>

            <FiArrowUpRight className="text-[11px] text-zinc-700 transition-colors group-hover:text-zinc-400" />
          </div>

          {/* divider */}

          <div className="my-2.5 h-px bg-white/5.5" />

          {/* telemetry */}

          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[6px] tracking-[0.16em] text-zinc-600">
                {skill.label}
              </p>

              <p
                className="mt-0.5 font-mono text-sm font-bold"
                style={{
                  color: skill.accent,
                }}
              >
                {skill.metric}
              </p>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: skill.accent,
                    boxShadow: `0 0 7px ${skill.accent}`,
                  }}
                />

                <span className="font-mono text-[6px] text-zinc-500">
                  {skill.level}
                </span>
              </div>

              {/* tiny signal bars */}

              <div className="mt-2 flex items-end justify-end gap-0.5">
                <span
                  className="h-1 w-0.75 rounded-sm"
                  style={{ background: skill.accent }}
                />

                <span
                  className="h-1.5 w-0.75 rounded-sm"
                  style={{ background: skill.accent }}
                />

                <span
                  className="h-2 w-0.75 rounded-sm"
                  style={{ background: skill.accent }}
                />

                <span
                  className="h-2.5 w-0.75 rounded-sm opacity-20"
                  style={{ background: skill.accent }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   AWS CORE
========================================================= */

function AWSCore() {
  return (
    <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
      {/* outer radar */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-27.5 rounded-full border border-white/[0.035]"
      >
        <span className="absolute left-1/2 -top-0.75 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,.8)]" />
      </motion.div>

      {/* second radar */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-19 rounded-full border border-cyan-400/6"
      />

      {/* pulse */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.04, 0.12, 0.04],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-14 rounded-full bg-cyan-400 blur-3xl"
      />

      {/* core */}

      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        className="relative flex h-42 w-42 flex-col items-center justify-center rounded-full border border-white/13 bg-[#070a10] shadow-[0_25px_70px_rgba(0,0,0,.7)]"
      >
        {/* inner circle */}

        <div className="absolute inset-2 rounded-full border border-white/4" />

        <FaAws className="relative text-[42px] text-[#ff9900]" />

        <h3 className="relative mt-1 text-xl font-black tracking-tight text-white">
          AWS
        </h3>

        <p className="relative mt-0.5 font-mono text-[7px] tracking-[0.35em] text-zinc-500">
          COMMAND CORE
        </p>

        <div className="relative mt-3 flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/3 px-2.5 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

          <span className="font-mono text-[6px] tracking-[0.15em] text-emerald-400">
            SYSTEM ONLINE
          </span>
        </div>
      </motion.div>
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
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* central glow */}

      <div className="pointer-events-none absolute left-1/2 top-[48%] h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-cyan-400/2.5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
        =================================================== */}

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
            duration: 0.55,
          }}
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-white/8 bg-[#080b12]/70 px-4 py-1.5 font-mono text-[8px] tracking-[0.25em] text-zinc-500 backdrop-blur-xl">
            <FiRadio className="text-cyan-400" />

            INFRASTRUCTURE CONTROL
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Technical{" "}
            <span className="text-cyan-400">
              Arsenal
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-zinc-500 md:text-sm">
            Cloud, infrastructure, automation and delivery systems
            engineered for modern DevOps workflows.
          </p>
        </motion.div>

        {/* ===================================================
            COMMAND GRID
        =================================================== */}

        <div className="relative mx-auto h-142.5 max-w-280 overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#03060b]/80 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-sm">
          {/* =================================================
              SCAN GRID
          ================================================= */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* horizontal scanner */}

          <motion.div
            animate={{
              y: ["0%", "100%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent"
          />

          {/* =================================================
              TOP BAR
          ================================================= */}

          <div className="absolute left-5 right-5 top-4 z-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

              <span className="font-mono text-[7px] tracking-[0.2em] text-zinc-600">
                DEVOPS / SYSTEM MAP
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[7px] text-zinc-700">
              <span>LATENCY 24ms</span>

              <span className="hidden sm:inline">
                NODES 07
              </span>

              <span className="text-emerald-400">
                ● HEALTHY
              </span>
            </div>
          </div>

          {/* =================================================
              CONNECTION SVG
          ================================================= */}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1120 570"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* main lines */}

            <path
              d="
                M560 285 L190 108
                M560 285 L930 108
                M560 285 L135 285
                M560 285 L985 285
                M560 285 L245 462
                M560 285 L875 462
              "
              stroke="rgba(255,255,255,.09)"
              strokeWidth="1"
              strokeDasharray="2 9"
            />

            {/* secondary lines */}

            <path
              d="M560 285 L390 52 M560 285 L730 52"
              stroke="rgba(34,211,238,.08)"
              strokeWidth="1"
              strokeDasharray="2 10"
            />

            {/* central axis */}

            <path
              d="M40 285 H1080"
              stroke="rgba(255,255,255,.025)"
            />

            <path
              d="M560 40 V530"
              stroke="rgba(255,255,255,.025)"
            />

            {/* moving packets */}

            <motion.circle
              r="2.5"
              fill="#22d3ee"
              animate={{
                cx: [560, 190],
                cy: [285, 108],
              }}
              transition={{
                duration: 2.7,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="2.5"
              fill="#a78bfa"
              animate={{
                cx: [560, 135],
                cy: [285, 285],
              }}
              transition={{
                duration: 2.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="2.5"
              fill="#60a5fa"
              animate={{
                cx: [560, 245],
                cy: [285, 462],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="2.5"
              fill="#f87171"
              animate={{
                cx: [560, 930],
                cy: [285, 108],
              }}
              transition={{
                duration: 2.9,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="2.5"
              fill="#d4d4d8"
              animate={{
                cx: [560, 875],
                cy: [285, 462],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* =================================================
              AWS
          ================================================= */}

          <AWSCore />

          {/* =================================================
              NODES
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

          <div className="relative z-50 grid grid-cols-2 gap-2 p-4 pt-16 md:hidden">
            {skills
              .filter((skill) => !skill.core)
              .map((skill, index) => (
                <div
                  key={skill.name}
                  className="relative flex justify-center"
                >
                  <div className="scale-[0.9]">
                    <SkillNode
                      skill={{
                        ...skill,
                        x: "50%",
                        y: "50%",
                      }}
                      index={index}
                    />
                  </div>
                </div>
              ))}
          </div>

          {/* =================================================
              TELEMETRY
          ================================================= */}

          <div className="absolute bottom-4 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-5 rounded-full border border-white/[0.07] bg-[#080b12]/90 px-5 py-2 backdrop-blur-xl sm:flex">
            <div className="flex items-center gap-1.5">
              <FiServer className="text-cyan-400 text-[10px]" />

              <span className="font-mono text-[7px] text-zinc-600">
                INFRA
              </span>
            </div>

            <div className="h-3 w-px bg-white/[0.07]" />

            <div className="flex items-center gap-1.5">
              <FiGitBranch className="text-purple-400 text-[10px]" />

              <span className="font-mono text-[7px] text-zinc-600">
                CI/CD
              </span>
            </div>

            <div className="h-3 w-px bg-white/[0.07]" />

            <div className="flex items-center gap-1.5">
              <FiDatabase className="text-sky-400 text-[10px]" />

              <span className="font-mono text-[7px] text-zinc-600">
                CLOUD
              </span>
            </div>

            <div className="h-3 w-px bg-white/[0.07]" />

            <div className="flex items-center gap-1.5">
              <FiActivity className="text-emerald-400 text-[10px]" />

              <span className="font-mono text-[7px] text-emerald-400">
                OPERATIONAL
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            PIPELINE STRIP
        =================================================== */}

        <div className="mx-auto mt-4 max-w-280 overflow-hidden rounded-xl border border-white/[0.07] bg-[#080b12]/70">
          <div className="grid grid-cols-3">
            <div className="flex items-center justify-center gap-2 border-r border-white/6 px-3 py-3">
              <FiCpu className="text-cyan-400 text-sm" />

              <div>
                <p className="font-mono text-[6px] tracking-[0.15em] text-zinc-600">
                  INFRASTRUCTURE
                </p>

                <p className="text-[9px] font-semibold text-zinc-300">
                  BUILD
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 border-r border-white/6 px-3 py-3">
              <FiZap className="text-purple-400 text-sm" />

              <div>
                <p className="font-mono text-[6px] tracking-[0.15em] text-zinc-600">
                  AUTOMATION
                </p>

                <p className="text-[9px] font-semibold text-zinc-300">
                  SHIP
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 px-3 py-3">
              <FiActivity className="text-emerald-400 text-sm" />

              <div>
                <p className="font-mono text-[6px] tracking-[0.15em] text-zinc-600">
                  OBSERVABILITY
                </p>

                <p className="text-[9px] font-semibold text-zinc-300">
                  RUN
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            SECONDARY TOOLCHAIN
        =================================================== */}

        <div className="mx-auto mt-4 flex max-w-162.5 justify-center gap-2">
          {secondarySkills.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{
                y: -3,
              }}
              className="flex items-center gap-1.5 rounded-lg border border-white/6 bg-[#080b12]/70 px-2.5 py-2 transition-colors hover:border-white/[0.14]"
            >
              <span className="text-[11px] text-zinc-500">
                {tool.icon}
              </span>

              <span className="hidden font-mono text-[7px] text-zinc-600 sm:block">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* terminal signature */}

        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[8px] text-zinc-700">
          <FiTerminal className="text-cyan-500" />

          <span className="text-cyan-500">
            atharv@devops
          </span>

          <span>:</span>

          <span className="text-zinc-500">
            ~/infrastructure
          </span>

          <span>$</span>

          <span>
            stack --status
          </span>

          <span className="text-emerald-500">
            ✓ operational
          </span>
        </div>
      </div>
    </section>
  );
}