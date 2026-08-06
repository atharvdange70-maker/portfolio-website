"use client";

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
    color: "text-cyan-400",
  },
  {
    number: "2+",
    title: "DevOps Projects",
    subtitle: "Production Ready",
    icon: FolderGit2,
    color: "text-blue-400",
  },
  {
    number: "100%",
    title: "Hands-On Learning",
    subtitle: "Build • Break • Improve",
    icon: BrainCircuit,
    color: "text-violet-400",
  },
  {
    number: "24/7",
    title: "Always Building",
    subtitle: "Learning Never Stops",
    icon: Rocket,
    color: "text-green-400",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="relative py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-14 text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            Portfolio Highlights
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            At a Glance
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Practical experience in AWS Cloud, DevOps, Infrastructure
            Automation, CI/CD Pipelines and Cloud Engineering.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0B1120] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">

                  <Icon className={`h-6 w-6 ${item.color}`} />

                </div>

                <h3 className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  {item.subtitle}
                </p>

                <div className="mt-5 h-0.5 rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}