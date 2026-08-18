"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";

import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaLinux,
  FaPython,
} from "react-icons/fa";

import {
  SiAnsible,
  SiGithubactions,
  SiGrafana,
  SiHelm,
  SiKubernetes,
  SiPrometheus,
  SiShell,
  SiTerraform,
} from "react-icons/si";

/* ============================================================
   TYPES
============================================================ */

type Skill = {
  name: string;
  icon: ReactNode;
  percentage: number;
  category: string;
  description: string;
  x: string;
  y: string;
};

/* ============================================================
   SKILLS
============================================================ */

const skills: Skill[] = [
  {
    name: "Grafana",
    icon: <SiGrafana />,
    percentage: 72,
    category: "OBSERVABILITY",
    description:
      "Building infrastructure dashboards and visualizing system metrics.",
    x: "16%",
    y: "16%",
  },

  {
    name: "Helm",
    icon: <SiHelm />,
    percentage: 76,
    category: "KUBERNETES",
    description:
      "Managing parameterized Kubernetes releases using reusable charts.",
    x: "38%",
    y: "12%",
  },

  {
    name: "Python",
    icon: <FaPython />,
    percentage: 72,
    category: "AUTOMATION",
    description:
      "Writing automation scripts and cloud-focused DevOps utilities.",
    x: "58%",
    y: "7%",
  },

  {
    name: "Shell",
    icon: <SiShell />,
    percentage: 82,
    category: "AUTOMATION",
    description:
      "Automating Linux administration, deployments and repetitive tasks.",
    x: "72%",
    y: "20%",
  },

  {
    name: "Ansible",
    icon: <SiAnsible />,
    percentage: 70,
    category: "CONFIGURATION",
    description:
      "Automating server configuration and application deployments.",
    x: "88%",
    y: "31%",
  },

  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    percentage: 78,
    category: "ORCHESTRATION",
    description:
      "Deploying and managing containerized workloads across clusters.",
    x: "86%",
    y: "50%",
  },

  {
    name: "Docker",
    icon: <FaDocker />,
    percentage: 84,
    category: "CONTAINERIZATION",
    description:
      "Building, packaging and running applications with containers.",
    x: "88%",
    y: "69%",
  },

  {
    name: "AWS",
    icon: <FaAws />,
    percentage: 82,
    category: "CLOUD",
    description:
      "Designing and managing scalable cloud infrastructure on AWS.",
    x: "72%",
    y: "83%",
  },

  {
    name: "Terraform",
    icon: <SiTerraform />,
    percentage: 76,
    category: "INFRASTRUCTURE",
    description:
      "Provisioning repeatable cloud infrastructure using Infrastructure as Code.",
    x: "57%",
    y: "94%",
  },

  {
    name: "Jenkins",
    icon: <FaJenkins />,
    percentage: 74,
    category: "CI / CD",
    description:
      "Building automated pipelines for continuous integration and delivery.",
    x: "40%",
    y: "92%",
  },

  {
    name: "Linux",
    icon: <FaLinux />,
    percentage: 86,
    category: "SYSTEM",
    description:
      "Managing Linux servers, processes, permissions and cloud environments.",
    x: "20%",
    y: "81%",
  },

  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    percentage: 78,
    category: "CI / CD",
    description:
      "Creating automated CI/CD workflows directly from GitHub repositories.",
    x: "12%",
    y: "62%",
  },

  {
    name: "Prometheus",
    icon: <SiPrometheus />,
    percentage: 68,
    category: "MONITORING",
    description:
      "Collecting infrastructure metrics and monitoring system health.",
    x: "8%",
    y: "44%",
  },
];

/* ============================================================
   SKILL NODE
============================================================ */

