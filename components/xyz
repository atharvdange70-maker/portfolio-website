import {
  ShieldCheck,
  Cloud,
  Boxes,
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
    icon: ShieldCheck,
    accent: "green",
    tag: "Cyber Security",
    skills: ["Auditing", "Risk", "Compliance", "Security"],
  },
  {
    title: "AWS Developer Associate: Optimizing AWS",
    issuer: "AWS Training",
    date: "June 2026",
    description:
      "Learned AWS optimization, scalability, monitoring, cloud architecture, and performance best practices.",
    link: "/certificates/aws-optimizing-certificate.pdf.pdf",
    icon: Cloud,
    accent: "orange",
    tag: "AWS Cloud",
    skills: ["EC2", "IAM", "CloudWatch", "Optimization"],
  },
  {
    title: "Introduction to Kubernetes",
    issuer: "Simplilearn",
    date: "July 2026",
    description:
      "Learned Kubernetes architecture, Pods, Deployments, Services, Namespaces, and container orchestration fundamentals.",
    link: "/certificates/simplilearn-kubernetes-certificate.pdf",
    icon: Boxes,
    accent: "blue",
    tag: "Kubernetes",
    skills: ["Pods", "Services", "Deployments", "Namespaces"],
  },
];

const accentStyles: Record<string, { border: string; glow: string; iconBg: string; iconColor: string; tag: string; top: string; button: string }> = {
  orange: {
    border: "hover:border-orange-400",
    glow: "hover:shadow-[0_0_40px_rgba(251,146,60,0.35)]",
    iconBg: "from-orange-500/20 to-orange-400/10",
    iconColor: "text-orange-400",
    tag: "bg-orange-500/10 text-orange-300 border-orange-400/20",
    top: "from-orange-500 via-orange-300 to-transparent",
    button: "bg-orange-400 hover:bg-orange-300 text-black",
  },
  blue: {
    border: "hover:border-sky-400",
    glow: "hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]",
    iconBg: "from-sky-500/20 to-sky-400/10",
    iconColor: "text-sky-400",
    tag: "bg-sky-500/10 text-sky-300 border-sky-400/20",
    top: "from-sky-500 via-sky-300 to-transparent",
    button: "bg-sky-400 hover:bg-sky-300 text-black",
  },
  green: {
    border: "hover:border-emerald-400",
    glow: "hover:shadow-[0_0_40px_rgba(74,222,128,0.35)]",
    iconBg: "from-emerald-500/20 to-emerald-400/10",
    iconColor: "text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
    top: "from-emerald-500 via-emerald-300 to-transparent",
    button: "bg-emerald-400 hover:bg-emerald-300 text-black",
  },
};

export default function Certificates() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Professional{" "}
            <span className="text-cyan-400">
              Certifications
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 text-lg">
            Certifications that validate my expertise in Cloud Computing,
            DevOps, Kubernetes, and Cyber Security.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((cert, index) => {
            const style = accentStyles[cert.accent];
            const Icon = cert.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-3 ${style.border} ${style.glow}`}
              >

                {/* Animated Top Bar */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-linear-to-r ${style.top}`}
                />

                {/* Technology Tag */}
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold mb-6 ${style.tag}`}
                >
                  {cert.tag}
                </span>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${style.iconBg} flex items-center justify-center border border-white/10 mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon
                    size={30}
                    className={style.iconColor}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold leading-tight mb-3">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-gray-300 font-medium">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 mt-3 mb-5">
                  <CalendarDays size={16} />
                  {cert.date}
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-7 mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    Skills Covered
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified */}
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2 text-green-400 text-sm font-medium mb-7">
                  <BadgeCheck size={16} />
                  Verified Certificate
                </div>

                {/* Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full rounded-xl py-3 font-semibold transition-all duration-300 hover:scale-105 ${style.button}`}
                >
                  View Certificate
                  <ExternalLink size={18} />
                </a>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}