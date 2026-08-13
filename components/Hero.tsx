// Guarded require for Scene — some setups may report the file as "not a module".
// Fall back to a noop component if the module can't be imported.

declare const require: any;

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
            {/* LEFT SIDE - EXISTING HERO CONTENT                 */}
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

              <div className="flex gap-4">
            <div className="flex flex-wrap items-center gap-3">

  {/* PROJECTS CONTROL */}
  <a
  href="#projects"
  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg
  border border-cyan-400/40
  bg-linear-to-r from-cyan-400/12 to-sky-400/4
  px-5 py-3
  font-mono
  backdrop-blur-md
  transition-all duration-300
  hover:-translate-y-1
  hover:border-cyan-300
  hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
>
  {/* Animated scan line */}
  <span
    className="absolute inset-y-0 -left-full w-1/2
    bg-linear-to-r from-transparent via-cyan-300/10 to-transparent
    transition-all duration-700
    group-hover:left-[120%]"
  />

  {/* Deployment icon */}
  <span
    className="relative flex h-8 w-8 items-center justify-center
    rounded-md border border-cyan-400/30
    bg-cyan-400/8
    text-cyan-300
    transition-all duration-300
    group-hover:border-cyan-300/60
    group-hover:bg-cyan-400/15"
  >
    <span className="text-sm">⌁</span>
  </span>

  {/* Text */}
  <span className="relative flex flex-col text-left leading-none">
    <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-cyan-400/55">
      Explore
    </span>

    <span className="mt-1 text-sm font-semibold tracking-wide text-white">
      View Projects
    </span>
  </span>

  {/* Live status */}
  <span className="relative ml-2 flex items-center gap-1.5 border-l border-white/10 pl-3">
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
    </span>

    <span className="text-[8px] font-medium uppercase tracking-wider text-cyan-400/60">
      Live
    </span>
  </span>

  {/* Arrow */}
  <span
    className="relative ml-1 text-cyan-300 transition-transform duration-300
    group-hover:translate-x-1"
  >
    →
  </span>

  {/* Technical corner markers */}
  <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-cyan-300/60" />
  <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-cyan-300/40" />
</a>

  {/* CONTACT CONTROL */}
  <a
    href="#contact"
    className="group relative flex items-center gap-3 overflow-hidden rounded-lg
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
    hover:shadow-[0_0_24px_rgba(167,139,250,0.10)]"
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


  {/* TERMINAL CONTROL */}
  <a
    href="#terminal"
    className="group relative flex items-center gap-3 overflow-hidden rounded-lg
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
    hover:shadow-[0_0_24px_rgba(52,211,153,0.12)]"
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
            {/* RIGHT SIDE - CLOUD & DEVOPS CARD                   */}
            {/* ================================================= */}

            <div className="flex justify-center lg:justify-end">

              <div className="relative w-full max-w-md">

                {/* Background Glow */}
                <div className="absolute -inset-1 bg-cyan-400/20 rounded-3xl blur-2xl" />

                {/* Main Card */}
                <div className="relative rounded-3xl border border-cyan-400/20 bg-slate-950/70 backdrop-blur-xl p-8 shadow-2xl">

                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">

                    <div>
                      <p className="text-cyan-400 text-sm font-semibold tracking-widest">
                        CLOUD & DEVOPS
                      </p>

                      <h3 className="text-2xl font-bold text-white mt-2">
                        Infrastructure
                      </h3>
                    </div>

                    {/* Cloud Icon */}
                    <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-2xl">
                      ☁️
                    </div>

                  </div>


                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-4">

                    {/* AWS */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition">

                      <div className="text-2xl mb-2">
                        ☁️
                      </div>

                      <p className="text-white font-semibold">
                        AWS
                      </p>

                      <p className="text-gray-400 text-sm">
                        Cloud
                      </p>

                    </div>


                    {/* Docker */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition">

                      <div className="text-2xl mb-2">
                        🐳
                      </div>

                      <p className="text-white font-semibold">
                        Docker
                      </p>

                      <p className="text-gray-400 text-sm">
                        Containers
                      </p>

                    </div>


                    {/* Kubernetes */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition">

                      <div className="text-2xl mb-2">
                        ☸️
                      </div>

                      <p className="text-white font-semibold">
                        Kubernetes
                      </p>

                      <p className="text-gray-400 text-sm">
                        Orchestration
                      </p>

                    </div>


                    {/* Terraform */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition">

                      <div className="text-2xl mb-2">
                        🏗️
                      </div>

                      <p className="text-white font-semibold">
                        Terraform
                      </p>

                      <p className="text-gray-400 text-sm">
                        Infrastructure
                      </p>

                    </div>

                  </div>


                  {/* Bottom Section */}
                  <div className="mt-6 pt-6 border-t border-white/10">

                    <p className="text-gray-400 text-sm mb-3">
                      Focus Areas
                    </p>

                    <div className="flex flex-wrap gap-2">

                      <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs">
                        CI/CD
                      </span>

                      <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs">
                        Automation
                      </span>

                      <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs">
                        Linux
                      </span>

                      <span className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs">
                        Cloud Infrastructure
                      </span>

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