function SkillNode({
  skill,
  index,
  active,
  onHover,
}: {
  skill: Skill;
  index: number;
  active: boolean;
  onHover: () => void;
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
        delay: index * 0.05,
      }}
      className="
        absolute
        z-20
        -translate-x-1/2
        -translate-y-1/2
      "
      style={{
        left: skill.x,
        top: skill.y,
      }}
    >
      {/* ==================================================
          SIGNAL LINE TO CORE
      ================================================== */}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={{
              opacity: 1,
              scaleX: 1,
            }}
            exit={{
              opacity: 0,
              scaleX: 0,
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-px
              w-37.5
              origin-left
              bg-linear-to-r
              from-cyan-300/50
              to-transparent
              blur-[0.5px]
            "
          />
        )}
      </AnimatePresence>

      {/* ==================================================
          NODE GLOW
      ================================================== */}

      <motion.div
        animate={
          active
            ? {
                scale: [1, 1.35, 1],
                opacity: [0.08, 0.22, 0.08],
              }
            : {
                scale: [1, 1.08, 1],
                opacity: [0.02, 0.05, 0.02],
              }
        }
        transition={{
          duration: active ? 1.8 : 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -inset-8
          rounded-full
          bg-cyan-300
          blur-2xl
        "
      />

      {/* ==================================================
          NODE
      ================================================== */}

      <motion.button
        type="button"
        onMouseEnter={onHover}
        onFocus={onHover}
        whileHover={{
          scale: 1.12,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className={`
          relative
          flex
          h-16.5
          w-16.5
          cursor-pointer
          items-center
          justify-center
          rounded-full
          border
          bg-[#020607]/95
          backdrop-blur-xl
          transition-all
          duration-300
          md:h-18.5
          md:w-18.5

          ${
            active
              ? `
                border-cyan-200/80
                shadow-[0_0_35px_rgba(34,211,238,.28)]
              `
              : `
                border-white/10
                shadow-[0_0_20px_rgba(0,0,0,.4)]
                hover:border-cyan-300/50
              `
          }
        `}
      >
        {/* Inner ring */}
        <span
          className={`
            pointer-events-none
            absolute
            inset-0.75
            rounded-full
            border
            transition-all
            duration-300
            ${
              active
                ? "border-cyan-200/20"
                : "border-white/2.5"
            }
          `}
        />

        {/* ==================================================
            ACTIVE ROTATING RING
        ================================================== */}

        {active && (
          <motion.span
            initial={{
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              rotate: 360,
              opacity: 1,
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-full
              border
              border-dashed
              border-cyan-200/60
            "
          />
        )}

        {/* Normal rotating ring */}
        {!active && (
          <motion.span
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18 + index,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-full
              border
              border-dashed
              border-cyan-300/8
            "
          />
        )}

        {/* ==================================================
            ICON
        ================================================== */}

        <span
          className={`
            relative
            z-10
            text-[25px]
            transition-all
            duration-300
            md:text-[29px]

            ${
              active
                ? `
                  text-cyan-100
                  drop-shadow-[0_0_14px_rgba(165,243,252,.9)]
                `
                : `
                  text-cyan-100
                  hover:text-cyan-200
                `
            }
          `}
        >
          {skill.icon}
        </span>

        {/* ==================================================
            STATUS DOT
        ================================================== */}

        <motion.span
          animate={
            active
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }
              : {
                  opacity: [0.3, 0.8, 0.3],
                }
          }
          transition={{
            duration: active ? 1.2 : 2.5,
            repeat: Infinity,
          }}
          className="
            absolute
            right-0.75
            top-0.75
            h-1.75
            w-1.75
            rounded-full
            bg-cyan-200
            shadow-[0_0_9px_rgba(103,232,249,.9)]
          "
        />

        {/* Skill number */}
        <span
          className={`
            absolute
            bottom-2.25
            font-mono
            text-[5px]
            tracking-wider
            transition-colors
            ${
              active
                ? "text-cyan-300/80"
                : "text-slate-700"
            }
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.button>
    </motion.div>
  );
}

/* ============================================================
   INTELLIGENCE HUD
============================================================ */

function IntelligencePanel({
  skill,
}: {
  skill: Skill;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={skill.name}
        initial={{
          opacity: 0,
          y: 12,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: -8,
          scale: 0.98,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-80
          w-[calc(100%-32px)]
          max-w-117.5
          -translate-x-1/2
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            border
            border-cyan-300/15
            bg-[#020607]/90
            px-4
            py-3
            shadow-[0_20px_70px_rgba(0,0,0,.65)]
            backdrop-blur-xl
          "
        >
          {/* top scanning line */}
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-px
              w-1/3
              bg-linear-to-r
              from-transparent
              via-cyan-300
              to-transparent
            "
          />

          <div className="flex items-start gap-3">
            {/* Icon */}
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-cyan-300/15
                bg-cyan-300/4
                text-lg
                text-cyan-100
                shadow-[0_0_20px_rgba(34,211,238,.08)]
              "
            >
              {skill.icon}
            </div>

            <div className="min-w-0 flex-1">
              {/* Header */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[12px] font-bold text-white">
                      {skill.name}
                    </h3>

                    <span className="h-1 w-1 rounded-full bg-cyan-300" />

                    <span className="font-mono text-[7px] tracking-[0.15em] text-cyan-300/50">
                      {skill.category}
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] leading-4 text-slate-500">
                    {skill.description}
                  </p>
                </div>

                {/* Percentage */}
                <div className="shrink-0 text-right">
                  <div className="font-mono text-[13px] font-bold text-cyan-200">
                    {skill.percentage}%
                  </div>

                  <div className="font-mono text-[6px] tracking-widest text-slate-700">
                    PROFICIENCY
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-2.5 h-0.5 overflow-hidden rounded-full bg-white/6">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: `${skill.percentage}%`,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="
                    h-full
                    rounded-full
                    bg-linear-to-r
                    from-cyan-400
                    to-cyan-200
                  "
                  style={{
                    boxShadow:
                      "0 0 10px rgba(34,211,238,.7)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* bottom status */}
          <div
            className="
              mt-2.5
              flex
              items-center
              justify-between
              border-t
              border-white/5
              pt-2
              font-mono
              text-[6px]
              uppercase
              tracking-[0.18em]
            "
          >
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
              SYSTEM ACTIVE
            </span>

            <span className="text-cyan-300/30">
              PLATFORM SIGNAL DETECTED
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ============================================================
   MAIN
============================================================ */

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-transparent
        px-4
        py-20
        md:px-6
        md:py-24
      "
      onMouseLeave={() => setActiveSkill(null)}
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      {/* Scanlines */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,.22) 0px, rgba(255,255,255,.22) 1px, transparent 1px, transparent 5px)",
        }}
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(34,211,238,.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Ambient center */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-125
          w-125
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400
          blur-[140px]
        "
      />

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}

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
          className="mb-8 text-center"
        >
          <div
            className="
              mx-auto
              mb-3
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-cyan-300/10
              bg-cyan-300/2.5
              px-3
              py-1.5
              font-mono
              text-[7px]
              uppercase
              tracking-[0.3em]
              text-cyan-300/50
            "
          >
            <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-300" />

            DEVOPS ECOSYSTEM
          </div>

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Technical{" "}
            <span
              className="
                bg-linear-to-r
                from-cyan-100
                via-cyan-300
                to-slate-300
                bg-clip-text
                text-transparent
              "
            >
              Arsenal
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-xs
              leading-6
              text-slate-600
              md:text-sm
            "
          >
            Hover over any technology to inspect its role
            in my DevOps ecosystem.
          </p>
        </motion.div>

        {/* ======================================================
            ECOSYSTEM
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            h-162.5
            w-full
            max-w-225
            overflow-visible
            md:h-180
          "
        >
          {/* ==================================================
              OUTER ORBIT
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-10
              h-97.5
              w-97.5
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-cyan-300/[0.035]
              md:h-112.5
              md:w-112.5
            "
          />

          {/* ==================================================
              INNER ORBIT
          ================================================== */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-10
              h-65
              w-65
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-cyan-300/2.5
              md:h-77.5
              md:w-77.5
            "
          />

          {/* ==================================================
              CORE GLOW
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.04, 0.12, 0.04],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-10
              h-67.5
              w-67.5
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400
              blur-[100px]
            "
          />

          {/* ==================================================
              PLATFORM CORE
          ================================================== */}

          <motion.div
            animate={
              activeSkill
                ? {
                    scale: [1, 1.04, 1],
                    boxShadow: [
                      "0 0 45px rgba(34,211,238,.10)",
                      "0 0 75px rgba(34,211,238,.25)",
                      "0 0 45px rgba(34,211,238,.10)",
                    ],
                  }
                : {
                    scale: [1, 1.015, 1],
                  }
            }
            transition={{
              duration: activeSkill ? 1.5 : 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              flex
              h-35
              w-35
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-cyan-300/20
              bg-[#020607]
              md:h-37.5
              md:w-37.5
            "
          >
            <div className="text-center">
              <p
                className="
                  text-[16px]
                  font-bold
                  tracking-tight
                  text-cyan-100
                "
              >
                Platform Core
              </p>

              <div className="mt-3 flex items-center justify-center gap-2">
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_10px_rgba(103,232,249,.9)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-cyan-300/50
                  "
                >
                  {activeSkill
                    ? activeSkill.category
                    : "SYSTEM ONLINE"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              DESKTOP NODES
          ================================================== */}

          <div className="hidden h-full md:block">
            {skills.map((skill, index) => (
              <SkillNode
                key={skill.name}
                skill={skill}
                index={index}
                active={activeSkill?.name === skill.name}
                onHover={() => setActiveSkill(skill)}
              />
            ))}
          </div>

          {/* ==================================================
              MOBILE
          ================================================== */}

          <div
            className="
              grid
              grid-cols-3
              gap-x-6
              gap-y-9
              px-3
              md:hidden
            "
          >
            {skills.map((skill, index) => (
              <button
                key={skill.name}
                type="button"
                onClick={() => setActiveSkill(skill)}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileTap={{
                    scale: 0.92,
                  }}
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-[#020607]
                    text-xl
                    transition-all

                    ${
                      activeSkill?.name === skill.name
                        ? `
                          border-cyan-300/70
                          text-cyan-100
                          shadow-[0_0_25px_rgba(34,211,238,.2)]
                        `
                        : `
                          border-white/10
                          text-cyan-100
                        `
                    }
                  `}
                >
                  {skill.icon}
                </motion.div>

                <span
                  className={`
                    mt-2
                    text-center
                    font-mono
                    text-[7px]
                    ${
                      activeSkill?.name === skill.name
                        ? "text-cyan-300"
                        : "text-slate-600"
                    }
                  `}
                >
                  {skill.name}
                </span>
              </button>
            ))}
          </div>

          {/* ==================================================
              INTELLIGENCE PANEL
          ================================================== */}

          {activeSkill && (
            <IntelligencePanel skill={activeSkill} />
          )}
        </div>

        {/* ======================================================
            BOTTOM STATUS
        ====================================================== */}

        <div
          className="
            mt-2
            flex
            items-center
            justify-center
            gap-3
            font-mono
            text-[7px]
            uppercase
            tracking-[0.2em]
            text-slate-700
          "
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            SYSTEM ONLINE
          </span>

          <span className="h-3 w-px bg-white/8" />

          <span>13 TECHNOLOGIES</span>

          <span className="h-3 w-px bg-white/8" />

          <span className="text-cyan-300/40">
            CLOUD • AUTOMATION • CI/CD
          </span>
        </div>
      </div>
    </section>
  );
}