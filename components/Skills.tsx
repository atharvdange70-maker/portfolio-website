"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaJenkins,
} from "react-icons/fa";

import {
  SiTerraform,
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import {
  MdSecurity,
  MdCloudQueue,
  MdNetworkCheck,
} from "react-icons/md";

const skillGroups = [
  {
    title: "Cloud",
    skills: [
      {
        name: "Amazon Web Services",
        icon: <FaAws />,
        level: "Advanced",
        color: "text-orange-400",
      },
      {
        name: "CloudWatch",
        icon: <MdCloudQueue />,
        level: "Intermediate",
        color: "text-cyan-400",
      },
      {
        name: "IAM & Security",
        icon: <MdSecurity />,
        level: "Intermediate",
        color: "text-green-400",
      },
    ],
  },

  {
    title: "DevOps & Automation",
    skills: [
      {
        name: "Terraform",
        icon: <SiTerraform />,
        level: "Advanced",
        color: "text-violet-400",
      },
      {
        name: "Docker",
        icon: <FaDocker />,
        level: "Advanced",
        color: "text-sky-400",
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes />,
        level: "Intermediate",
        color: "text-blue-400",
      },
      {
        name: "Jenkins",
        icon: <FaJenkins />,
        level: "Intermediate",
        color: "text-red-400",
      },
      {
        name: "Git & GitHub",
        icon: <FaGitAlt />,
        level: "Advanced",
        color: "text-orange-500",
      },
    ],
  },

  {
    title: "Monitoring & Observability",
    skills: [
      {
        name: "Prometheus",
        icon: <SiPrometheus />,
        level: "Learning",
        color: "text-orange-400",
      },
      {
        name: "Grafana",
        icon: <SiGrafana />,
        level: "Learning",
        color: "text-yellow-400",
      },
    ],
  },

  {
    title: "System & Networking",
    skills: [
      {
        name: "Linux",
        icon: <FaLinux />,
        level: "Advanced",
        color: "text-yellow-400",
      },
      {
        name: "Networking",
        icon: <MdNetworkCheck />,
        level: "Intermediate",
        color: "text-cyan-400",
      },
      {
        name: "Cloud Architecture",
        icon: <MdCloudQueue />,
        level: "Intermediate",
        color: "text-indigo-400",
      },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            Technical Expertise
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Skills &
            <span className="text-cyan-400"> Technologies</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Hands-on experience building cloud infrastructure,
            automating deployments, managing containers,
            monitoring applications, and implementing
            modern DevOps practices.
          </p>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              value: "13+",
              label: "Technologies",
            },

            {
              value: "6 Months",
              label: "DevOps Experience",
            },

            {
              value: "10+",
              label: "Cloud Projects",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-2 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Skill Categories */}

        <div className="mt-20 space-y-14">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* Category Heading */}
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />

                <h3 className="text-2xl font-bold text-white">
                  {group.title}
                </h3>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Skills */}
              <motion.div
                variants={container}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-900/80"
                  >
                    {/* Top Row */}

                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-2xl ${skill.color}`}
                      >
                        {skill.icon}
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          skill.level === "Advanced"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : skill.level === "Intermediate"
                            ? "bg-sky-500/15 text-sky-400"
                            : "bg-amber-500/15 text-amber-400"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Name */}

                    <h4 className="mt-6 text-xl font-semibold text-white">
                      {skill.name}
                    </h4>

                    {/* Description */}

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {group.title}
                    </p>

                    {/* Bottom Line */}

                    <div className="mt-6 h-px w-full bg-white/10" />

                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-slate-500">
                        DevOps Stack
                      </span>

                      <span className="text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300">
                        ● Active
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
    