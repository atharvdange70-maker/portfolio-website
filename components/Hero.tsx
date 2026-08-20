// Guarded require for Scene — some setups may report the file as "not a module".
// Fall back to a noop component if the module can't be imported.

declare const require: any;

import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen"
    >

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto w-full px-8">

          {/* Two Column Hero Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ================================================= */}
            {/* LEFT SIDE - HERO CONTENT                         */}
            {/* ================================================= */}

            <div className="max-w-2xl">

              <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4">
                Atharv Dange
              </h1>

              <h2 className="text-2xl md:text-3xl text-white mb-6">
                DevOps Engineer | AWS Cloud Engineer
              </h2>

              <p className="text-gray-300 text-lg max-w-xl mb-8">
                Building scalable cloud infrastructure with automated DevOps
                workflows.
              </p>


              {/* ================================================= */}
              {/* BUTTONS                                         */}
              {/* ================================================= */}

              <div className="flex gap-4">

                <div className="flex flex-wrap items-center gap-3">


                  {/* ================================================= */}
                  {/* PROJECTS CONTROL                                  */}
                  {/* ================================================= */}

                  <a
                    href="#projects"
                    className="
                      group relative flex items-center gap-3 overflow-hidden rounded-lg
                      border border-cyan-400/25
                      bg-[#07131b]/80
                      px-4 py-2.5
                      font-mono text-sm
                      text-cyan-300
                      backdrop-blur-md
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-cyan-400/60
                      hover:bg-cyan-400/[0.07]
                      hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]
                    "
                  >

                    {/* Status indicator */}
                    <span className="relative flex h-2 w-2">

                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />

                    </span>


                    <span className="flex flex-col leading-none">

                      <span className="text-[9px] uppercase tracking-[0.2em] text-cyan-500/60">
                        Deployments
                      </span>

                      <span className="mt-1 font-semibold text-cyan-200">
                        View Projects
                      </span>

                    </span>


                    <span className="ml-1 text-cyan-500/70 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>


                    {/* Corner detail */}
                    <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-cyan-400/40" />

                  </a>


                  {/* ================================================= */}
                  {/* RESUME DOWNLOAD CONTROL                           */}
                  {/* ================================================= */}

                  <a
                    href="/My-DevOps-Resume.pdf"
                    download="My-DevOps-Resume.pdf"
                    className="
                      group relative flex items-center gap-3 overflow-hidden rounded-lg
                      border border-blue-400/25
                      bg-[#07111c]/80
                      px-4 py-2.5
                      font-mono text-sm
                      text-blue-300
                      backdrop-blur-md
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-blue-400/60
                      hover:bg-blue-400/[0.07]
                      hover:shadow-[0_0_24px_rgba(59,130,246,0.14)]
                    "
                  >

                    {/* Download icon */}
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-blue-400/20 bg-blue-400/5">

                      <Download
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-y-0.5"
                      />

                    </span>


                    <span className="flex flex-col leading-none">

                      <span className="text-[9px] uppercase tracking-[0.2em] text-blue-400/60">
                        Document
                      </span>

                      <span className="mt-1 font-semibold text-blue-200">
                        Download Resume
                      </span>

                    </span>


                    <span className="ml-1 text-blue-400/70 transition-transform duration-300 group-hover:translate-y-0.5">
                      ↓
                    </span>


                    {/* Corner detail */}
                    <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-blue-400/40" />

                  </a>


                  {/* ================================================= */}
                  {/* CONTACT CONTROL                                   */}
                  {/* ================================================= */}

                  <a
                    href="#contact"
                    className="
                      group relative flex items-center gap-3 overflow-hidden rounded-lg
                      border border-violet-400/20
                      bg-[#0b0a16]/80
                      px-4 py-2.5
                      font-mono text-sm
                      text-violet-300
                      backdrop-blur-md
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-violet-400/50
                      hover:bg-violet-400/6
                      hover:shadow-[0_0_24px_rgba(167,139,250,0.10)]
                    "
                  >

                    {/* Status indicator */}
                    <span className="relative flex h-2 w-2">

                      <span className="absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-20" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />

                    </span>


                    <span className="flex flex-col leading-none">

                      <span className="text-[9px] uppercase tracking-[0.2em] text-violet-400/50">
                        Network
                      </span>

                      <span className="mt-1 font-semibold text-violet-200">
                        Contact Me
                      </span>

                    </span>


                    <span className="ml-1 text-violet-400/70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      ↗
                    </span>


                    {/* Corner detail */}
                    <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-violet-400/30" />

                  </a>


                  {/* ================================================= */}
                  {/* TERMINAL CONTROL                                  */}
                  {/* ================================================= */}

                  <a
                    href="#terminal"
                    className="
                      group relative flex items-center gap-3 overflow-hidden rounded-lg
                      border border-emerald-400/25
                      bg-[#07140f]/80
                      px-4 py-2.5
                      font-mono text-sm
                      text-emerald-300
                      backdrop-blur-md
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-emerald-400/60
                      hover:bg-emerald-400/6
                      hover:shadow-[0_0_24px_rgba(52,211,153,0.12)]
                    "
                  >

                    {/* Terminal icon */}
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-emerald-400/20 bg-emerald-400/5 text-xs text-emerald-400">
                      &gt;_
                    </span>


                    <span className="flex flex-col leading-none">

                      <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-400/50">
                        Shell Access
                      </span>

                      <span className="mt-1 font-semibold text-emerald-200">
                        Open Terminal
                      </span>

                    </span>


                    {/* Online indicator */}
                    <span className="ml-1 flex items-center gap-1.5">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

                      <span className="text-[8px] uppercase tracking-wider text-emerald-400/50">
                        Ready
                      </span>

                    </span>


                    {/* Corner detail */}
                    <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-emerald-400/40" />

                  </a>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* RIGHT SIDE - CLOUD & DEVOPS CARD                  */}
            {/* ================================================= */}

            <div className="flex justify-center lg:justify-end">

              <div className="relative w-full max-w-md">

                {/* Background Glow */}
                <div className="absolute -inset-1 rounded-3xl bg-cyan-400/20 blur-2xl" />


                {/* Main Card */}
                <div className="relative rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-8 shadow-2xl backdrop-blur-xl">


                  {/* ================================================= */}
                  {/* CARD HEADER                                      */}
                  {/* ================================================= */}

                  <div className="mb-8 flex items-center justify-between">

                    <div>

                      <p className="text-sm font-semibold tracking-widest text-cyan-400">
                        CLOUD & DEVOPS
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        Infrastructure
                      </h3>

                    </div>


                    {/* Cloud Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-2xl">
                      ☁️
                    </div>

                  </div>


                  {/* ================================================= */}
                  {/* SKILLS GRID                                     */}
                  {/* ================================================= */}

                  <div className="grid grid-cols-2 gap-4">


                    {/* AWS */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/5">

                      <div className="mb-2 text-2xl">
                        ☁️
                      </div>

                      <p className="font-semibold text-white">
                        AWS
                      </p>

                      <p className="text-sm text-gray-400">
                        Cloud
                      </p>

                    </div>


                    {/* Docker */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/5">

                      <div className="mb-2 text-2xl">
                        🐳
                      </div>

                      <p className="font-semibold text-white">
                        Docker
                      </p>

                      <p className="text-sm text-gray-400">
                        Containers
                      </p>

                    </div>


                    {/* Kubernetes */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/5">

                      <div className="mb-2 text-2xl">
                        ☸️
                      </div>

                      <p className="font-semibold text-white">
                        Kubernetes
                      </p>

                      <p className="text-sm text-gray-400">
                        Orchestration
                      </p>

                    </div>


                    {/* Terraform */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/40 hover:bg-cyan-400/5">

                      <div className="mb-2 text-2xl">
                        🏗️
                      </div>

                      <p className="font-semibold text-white">
                        Terraform
                      </p>

                      <p className="text-sm text-gray-400">
                        Infrastructure
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}