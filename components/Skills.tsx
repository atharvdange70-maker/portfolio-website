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
  SiHelm,
  SiAnsible,
  SiGrafana,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
  percentage: number;
  description: string;
  x: string;
  y: string;
  tooltip?: "top" | "bottom" | "left" | "right";
};

const skills: Skill[] = [
  {
    name: "Grafana",
    icon: <SiGrafana />,
    percentage: 72,
    description: "Metrics visualization and dashboards",
    x: "16%",
    y: "17%",
    tooltip: "right",
  },

  {
    name: "Helm",
    icon: <SiHelm />,
    percentage: 76,
    description: "Parameterized Kubernetes releases",
    x: "38%",
    y: "13%",
    tooltip: "bottom",
  },

  {
    name: "Python",
    icon: <FaPython />,
    percentage: 72,
    description: "Cloud automation and scripting",
    x: "58%",
    y: "8%",
    tooltip: "bottom",
  },

  {
    name: "Shell",
    icon: <SiShell />,
    percentage: 82,
    description: "Linux automation and scripting",
    x: "72%",
    y: "20%",
    tooltip: "bottom",
  },

  {
    name: "Ansible",
    icon: <SiAnsible />,
    percentage: 70,
    description: "Configuration management automation",
    x: "88%",
    y: "30%",
    tooltip: "left",
  },

  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    percentage: 78,
    description: "Container orchestration at scale",
    x: "86%",
    y: "50%",
    tooltip: "left",
  },

  {
    name: "Docker",
    icon: <FaDocker />,
    percentage: 84,
    description: "Containerized application deployment",
    x: "88%",
    y: "69%",
    tooltip: "left",
  },

  {
    name: "AWS",
    icon: <FaAws />,
    percentage: 82,
    description: "Cloud infrastructure and services",
    x: "72%",
    y: "82%",
    tooltip: "top",
  },

  {
    name: "Terraform",
    icon: <SiTerraform />,
    percentage: 76,
    description: "Infrastructure as Code",
    x: "57%",
    y: "93%",
    tooltip: "top",
  },

  {
    name: "Jenkins",
    icon: <FaJenkins />,
    percentage: 74,
    description: "CI/CD pipeline automation",
    x: "40%",
    y: "91%",
    tooltip: "top",
  },

  {
    name: "Linux",
    icon: <FaLinux />,
    percentage: 86,
    description: "Cloud server administration",
    x: "20%",
    y: "81%",
    tooltip: "top",
  },

  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    percentage: 78,
    description: "Automated CI/CD workflows",
    x: "13%",
    y: "62%",
    tooltip: "right",
  },

  {
    name: "Prometheus",
    icon: <SiPrometheus />,
    percentage: 68,
    description: "Infrastructure monitoring",
    x: "8%",
    y: "45%",
    tooltip: "right",
  },
];

/* ============================================================
   TOOLTIP
============================================================ */

function Tooltip({
  skill,
}: {
  skill: Skill;
}) {
  const positionClasses = {
    top: `
      bottom-[calc(100%+14px)]
      left-1/2
      -translate-x-1/2
      translate-y-2
      group-hover:translate-y-0
    `,

    bottom: `
      top-[calc(100%+14px)]
      left-1/2
      -translate-x-1/2
      -translate-y-2
      group-hover:translate-y-0
    `,

    left: `
      right-[calc(100%+14px)]
      top-1/2
      -translate-y-1/2
      translate-x-2
      group-hover:translate-x-0
    `,

    right: `
      left-[calc(100%+14px)]
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
        z-100
        w-57.5
        rounded-lg
        border
        border-cyan-300/20
        bg-[#020607]/95
        p-3
        text-left
        opacity-0
        shadow-[0_15px_45px_rgba(0,0,0,0.7)]
        backdrop-blur-xl
        transition-all
        duration-200
        ${positionClasses[skill.tooltip ?? "bottom"]}
        group-hover:opacity-100
      `}
    >
      {/* Title */}
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-white">
          {skill.name}
        </span>

        <span className="font-mono text-[10px] text-cyan-300">
          {skill.percentage}%
        </span>
      </div>

      {/* Progress */}
      <div className="mt-2 h-0.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-cyan-300"
          style={{
            width: `${skill.percentage}%`,
            boxShadow:
              "0 0 8px rgba(103,232,249,.7)",
          }}
        />
      </div>

      {/* Description */}
      <p className="mt-2 text-[10px] leading-4 text-slate-400">
        {skill.description}
      </p>
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
        scale: 0.65,
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
      {/* Subtle glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-8
          rounded-full
          bg-cyan-400/[0.035]
          opacity-0
          blur-2xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Node */}
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          relative
          flex
          h-16
          w-16
          cursor-pointer
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-[#020607]
          transition-all
          duration-300
          group-hover:border-cyan-300/50
          group-hover:bg-[#030d10]
          group-hover:shadow-[0_0_28px_rgba(34,211,238,0.13)]
          md:h-18
          md:w-18
        "
      >
        {/* Very subtle inner border */}
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
            group-hover:drop-shadow-[0_0_8px_rgba(165,243,252,.65)]
            md:text-[28px]
          "
        >
          {skill.icon}
        </span>

        {/* Tiny status dot */}
        <span
          className="
            absolute
            right-0.75
            top-0.75
            h-1.75
            w-1.75
            rounded-full
            bg-cyan-200
            opacity-60
            shadow-[0_0_7px_rgba(103,232,249,.8)]
            transition-all
            duration-300
            group-hover:opacity-100
          "
        />

        {/* Tooltip */}
        <Tooltip skill={skill} />
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   MAIN SKILLS
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

      {/* Horizontal scanlines */}
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
              rgba(34,211,238,.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34,211,238,.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Center cyan atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-107.5
          w-107.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/4.5
          blur-[110px]
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
            duration: 0.6,
          }}
          className="mb-8 text-center"
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
              md:text-4xl
            "
          >
            DevOps{" "}
            <span className="text-cyan-200">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* ======================================================
            ECOSYSTEM
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            h-155
            w-full
            max-w-212.5
            md:h-175
          "
        >
          {/* Center glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.07, 0.12, 0.07],
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
              h-70
              w-70
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-400
              blur-[100px]
            "
          />

          {/* ==================================================
              CENTER CORE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
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
              shadow-[0_0_50px_rgba(34,211,238,.10)]
              md:h-35
              md:w-35
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

              <div className="mt-3 flex items-center justify-center gap-1.5">
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_8px_rgba(103,232,249,.8)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-[0.2em]
                    text-cyan-300/50
                  "
                >
                  Active
                </span>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              SKILLS
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
              gap-7
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
                className="flex justify-center"
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
                  "
                >
                  {skill.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================
            FOOTER TEXT
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
            tracking-[0.25em]
            text-slate-700
          "
        >
          <span>13 Technologies</span>

          <span className="h-2.5 w-px bg-white/10" />

          <span className="text-cyan-300/40">
            Cloud • Automation • DevOps
          </span>
        </div>
      </div>
    </section>
  );
}