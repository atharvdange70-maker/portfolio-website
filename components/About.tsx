export default function About() {
  const highlights = [
    {
      title: "AWS Cloud",
      description:
        "Building scalable cloud infrastructure using EC2, S3, IAM, VPC, CloudFront, Route 53, and RDS.",
    },
    {
      title: "CI/CD Automation",
      description:
        "Automating application deployments using Jenkins, GitHub, and modern DevOps workflows.",
    },
    {
      title: "Docker & Kubernetes",
      description:
        "Containerizing applications and managing deployments using Docker and Kubernetes.",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Provisioning and managing cloud resources using Terraform for repeatable deployments.",
    },
    {
      title: "Cloud Security",
      description:
        "Applying IAM, Security Groups, VPC networking, and security best practices for AWS environments.",
    },
    {
      title: "Continuous Learning",
      description:
        "Building real-world DevOps projects while continuously improving cloud engineering skills.",
    },
  ];

  const skills = [
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Linux",
    "Git",
    "GitHub",
    "CloudFront",
    "EC2",
    "RDS",
    "IAM",
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </div>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
            Passionate About
            <span className="block text-cyan-400">
              Building Scalable Cloud Solutions
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-8">
            I'm a passionate <span className="text-cyan-400 font-semibold">AWS DevOps & Cloud Engineer</span>
            who enjoys building secure, scalable, and production-ready cloud
            infrastructure. I love automating deployments, creating CI/CD
            pipelines, and solving real-world infrastructure challenges through
            hands-on projects.
          </p>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            My experience includes AWS, Docker, Kubernetes, Terraform,
            Jenkins, Linux, Git, GitHub, Infrastructure as Code, and cloud
            networking. I continuously build projects to strengthen my
            practical DevOps skills.
          </p>

        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">

          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-500/20 bg-white/5 px-5 py-2 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              {skill}
            </span>
          ))}

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20">

          {highlights.map((item) => (

            <div
              key={item.title}
              className="group rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.20)]"
            >

              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-xl group-hover:bg-cyan-500 group-hover:text-slate-900 transition">

                {item.title.charAt(0)}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-4 leading-7 text-slate-400">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}