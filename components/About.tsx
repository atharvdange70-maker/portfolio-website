export default function About() {
  const values = [
    {
      title: "Cloud Engineering",
      description:
        "Building secure, scalable, and reliable cloud infrastructure on AWS with a focus on availability and best practices.",
      icon: "☁️",
    },
    {
      title: "Automation",
      description:
        "Reducing manual work by automating deployments, infrastructure provisioning, and development workflows.",
      icon: "⚙️",
    },
    {
      title: "Problem Solving",
      description:
        "Enjoy solving infrastructure and deployment challenges through practical, real-world cloud projects.",
      icon: "🛠️",
    },
    {
      title: "Continuous Growth",
      description:
        "Always learning new technologies and improving my engineering skills through hands-on DevOps projects.",
      icon: "📈",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          About Me
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Passionate About
          <span className="text-cyan-400"> Cloud & DevOps Engineering</span>
        </h2>

        {/* Description */}
        <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-300">

          <p>
            I'm a <span className="font-semibold text-cyan-400">BCA Graduate</span>
            {" "}with a strong interest in Cloud Computing and DevOps.
            I enjoy building secure, scalable, and production-inspired cloud
            environments while continuously improving my technical skills through
            practical projects.
          </p>

          <p>
            My journey has focused on designing AWS infrastructure,
            automating deployments, managing containerized applications,
            and implementing Infrastructure as Code. Every project I build
            helps me gain deeper experience with real-world DevOps practices.
          </p>

          <p>
            I'm currently seeking an opportunity as a
            <span className="font-semibold text-cyan-400">
              {" "}DevOps Engineer or AWS Cloud Engineer
            </span>
            {" "}where I can contribute, continue learning, and grow alongside an
            experienced engineering team.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 mt-20 md:grid-cols-2">

          {values.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-700 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-500/5 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Current Goal */}
        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10">

          <h3 className="text-3xl font-bold text-white">
            Current Goal
          </h3>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            I'm actively looking for opportunities as a
            <span className="font-semibold text-cyan-400">
              {" "}DevOps Engineer
            </span>
            {" "}or
            <span className="font-semibold text-cyan-400">
              {" "}AWS Cloud Engineer
            </span>
            {" "}where I can contribute to real-world cloud projects,
            collaborate with experienced professionals, and continue growing
            my expertise in cloud infrastructure and automation.
          </p>

        </div>

      </div>
    </section>
  );
}