"use client";

import { motion } from "framer-motion";

import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaJenkins,
  FaPython,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiShell,
} from "react-icons/si";

import {
  MdSecurity,
} from "react-icons/md";


const skills = [
  {
    name: "AWS",
    icon: <FaAws />,
    color: "text-orange-400",
    tags: ["EC2", "S3", "IAM", "VPC", "CloudFront"],
  },

  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
    tags: ["Images", "Containers", "Compose", "Registry"],
  },

  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "text-cyan-400",
    tags: ["Pods", "Deployments", "Services", "Scaling"],
  },

  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "text-purple-400",
    tags: ["IaC", "Modules", "State", "Variables"],
  },

  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "text-red-400",
    tags: ["Build", "Deploy", "Pipeline", "Automation"],
  },

  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "text-orange-500",
    tags: ["Repository", "Branching", "Merge", "Version Control"],
  },

  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-blue-400",
    tags: ["CI/CD", "Workflow", "Automation", "Deployment"],
  },

  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-yellow-400",
    tags: ["Ubuntu", "Commands", "Permissions", "System Admin"],
  },

  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-300",
    tags: ["Automation", "Scripts", "Boto3", "APIs"],
  },

  {
    name: "Shell Scripting",
    icon: <SiShell />,
    color: "text-green-400",
    tags: ["Bash", "Automation", "Tasks", "Linux"],
  },

  {
    name: "IAM Security",
    icon: <MdSecurity />,
    color: "text-emerald-400",
    tags: ["Users", "Roles", "Policies", "Access Control"],
  },

  {
    name: "Prometheus",
    icon: <SiPrometheus />,
    color: "text-orange-400",
    tags: ["Metrics", "Monitoring", "Alerts", "Exporters"],
  },

  {
    name: "Grafana",
    icon: <SiGrafana />,
    color: "text-yellow-400",
    tags: ["Dashboard", "Visualization", "Charts", "Logs"],
  },
];


export default function Skills() {

  return (

    <section
      id="skills"
      className="relative py-24 px-6"
    >

      <div className="mx-auto max-w-7xl">


        {/* Heading */}

        <motion.div
          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="mb-14 text-center"
        >

          <h2 className="text-5xl font-bold text-white">

            Technical{" "}

            <span className="text-cyan-400">
              Skills
            </span>

          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-slate-400">

            Cloud, DevOps and automation technologies
            used for building scalable infrastructure
            and modern deployment workflows.

          </p>

        </motion.div>



        {/* Skills Cards */}


        <div
          className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >


          {skills.map((skill,index)=>(


            <motion.div

              key={skill.name}

              initial={{
                opacity:0,
                y:30
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index * 0.06
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-8
              }}

              className="
              group
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition
              hover:border-cyan-400/40
              "

            >


              {/* Icon */}

              <div
                className={`
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-white/5
                text-4xl
                ${skill.color}
                transition
                group-hover:scale-110
                `}
              >

                {skill.icon}

              </div>



              {/* Name */}

              <h3
                className="
                mt-5
                text-xl
                font-bold
                text-white
                "
              >

                {skill.name}

              </h3>



              {/* Tags */}

              <div
                className="
                mt-4
                flex
                flex-wrap
                gap-2
                "
              >

                {skill.tags.map((tag)=>(

                  <span

                    key={tag}

                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1
                    text-xs
                    text-slate-300
                    "

                  >

                    {tag}

                  </span>

                ))}

              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

}