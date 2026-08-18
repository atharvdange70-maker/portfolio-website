"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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

type TooltipPosition = "top" | "bottom" | "left" | "right";

type Skill = {
  name: string;
  icon: ReactNode;
  percentage: number;
  category: string;
  description: string;
  x: string;
  y: string;
  tooltip: TooltipPosition;
};

const skills: Skill[] = [
  {
    name: "Grafana",
    icon: <SiGrafana />,
    percentage: 72,
    category: "OBSERVABILITY",
    description: "Metrics visualization and infrastructure dashboards",
    x: "16%",
    y: "16%",
    tooltip: "right",
  },
  {
    name: "Helm",
    icon: <SiHelm />,
    percentage: 76,
    category: "KUBERNETES",
    description: "Parameterized Kubernetes releases",
    x: "38%",
    y: "12%",
    tooltip: "bottom",
  },
  {
    name: "Python",
    icon: <FaPython />,
    percentage: 72,
    category: "AUTOMATION",
    description: "Cloud automation and DevOps scripting",
    x: "58%",
    y: "7%",
    tooltip: "bottom",
  },
  {
    name: "Shell",
    icon: <SiShell />,
    percentage: 82,
    category: "AUTOMATION",
    description: "Linux administration and automation",
    x: "72%",
    y: "20%",
    tooltip: "bottom",
  },
  {
    name: "Ansible",
    icon: <SiAnsible />,
    percentage: 70,
    category: "CONFIGURATION",
    description: "Configuration management and deployment",
    x: "88%",
    y: "31%",
    tooltip: "left",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    percentage: 78,
    category: "ORCHESTRATION",
    description: "Container orchestration and workloads",
    x: "86%",
    y: "50%",
    tooltip: "left",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    percentage: 84,
    category: "CONTAINERIZATION",
    description: "Containerized application deployment",
    x: "88%",
    y: "69%",
    tooltip: "left",
  },
  {
    name: "AWS",
    icon: <FaAws />,
    percentage: 82,
    category: "CLOUD",
    description: "Cloud infrastructure and AWS services",
    x: "72%",
    y: "83%",
    tooltip: "top",
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    percentage: 76,
    category: "INFRASTRUCTURE",
    description: "Infrastructure as Code and provisioning",
    x: "57%",
    y: "94%",
    tooltip: "top",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    percentage: 74,
    category: "CI/CD",
    description: "Continuous integration and delivery",
    x: "40%",
    y: "92%",
    tooltip: "top",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    percentage: 86,
    category: "SYSTEM",
    description: "Linux servers and cloud administration",
    x: "20%",
    y: "81%",
    tooltip: "top",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    percentage: 78,
    category: "CI/CD",
    description: "Automated CI/CD workflows and deployments",
    x: "12%",
    y: "62%",
    tooltip: "right",
  },
  {
    name: "Prometheus",
    icon: <SiPrometheus />,
    percentage: 68,
    category: "OBSERVABILITY",
    description: "Infrastructure metrics and monitoring",
    x: "8%",
    y: "44%",
    tooltip: "right",
  },
];

/* ============================================================
   TOOLTIP
============================================================ */

