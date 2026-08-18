
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
} from "react-icons/si";

import { MdSecurity } from "react-icons/md";

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    name: "AWS",
    icon: <FaAws />,
    category: "CLOUD",
    level: 82,
    description: "Cloud infrastructure & AWS services.",
    color: "#38bdf8",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    category: "CONTAINERS",
    level: 84,
    description: "Containerized application deployment.",
    color: "#22d3ee",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    category: "ORCHESTRATION",
    level: 78,
    description: "Container orchestration & workloads.",
    color: "#67e8f9",
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    category: "IaC",
    level: 76,
    description: "Infrastructure as Code provisioning.",
    color: "#a78bfa",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "VERSION CONTROL",
    level: 86,
    description: "Source control & collaboration.",
    color: "#60a5fa",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    category: "SYSTEM",
    level: 86,
    description: "Linux server administration.",
    color: "#93c5fd",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    category: "CI / CD",
    level: 78,
    description: "Automated CI/CD workflows.",
    color: "#818cf8",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    category: "CI / CD",
    level: 74,
    description: "Pipeline automation & deployments.",
    color: "#a5b4fc",
  },
  {
    name: "Helm",
    icon: <SiHelm />,
    category: "KUBERNETES",
    level: 76,
    description: "Parameterized Kubernetes releases.",
    color: "#22d3ee",
  },
  {
    name: "Ansible",
    icon: <SiAnsible />,
    category: "AUTOMATION",
    level: 70,
    description: "Server configuration automation.",
    color: "#67e8f9",
  },
  {
    name: "Python",
    icon: <FaPython />,
    category: "AUTOMATION",
    level: 72,
    description: "Automation scripts & utilities.",
    color: "#818cf8",
  },
  {
    name: "Shell",
    icon: <SiShell />,
    category: "AUTOMATION",
    level: 82,
    description: "Bash scripting & Linux automation.",
    color: "#2dd4bf",
  },
  {
    name: "Networking",
    icon: <FaNetworkWired />,
    category: "NETWORKING",
    level: 74,
    description: "TCP/IP, DNS & cloud networking.",
    color: "#38bdf8",
  },
  {
    name: "Security",
    icon: <MdSecurity />,
    category: "SECURITY",
    level: 76,
    description: "IAM, policies & access control.",
    color: "#34d399",
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
    category: "WEB / PROXY",
    level: 70,
    description: "Reverse proxy & web serving.",
    color: "#2dd4bf",
  },
  {
    name: "Monitoring",
    icon: <SiPrometheus />,
    category: "OBSERVABILITY",
    level: 68,
    description: "Metrics, monitoring & alerting.",
    color: "#67e8f9",
  },
];

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({
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
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.025,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        h-44.5
        overflow-hidden
        rounded-xl
        border
        border-cyan-300/[0.07]
        bg-[#020a14]/75
        p-3
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-300/25
        hover:bg-[#04111d]/90
      "
    >
      {/* ===================================================
          OUTER GLOW
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          opacity-0
          blur-3xl
          transition-all
          duration-500
          group-hover:opacity-40
        "
        style={{
          background: skill.color,
        }}
      />

      {/* ===================================================
          TOP LINE
      =================================================== */}

      <div
        className="
          absolute
          left-3
          right-3
          top-0
          h-px
          opacity-30
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${skill.color},
            transparent
          )`,
        }}
      />

      {/* ===================================================
          HEADER
      =================================================== */}

      <div className="relative flex items-center justify-between">
        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 6,
            scale: 1.08,
          }}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-white/[0.07]
            bg-white/[0.035]
            text-lg
            transition-all
            duration-300
          "
          style={{
            color: skill.color,
          }}
        >
          {skill.icon}
        </motion.div>

        {/* Number */}

        <span
          className="
            font-mono
            text-[6px]
            tracking-[0.2em]
            text-slate-700
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* ===================================================
          TITLE
      =================================================== */}

      <div className="relative mt-3">
        <h3
          className="
            text-[13px]
            font-bold
            tracking-tight
            text-slate-100
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {skill.name}
        </h3>

        <div className="mt-1 flex items-center gap-1.5">
          <span
            className="h-1 w-1 rounded-full"
            style={{
              background: skill.color,
            }}
          />

          <span
            className="
              font-mono
              text-[6px]
              tracking-[0.16em]
              text-slate-600
            "
          >
            {skill.category}
          </span>
        </div>
      </div>

      {/* ===================================================
          DESCRIPTION
      =================================================== */}

      <div
        className="
          relative
          mt-2
          min-h-7
          overflow-hidden
        "
      >
        <p
          className="
            text-[8px]
            leading-4
            text-slate-600
            transition-colors
            duration-300
            group-hover:text-slate-400
          "
        >
          {skill.description}
        </p>
      </div>

      {/* ===================================================
          PROFICIENCY
      =================================================== */}

      <div className="relative mt-2.5">
        <div className="mb-1 flex items-center justify-between">
          <span
            className="
              font-mono
              text-[6px]
              uppercase
              tracking-[0.14em]
              text-slate-700
            "
          >
            Proficiency
          </span>

          <span
            className="
              font-mono
              text-[7px]
              text-cyan-300/60
            "
          >
            {skill.level}%
          </span>
        </div>

        <div
          className="
            h-0.5
            overflow-hidden
            rounded-full
            bg-white/6
          "
        >
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: `${skill.level}%`,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2 + index * 0.025,
              ease: "easeOut",
            }}
            className="h-full rounded-full"
            style={{
              background: skill.color,
              boxShadow: `0 0 8px ${skill.color}`,
            }}
          />
        </div>
      </div>

      {/* ===================================================
          HOVER DETAILS
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-3
          bottom-3
          flex
          translate-y-1
          items-center
          justify-between
          opacity-0
          transition-all
          duration-300
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <span
          className="
            font-mono
            text-[6px]
            uppercase
            tracking-[0.15em]
            text-slate-600
          "
        >
          SYSTEM ACTIVE
        </span>

        <span
          className="flex items-center gap-1 font-mono text-[6px]"
          style={{
            color: skill.color,
          }}
        >
          <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />

          READY
        </span>
      </div>

      {/* ===================================================
          HOVER BORDER
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-xl
          border
          border-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          boxShadow: `inset 0 0 25px ${skill.color}08`,
        }}
      />
    </motion.div>
  );
}

/* =========================================================
   SKILLS SECTION
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-transparent
        px-5
        py-16
        md:px-8
        md:py-20
      "
    >
      {/* ===================================================
          GRID BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.022]
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
          backgroundSize: "38px 38px",
        }}
      />

      {/* ===================================================
          AMBIENT GLOW
      =================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.025, 0.05, 0.025],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-105
          w-105
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* =================================================
            HEADER
        ================================================= */}

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
            duration: 0.5,
          }}
          className="mb-9 text-center"
        >
          {/* Badge */}

          <div
            className="
              mx-auto
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-cyan-300/10
              bg-cyan-300/2.5
              px-3
              py-1
              font-mono
              text-[7px]
              uppercase
              tracking-[0.25em]
              text-cyan-300/60
            "
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

            DEVOPS STACK

            <span className="text-slate-700">
              //
            </span>

            16 TOOLS
          </div>

          {/* Heading */}

          <h2
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              text-white
              md:text-4xl
            "
          >
            Technical{" "}
            <span
              className="
                bg-linear-to-r
                from-cyan-300
                via-sky-400
                to-violet-400
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
              text-[10px]
              leading-5
              text-slate-600
              md:text-xs
            "
          >
            Technologies I use to build, automate, deploy
            and operate cloud infrastructure.
          </p>
        </motion.div>

        {/* =================================================
            SKILL GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM STATUS
        ================================================= */}

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
            duration: 0.5,
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-6
            flex
            w-fit
            items-center
            gap-3
            rounded-full
            border
            border-white/5
            bg-black/20
            px-4
            py-2
            font-mono
            text-[6px]
            tracking-[0.15em]
            text-slate-700
            backdrop-blur-md
          "
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
            SYSTEM ONLINE
          </span>

          <span className="h-2.5 w-px bg-white/8" />

          <span className="text-cyan-300/30">
            CLOUD
          </span>

          <span className="text-cyan-300/30">
            AUTOMATION
          </span>

          <span className="text-cyan-300/30">
            CI/CD
          </span>

          <span className="text-cyan-300/30">
            INFRASTRUCTURE
          </span>
        </motion.div>
      </div>
    </section>
  );
}