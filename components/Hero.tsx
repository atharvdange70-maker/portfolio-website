"use client";

import {
  ArrowRight,
  Download,
  Link,
  Mail,
  Cloud,
  Container,
  Workflow,
  Server,
} from "lucide-react";

const tech = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Jenkins",
  "Linux",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-cyan-300">
            🚀 Open to DevOps & Cloud Opportunities
          </div>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white md:text-7xl">
            Atharv
            <br />
            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Dange
            </span>
          </h1>

          <h2 className="mt-6 text-3xl font-semibold text-gray-200">
            DevOps Engineer
            <span className="mx-3 text-cyan-400">|</span>
            AWS Cloud Engineer
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Building scalable cloud infrastructure, automating deployments,
            implementing CI/CD pipelines, and delivering production-ready
            applications using AWS and modern DevOps tools.
          </p>

          {/* Skills */}

          <div className="mt-8 flex flex-wrap gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 px-7 py-4 font-semibold text-white transition hover:scale-105"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="/Atharv_Dange_Resume.pdf"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-7 py-4 text-white transition hover:border-cyan-400 hover:bg-white/5"
            >
              <Download size={18} />
              Resume
            </a>

          </div>

          {/* Social */}

          <div className="mt-10 flex gap-5">

            
            <a
              href="https://linkedin.com"
              className="rounded-full border border-white/10 p-4 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Link size={22} />
            </a>

            <a
              href="mailto:atharvdange70@gmail.com"
              className="rounded-full border border-white/10 p-4 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Mail size={22} />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">

          <div className="relative h-130 w-130">

            {/* Center */}

            <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-[#08101f] shadow-[0_0_50px_rgba(34,211,238,0.25)]">

              <Cloud size={55} className="text-cyan-400" />

            </div>

            {/* Top */}

            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b1120] p-5">

              <Server className="mx-auto text-cyan-400" />
              <p className="mt-2 text-center text-white">AWS</p>

            </div>

            {/* Left */}

            <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-[#0b1120] p-5">

              <Container className="mx-auto text-cyan-400" />
              <p className="mt-2 text-center text-white">Docker</p>

            </div>

            {/* Right */}

            <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-[#0b1120] p-5">

              <Workflow className="mx-auto text-cyan-400" />
              <p className="mt-2 text-center text-white">CI/CD</p>

            </div>

            {/* Bottom */}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0b1120] p-5">

              <Cloud className="mx-auto text-cyan-400" />
              <p className="mt-2 text-center text-white">Kubernetes</p>

            </div>

            {/* Connection Lines */}

            <div className="absolute left-1/2 top-20 h-32 w-0.5 -translate-x-1/2 bg-cyan-500/40" />
            <div className="absolute left-20 top-1/2 h-0.5 w-32 -translate-y-1/2 bg-cyan-500/40" />
            <div className="absolute right-20 top-1/2 h-0.5 w-32 -translate-y-1/2 bg-cyan-500/40" />
            <div className="absolute bottom-20 left-1/2 h-32 w-0.5 -translate-x-1/2 bg-cyan-500/40" />

          </div>

        </div>

      </div>

    </section>
  );
}