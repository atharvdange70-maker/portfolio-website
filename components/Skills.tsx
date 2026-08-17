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
   SKILLS
========================================================= */

const skills = [
  {
    name: "AWS",
    category: "CLOUD",
    icon: <FaAws />,
    color: "#ff9900",
    angle: -90,
    radius: 290,
    tags: ["EC2", "S3", "IAM", "VPC"],
  },
  {
    name: "Kubernetes",
    category: "ORCHESTRATION",
    icon: <SiKubernetes />,
    color: "#38bdf8",
    angle: -60,
    radius: 290,
    tags: ["Pods", "Services", "Ingress"],
  },
  {
    name: "Docker",
    category: "CONTAINERS",
    icon: <FaDocker />,
    color: "#2496ed",
    angle: -30,
    radius: 290,
    tags: ["Images", "Compose", "Registry"],
  },
  {
    name: "Terraform",
    category: "INFRASTRUCTURE",
    icon: <SiTerraform />,
    color: "#a855f7",
    angle: 0,
    radius: 290,
    tags: ["IaC", "Modules", "State"],
  },
  {
    name: "Jenkins",
    category: "CI / CD",
    icon: <FaJenkins />,
    color: "#ef4444",
    angle: 30,
    radius: 290,
    tags: ["Pipeline", "Build", "Deploy"],
  },
  {
    name: "GitHub Actions",
    category: "AUTOMATION",
    icon: <SiGithubactions />,
    color: "#60a5fa",
    angle: 60,
    radius: 290,
    tags: ["Workflow", "CI/CD", "Deploy"],
  },
  {
    name: "Linux",
    category: "SYSTEM",
    icon: <FaLinux />,
    color: "#facc15",
    angle: 90,
    radius: 290,
    tags: ["Ubuntu", "Shell", "System"],
  },
  {
    name: "Prometheus",
    category: "OBSERVABILITY",
    icon: <SiPrometheus />,
    color: "#fb923c",
    angle: 120,
    radius: 290,
    tags: ["Metrics", "Alerts", "Monitoring"],
  },
  {
    name: "Nginx",
    category: "WEB SERVER",
    icon: <SiNginx />,
    color: "#22c55e",
    angle: 150,
    radius: 290,
    tags: ["Proxy", "SSL", "Routing"],
  },
  {
    name: "Networking",
    category: "NETWORK",
    icon: <FaNetworkWired />,
    color: "#22d3ee",
    angle: 180,
    radius: 290,
    tags: ["TCP/IP", "DNS", "HTTP"],
  },
  {
    name: "Python",
    category: "AUTOMATION",
    icon: <FaPython />,
    color: "#facc15",
    angle: 210,
    radius: 290,
    tags: ["Boto3", "Scripts", "APIs"],
  },
  {
    name: "Security",
    category: "SECURITY",
    icon: <MdSecurity />,
    color: "#34d399",
    angle: 240,
    radius: 290,
    tags: ["IAM", "Policies", "MFA"],
  },
  {
    name: "Git",
    category: "VERSION CONTROL",
    icon: <FaGitAlt />,
    color: "#f97316",
    angle: 270,
    radius: 290,
    tags: ["Branch", "Merge", "Version"],
  },
  {
    name: "Shell",
    category: "SCRIPTING",
    icon: <SiShell />,
    color: "#4ade80",
    angle: 300,
    radius: 290,
    tags: ["Bash", "Cron", "Linux"],
  },
];

/* =========================================================
   ORBIT NODE
========================================================= */

