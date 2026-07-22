import {
  Cloud,
  Container,
  GitBranch,
  Server,
  ShieldCheck,
  Activity,
  CheckCircle2,
} from "lucide-react";

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
    "CloudWatch",
    "VPC",
    "IAM",
  ];

  const responsibilities = [
    "Designed and deployed scalable AWS infrastructure using EC2, VPC, IAM, S3, Route 53, CloudFront, and Load Balancers.",
    "Built and maintained CI/CD pipelines using Jenkins and GitHub Actions to automate application deployments.",
    "Containerized applications using Docker and deployed cloud-ready workloads.",
    "Provisioned AWS infrastructure using Terraform following Infrastructure as Code (IaC) practices.",
    "Implemented Auto Scaling, Load Balancers, and monitoring solutions for highly available applications.",
    "Configured IAM roles, security policies, and AWS best practices to improve infrastructure security.",
    "Troubleshot cloud networking, DNS, deployment, and production environment issues.",
    "Monitored AWS services using CloudWatch and optimized reliability and performance.",
    "Deployed frontend applications using S3, CloudFront, Route 53, and SSL certificates.",
  ];

  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      value: "AWS",
    },
    {
      icon: GitBranch,
      title: "Automation",
      value: "CI/CD",
    },
    {
      icon: Container,
      title: "Containers",
      value: "Docker + Kubernetes",
    },
    {
      icon: Server,
      title: "Infrastructure",
      value: "Terraform IaC",
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-20"
    >
      <div className="max-w-6xl w-full mx-auto px-5">

        {/* Title */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional{" "}
            <span className="text-cyan-400">
              Experience
            </span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            Building scalable cloud infrastructure, automating deployments,
            and implementing secure DevOps solutions using modern cloud
            technologies.
          </p>

        </div>


        {/* Main Card */}

        <div className="
          relative rounded-3xl 
          border border-cyan-500/20
          bg-slate-900/70
          backdrop-blur-xl
          p-8 md:p-10
          shadow-2xl
          transition-all duration-500
          hover:-translate-y-2
          hover:shadow-cyan-500/20
        ">


          {/* Header */}

          <div className="flex flex-col md:flex-row justify-between gap-6">

            <div>

              <h3 className="text-3xl font-bold text-cyan-400">
                DevOps Intern
              </h3>

              <p className="text-xl text-white mt-2">
                Hisan Labs Pvt Ltd
              </p>

              <p className="text-slate-400 mt-1">
                Pune, Maharashtra, India
              </p>

            </div>


            <div>
              <span className="
                inline-flex
                px-5 py-2
                rounded-full
                bg-cyan-500/10
                border border-cyan-400/40
                text-cyan-300
                font-medium
              ">
                Jan 2026 – Present
              </span>
            </div>


          </div>



          {/* Summary */}

          <div className="
            mt-8
            p-5
            rounded-2xl
            bg-slate-800/60
            border border-slate-700
          ">

            <p className="text-slate-300 leading-8 text-lg">
              Working as a DevOps Intern with hands-on experience in AWS,
              CI/CD automation, Infrastructure as Code, containerization,
              monitoring, and cloud deployments. Focused on improving
              scalability, reliability, security, and deployment efficiency
              through automation and modern DevOps practices.
            </p>

          </div>



          {/* Highlights */}

          <div className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            mt-10
          ">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                  p-4
                  rounded-2xl
                  bg-slate-800/70
                  border border-slate-700
                  hover:border-cyan-400
                  transition-all
                  "
                >

                  <Icon className="text-cyan-400 mb-3"/>

                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <p className="text-white font-semibold mt-1">
                    {item.value}
                  </p>

                </div>
              );

            })}

          </div>



          {/* Responsibilities */}

          <div className="mt-12">

            <h4 className="
              text-2xl
              font-semibold
              text-white
              mb-6
            ">
              Key Responsibilities
            </h4>


            <div className="space-y-4">

              {responsibilities.map((item,index)=>(

                <div
                  key={index}
                  className="
                  flex gap-4
                  p-3
                  rounded-xl
                  hover:bg-slate-800/60
                  transition
                  "
                >

                  <CheckCircle2
                    className="
                    text-cyan-400
                    mt-1
                    min-w-5
                    "
                    size={20}
                  />

                  <p className="text-slate-300 leading-7">
                    {item}
                  </p>


                </div>

              ))}

            </div>

          </div>



          {/* Technologies */}

          <div className="mt-12">

            <h4 className="
              text-2xl
              font-semibold
              text-white
              mb-6
            ">
              Technologies & Tools
            </h4>


            <div className="flex flex-wrap gap-3">

              {technologies.map((tech)=>(

                <span
                  key={tech}
                  className="
                  px-4 py-2
                  rounded-full
                  bg-slate-800
                  border border-cyan-500/30
                  text-cyan-300
                  text-sm
                  font-medium
                  hover:bg-cyan-500
                  hover:text-white
                  hover:scale-105
                  transition-all
                  "
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