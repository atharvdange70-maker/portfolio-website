// Guarded require for Scene — some setups may report the file as "not a module".
// Fall back to a noop component if the module can't be imported.
declare const require: any;

export default function Hero() {
  return (
    <section>
      <div>

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