function OrbitNode({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  const rad = (skill.angle * Math.PI) / 180;

  const x = Math.cos(rad) * skill.radius;
  const y = Math.sin(rad) * skill.radius;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        type: "spring",
      }}
      className="absolute left-1/2 top-1/2 z-30"
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
    >
      {/* connection point */}

      <div
        className="absolute left-1/2 top-1/2 h-px w-72.5 origin-left opacity-20"
        style={{
          background: `linear-gradient(90deg, ${skill.color}, transparent)`,
          transform: `rotate(${skill.angle + 180}deg)`,
        }}
      />

      {/* satellite */}

      <motion.div
        whileHover={{
          scale: 1.15,
        }}
        className="group relative"
      >
        {/* glow */}

        <motion.div
          animate={{
            opacity: [0.08, 0.22, 0.08],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 3 + index * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-5 rounded-full blur-xl"
          style={{
            backgroundColor: skill.color,
          }}
        />

        {/* rotating ring */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 7 + index,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-2 rounded-full border border-dashed opacity-30"
          style={{
            borderColor: skill.color,
          }}
        />

        {/* node */}

        <div
          className="relative flex h-16 w-16 items-center justify-center rounded-full border bg-[#020711]/95 backdrop-blur-xl"
          style={{
            borderColor: `${skill.color}45`,
            boxShadow: `0 0 35px ${skill.color}12`,
          }}
        >
          <span
            className="text-[23px]"
            style={{
              color: skill.color,
            }}
          >
            {skill.icon}
          </span>

          {/* live indicator */}

          <span
            className="absolute right-1 top-1 h-2 w-2 rounded-full border-2 border-[#020711]"
            style={{
              backgroundColor: skill.color,
              boxShadow: `0 0 8px ${skill.color}`,
            }}
          />
        </div>

        {/* label */}

        <div className="pointer-events-none absolute left-1/2 top-18 -translate-x-1/2 text-center">
          <p className="whitespace-nowrap text-[9px] font-semibold text-slate-300">
            {skill.name}
          </p>

          <p
            className="mt-0.5 whitespace-nowrap font-mono text-[6px] tracking-[0.18em]"
            style={{
              color: skill.color,
            }}
          >
            {skill.category}
          </p>
        </div>

        {/* hover panel */}

        <div className="pointer-events-none absolute left-1/2 top-26.25 z-100 w-42.5 -translate-x-1/2 translate-y-2 rounded-xl border border-white/10 bg-[#020711]/95 p-3 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-white">
                {skill.name}
              </p>

              <p
                className="mt-1 font-mono text-[6px] tracking-[0.2em]"
                style={{
                  color: skill.color,
                }}
              >
                {skill.category}
              </p>
            </div>

            <FiArrowUpRight className="text-xs text-slate-600" />
          </div>

          <div className="my-2 h-px bg-white/[0.07]" />

          <div className="flex flex-wrap gap-1">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/[0.07] bg-white/2.5 px-1.5 py-1 font-mono text-[6px] text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-1.5 font-mono text-[6px] text-emerald-400">
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
            SERVICE ONLINE
          </div>
        </div>
      </motion.div>
    </motion.div>
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

      {/* atmosphere */}

      <div className="pointer-events-none absolute left-1/2 top-[55%] h-150 w-150 -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[130px]" />

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
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/4 px-4 py-1.5 font-mono text-[8px] tracking-[0.3em] text-cyan-300">
            <FiRadio className="animate-pulse" />
            DEVOPS NEURAL MESH
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Engineering{" "}
            <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-500 md:text-sm">
            A living map of the technologies I use to build, automate,
            deploy and operate cloud infrastructure.
          </p>
        </motion.div>

        {/* =====================================================
            NETWORK CONTAINER
        ===================================================== */}

        <div className="relative mx-auto h-175 max-w-287.5 overflow-hidden rounded-4xl border border-white/[0.07] bg-[#01050b]/75 shadow-[0_40px_120px_rgba(0,0,0,.45)]">
          {/* grid */}

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* top status */}

          <div className="absolute left-6 top-5 z-50 flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />

            <span className="font-mono text-[7px] tracking-[0.25em] text-slate-600">
              PLATFORM TOPOLOGY / LIVE
            </span>
          </div>

          <div className="absolute right-6 top-5 z-50 font-mono text-[7px] text-slate-700">
            14 SERVICES
          </div>

          {/* =================================================
              ORBITS
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-147.5 w-147.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/5"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-115 w-115 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/5"
          />

          <div className="absolute left-1/2 top-1/2 h-82.5 w-82.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/6" />

          {/* =================================================
              CONNECTION SVG
          ================================================= */}

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1150 700"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="meshGradient"
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
                  stopColor="#a855f7"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* horizontal network */}

            <path
              d="M0 350 H1150"
              stroke="rgba(34,211,238,.025)"
            />

            <path
              d="M575 0 V700"
              stroke="rgba(34,211,238,.025)"
            />

            {/* diagonal mesh */}

            <path
              d="M120 100 L575 350 L1030 100"
              stroke="url(#meshGradient)"
              strokeDasharray="4 9"
              fill="none"
            />

            <path
              d="M100 600 L575 350 L1050 600"
              stroke="url(#meshGradient)"
              strokeDasharray="4 9"
              fill="none"
            />

            {/* packets */}

            <motion.circle
              r="3"
              fill="#22d3ee"
              animate={{
                cx: [100, 575, 1030],
                cy: [100, 350, 100],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="3"
              fill="#a855f7"
              animate={{
                cx: [1000, 575, 120],
                cy: [600, 350, 600],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* =================================================
              CENTER CORE
          ================================================= */}

          <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
            {/* pulse */}

            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.1, 0.02, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -inset-24 rounded-full bg-cyan-400 blur-[70px]"
            />

            {/* rotating core ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-7 rounded-full border border-dashed border-cyan-400/20"
            />

            {/* core */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="relative flex h-37.5 w-37.5 flex-col items-center justify-center rounded-full border border-cyan-300/20 bg-[#020914] shadow-[0_0_80px_rgba(34,211,238,.14)]"
            >
              {/* small core icon */}

              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                <FiCpu className="text-lg text-cyan-300" />
              </div>

              <h3 className="text-[17px] font-bold text-white">
                Platform Core
              </h3>

              <p className="mt-1 font-mono text-[6px] tracking-[0.35em] text-cyan-400">
                DEVOPS ENGINE
              </p>

              {/* status */}

              <div className="mt-3 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/3 px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="font-mono text-[6px] tracking-wider text-emerald-400">
                  OPERATIONAL
                </span>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              SKILLS
          ================================================= */}

          <div className="hidden md:block">
            {skills.map((skill, index) => (
              <OrbitNode
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </div>

          {/* =================================================
              MOBILE GRID
          ================================================= */}

          <div className="relative z-50 grid grid-cols-3 gap-5 px-6 pt-20 md:hidden">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border bg-[#020711]"
                  style={{
                    color: skill.color,
                    borderColor: `${skill.color}45`,
                  }}
                >
                  {skill.icon}
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

          <div className="absolute bottom-5 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-8 rounded-xl border border-white/6 bg-black/30 px-6 py-3 backdrop-blur-xl md:flex">
            <div className="flex items-center gap-2">
              <FiActivity className="text-cyan-400" />

              <div>
                <p className="font-mono text-[6px] text-slate-700">
                  LATENCY
                </p>

                <p className="font-mono text-[8px] text-slate-400">
                  24ms
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FiServer className="text-purple-400" />

              <div>
                <p className="font-mono text-[6px] text-slate-700">
                  SERVICES
                </p>

                <p className="font-mono text-[8px] text-slate-400">
                  14 / 14
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FiShield className="text-emerald-400" />

              <div>
                <p className="font-mono text-[6px] text-slate-700">
                  SECURITY
                </p>

                <p className="font-mono text-[8px] text-slate-400">
                  ACTIVE
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FiGitBranch className="text-orange-400" />

              <div>
                <p className="font-mono text-[6px] text-slate-700">
                  PIPELINE
                </p>

                <p className="font-mono text-[8px] text-slate-400">
                  READY
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SYSTEM LINE
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
            delay: 0.5,
          }}
          className="mx-auto mt-5 flex max-w-287.5 flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[7px] text-slate-700"
        >
          <span className="text-cyan-400">
            atharv@devops
          </span>

          <span>:</span>

          <span className="text-purple-400">
            ~/platform
          </span>

          <span>$</span>

          <span>
            systemctl status infrastructure
          </span>

          <span className="text-emerald-400">
            ● active (running)
          </span>
        </motion.div>
      </div>
    </section>
  );
}