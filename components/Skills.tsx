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
  FiServer,
  FiTerminal,
} from "react-icons/fi";

/* =========================================================
   SKILL DATA
========================================================= */

const skills = [
  {
    name: "Docker",
    icon: <FaDocker />,
    category: "CONTAINER",
    meta: "01",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    category: "ORCHESTRATION",
    meta: "02",
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    category: "INFRASTRUCTURE",
    meta: "03",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    category: "DELIVERY",
    meta: "04",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    category: "AUTOMATION",
    meta: "05",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    category: "SYSTEM",
    meta: "06",
  },
  {
    name: "Python",
    icon: <FaPython />,
    category: "AUTOMATION",
    meta: "07",
  },
  {
    name: "Networking",
    icon: <FaNetworkWired />,
    category: "NETWORK",
    meta: "08",
  },
  {
    name: "Security",
    icon: <MdSecurity />,
    category: "SECURITY",
    meta: "09",
  },
  {
    name: "Nginx",
    icon: <SiNginx />,
    category: "WEB",
    meta: "10",
  },
  {
    name: "Monitoring",
    icon: <SiPrometheus />,
    category: "OBSERVABILITY",
    meta: "11",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    category: "VERSION CONTROL",
    meta: "12",
  },
];

/* =========================================================
   COMMAND MODULE
========================================================= */

