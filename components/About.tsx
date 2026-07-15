export default function About() {
  const highlights = [
    {
      title: "Cloud Infrastructure",
      description:
        "Building scalable, secure, and highly available AWS cloud architectures.",
      icon: "☁️",
    },
    {
      title: "DevOps Automation",
      description:
        "Automating application delivery with CI/CD pipelines using Jenkins and GitHub.",
      icon: "⚙️",
    },
    {
      title: "Containers",
      description:
        "Deploying containerized applications using Docker and Kubernetes.",
      icon: "📦",
    },
    {
      title: "Security",
      description:
        "Implementing IAM, VPC, Security Groups, and cloud security best practices.",
      icon: "🔒",
    },
    {
      title: "Performance",
      description:
        "Designing reliable systems focused on scalability, monitoring, and availability.",
      icon: "🚀",
    },
    {
      title: "Continuous Learning",
      description:
        "Continuously improving my cloud and DevOps skills through real-world projects.",
      icon: "📚",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 font-semibold text-sm tracking-widest uppercase">
          About Me
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
          Building Reliable
          <span className="text-cyan-400"> Cloud Infrastructure</span>
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-4xl text-lg text-slate-300 leading-8">
          I'm a passionate <span className="text-cyan-400 font-semibold">DevOps & Cloud Engineer</span>
          focused on designing scalable, secure, and production-ready cloud
          infrastructure on AWS. I enjoy automating deployments, building
          CI/CD pipelines, and creating reliable systems using modern DevOps
          practices.
        </p>

        <p className="mt-6 max-w-4xl text-lg text-slate-300 leading-8">
          My hands-on experience includes AWS, Docker, Kubernetes, Terraform,
          Jenkins, Linux, Git, GitHub, and Infrastructure as Code. I'm
          continuously building real-world projects to strengthen my cloud
          engineering skills.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 text-center hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">15+</h3>
            <p className="mt-2 text-slate-300">AWS Services</p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 text-center hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">8+</h3>
            <p className="mt-2 text-slate-300">DevOps Tools</p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 text-center hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
            <p className="mt-2 text-slate-300">Cloud Projects</p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-6 text-center hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300">
            <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
            <p className="mt-2 text-slate-300">Hands-on Learning</p>
          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-md p-8 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-300 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}