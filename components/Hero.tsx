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

                <a
                  href="#projects"
                  className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:scale-105 transition"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 border border-sky-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                >
                  Contact Me
                </a>

                 <a
                  href="#terminal"
                  className="px-6 py-3 border border-sky-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                >
                  Open Terminal
                </a>

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