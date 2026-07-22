import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  Cloud,
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

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>


      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>


          <div className="w-28 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto mt-5 rounded-full"></div>


          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-7">
            Building scalable cloud infrastructure, automating deployments,
            and delivering secure cloud-native solutions using modern DevOps
            practices.
          </p>

        </div>



        {/* Experience Card */}
        <div
          className="
          rounded-3xl 
          border border-white/10
          bg-linear-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80
          backdrop-blur-xl
          p-8 md:p-10
          shadow-2xl
          hover:shadow-cyan-500/20
          transition-all duration-500
          hover:-translate-y-3
          "
        >


          {/* Header */}

          <div className="flex flex-col md:flex-row md:justify-between gap-6">


            <div>

              <div className="flex items-center gap-3">

                <div className="
                p-3 rounded-xl 
                bg-linear-to-br from-cyan-500 to-blue-600
                shadow-lg shadow-cyan-500/30
                ">
                  <Briefcase className="text-white" size={24}/>
                </div>


                <h3 className="
                text-3xl font-bold
                bg-linear-to-r from-cyan-400 to-blue-400
                bg-clip-text text-transparent
                ">
                  DevOps Intern
                </h3>

              </div>


              <p className="text-xl text-white mt-5 font-semibold">
                Hisan Labs Pvt Ltd
              </p>


              <div className="flex items-center gap-2 text-slate-400 mt-2">
                <MapPin size={16}/>
                Pune, Maharashtra, India
              </div>

            </div>



            <div>

              <span
              className="
              flex items-center gap-2
              rounded-full
              px-5 py-2
              bg-linear-to-r 
              from-cyan-500/20 
              to-blue-500/20
              border border-cyan-400/30
              text-cyan-300
              "
              >

                <Calendar size={16}/>
                Jan 2026 – Present

              </span>

            </div>


          </div>





          {/* Summary */}

          <div className="
          mt-8
          p-5
          rounded-2xl
          bg-white/5
          border border-white/10
          ">

            <p className="text-slate-300 leading-8 text-lg">
              Working as a DevOps Intern with hands-on experience in AWS cloud,
              CI/CD automation, Infrastructure as Code, containerization, and
              cloud-native deployments. Contributing to scalable, secure, and
              highly available infrastructure while improving deployment speed,
              automation, and operational efficiency.
            </p>

          </div>






          {/* Responsibilities */}

          <div className="mt-10">

            <h4 className="
            text-2xl 
            font-semibold 
            text-white
            mb-7
            flex items-center gap-3
            ">
              <Cloud className="text-cyan-400"/>
              Key Responsibilities
            </h4>



            <div className="space-y-5">

            {responsibilities.map((item,index)=>(

              <div
              key={index}
              className="
              flex gap-4
              group
              "
              >

                <CheckCircle2
                className="
                text-cyan-400 
                mt-1
                group-hover:text-purple-400
                transition
                "
                size={20}
                />

                <p className="
                text-slate-300
                group-hover:text-white
                transition
                ">
                  {item}
                </p>


              </div>

            ))}

            </div>


          </div>






          {/* Technologies */}

          <div className="mt-12">

            <h4 className="text-2xl font-semibold text-white mb-6">
              Technologies Used
            </h4>


            <div className="flex flex-wrap gap-3">


            {technologies.map((tech,index)=>(

              <span
              key={tech}
              className={`
              px-4 py-2
              rounded-full
              border
              text-sm
              font-medium
              transition-all
              duration-300
              hover:scale-110
              hover:text-white
              ${
                index % 3 === 0
                ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-500"
                : index % 3 === 1
                ? "border-purple-400/40 bg-purple-400/10 text-purple-300 hover:bg-purple-500"
                : "border-blue-400/40 bg-blue-400/10 text-blue-300 hover:bg-blue-500"
              }
              `}
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