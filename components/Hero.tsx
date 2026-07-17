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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <Scene />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-8 text-center">
        <h1 className="mb-4 text-5xl font-bold text-sky-400 md:text-7xl">
          Atharv Dange
        </h1>

        <h2 className="mb-6 text-2xl text-white md:text-3xl">
          AWS DevOps & Cloud Engineer
        </h2>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-gray-300">
          Building scalable cloud infrastructure with automated DevOps
          workflows. Passionate about AWS, Docker, Kubernetes, Terraform,
          Linux, CI/CD, and designing secure, production-ready cloud solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-8 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_#22D3EE]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-cyan-400 px-8 py-3 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_#22D3EE]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}