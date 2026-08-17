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
    radius: 250,
    tags: ["EC2", "S3", "IAM", "VPC"],
  },
  {
    name: "Kubernetes",
    category: "ORCHESTRATION",
    icon: <SiKubernetes />,
    color: "#38bdf8",
    angle: -64,
    radius: 250,
    tags: ["Pods", "Services", "Ingress"],
  },
  {
    name: "Docker",
    category: "CONTAINERS",
    icon: <FaDocker />,
    color: "#2496ed",
    angle: -38,
    radius: 250,
    tags: ["Images", "Compose", "Registry"],
  },
  {
    name: "Terraform",
    category: "INFRASTRUCTURE",
    icon: <SiTerraform />,
    color: "#a855f7",
    angle: -12,
    radius: 250,
    tags: ["IaC", "Modules", "State"],
  },
  {
    name: "Jenkins",
    category: "CI / CD",
    icon: <FaJenkins />,
    color: "#ef4444",
    angle: 14,
    radius: 250,
    tags: ["Pipeline", "Build", "Deploy"],
  },
  {
    name: "GitHub Actions",
    category: "AUTOMATION",
    icon: <SiGithubactions />,
    color: "#60a5fa",
    angle: 40,
    radius: 250,
    tags: ["Workflow", "CI/CD", "Deploy"],
  },
  {
    name: "Linux",
    category: "SYSTEM",
    icon: <FaLinux />,
    color: "#facc15",
    angle: 66,
    radius: 250,
    tags: ["Ubuntu", "Shell", "System"],
  },
  {
    name: "Prometheus",
    category: "OBSERVABILITY",
    icon: <SiPrometheus />,
    color: "#fb923c",
    angle: 92,
    radius: 250,
    tags: ["Metrics", "Alerts", "Monitoring"],
  },
  {
    name: "Nginx",
    category: "WEB SERVER",
    icon: <SiNginx />,
    color: "#22c55e",
    angle: 118,
    radius: 250,
    tags: ["Proxy", "SSL", "Routing"],
  },
  {
    name: "Networking",
    category: "NETWORK",
    icon: <FaNetworkWired />,
    color: "#22d3ee",
    angle: 144,
    radius: 250,
    tags: ["TCP/IP", "DNS", "HTTP"],
  },
  {
    name: "Python",
    category: "AUTOMATION",
    icon: <FaPython />,
    color: "#facc15",
    angle: 170,
    radius: 250,
    tags: ["Boto3", "Scripts", "APIs"],
  },
  {
    name: "Security",
    category: "SECURITY",
    icon: <MdSecurity />,
    color: "#34d399",
    angle: 196,
    radius: 250,
    tags: ["IAM", "Policies", "MFA"],
  },
  {
    name: "Git",
    category: "VERSION CONTROL",
    icon: <FaGitAlt />,
    color: "#f97316",
    angle: 222,
    radius: 250,
    tags: ["Branch", "Merge", "Version"],
  },
  {
    name: "Shell",
    category: "SCRIPTING",
    icon: <SiShell />,
    color: "#4ade80",
    angle: 248,
    radius: 250,
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
    /*
      IMPORTANT:
      This outer div controls POSITION.
      Framer Motion is NOT controlling transform here.
    */
    <div
      className="absolute left-1/2 top-1/2 z-30"
      style={{
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
      }}
    >
      {/* =================================================
          CONNECTION LINE
      ================================================= */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-px w-62.5 origin-left opacity-30"
        style={{
          background: `linear-gradient(90deg, ${skill.color}, transparent)`,
          transform: `rotate(${skill.angle + 180}deg)`,
        }}
      />

      {/* =================================================
          ANIMATED DATA PACKET
      ================================================= */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: skill.color,
          boxShadow: `0 0 12px ${skill.color}`,
        }}
        animate={{
          x: [-10, -80, -150, -220],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          delay: index * 0.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =================================================
          SKILL NODE
      ================================================= */}

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
          amount: 0.15,
        }}
        transition={{
          delay: index * 0.06,
          duration: 0.55,
          type: "spring",
          stiffness: 140,
          damping: 14,
        }}
        whileHover={{
          scale: 1.15,
          zIndex: 100,
        }}
        className="group relative -translate-x-1/2 -translate-y-1/2"
      >
        {/* =================================================
            GLOW
        ================================================= */}

        <motion.div
          animate={{
            opacity: [0.06, 0.18, 0.06],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 3 + index * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-5 rounded-full blur-xl"
          style={{
            backgroundColor: skill.color,
          }}
        />

        {/* =================================================
            ROTATING RING
        ================================================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 7 + index * 0.25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -inset-2 rounded-full border border-dashed opacity-35"
          style={{
            borderColor: `${skill.color}70`,
          }}
        />

        {/* =================================================
            ORBIT DOT
        ================================================= */}

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
            backgroundColor: skill.color,
            boxShadow: `0 0 10px ${skill.color}`,
          }}
        />

        {/* =================================================
            MAIN CIRCLE
        ================================================= */}

        <div
          className="relative flex h-15.5 w-15.5 items-center justify-center rounded-full border bg-[#020711]/95 backdrop-blur-xl"
          style={{
            borderColor: `${skill.color}55`,
            boxShadow: `
              0 0 25px ${skill.color}12,
              inset 0 0 20px ${skill.color}05
            `,
          }}
        >
          <span
            className="text-[23px]"
            style={{
              color: skill.color,
              filter: `drop-shadow(0 0 7px ${skill.color}45)`,
            }}
          >
            {skill.icon}
          </span>

          {/* online indicator */}

          <span
            className="absolute right-1 top-1 h-2 w-2 rounded-full border-2 border-[#020711]"
            style={{
              backgroundColor: skill.color,
              boxShadow: `0 0 8px ${skill.color}`,
            }}
          />
        </div>

        {/* =================================================
            LABEL
        ================================================= */}

        <div className="absolute left-1/2 top-18 -translate-x-1/2 text-center">
          <p className="whitespace-nowrap text-[10px] font-semibold text-slate-200">
            {skill.name}
          </p>

          <p
            className="mt-1 whitespace-nowrap font-mono text-[6px] tracking-[0.22em]"
            style={{
              color: skill.color,
            }}
          >
            {skill.category}
          </p>
        </div>

        {/* =================================================
            HOVER PANEL
        ================================================= */}

        <div className="pointer-events-none absolute left-1/2 top-26.25 z-200 w-43.75 -translate-x-1/2 translate-y-2 rounded-xl border border-white/10 bg-[#020711]/95 p-3 opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
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
                className="rounded border border-white/[0.07] bg-white/2.5 px-1.5 py-1 font-mono text-[6px] text-slate-400"
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
    </div>
  );
}

