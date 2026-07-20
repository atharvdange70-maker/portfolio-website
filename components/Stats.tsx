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
    number: "2+",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_55%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[45px_45px]" />

      <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs text-cyan-300">
            Portfolio Highlights
          </span>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400">
            Practical experience in AWS, DevOps, Infrastructure Automation,
            CI/CD, and Cloud Engineering.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-x-12 gap-y-10">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="group relative w-full max-w-53.75"
              >
                {/* Glow */}
                <div className="absolute -inset-px rounded-xl bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-500 group-hover:border-cyan-400/30">
                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Icon className={`h-5 w-5 ${item.color}`} />
                  </div>

                  {/* Number */}
                  <motion.h3
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
                      duration: 0.35,
                      delay: index * 0.08,
                    }}
                    className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent"
                  >
                    {item.number}
                  </motion.h3>

                  {/* Title */}
                  <h4 className="mt-2 text-base font-semibold text-white">
                    {item.title}
                  </h4>

                  {/* Subtitle */}
                  <p className="mt-2 text-xs text-gray-400">
                    {item.subtitle}
                  </p>

                  {/* Accent */}
                  <div className="mt-4 h-0.5 w-0 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}