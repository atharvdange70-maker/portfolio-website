"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  ShieldCheck,
  Gauge,
  DollarSign,
  BookOpen,
  Cpu,
  GitBranch,
  Workflow,
  ChevronRight,
} from "lucide-react";



const technologies = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "Linux",
  "Git",
  "CI/CD",
  "Cloud",
  "DevOps",
];

const highlights = [
  {
    icon: Server,
    title: "High Availability",
    description:
      "Designing fault-tolerant cloud architectures using Load Balancers, Auto Scaling, and multi-tier deployments for maximum uptime.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Improving infrastructure performance through monitoring, resource optimization, and scalable cloud-native architectures.",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description:
      "Building efficient AWS solutions that balance reliability, scalability, and operational costs using cloud best practices.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Applying IAM least-privilege access, secure networking, VPC architecture, and infrastructure security best practices.",
  },
  {
    icon: Workflow,
    title: "DevOps Automation",
    description:
      "Automating software delivery through CI/CD pipelines using Jenkins, Docker, Kubernetes, and Infrastructure as Code.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Continuously improving cloud and DevOps expertise through hands-on AWS projects, real-world deployments, and modern technologies.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 py-28 px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
              {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold tracking-[0.25em] uppercase text-cyan-300 backdrop-blur-md">
            <Cloud className="h-4 w-4" />
            About Me
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Building Reliable
            <span className="block bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Cloud Infrastructure
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300">
            I am an aspiring{" "}
            <span className="font-semibold text-cyan-400">
              AWS DevOps Engineer
            </span>{" "}
            passionate about designing secure, scalable, and highly available
            cloud infrastructure. I enjoy building production-ready solutions,
            automating deployments, and simplifying complex workflows using
            modern DevOps practices.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            My hands-on experience includes{" "}
            <span className="font-semibold text-cyan-400">AWS</span>,{" "}
            <span className="font-semibold text-cyan-400">Docker</span>,{" "}
            <span className="font-semibold text-cyan-400">Kubernetes</span>,{" "}
            <span className="font-semibold text-cyan-400">Terraform</span>,{" "}
            <span className="font-semibold text-cyan-400">Jenkins</span>,{" "}
            <span className="font-semibold text-cyan-400">Linux</span>,{" "}
            <span className="font-semibold text-cyan-400">Git</span>, and{" "}
            <span className="font-semibold text-cyan-400">CI/CD</span>. I focus
            on building cloud-native systems that emphasize automation,
            performance, security, and operational excellence.
          </p>
        </motion.div>

        
        {/* Core Technologies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="mb-6 text-xl font-bold text-white">
            Core Technologies
          </h3>

          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="group flex items-center gap-2 rounded-full border border-cyan-500/20 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-300 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
              >
                <ChevronRight className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
                {/* DevOps Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            DevOps Workflow
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "Code",
              "Git",
              "Jenkins",
              "Docker",
              "Kubernetes",
              "AWS",
              "Monitor",
            ].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                  <span className="font-semibold text-cyan-300">{step}</span>
                </div>

                {index !== 6 && (
                  <GitBranch className="mx-3 h-5 w-5 text-cyan-400" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

       {/* Highlights */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-24"
>
  <div className="mb-10">
    <h3 className="text-3xl font-bold text-white">
      What I Focus On
    </h3>

    <p className="mt-3 max-w-3xl leading-8 text-slate-400">
      I enjoy building secure, automated, and scalable cloud
      infrastructure while following modern DevOps practices and AWS
      Well-Architected principles.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {highlights.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.12,
          }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.20)]"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 via-cyan-500/5 to-sky-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Icon */}
          <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Icon size={32} />
          </div>

          {/* Title */}
          <h4 className="relative z-10 text-xl font-bold text-white">
            {item.title}
          </h4>

          {/* Description */}
          <p className="relative z-10 mt-4 leading-8 text-slate-300">
            {item.description}
          </p>

          {/* Bottom line */}
          <div className="relative z-10 mt-8 h-1 w-12 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-24" />
        </motion.div>
      );
    })}
  </div>
</motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 via-slate-900/90 to-slate-900/90 p-10 backdrop-blur-xl">
            {/* Decorative Glow */}
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-3xl font-bold text-white">
                    Always Building. Always Learning.
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-300">
                    I enjoy solving real-world infrastructure challenges,
                    automating repetitive tasks, and creating reliable cloud
                    solutions using modern DevOps tools and AWS services.
                    Every project is an opportunity to improve my skills and
                    build scalable, secure, and production-ready systems.
                  </p>
                </div>

                <div className="shrink-0">
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-6 text-center backdrop-blur-xl">
                    <Cpu className="mx-auto mb-3 h-10 w-10 text-cyan-400" />

                    <p className="text-lg font-semibold text-white">
                      AWS • DevOps • Automation
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      Building cloud-native solutions for the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
        