/* =========================================================
   MAIN SKILLS SECTION
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent px-5 py-20 md:px-8"
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* atmospheric glow */}

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
            A live map of the technologies I use to build, automate,
            deploy and operate cloud infrastructure.
          </p>
        </motion.div>

        {/* =====================================================
            TOPOLOGY
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

          {/* top left status */}

          <div className="absolute left-6 top-5 z-50 flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />

            <span className="font-mono text-[7px] tracking-[0.25em] text-slate-600">
              PLATFORM TOPOLOGY / LIVE
            </span>
          </div>

          {/* top right */}

          <div className="absolute right-6 top-5 z-50 font-mono text-[7px] text-slate-700">
            14 SERVICES
          </div>

          {/* =================================================
              ORBIT RINGS
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
            className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/5"
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
            className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/5"
          />

          <div className="absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/6" />

          {/* =================================================
              SVG NETWORK
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

            <path
              d="M0 350 H1150"
              stroke="rgba(34,211,238,.025)"
            />

            <path
              d="M575 0 V700"
              stroke="rgba(34,211,238,.025)"
            />

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

            {/* animated packets */}

            <motion.circle
              r="3"
              fill="#22d3ee"
              animate={{
                cx: [120, 575, 1030],
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
                cx: [1030, 575, 100],
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
              CENTRAL CORE
          ================================================= */}

          <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
            {/* core glow */}

            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.1, 0.025, 0.1],
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

            {/* center */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              className="relative flex h-37.5 w-37.5 flex-col items-center justify-center rounded-full border border-cyan-300/20 bg-[#020914] shadow-[0_0_80px_rgba(34,211,238,.14)]"
            >
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5">
                <FiCpu className="text-lg text-cyan-300" />
              </div>

              <h3 className="text-[17px] font-bold text-white">
                Platform Core
              </h3>

              <p className="mt-1 font-mono text-[6px] tracking-[0.35em] text-cyan-400">
                DEVOPS ENGINE
              </p>

              <div className="mt-3 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/3 px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

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
              <OrbitNode
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </div>

          {/* =================================================
              MOBILE SKILLS
          ================================================= */}

          <div className="relative z-50 grid grid-cols-3 gap-6 px-6 pt-20 md:hidden">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex flex-col items-center"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border bg-[#020711]"
                  style={{
                    color: skill.color,
                    borderColor: `${skill.color}45`,
                    boxShadow: `0 0 20px ${skill.color}10`,
                  }}
                >
                  {skill.icon}
                </div>

                <span className="mt-2 text-center font-mono text-[7px] text-slate-500">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              TELEMETRY
          ================================================= */}

          <div className="absolute bottom-5 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-8 rounded-xl border border-white/6 bg-black/40 px-6 py-3 backdrop-blur-xl md:flex">
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