function SkillModule({
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
        duration: 0.45,
        delay: index * 0.045,
      }}
      whileHover={{
        y: -5,
      }}
      className="group relative"
    >
      {/* =====================================================
          SIGNAL GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-amber-300/2.5 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

      {/* =====================================================
          MODULE
      ===================================================== */}

      <div className="relative h-23 overflow-hidden rounded-xl border border-white/8 bg-[#11151a]/90 shadow-[0_10px_30px_rgba(0,0,0,.18)] backdrop-blur-xl transition-all duration-300 group-hover:border-amber-200/20 group-hover:bg-[#151a20]">
        {/* metallic top line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-[#d6c6a3]/50 to-transparent opacity-60" />

        {/* left vertical indicator */}
        <div className="absolute bottom-3 left-0 top-3 w-px bg-linear-to-b from-transparent via-[#b9aa8a]/40 to-transparent" />

        {/* ===================================================
            NUMBER
        =================================================== */}

        <div className="absolute right-2 top-2 font-mono text-[7px] tracking-widest text-white/16">
          {skill.meta}
        </div>

        {/* ===================================================
            ICON
        =================================================== */}

        <div className="absolute left-3 top-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#d6c6a3]/10 bg-[#1b2026] text-[19px] text-[#d7d0c1] transition-all duration-300 group-hover:border-[#d6c6a3]/30 group-hover:text-[#eee7d8]">
            {/* inner square */}
            <div className="absolute inset-1.5 rounded border border-white/[0.035]" />

            <span className="relative">
              {skill.icon}
            </span>
          </div>

          {/* tiny status */}
          <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full border border-[#11151a] bg-[#202b29]">
            <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
          </span>
        </div>

        {/* ===================================================
            TEXT
        =================================================== */}

        <div className="absolute left-15.5 top-3 right-5">
          <p className="truncate text-[11px] font-semibold tracking-tight text-[#e8e6e1]">
            {skill.name}
          </p>

          <p className="mt-1 font-mono text-[7px] tracking-[0.17em] text-[#827f78]">
            {skill.category}
          </p>
        </div>

        {/* ===================================================
            BOTTOM STATUS
        =================================================== */}

        <div className="absolute bottom-3 left-15.5 flex items-center gap-1.5">
          <span className="font-mono text-[7px] text-[#6f706f]">
            MODULE
          </span>

          <span className="h-px w-4 bg-[#625d51]" />

          <span className="font-mono text-[7px] text-[#aaa18f]">
            ACTIVE
          </span>
        </div>

        {/* arrow */}
        <FiArrowUpRight className="absolute bottom-3 right-3 text-[10px] text-white/15 transition-all duration-300 group-hover:text-[#d6c6a3]/70" />

        {/* ===================================================
            HOVER SCAN
        =================================================== */}

        <motion.div
          initial={{
            x: "-100%",
          }}
          whileHover={{
            x: "100%",
          }}
          transition={{
            duration: 0.8,
          }}
          className="pointer-events-none absolute bottom-0 left-0 h-px w-1/2 bg-linear-to-r from-transparent via-[#d6c6a3]/60 to-transparent"
        />
      </div>
    </motion.div>
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
          VERY SUBTLE GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      {/* warm center atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-125 w-125 -translate-x-1/2 rounded-full bg-[#cbb98f]/[0.018] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">

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
            duration: 0.6,
          }}
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-[#c9b994]/15 bg-[#c9b994]/[0.035] px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,.35)]" />

            <span className="font-mono text-[8px] tracking-[0.25em] text-[#aaa18f]">
              ENGINEERING STACK
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Technical{" "}
            <span className="text-[#d6c6a3]">
              Arsenal
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-slate-500 md:text-sm">
            A focused stack for building, automating and operating
            production-grade cloud infrastructure.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CONTROL PANEL
        =================================================== */}

        <div className="relative mx-auto max-w-262.5">

          {/* outer frame */}
          <div className="relative overflow-hidden rounded-[26px] border border-white/7.5 bg-[#080b0f]/80 shadow-[0_35px_100px_rgba(0,0,0,.35)] backdrop-blur-xl">

            {/* =================================================
                TOP BAR
            ================================================= */}

            <div className="flex h-11 items-center justify-between border-b border-white/6 px-4">
              
              <div className="flex items-center gap-3">

                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                </div>

                <span className="font-mono text-[8px] tracking-[0.18em] text-[#6d6b67]">
                  / DEVOPS / STACK
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FiActivity className="text-[10px] text-emerald-400/70" />

                <span className="font-mono text-[7px] text-[#77756f]">
                  SYSTEM NOMINAL
                </span>
              </div>
            </div>

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="relative p-5 md:p-7">

              {/* faint horizontal scan lines */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
                <div className="absolute left-0 right-0 top-[25%] h-px bg-white" />
                <div className="absolute left-0 right-0 top-[50%] h-px bg-white" />
                <div className="absolute left-0 right-0 top-[75%] h-px bg-white" />
              </div>

              {/* =================================================
                  AWS COMMAND CENTER
              ================================================= */}

              <div className="relative mx-auto mb-7 flex w-fit items-center gap-4 rounded-2xl border border-[#c9b994]/10 bg-[#11151a] px-5 py-3 shadow-[0_15px_45px_rgba(0,0,0,.3)]">

                {/* AWS icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#c9b994]/15 bg-[#181d22]">
                  <FaAws className="text-[27px] text-[#e0a54a]" />

                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-[#11151a] bg-emerald-400/80" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-[#efede8]">
                      AWS
                    </h3>

                    <span className="rounded border border-emerald-400/10 bg-emerald-400/[0.035] px-1.5 py-0.5 font-mono text-[6px] text-emerald-400/70">
                      CORE
                    </span>
                  </div>

                  <p className="mt-1 font-mono text-[7px] tracking-[0.16em] text-[#706e69]">
                    CLOUD INFRASTRUCTURE
                  </p>
                </div>

                <div className="ml-3 hidden border-l border-white/6 pl-4 sm:block">
                  <p className="font-mono text-[7px] text-[#595853]">
                    SERVICES
                  </p>

                  <p className="mt-1 text-[9px] text-[#aaa18f]">
                    EC2 · S3 · IAM · VPC
                  </p>
                </div>
              </div>

              {/* =================================================
                  SKILLS GRID
              ================================================= */}

              <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">

                {skills.map((skill, index) => (
                  <SkillModule
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}

              </div>

              {/* =================================================
                  SYSTEM CONNECTION
              ================================================= */}

              <div className="mt-7 flex items-center justify-center">

                <div className="flex items-center gap-3">

                  <div className="h-px w-12 bg-linear-to-r from-transparent to-[#c9b994]/20" />

                  <div className="flex items-center gap-2 rounded-full border border-[#c9b994]/10 bg-[#11151a] px-3 py-1.5">

                    <FiGitBranch className="text-[9px] text-[#b8ad98]" />

                    <span className="font-mono text-[7px] tracking-[0.16em] text-[#77736a]">
                      AUTOMATION PIPELINE
                    </span>

                  </div>

                  <div className="h-px w-12 bg-linear-to-l from-transparent to-[#c9b994]/20" />

                </div>
              </div>

              {/* =================================================
                  PIPELINE STRIP
              ================================================= */}

              <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-xl border border-white/6 bg-[#0c1014]">

                <div className="flex items-center justify-center gap-2 border-r border-white/6 py-3">

                  <FiTerminal className="text-[#b8ad98]" />

                  <div>
                    <p className="font-mono text-[6px] text-[#555550]">
                      SOURCE
                    </p>

                    <p className="text-[8px] font-semibold text-[#aaa79f]">
                      BUILD
                    </p>
                  </div>

                </div>

                <div className="flex items-center justify-center gap-2 border-r border-white/6 py-3">

                  <FiCpu className="text-[#b8ad98]" />

                  <div>
                    <p className="font-mono text-[6px] text-[#555550]">
                      AUTOMATION
                    </p>

                    <p className="text-[8px] font-semibold text-[#aaa79f]">
                      DEPLOY
                    </p>
                  </div>

                </div>

                <div className="flex items-center justify-center gap-2 py-3">

                  <FiServer className="text-[#b8ad98]" />

                  <div>
                    <p className="font-mono text-[6px] text-[#555550]">
                      PRODUCTION
                    </p>

                    <p className="text-[8px] font-semibold text-[#aaa79f]">
                      OPERATE
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* =================================================
                BOTTOM STATUS
            ================================================= */}

            <div className="flex h-9 items-center justify-between border-t border-white/5 px-4">

              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-emerald-400/80" />

                <span className="font-mono text-[6px] tracking-[0.15em] text-[#555550]">
                  ALL MODULES OPERATIONAL
                </span>
              </div>

              <span className="font-mono text-[6px] text-[#4d4c48]">
                12 / 12
              </span>

            </div>
          </div>

          {/* =====================================================
              DECORATIVE SIDE DATA
          ===================================================== */}

          <div className="pointer-events-none absolute -left-16 top-1/2 hidden -translate-y-1/2 lg:block">

            <div className="flex flex-col gap-2 font-mono text-[6px] text-white/12">
              <span>SYS_001</span>
              <span>NODE_OK</span>
              <span>DEPLOY</span>
              <span>MONITOR</span>
            </div>

          </div>

          <div className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 lg:block">

            <div className="flex flex-col items-end gap-2 font-mono text-[6px] text-white/12">
              <span>CPU 32%</span>
              <span>MEM 48%</span>
              <span>NET 12ms</span>
              <span>UP 99.9%</span>
            </div>

          </div>

        </div>

        {/* =====================================================
            TERMINAL SIGNATURE
        ===================================================== */}

        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[7px] text-[#45443f]">

          <span className="text-[#a89e88]">
            atharv@cloud
          </span>

          <span>:</span>

          <span className="text-[#6d685d]">
            ~/infrastructure
          </span>

          <span>$</span>

          <span>
            stack --status
          </span>

          <span className="text-emerald-500/60">
            ✓ healthy
          </span>

        </div>

      </div>
    </section>
  );
}