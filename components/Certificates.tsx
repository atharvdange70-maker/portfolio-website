import {
  Award,
  CalendarDays,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";

const certificates = [
  {
    title: "Cyber Security Audits",
    issuer: "Training Certification",
    date: "August 2024",
    description:
      "Covered security auditing, risk assessment, compliance, vulnerability identification, and cybersecurity best practices.",
    link: "/certificates/cyber-security-audit.pdf",
  },
  {
    title: "AWS Developer Associate: Optimizing AWS",
    issuer: "AWS Training",
    date: "June 2026",
    description:
      "Learned AWS optimization techniques, performance improvement, scalability, and cloud best practices.",
    link: "/certificates/aws-optimizing-certificate.pdf.pdf",
  },
  {
    title: "Introduction to Kubernetes",
    issuer: "Simplilearn",
    date: "July 2026",
    description:
      "Learned Kubernetes architecture, Pods, Deployments, Services, Namespaces, and container orchestration fundamentals.",
    link: "/certificates/simplilearn-kubernetes-certificate.pdf",
  },
];

export default function Certificates() {
  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional{" "}
            <span className="text-cyan-400">
              Certifications
            </span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-lg">
            Industry-recognized certifications demonstrating my knowledge in
            AWS Cloud, Kubernetes, DevOps, and Cyber Security.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition">
                <Award
                  size={28}
                  className="text-cyan-400"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold leading-snug mb-4">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-cyan-400 font-medium">
                {cert.issuer}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-gray-400 mt-3 mb-5">
                <CalendarDays size={17} />
                <span>{cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-7 mb-6">
                {cert.description}
              </p>

              {/* Verified */}
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2 text-green-400 text-sm font-medium mb-7">
                <BadgeCheck size={17} />
                Verified Certificate
              </div>

              {/* Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 hover:scale-[1.02]"
              >
                View Certificate
                <ExternalLink size={18} />
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}