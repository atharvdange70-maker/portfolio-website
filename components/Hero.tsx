export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-8">

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
        </div>

      </div>
    </section>
  );
}