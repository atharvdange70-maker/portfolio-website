const Certificates = () => (
  <section id="certifications" className="py-20 px-6">
    <h2 className="text-4xl font-bold text-center mb-10">
      Certifications
    </h2>

    <div className="max-w-2xl mx-auto space-y-6">

      {/* AWS Certificate */}
      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
        <h3 className="text-2xl font-semibold">
          AWS Developer Associate: Optimizing AWS
        </h3>

        <p className="text-gray-400 mt-2">
          Completed: June 2026
        </p>

        <p className="text-gray-400 mt-2">
          Certificate of completion for AWS optimization concepts and best practices.
        </p>

        <a
          href="/certificates/aws-optimizing-certificate.pdf.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          View Certificate
        </a>
      </div>

      {/* Kubernetes Certificate */}
      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6">
        <h3 className="text-2xl font-semibold">
         Introduction to Kubernetes
        </h3>

        <p className="text-gray-400 mt-2">
          Completed: 2026
        </p>

        <p className="text-gray-400 mt-2">
          Simplilearn certification covering Kubernetes fundamentals, pods, deployments, services, namespaces, and container orchestration.
        </p>

        <a
          href="/certificates/simplilearn-kubernetes-certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
        >
          View Certificate
        </a>
      </div>

    </div>
  </section>
);

export default Certificates;