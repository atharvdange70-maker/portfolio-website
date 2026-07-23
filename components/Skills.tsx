"use client";

import { motion } from "framer-motion";

import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaJenkins,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";


const skills = [
  {
    name: "AWS",
    icon: <FaAws />,
    color: "text-orange-400",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    color: "text-cyan-400",
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    color: "text-purple-400",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    color: "text-red-400",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    color: "text-blue-400",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-yellow-400",
  },
  {
    name: "Prometheus",
    icon: <SiPrometheus />,
    color: "text-orange-400",
  },
  {
    name: "Grafana",
    icon: <SiGrafana />,
    color: "text-yellow-400",
  },
];


export default function Skills() {

  return (

    <section
      id="skills"
      className="relative py-24 px-6"
    >

      <div className="mx-auto max-w-6xl">


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

          className="text-center mb-14"
        >

          <h2 className="text-5xl font-bold text-white">

            Technical{" "}

            <span className="text-cyan-400">
              Skills
            </span>

          </h2>


          <p className="mt-5 text-slate-400">
            Technologies and tools I use to build,
            automate, deploy and manage cloud infrastructure.
          </p>

        </motion.div>



        {/* Skills Grid */}


        <div
          className="
          grid 
          grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-6
          "
        >


          {skills.map((skill,index)=>(


            <motion.div

              key={skill.name}

              initial={{
                opacity:0,
                y:20
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index*0.08
              }}

              whileHover={{
                y:-8
              }}

              viewport={{
                once:true
              }}

              className="
              group
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-6
              text-center
              backdrop-blur-xl
              hover:border-cyan-400/40
              transition
              "
            >


              <div
                className={`
                text-5xl
                flex
                justify-center
                ${skill.color}
                group-hover:scale-110
                transition
                `}
              >

                {skill.icon}

              </div>



              <h3
                className="
                mt-4
                text-sm
                font-semibold
                text-white
                "
              >

                {skill.name}

              </h3>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

}