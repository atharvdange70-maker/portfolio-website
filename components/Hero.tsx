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
            <div className="flex flex-wrap items-center gap-4">

  {/* View Projects */}
  <a
    href="#projects"
    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl
    border border-cyan-400/40 bg-cyan-400 px-6 py-3
    font-semibold text-black
    shadow-[0_0_20px_rgba(34,211,238,0.15)]
    transition-all duration-300
    hover:-translate-y-1
    hover:border-cyan-300
    hover:bg-cyan-300
    hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
  >
    <span>View Projects</span>

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>


  {/* Contact Me */}
  <a
    href="#contact"
    className="group inline-flex items-center gap-2 rounded-xl
    border border-white/15
    bg-white/4
    px-6 py-3
    font-semibold text-white/90
    backdrop-blur-md
    transition-all duration-300
    hover:-translate-y-1
    hover:border-cyan-400/50
    hover:bg-cyan-400/8
    hover:text-cyan-300
    hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
  >
    <span>Contact Me</span>

    <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  </a>


  {/* Open Terminal */}
  <a
    href="#terminal"
    className="group inline-flex items-center gap-3 rounded-xl
    border border-emerald-400/25
    bg-black/30
    px-6 py-3
    font-mono text-sm font-medium
    text-emerald-300
    backdrop-blur-md
    transition-all duration-300
    hover:-translate-y-1
    hover:border-emerald-400/60
    hover:bg-emerald-400/[0.07]
    hover:text-emerald-200
    hover:shadow-[0_0_25px_rgba(52,211,153,0.12)]"
  >
    <span className="text-emerald-400">
      &gt;_
    </span>

    <span>Open Terminal</span>

    <span className="h-2 w-2 rounded-full bg-emerald-400 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
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