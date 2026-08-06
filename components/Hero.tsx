"use client";

import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
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
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm">
              🚀 Open to DevOps & Cloud Opportunities
            </div>

            {/* Name */}

            <h1 className="mt-8 text-6xl md:text-8xl font-black leading-none">

              <span className="text-white">
                Atharv
              </span>

              <br />

              <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Dange
              </span>

            </h1>

            {/* Role */}

            <h2 className="mt-7 text-2xl md:text-4xl font-semibold text-gray-200">
              DevOps Engineer
              <span className="mx-3 text-cyan-400">|</span>
              AWS Cloud Engineer
            </h2>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Passionate DevOps Engineer with hands-on experience in AWS Cloud,
              Docker, Kubernetes, Terraform, Jenkins, Linux and CI/CD
              automation. I build secure, scalable and production-ready cloud
              infrastructure using Infrastructure as Code and modern DevOps
              practices.
            </p>

            {/* Skills */}

            <div className="mt-8 flex flex-wrap gap-3">

              {tech.map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
                >
                  {item}
                </span>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:scale-105"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/certificates/Atharv_Dange_Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
              >
                <Download size={18} />
                Resume
              </a>

            </div>

            {/* Social */}

            <div className="mt-10 flex gap-4">

             
              <a
                href="mailto:atharvdange70@gmail.com"
                className="rounded-full border border-white/10 p-4 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Mail size={22} />
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-md p-8">

                <h3 className="mb-8 text-center text-2xl font-bold text-white">
                  DevOps Workflow
                </h3>

                <div className="grid grid-cols-2 gap-4">

                  {[
                    "AWS Cloud",
                    "Docker",
                    "Kubernetes",
                    "Terraform",
                    "Jenkins",
                    "Linux",
                    "Git",
                    "CI/CD",
                  ].map((item) => (

                    <div
                      key={item}
                      className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-6 py-5 text-center text-cyan-300 font-medium transition hover:scale-105 hover:bg-cyan-500/20"
                    >
                      {item}
                    </div>

                  ))}

                </div>

                <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/10 p-5 text-center">

                  <h4 className="text-lg font-semibold text-green-300">
                    Production Ready
                  </h4>

                  <p className="mt-2 text-sm text-gray-400">
                    Infrastructure as Code • Automation • CI/CD • Cloud
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}