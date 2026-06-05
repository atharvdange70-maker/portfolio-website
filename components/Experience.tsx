export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Experience
        </h2>

        <div className="bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700">
          <h3 className="text-2xl font-bold text-blue-400 mb-3">
            AWS DevOps Engineer (Hands-on Projects)
          </h3>

          <p className="text-slate-300 mb-6">
            Practical experience designing, deploying, and managing
            scalable cloud infrastructure on AWS with a strong focus
            on automation, security, reliability, and cloud-native
            architecture.
          </p>

          <h4 className="text-xl font-semibold mb-4 text-white">
            Cloud Infrastructure & DevOps
          </h4>

          <ul className="space-y-3 text-slate-300 list-disc pl-6 mb-8">
            <li>
              Designed and deployed highly available AWS cloud
              architectures.
            </li>

            <li>
              Implemented Auto Scaling and Load Balancers for
              improved reliability and performance.
            </li>

            <li>
              Deployed React applications using Amazon S3,
              CloudFront, Route 53, and AWS Certificate Manager.
            </li>

            <li>
              Configured secure IAM roles, policies, and networking
              controls.
            </li>

            <li>
              Built containerized environments using Docker and
              CI/CD practices.
            </li>

            <li>
              Developed serverless solutions using AWS Lambda and
              API Gateway.
            </li>
          </ul>

          <h4 className="text-xl font-semibold mb-4 text-white">
            Cloud Infrastructure & Troubleshooting
          </h4>

          <ul className="space-y-3 text-slate-300 list-disc pl-6">
            <li>
              Resolved IAM permissions and AWS authentication
              issues.
            </li>

            <li>
              Debugged EC2 deployment, connectivity, and
              application failures.
            </li>

            <li>
              Optimized CloudFront caching, routing, and content
              delivery.
            </li>

            <li>
              Troubleshot VPC, Security Group, and networking
              issues.
            </li>

            <li>
              Implemented HTTPS security using AWS Certificate
              Manager (ACM).
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
}