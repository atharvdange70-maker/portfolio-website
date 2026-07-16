export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          About Me
        </h2>

        <p className="text-lg text-slate-300 leading-8 mb-8">
          I am a passionate DevOps and Cloud Engineer focused on building
          scalable, secure, and highly available cloud infrastructure on AWS.
          As a BCA graduate and cloud enthusiast, I enjoy designing
          production-ready systems, automating deployments, and implementing
          modern DevOps practices that improve reliability and efficiency.
        </p>

        <p className="text-lg text-slate-300 leading-8 mb-12">
          I have hands-on experience with AWS, Docker, Kubernetes, Terraform,
          Jenkins, Linux, Git, and CI/CD pipelines. My goal is to design
          cloud-native solutions that follow industry best practices while
          ensuring performance, security, and operational excellence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-semibold text-cyan-400">
              High Availability
            </h3>
            <p className="mt-2 text-slate-300">
              Designing resilient systems that remain available even during
              failures.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-semibold text-cyan-400">
              Performance Optimization
            </h3>
            <p className="mt-2 text-slate-300">
              Improving system efficiency, scalability, and responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-semibold text-cyan-400">
              Cost Efficiency
            </h3>
            <p className="mt-2 text-slate-300">
              Optimizing cloud resources while maintaining reliability.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-semibold text-cyan-400">
              Secure IAM & Networking
            </h3>
            <p className="mt-2 text-slate-300">
              Implementing least-privilege access and secure network designs.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-xl font-semibold text-cyan-400">
              Continuous Learning
            </h3>
            <p className="mt-2 text-slate-300">
              Continuously building hands-on AWS projects and improving my
              understanding of cloud architecture patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

