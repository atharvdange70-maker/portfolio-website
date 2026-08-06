export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-linear-to-br from-slate-950 via-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="text-sky-400 font-medium tracking-widest uppercase mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Atharv Dange
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-300">
          AWS DevOps Engineer
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-8">
          Passionate about building secure, scalable cloud infrastructure
          using AWS, Docker, Kubernetes, Terraform, Jenkins, Linux,
          and CI/CD automation.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#projects"
            className="rounded-lg bg-sky-500 px-7 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-7 py-3 text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}