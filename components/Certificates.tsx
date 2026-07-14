export default function Certificates() {
  return (
    <section id="certifications" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Certifications
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">

        {/* Certificate 1 */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 hover:border-blue-500 transition">
          <h3 className="text-2xl font-semibold">
            Cyber Security Audits
          </h3>

          <p className="text-gray-400 mt-3">
            Completed: August 2024
          </p>

          <p className="text-gray-400 mt-3">
            Successfully completed the Cyber Security Audits course covering
            security auditing concepts, risk assessment, compliance,
            vulnerability identification, and cybersecurity best practices.
          </p>

          <a
            href="/certificates/cyber-security-audit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            View Certificate
          </a>
        </div>

        {/* Certificate 2 */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 hover:border-blue-500 transition">
          <h3 className="text-2xl font-semibold">
            AWS Developer Associate: Optimizing AWS
          </h3>

          <p className="text-gray-400 mt-3">
            Completed: June 2026
          </p>

          <p className="text-gray-400 mt-3">
            Certificate of completion for AWS optimization concepts and best
            practices.
          </p>

          <a
            href="/certificates/aws-optimizing-certificate.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            View Certificate
          </a>
        </div>

        {/* Certificate 3 */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 hover:border-blue-500 transition">
          <h3 className="text-2xl font-semibold">
            Introduction to Kubernetes
          </h3>

          <p className="text-gray-400 mt-3">
            Completed: July 2026
          </p>

          <p className="text-gray-400 mt-3">
            Simplilearn certification covering Kubernetes fundamentals, Pods,
            Deployments, Services, Namespaces and container orchestration.
          </p>

          <a
            href="/certificates/simplilearn-kubernetes-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}