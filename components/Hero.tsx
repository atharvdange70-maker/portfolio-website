export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-transparent">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="max-w-3xl">

          <p className="text-cyan-400 font-medium tracking-widest uppercase mb-3">
            AWS • DevOps • Cloud Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="text-white">Atharv</span>{" "}
            <span className="text-cyan-400">Dange</span>
          </h1>

          <h2 className="mt-6 text-xl md:text-3xl text-gray-300">
            Building scalable cloud infrastructure with AWS, Docker,
            Kubernetes, Terraform and CI/CD Automation.
          </h2>

          <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-8">
            Passionate DevOps Engineer focused on Infrastructure as Code,
            containerization, cloud automation, monitoring, and deploying
            production-ready applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-cyan-400 px-7 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}