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
   SKILLS DATA
========================================================= */

const skills = [
  {
    name: "AWS",
    icon: <FaAws />,
    color: "text-orange-400",
    glow: "rgba(251,146,60,.22)",
    category: "CLOUD",
    level: 82,
    core: true,
    description:
      "Designing and managing scalable AWS cloud infrastructure.",
    tags: [
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "ALB",
      "RDS",
      "Lambda",
      "CloudFront",
    ],
  },

  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-sky-400",
    glow: "rgba(56,189,248,.22)",
    category: "CONTAINERS",
    level: 84,
    core: true,
    description:
      "Building, packaging and running applications using containers.",
    tags: [
      "Images",
      "Containers",
      "Compose",
      "Docker Hub",
    ],
  },

  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "text-cyan-400",
    glow: "rgba(34,211,238,.22)",
    category: "ORCHESTRATION",
    level: 78,
    core: true,
    description:
      "Deploying and managing containerized workloads with Kubernetes.",
    tags: [
      "Pods",
      "Deployments",
      "Services",
      "Ingress",
      "ConfigMaps",
    ],
  },

  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "text-purple-400",
    glow: "rgba(168,85,247,.22)",
    category: "INFRASTRUCTURE",
    level: 76,
    core: true,
    description:
      "Provisioning repeatable cloud infrastructure using Infrastructure as Code.",
    tags: [
      "IaC",
      "Providers",
      "Modules",
      "State",
      "Variables",
    ],
  },

  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "text-red-400",
    glow: "rgba(248,113,113,.22)",
    category: "CI / CD",
    level: 74,
    core: false,
    description:
      "Creating automated pipelines for continuous integration and deployment.",
    tags: [
      "Pipelines",
      "Build",
      "Deploy",
      "Automation",
    ],
  },

  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "text-orange-500",
    glow: "rgba(249,115,22,.22)",
    category: "VERSION CONTROL",
    level: 86,
    core: true,
    description:
      "Managing source code, branches and collaborative development workflows.",
    tags: [
      "Git",
      "Branching",
      "Merge",
      "Pull Requests",
      "Versioning",
    ],
  },

  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-blue-400",
    glow: "rgba(96,165,250,.22)",
    category: "AUTOMATION",
    level: 78,
    core: false,
    description:
      "Building automated CI/CD workflows directly within GitHub.",
    tags: [
      "Workflows",
      "Actions",
      "CI/CD",
      "Secrets",
      "Deployments",
    ],
  },

  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-yellow-400",
    glow: "rgba(250,204,21,.20)",
    category: "SYSTEM",
    level: 86,
    core: true,
    description:
      "Managing Linux servers, processes, permissions and cloud environments.",
    tags: [
      "Ubuntu",
      "Processes",
      "Permissions",
      "SSH",
      "System Admin",
    ],
  },

  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-300",
    glow: "rgba(253,224,71,.20)",
    category: "AUTOMATION",
    level: 72,
    core: false,
    description:
      "Writing automation scripts and cloud-focused development utilities.",
    tags: [
      "Automation",
      "Boto3",
      "Scripts",
      "APIs",
    ],
  },

  {
    name: "Shell Scripting",
    icon: <SiShell />,
    color: "text-emerald-400",
    glow: "rgba(52,211,153,.22)",
    category: "AUTOMATION",
    level: 82,
    core: true,
    description:
      "Automating Linux administration and repetitive DevOps tasks.",
    tags: [
      "Bash",
      "Cron",
      "Automation",
      "Linux",
      "CLI",
    ],
  },

  {
    name: "Networking",
    icon: <FaNetworkWired />,
    color: "text-sky-400",
    glow: "rgba(56,189,248,.20)",
    category: "NETWORKING",
    level: 74,
    core: false,
    description:
      "Understanding networking fundamentals used in cloud infrastructure.",
    tags: [
      "TCP/IP",
      "DNS",
      "HTTP",
      "VPC",
      "Load Balancer",
    ],
  },

  {
    name: "IAM & Security",
    icon: <MdSecurity />,
    color: "text-emerald-400",
    glow: "rgba(52,211,153,.22)",
    category: "SECURITY",
    level: 76,
    core: false,
    description:
      "Implementing identity, access control and basic cloud security practices.",
    tags: [
      "IAM",
      "Roles",
      "Policies",
      "MFA",
      "Least Privilege",
    ],
  },

  {
    name: "Nginx",
    icon: <SiNginx />,
    color: "text-green-400",
    glow: "rgba(74,222,128,.20)",
    category: "WEB / PROXY",
    level: 70,
    core: false,
    description:
      "Configuring web servers, reverse proxies and application routing.",
    tags: [
      "Reverse Proxy",
      "SSL",
      "Web Server",
      "Routing",
    ],
  },

  {
    name: "Monitoring",
    icon: <SiPrometheus />,
    color: "text-orange-400",
    glow: "rgba(251,146,60,.20)",
    category: "OBSERVABILITY",
    level: 68,
    core: false,
    description:
      "Monitoring infrastructure metrics and application health.",
    tags: [
      "Prometheus",
      "Grafana",
      "Metrics",
      "Alerts",
    ],
  },

  {
    name: "Helm",
    icon: <SiHelm />,
    color: "text-cyan-300",
    glow: "rgba(103,232,249,.20)",
    category: "KUBERNETES",
    level: 76,
    core: false,
    description:
      "Managing reusable and parameterized Kubernetes application releases.",
    tags: [
      "Charts",
      "Templates",
      "Values",
      "Releases",
    ],
  },

  {
    name: "Ansible",
    icon: <SiAnsible />,
    color: "text-red-300",
    glow: "rgba(252,165,165,.18)",
    category: "CONFIGURATION",
    level: 70,
    core: false,
    description:
      "Automating server configuration and application deployment tasks.",
    tags: [
      "Playbooks",
      "Roles",
      "Automation",
      "Configuration",
    ],
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
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.035,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/8
        bg-[#020817]/65
        p-4
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-300/30
        hover:bg-[#03101c]/80
      "
    >
      {/* =====================================================
          TOP ACCENT
      ===================================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-linear-to-r
          from-transparent
          via-cyan-300/60
          to-transparent
          opacity-30
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: skill.glow,
        }}
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative flex items-start justify-between">
        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-white/8
            bg-white/[0.035]
            text-2xl
            shadow-lg
          "
        >
          {/* icon glow */}

          <div
            className="
              absolute
              inset-0
              rounded-xl
              opacity-0
              blur-lg
              transition-opacity
              duration-300
              group-hover:opacity-60
            "
            style={{
              background: skill.glow,
            }}
          />

          <span
            className={`relative z-10 ${skill.color}`}
          >
            {skill.icon}
          </span>
        </motion.div>

        {/* Core badge */}

        {skill.core && (
          <span
            className="
              rounded-full
              border
              border-cyan-300/15
              bg-cyan-300/5
              px-2
              py-1
              font-mono
              text-[7px]
              font-bold
              tracking-[0.15em]
              text-cyan-300/70
            "
          >
            CORE
          </span>
        )}
      </div>

      {/* =====================================================
          NAME + CATEGORY
      ===================================================== */}

      <div className="relative mt-4">
        <div className="flex items-center gap-2">
          <h3
            className="
              text-[15px]
              font-bold
              tracking-tight
              text-white
            "
          >
            {skill.name}
          </h3>

          <span
            className="
              h-1
              w-1
              rounded-full
              bg-cyan-300/60
            "
          />
        </div>

        <p
          className="
            mt-1
            font-mono
            text-[7px]
            uppercase
            tracking-[0.16em]
            text-slate-600
          "
        >
          {skill.category}
        </p>
      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          relative
          mt-3
          min-h-9.5
          text-[10px]
          leading-5
          text-slate-500
          transition-colors
          duration-300
          group-hover:text-slate-400
        "
      >
        {skill.description}
      </p>

      {/* =====================================================
          PROFICIENCY
      ===================================================== */}

      <div className="relative mt-4">
        <div className="mb-1.5 flex items-center justify-between">
          <span
            className="
              font-mono
              text-[7px]
              uppercase
              tracking-[0.15em]
              text-slate-700
            "
          >
            Proficiency
          </span>

          <span
            className="
              font-mono
              text-[9px]
              font-bold
              text-cyan-300/70
            "
          >
            {skill.level}%
          </span>
        </div>

        {/* Progress background */}

        <div
          className="
            h-0.75
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
              duration: 0.8,
              delay: 0.2 + index * 0.03,
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
                "0 0 10px rgba(34,211,238,.55)",
            }}
          />
        </div>
      </div>

      {/* =====================================================
          TAGS
      ===================================================== */}

      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-md
              border
              border-white/6
              bg-white/2.5
              px-2
              py-1
              font-mono
              text-[7px]
              text-slate-500
              transition-all
              duration-200
              group-hover:border-cyan-300/10
              group-hover:text-slate-400
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* =====================================================
          BOTTOM STATUS
      ===================================================== */}

      <div
        className="
          relative
          mt-4
          flex
          items-center
          justify-between
          border-t
          border-white/5
          pt-3
        "
      >
        <span
          className="
            flex
            items-center
            gap-1.5
            font-mono
            text-[6px]
            uppercase
            tracking-[0.15em]
            text-slate-700
          "
        >
          <span
            className="
              h-1
              w-1
              animate-pulse
              rounded-full
              bg-emerald-400
            "
          />

          Operational
        </span>

        <span
          className="
            font-mono
            text-[6px]
            tracking-widest
            text-cyan-300/20
            transition-colors
            group-hover:text-cyan-300/50
          "
        >
          0{index + 1}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN SKILLS SECTION
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
        py-20
        md:px-8
        md:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
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
          backgroundSize: "42px 42px",
        }}
      />

      {/* =====================================================
          CENTER GLOW
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.03, 0.06, 0.03],
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
          rounded-full
          bg-cyan-400
          blur-[140px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

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
          className="mb-12 text-center"
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
              border-cyan-300/15
              bg-cyan-300/4
              px-4
              py-1.5
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-cyan-300/70
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-emerald-400
              "
            />

            Technical Expertise

            <span className="text-slate-700">
              //
            </span>

            16 Technologies
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-4xl
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
                from-cyan-300
                via-sky-400
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              Arsenal
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-xs
              leading-6
              text-slate-500
              md:text-sm
            "
          >
            Hands-on technologies used to build, automate,
            deploy, monitor and operate cloud infrastructure.
          </p>
        </motion.div>

        {/* ===================================================
            CATEGORY SIGNALS
        =================================================== */}

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
            duration: 0.5,
            delay: 0.1,
          }}
          className="
            mb-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
          "
        >
          {[
            "CLOUD",
            "CONTAINERS",
            "INFRASTRUCTURE",
            "CI / CD",
            "AUTOMATION",
            "SECURITY",
            "OBSERVABILITY",
          ].map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-white/6
                bg-white/2.5
                px-3
                py-1.5
                font-mono
                text-[7px]
                tracking-[0.12em]
                text-slate-600
              "
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* ===================================================
            SKILLS GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
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

        {/* ===================================================
            BOTTOM STATUS BAR
        =================================================== */}

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
            mt-8
            flex
            max-w-4xl
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-2
            rounded-xl
            border
            border-white/5
            bg-[#020817]/40
            px-5
            py-3
            font-mono
            text-[7px]
            uppercase
            tracking-[0.18em]
            text-slate-700
            backdrop-blur-xl
          "
        >
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            SYSTEM ONLINE
          </span>

          <span className="hidden h-3 w-px bg-white/8 sm:block" />

          <span>
            CLOUD
          </span>

          <span>
            AUTOMATION
          </span>

          <span>
            CONTAINERS
          </span>

          <span>
            CI/CD
          </span>

          <span>
            OBSERVABILITY
          </span>

          <span className="hidden h-3 w-px bg-white/8 sm:block" />

          <span className="text-cyan-300/40">
            BUILD → DEPLOY → MONITOR
          </span>
        </motion.div>
      </div>
    </section>
  );
}