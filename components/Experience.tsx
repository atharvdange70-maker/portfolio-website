export default function Experience() {
  const technologies = [
    { name: "AWS", color: "text-orange-400 border-orange-400/40 bg-orange-400/10" },
    { name: "Docker", color: "text-blue-400 border-blue-400/40 bg-blue-400/10" },
    { name: "Kubernetes", color: "text-purple-400 border-purple-400/40 bg-purple-400/10" },
    { name: "Terraform", color: "text-indigo-400 border-indigo-400/40 bg-indigo-400/10" },
    { name: "Jenkins", color: "text-red-400 border-red-400/40 bg-red-400/10" },
    { name: "GitHub Actions", color: "text-white border-white/30 bg-white/10" },
    { name: "Linux", color: "text-yellow-400 border-yellow-400/40 bg-yellow-400/10" },
    { name: "Git", color: "text-orange-500 border-orange-500/40 bg-orange-500/10" },
    { name: "CI/CD", color: "text-green-400 border-green-400/40 bg-green-400/10" },
  ];

  const responsibilities = [
    "Designed and deployed scalable AWS infrastructure using EC2, VPC, IAM, S3, Route 53, CloudFront, and Load Balancers.",
    "Built and maintained CI/CD pipelines using Jenkins, GitHub Actions, and Docker for automated deployments.",
    "Containerized web applications with Docker and deployed them in cloud environments.",
    "Provisioned cloud infrastructure using Terraform following Infrastructure as Code (IaC) best practices.",
    "Implemented Auto Scaling, Load Balancers, and monitoring to improve application availability and performance.",
    "Configured IAM roles, policies, and security controls to protect AWS resources.",
    "Troubleshot cloud infrastructure, networking, DNS, and deployment-related issues.",
    "Monitored AWS resources using CloudWatch and optimized performance, reliability, and cost.",
    "Deployed React applications using Amazon S3, CloudFront, Route 53, and AWS Certificate Manager.",
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-20"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* Section Title */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="w-28 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Building scalable cloud infrastructure, automating deployments,
            and delivering secure cloud-native solutions using modern DevOps
            practices.
          </p>

        </div>


        {/* Experience Card */}

        <div
          className="
          relative rounded-3xl 
          border border-cyan-400/20
          bg-slate-900/70 
          backdrop-blur-xl
          p-8 md:p-10
          shadow-2xl
          shadow-cyan-500/10
          hover:shadow-purple-500/20
          hover:-translate-y-3
          transition-all duration-500
          "
        >

          {/* Glow Effect */}
          <div className="
          absolute -top-20 -right-20
          w-52 h-52
          bg-cyan-500/20
          blur-3xl
          rounded-full
          ">
          </div>


          {/* Header */}

          <div className="flex flex-col md:flex-row md:justify-between gap-6 relative">


            <div>

              <h3
              className="
              text-4xl font-extrabold
              bg-linear-to-r 
              from-cyan-400 
              via-blue-500 
              to-purple-500
              bg-clip-text
              text-transparent
              "
              >
                DevOps Engineer Intern
              </h3>


              <p className="text-xl text-white mt-3 font-semibold">
                Hisan Labs Pvt Ltd
              </p>


              <p className="text-slate-400 mt-1">
                Pune, Maharashtra, India
              </p>


            </div>



            <div>

              <span
              className="
              inline-flex items-center
              rounded-full
              border border-cyan-400/40
              bg-cyan-400/10
              px-5 py-2
              text-cyan-300
              font-medium
              shadow-lg shadow-cyan-500/20
              "
              >
                🚀 Jan 2026 – Present
              </span>

            </div>


          </div>



          {/* Summary */}

          <div className="mt-8 border-l-4 border-cyan-400 pl-5">

            <p className="text-slate-300 leading-8 text-lg">

              Working as a DevOps Intern with hands-on experience in AWS cloud,
              CI/CD automation, Infrastructure as Code, containerization, and
              cloud-native deployments. Contributing to scalable, secure, and
              highly available infrastructure while improving deployment speed,
              automation, and operational efficiency.

            </p>

          </div>




          {/* Responsibilities */}

          <div className="mt-12">

            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">

              <span className="text-cyan-400">⚡</span>
              Key Responsibilities

            </h4>


            <ul className="space-y-5">

            {responsibilities.map((item,index)=>(

              <li
              key={index}
              className="
              flex gap-4
              text-slate-300
              hover:text-white
              transition
              "
              >

                <span
                className="
                mt-1
                flex items-center justify-center
                w-6 h-6
                rounded-full
                bg-linear-to-r from-cyan-400 to-purple-500
                text-black
                text-sm
                font-bold
                "
                >
                  ✓
                </span>


                <span>
                  {item}
                </span>


              </li>


            ))}

            </ul>


          </div>





          {/* Technologies */}

          <div className="mt-12">

            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">

              <span className="text-purple-400">🛠</span>
              Technologies Used

            </h4>



            <div className="flex flex-wrap gap-4">

            {technologies.map((tech)=>(

              <span
              key={tech.name}
              className={`
              rounded-full
              border
              px-5 py-2
              text-sm
              font-semibold
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-110
              ${tech.color}
              `}
              >

                {tech.name}

              </span>


            ))}


            </div>


          </div>


        </div>


      </div>

    </section>
  );
}