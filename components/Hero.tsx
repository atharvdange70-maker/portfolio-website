export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">

        <div className="max-w-4xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm">
            🚀 Open to DevOps, Cloud & Platform Engineering Opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Atharv Dange
            </span>
          </h1>

          {/* Role */}
          <h2 className="mt-6 text-2xl font-semibold text-gray-200 md:text-4xl">
            DevOps Engineer • AWS Cloud Engineer
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            I build secure, scalable, and production-ready cloud infrastructure
            using <span className="text-cyan-300">AWS</span>,
            <span className="text-cyan-300"> Docker</span>,
            <span className="text-cyan-300"> Kubernetes</span>,
            <span className="text-cyan-300"> Terraform</span>,
            <span className="text-cyan-300"> Jenkins</span>, and
            <span className="text-cyan-300"> Linux</span>. Passionate about
            Infrastructure as Code, CI/CD automation, containerization, and
            deploying highly available applications following DevOps best
            practices.
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "AWS",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Jenkins",
              "Linux",
              "Git",
              "GitHub Actions",
              "CI/CD",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-cyan-400 px-7 py-3 font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </a>

            <a
              href="/Atharv_Dange_Resume.pdf"
              target="_blank"
              className="rounded-lg border border-white/20 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-300"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}