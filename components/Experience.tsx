export default function Experience() {
  const technologies = [
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "GitHub Actions",
    "Linux",
    "Git",
    "CI/CD",
  ];

  const responsibilities = [
    "Designed and deployed scalable AWS infrastructure using EC2, VPC, IAM, S3, Route 53, CloudFront, and Load Balancers.",
    "Built and maintained CI/CD pipelines using Jenkins, GitHub Actions, and Docker for automated deployments.",
    "Containerized web applications with Docker and deployed them in cloud environments.",
    "Provisioned cloud infrastructure using Terraform following Infrastructure as Code (IaC) best practices.",
    "Implemented Auto Scaling, Load Balancers, and monitoring to improve application availability and performance.",
    "Configured IAM roles, policies, and security controls to protect AWS resources.",
    "Troubleshot cloud infrastructure, networking, DNS, and deployment-related issues.",
    "Monitored AWS resources using CloudWatch and optimized performance, reliability, and cost.",
    "Deployed React applications using Amazon S3, CloudFront, Route 53, and AWS Certificate Manager.",
  ];

  return (
   <section
  id="experience"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional{" "}
            <span className="text-cyan-400">Experience</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Building scalable cloud infrastructure, automating deployments,
            and delivering secure cloud-native solutions using modern DevOps
            practices.
          </p>
        </div>

        {/* Experience Card */}
        <div className="rounded-3xl border border-slate-700 bg-slate-800/70 backdrop-blur-md p-8 md:p-10 shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                DevOps Intern
              </h3>

              <p className="text-lg text-white mt-2 font-medium">
                Hisan Labs Pvt Ltd
              </p>

              <p className="text-slate-400">
                Pune, Maharashtra, India
              </p>
            </div>

            <div className="self-start">
              <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-cyan-300 font-medium">
                Jan 2026 – Present
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8">
            <p className="text-slate-300 leading-8 text-lg">
              Working as a DevOps Intern with hands-on experience in AWS cloud,
              CI/CD automation, Infrastructure as Code, containerization, and
              cloud-native deployments. Contributing to scalable, secure, and
              highly available infrastructure while improving deployment speed,
              automation, and operational efficiency.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mt-10">
            <h4 className="text-2xl font-semibold mb-6 text-white">
              Key Responsibilities
            </h4>

            <ul className="space-y-4">
              {responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-slate-300"
                >
                  <span className="text-cyan-400 text-lg mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-10">
            <h4 className="text-2xl font-semibold mb-6">
              Technologies Used
            </h4>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/30 bg-slate-700 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}