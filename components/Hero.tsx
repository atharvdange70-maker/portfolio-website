
import {
  Download,
  GitBranch,
  Container,
  Cloud,
  Boxes,
  Terminal,
  Zap,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ========================================================= */}
      {/* HERO CONTENT                                               */}
      {/* ========================================================= */}

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto w-full px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ===================================================== */}
            {/* LEFT SIDE                                               */}
            {/* ===================================================== */}

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
              {/* HERO CONTROLS                                     */}
              {/* ================================================= */}

              <div className="flex flex-wrap items-center gap-3">

                {/* PROJECTS */}

                <a
                  href="#projects"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-lg
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
                  hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                >
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

                  <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-cyan-400/40" />
                </a>


                {/* RESUME */}

                <a
                  href="/My-DevOps-Resume.pdf"
                  download="My-DevOps-Resume.pdf"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-lg
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
                  hover:shadow-[0_0_24px_rgba(59,130,246,0.14)]"
                >
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

                  <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-blue-400/40" />
                </a>


                {/* CONTACT */}

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

                  <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-violet-400/30" />
                </a>


                {/* TERMINAL */}

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

                  <span className="ml-1 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

                    <span className="text-[8px] uppercase tracking-wider text-emerald-400/50">
                      Ready
                    </span>
                  </span>

                  <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-emerald-400/40" />
                </a>

              </div>

            </div>


            {/* ===================================================== */}
            {/* RIGHT SIDE - 3D DEVOPS DEPLOYMENT ENGINE              */}
            {/* ===================================================== */}

            <div className="relative flex justify-center lg:justify-end">

              {/* Main 3D Perspective */}

              <div className="relative w-full max-w-lg h-125 perspective-distant">

                {/* Outer Glow */}

                <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

                {/* ================================================= */}
                {/* ORBIT RINGS                                       */}
                {/* ================================================= */}

                <div
                  className="absolute left-1/2 top-1/2
                  h-90 w-90
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full
                  border border-cyan-400/10
                  rotate-12
                  transform-3d
                  animate-[spin_18s_linear_infinite]"
                />

                <div
                  className="absolute left-1/2 top-1/2
                  h-72.5 w-72.5
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full
                  border border-blue-400/10
                  -rotate-12
                  transform-3d
                  animate-[spin_12s_linear_infinite_reverse]"
                />

                <div
                  className="absolute left-1/2 top-1/2
                  h-55 w-55
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full
                  border border-violet-400/10
                  animate-[spin_8s_linear_infinite]"
                />


                {/* ================================================= */}
                {/* CENTRAL DEPLOYMENT CORE                            */}
                {/* ================================================= */}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                  {/* Glow */}

                  <div className="absolute -inset-12 rounded-full bg-cyan-400/10 blur-3xl" />

                  {/* Core */}

                  <div
                    className="relative h-36 w-36 rounded-full
                    border border-cyan-400/30
                    bg-[#06131f]/90
                    backdrop-blur-xl
                    shadow-[0_0_60px_rgba(34,211,238,0.18)]
                    flex items-center justify-center
                    transform-[rotateX(15deg)]"
                  >

                    <div className="absolute inset-4 rounded-full border border-cyan-400/20" />

                    <div className="absolute inset-8 rounded-full border border-cyan-400/20" />

                    <div className="relative flex flex-col items-center">

                      <Zap
                        size={30}
                        className="text-cyan-400 mb-2"
                      />

                      <span className="text-[10px] font-mono tracking-[0.2em] text-cyan-300">
                        DEPLOY
                      </span>

                      <span className="mt-1 text-[8px] font-mono text-gray-500">
                        ENGINE
                      </span>

                    </div>

                  </div>

                </div>


                {/* ================================================= */}
                {/* NODE 1 - GIT                                     */}
                {/* ================================================= */}

                <div className="absolute left-2 top-20">

                  <div className="group flex items-center gap-3 rounded-xl border border-orange-400/20 bg-[#07131b]/80 px-4 py-3 backdrop-blur-md shadow-[0_0_30px_rgba(251,146,60,0.06)]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400/10 border border-orange-400/20">
                      <GitBranch size={20} className="text-orange-400" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Git
                      </p>

                      <p className="text-[9px] font-mono text-orange-400/60">
                        SOURCE CODE
                      </p>
                    </div>

                  </div>

                </div>


                {/* ================================================= */}
                {/* NODE 2 - CI/CD                                    */}
                {/* ================================================= */}

                <div className="absolute right-2 top-20">

                  <div className="flex items-center gap-3 rounded-xl border border-yellow-400/20 bg-[#07131b]/80 px-4 py-3 backdrop-blur-md shadow-[0_0_30px_rgba(250,204,21,0.06)]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                      <Activity size={20} className="text-yellow-400" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        CI / CD
                      </p>

                      <p className="text-[9px] font-mono text-yellow-400/60">
                        AUTOMATION
                      </p>
                    </div>

                  </div>

                </div>


                {/* ================================================= */}
                {/* NODE 3 - DOCKER                                   */}
                {/* ================================================= */}

                <div className="absolute left-0 bottom-28">

                  <div className="flex items-center gap-3 rounded-xl border border-blue-400/20 bg-[#07131b]/80 px-4 py-3 backdrop-blur-md shadow-[0_0_30px_rgba(96,165,250,0.06)]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400/10 border border-blue-400/20">
                      <Container size={20} className="text-blue-400" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Docker
                      </p>

                      <p className="text-[9px] font-mono text-blue-400/60">
                        CONTAINER
                      </p>
                    </div>

                  </div>

                </div>


                {/* ================================================= */}
                {/* NODE 4 - KUBERNETES                               */}
                {/* ================================================= */}

                <div className="absolute right-0 bottom-28">

                  <div className="flex items-center gap-3 rounded-xl border border-violet-400/20 bg-[#07131b]/80 px-4 py-3 backdrop-blur-md shadow-[0_0_30px_rgba(167,139,250,0.06)]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-400/10 border border-violet-400/20">
                      <Boxes size={20} className="text-violet-400" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Kubernetes
                      </p>

                      <p className="text-[9px] font-mono text-violet-400/60">
                        ORCHESTRATION
                      </p>
                    </div>

                  </div>

                </div>


                {/* ================================================= */}
                {/* AWS NODE                                           */}
                {/* ================================================= */}

                <div className="absolute left-1/2 bottom-2 -translate-x-1/2">

                  <div className="flex items-center gap-3 rounded-xl border border-cyan-400/25 bg-[#07131b]/90 px-5 py-3 backdrop-blur-md shadow-[0_0_35px_rgba(34,211,238,0.08)]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20">

                      <Cloud
                        size={20}
                        className="text-cyan-400"
                      />

                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        AWS Cloud
                      </p>

                      <p className="text-[9px] font-mono text-cyan-400/60">
                        PRODUCTION
                      </p>
                    </div>

                    <span className="ml-2 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  </div>

                </div>


                {/* ================================================= */}
                {/* DEPLOYMENT STATUS                                   */}
                {/* ================================================= */}

                <div className="absolute top-1/2 -right-2.5 translate-y-[-50%]">

                  <div className="rounded-lg border border-emerald-400/20 bg-[#06140f]/80 px-3 py-2 backdrop-blur-md">

                    <div className="flex items-center gap-2">

                      <ShieldCheck
                        size={14}
                        className="text-emerald-400"
                      />

                      <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-300">
                        Production Ready
                      </span>

                    </div>

                  </div>

                </div>


                {/* ================================================= */}
                {/* TERMINAL STATUS                                    */}
                {/* ================================================= */}

                <div className="absolute left-1/2 top-2 -translate-x-1/2">

                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">

                    <Terminal
                      size={13}
                      className="text-gray-500"
                    />

                    <span className="font-mono text-[9px] text-gray-400">
                      pipeline.status
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />

                    <span className="font-mono text-[9px] text-emerald-400">
                      ACTIVE
                    </span>

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