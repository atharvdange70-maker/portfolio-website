export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-12 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Education
        </h2>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-400">
            Bachelor of Computer Applications (BCA)
          </h3>

          <p className="text-lg mt-3 text-slate-300">
            Santaji Mahavidyalaya
          </p>

          <p className="text-slate-400 mt-2">
            Completed undergraduate studies with a focus on
            computer science fundamentals, programming,
            databases, networking, and software development.
          </p>
        </div>
      </div>
    </section>
  );
}