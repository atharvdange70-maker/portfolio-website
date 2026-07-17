// Guarded require for Scene — some setups may report the file as "not a module".
// Fall back to a noop component if the module can't be imported.

declare const require: any;

let Scene: any = () => null;

try {
  const mod = require("./cloud/Scene");
  Scene = (mod && (mod.default || mod)) || Scene;
} catch (e) {
  // leave Scene as noop
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      <Scene />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
         <h1
  className="
    text-6xl
    md:text-8xl
    lg:text-9xl
    font-black
    uppercase
    tracking-wide
    bg-linear-to-b
    from-cyan-200
    via-cyan-400
    to-sky-700
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_30px_rgba(34,211,238,0.9)]
    animate-pulse
    mb-4
    select-none
    transition-all
    duration-500
    hover:scale-105
  "
  style={{
    textShadow:
      "0 2px 0 #155e75, 0 4px 0 #0e7490, 0 6px 0 #164e63, 0 10px 30px rgba(34,211,238,.8)",
  }}
>
  Atharv Dange
</h1>

          <h2 className="text-2xl md:text-3xl text-white mb-6">
            AWS DevOps & Cloud Engineer
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
      </div>
    </section>
  );
}