"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  FolderGit2,
  BrainCircuit,
  Rocket,
} from "lucide-react";

const stats = [
  {
    number: "10+",
    title: "AWS Services",
    subtitle: "EC2 • IAM • VPC • S3",
    icon: Cloud,
    color: "text-cyan-200",
  },
  {
    number: "4+",
    title: "DevOps Projects",
    subtitle: "Production Ready",
    icon: FolderGit2,
    color: "text-blue-200",
  },
  {
    number: "100%",
    title: "Hands-On Learning",
    subtitle: "Build • Break • Improve",
    icon: BrainCircuit,
    color: "text-violet-200",
  },
  {
    number: "24/7",
    title: "Always Building",
    subtitle: "Learning Never Stops",
    icon: Rocket,
    color: "text-emerald-200",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f14] py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_55%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[45px_45px]" />

      <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            Portfolio Highlights
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Numbers That Tell My Story
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Every project represents practical experience in AWS, DevOps,
            Infrastructure Automation, CI/CD, and Cloud Engineering.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group relative"
              >
                {/* Glow */}

                <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />

                {/* Card */}

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-8 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/30">

                  {/* Top Glow */}

                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                  {/* Icon */}

                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <Icon className={`h-7 w-7 ${item.color}`} />
                  </div>

                  {/* Number */}

                  <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.2,
                      duration: 0.5,
                    }}
                    className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent"
                  >
                    {item.number}
                  </motion.h3>

                  {/* Title */}

                  <h4 className="mt-4 text-xl font-semibold text-white">
                    {item.title}
                  </h4>

                  {/* Subtitle */}

                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {item.subtitle}
                  </p>

                  {/* Bottom Accent */}

                  <div className="mt-8 h-0.5 w-0 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}