function SkillTooltip({ skill }: { skill: Skill }) {
  const positions: Record<TooltipPosition, string> = {
    top: `
      bottom-[calc(100%+16px)]
      left-1/2
      -translate-x-1/2
      translate-y-2
      group-hover:translate-y-0
    `,
    bottom: `
      top-[calc(100%+16px)]
      left-1/2
      -translate-x-1/2
      -translate-y-2
      group-hover:translate-y-0
    `,
    left: `
      right-[calc(100%+16px)]
      top-1/2
      -translate-y-1/2
      translate-x-2
      group-hover:translate-x-0
    `,
    right: `
      left-[calc(100%+16px)]
      top-1/2
      -translate-y-1/2
      -translate-x-2
      group-hover:translate-x-0
    `,
  };

  return (
    <div
      className={`
        pointer-events-none
        absolute
        z-999
        w-58.75
        rounded-xl
        border
        border-cyan-300/20
        bg-[#020607]/95
        p-3.5
        text-left
        opacity-0
        shadow-[0_20px_60px_rgba(0,0,0,0.75)]
        backdrop-blur-xl
        transition-all
        duration-250
        ${positions[skill.tooltip]}
        group-hover:opacity-100
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,.8)]" />

          <span className="text-[13px] font-bold text-white">
            {skill.name}
          </span>
        </div>

        <span className="font-mono text-[11px] font-bold text-cyan-300">
          {skill.percentage}%
        </span>
      </div>

      {/* Progress */}
      <div className="mt-2.5 h-0.75 overflow-hidden rounded-full bg-white/8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${skill.percentage}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-cyan-300"
          style={{
            boxShadow: "0 0 10px rgba(103,232,249,.7)",
          }}
        />
      </div>

      {/* Description */}
      <p className="mt-3 text-[10px] leading-[1.55] text-slate-400">
        {skill.description}
      </p>

      {/* Category */}
      <div className="mt-3 flex items-center justify-between border-t border-white/6 pt-2.5">
        <span className="font-mono text-[7px] tracking-[0.18em] text-slate-600">
          DOMAIN
        </span>

        <span className="font-mono text-[7px] font-semibold tracking-[0.12em] text-cyan-300/60">
          {skill.category}
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   SKILL NODE
============================================================ */

function SkillNode({
  skill,
  index,
}: {
  skill: Skill;
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.055,
        ease: "easeOut",
      }}
      className="
        group
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
      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.02, 0.08, 0.02],
        }}
        transition={{
          duration: 3 + index * 0.15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -inset-7
          rounded-full
          bg-cyan-300
          blur-2xl
        "
      />

      {/* Main node */}
      <motion.div
        whileHover={{
          scale: 1.12,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          relative
          flex
          h-16.5
          w-16.5
          cursor-pointer
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-[#020607]/95
          shadow-[0_0_20px_rgba(0,0,0,.35)]
          backdrop-blur-xl
          transition-all
          duration-300
          group-hover:border-cyan-300/60
          group-hover:bg-[#031014]
          group-hover:shadow-[0_0_35px_rgba(34,211,238,.20)]
          md:h-18.5
          md:w-18.5
        "
      >
        {/* Inner circle */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0.75
            rounded-full
            border
            border-white/2.5
          "
        />

        {/* Rotating dashed ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 14 + index,
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
            border-cyan-300/12
            transition-all
            duration-300
            group-hover:border-cyan-300/40
          "
        />

        {/* Icon */}
        <span
          className="
            relative
            z-10
            text-[25px]
            text-cyan-100
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-cyan-200
            group-hover:drop-shadow-[0_0_12px_rgba(165,243,252,.8)]
            md:text-[29px]
          "
        >
          {skill.icon}
        </span>

        {/* Status light */}
        <motion.span
          animate={{
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: index * 0.15,
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

        {/* Tooltip */}
        <SkillTooltip skill={skill} />
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   MAIN SKILLS SECTION
============================================================ */

export default function Skills() {
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
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      {/* Scanline effect */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,.25) 0px, rgba(255,255,255,.25) 1px, transparent 1px, transparent 5px)",
        }}
      />

      {/* Very subtle grid */}
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

      {/* Top atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-130
          w-130
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.035]
          blur-[130px]
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
          className="mb-6 text-center"
        >
          <p
            className="
              mb-2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.35em]
              text-cyan-300/50
            "
          >
            Technical Ecosystem
          </p>

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            DevOps{" "}
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
              Skills
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
            The tools and technologies I use to build,
            automate and operate cloud infrastructure.
          </p>
        </motion.div>

        {/* ======================================================
            ECOSYSTEM CANVAS
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            h-155
            w-full
            max-w-212.5
            md:h-177.5
          "
        >
          {/* Center atmospheric glow */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-10
              h-75
              w-75
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400
              blur-[100px]
            "
          />

          {/* Outer orbit */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-10
              h-75
              w-75
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-dashed
              border-cyan-300/[0.035]
              md:h-92.5
              md:w-92.5
            "
          />

          {/* Inner orbit */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-10
              h-55
              w-55
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-cyan-300/2.5
              md:h-70
              md:w-70
            "
          />

          {/* ==================================================
              PLATFORM CORE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.04,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              flex
              h-33.75
              w-33.75
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-cyan-300/20
              bg-[#020607]
              shadow-[0_0_65px_rgba(34,211,238,.13)]
              md:h-36.25
              md:w-36.25
            "
          >
            {/* Core inner glow */}
            <div
              className="
                pointer-events-none
                absolute
                inset-2
                rounded-full
                border
                border-cyan-300/[0.035]
              "
            />

            <div className="relative text-center">
              <p
                className="
                  text-[15px]
                  font-bold
                  tracking-tight
                  text-cyan-100
                  md:text-[16px]
                "
              >
                Platform Core
              </p>

              <div className="mt-3 flex items-center justify-center gap-1.5">
                <motion.span
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
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
                  Operational
                </span>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              DESKTOP SKILLS
          ================================================== */}

          <div className="hidden h-full md:block">
            {skills.map((skill, index) => (
              <SkillNode
                key={skill.name}
                skill={skill}
                index={index}
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
              gap-x-5
              gap-y-8
              px-4
              pt-2
              md:hidden
            "
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
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
                  delay: index * 0.04,
                }}
                className="flex flex-col items-center"
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#020607]
                    text-xl
                    text-cyan-100
                    shadow-[0_0_20px_rgba(34,211,238,.05)]
                  "
                >
                  {skill.icon}
                </div>

                <span
                  className="
                    mt-2
                    text-center
                    font-mono
                    text-[7px]
                    text-slate-600
                  "
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================
            BOTTOM STATUS
        ====================================================== */}

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
          className="
            flex
            items-center
            justify-center
            gap-3
            font-mono
            text-[7px]
            uppercase
            tracking-[0.22em]
            text-slate-700
          "
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

            SYSTEM ONLINE
          </span>

          <span className="h-3 w-px bg-white/8" />

          <span>13 Technologies</span>

          <span className="h-3 w-px bg-white/8" />

          <span className="text-cyan-300/40">
            CLOUD • CI/CD • AUTOMATION
          </span>
        </motion.div>
      </div>
    </section>
  );
}