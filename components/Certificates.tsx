import {
  ShieldCheck,
  Cloud,
  Boxes,
  CalendarDays,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";
import { FaAws } from "react-icons/fa";

const certificates = [
  {
    title: "Cyber Security Audits",
    issuer: "Training Certification",
    date: "August 2024",
    description:
      "Security auditing, risk assessment, compliance, vulnerability analysis, and security best practices.",
    link: "/certificates/cyber-security-audit.pdf",
    icon: ShieldCheck,
    accent: "green",
    tag: "Cyber Security",
    skills: ["Auditing", "Risk", "Compliance", "Security"],
  },
 {
  title: "AWS Cloud Practitioner Essentials",
  issuer: "AWS Training & Certification",
  date: "July 2026",
  description:
    "Completed AWS Cloud Practitioner Essentials training covering core AWS services, cloud concepts, security, pricing, architecture, and best practices.",
  link: "/certificates/AWS-Cloud-practitioner.pdf",
  icon: FaAws,
  accent: "orange",
  tag: "AWS Cloud",
  skills: [
    "AWS Fundamentals",
    "EC2",
    "S3",
    "IAM",
    "Cloud Concepts",
    "Security"
  ],
  },
];

const accentStyles: Record<string, { border: string; glow: string; iconBg: string; iconColor: string; tag: string; top: string; button: string }> = {
  orange: {
    border: "hover:border-orange-400",
    glow: "hover:shadow-[0_0_35px_rgba(251,146,60,0.35)]",
    iconBg: "from-orange-500/20 to-orange-400/10",
    iconColor: "text-orange-400",
    tag: "bg-orange-500/10 text-orange-300 border-orange-400/20",
    top: "from-orange-500 via-orange-300 to-transparent",
    button: "bg-orange-400 hover:bg-orange-300 text-black",
  },
  blue: {
    border: "hover:border-sky-400",
    glow: "hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]",
    iconBg: "from-sky-500/20 to-sky-400/10",
    iconColor: "text-sky-400",
    tag: "bg-sky-500/10 text-sky-300 border-sky-400/20",
    top: "from-sky-500 via-sky-300 to-transparent",
    button: "bg-sky-400 hover:bg-sky-300 text-black",
  },
  green: {
    border: "hover:border-emerald-400",
    glow: "hover:shadow-[0_0_35px_rgba(74,222,128,0.35)]",
    iconBg: "from-emerald-500/20 to-emerald-400/10",
    iconColor: "text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
    top: "from-emerald-500 via-emerald-300 to-transparent",
    button: "bg-emerald-400 hover:bg-emerald-300 text-black",
  },
};

export default function Certificates() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            Professional{" "}
            <span className="text-cyan-400">
              Certifications
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Certifications validating my skills in Cloud Computing,
            DevOps, Kubernetes, and Cyber Security.
          </p>
        </div>


        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((cert, index) => {
            const style = accentStyles[cert.accent];
            const Icon = cert.icon;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 transition-all duration-500 hover:-translate-y-2 ${style.border} ${style.glow}`}
              >

                {/* Top Glow */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-linear-to-r ${style.top}`}
                />


                {/* Tag */}
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold mb-4 ${style.tag}`}
                >
                  {cert.tag}
                </span>


                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${style.iconBg} flex items-center justify-center border border-white/10 mb-4 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon
                    size={24}
                    className={style.iconColor}
                  />
                </div>


                {/* Title */}
                <h3 className="text-xl font-bold leading-tight mb-2">
                  {cert.title}
                </h3>


                {/* Issuer */}
                <p className="text-gray-300 text-sm font-medium">
                  {cert.issuer}
                </p>


                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 mb-3">
                  <CalendarDays size={15} />
                  {cert.date}
                </div>


                {/* Description */}
                <p className="text-gray-400 text-sm leading-6 mb-4">
                  {cert.description}
                </p>


                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">
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
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1.5 text-green-400 text-xs font-medium mb-4">
                  <BadgeCheck size={15} />
                  Verified Certificate
                </div>


                {/* Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full rounded-xl py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 ${style.button}`}
                >
                  View Certificate
                  <ExternalLink size={16} />
                </a>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}