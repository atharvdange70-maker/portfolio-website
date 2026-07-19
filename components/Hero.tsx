export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4">
            Atharv Dange
          </h1>

          <h2 className="text-2xl md:text-3xl text-white mb-6">
            AWS DevOps & Cloud Engineer
          </h2>

          <p className="text-gray-300 text-lg max-w-xl mb-8">
            Building scalable cloud infrastructure and automating software
            delivery through modern DevOps practices.
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
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}