import { GraduationCap, CalendarDays, School } from "lucide-react";

export default function Education() {
  return (
   <section
  id="education"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-24 px-6 text-white"
>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Education
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Card */}
        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-cyan-400 rounded-full"></div>

          <div className="ml-12 bg-slate-900 border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:shadow-[0_0_45px_rgba(34,211,238,0.35)] transition-all duration-500 hover:-translate-y-2">

            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mb-6">
              <GraduationCap className="text-cyan-400 w-8 h-8" />
            </div>

            {/* Degree */}
            <h3 className="text-2xl font-bold text-cyan-400">
              Bachelor of Computer Applications (BCA)
            </h3>

            {/* College */}
            <div className="flex items-center gap-2 mt-5 text-slate-300">
              <School size={18} className="text-cyan-400" />
              <span>Santaji Mahavidyalaya</span>
            </div>

            <p className="text-slate-400 mt-2 ml-7">
              RTM Nagpur University
            </p>

            {/* Year */}
            <div className="flex items-center gap-2 mt-5 text-slate-300">
              <CalendarDays
                size={18}
                className="text-cyan-400"
              />
              <span>2022 – 2025</span>
            </div>

            {/* CGPA */}
            <p className="mt-5 text-slate-300">
              <span className="font-semibold text-cyan-400">
                CGPA:
              </span>{" "}
              5.92
            </p>

            {/* Description */}
            <p className="mt-6 text-slate-400 leading-8">
              Studied computer science fundamentals with hands-on
              experience in programming, databases, networking,
              operating systems, software engineering, and web
              development.
            </p>

            {/* Subjects */}
            <div className="flex flex-wrap gap-3 mt-8">

              {[
                "Programming",
                "Database",
                "Networking",
                "Operating Systems",
                "Software Engineering",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}