"use client";



import { motion } from "framer-motion";

import {

  ArrowDown,

  ArrowRight,

  Cloud,

  Container,

  Server,

  Settings2,

  Terminal,

} from "lucide-react";



export default function Hero() {

  return (

    <section

      id="home"

      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24"

    >

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      </div>



      <div className="mx-auto w-full max-w-6xl">

        <div className="max-w-4xl">

          {/* Status */}

          <motion.div

            initial={{ opacity: 0, y: 15 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5 }}

            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"

          >

            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            AWS DevOps Engineer

          </motion.div>



          {/* Main Heading */}

          <motion.h1

            initial={{ opacity: 0, y: 25 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6 }}

            className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"

          >
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              Atharv Dange

            </span>

          </motion.h1>



          {/* Subtitle */}

          <motion.h2

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6, delay: 0.1 }}

            className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl"

          >

            Building reliable cloud infrastructure

            <br className="hidden sm:block" />

            and automated deployments.

          </motion.h2>

          {/* Buttons */}

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6, delay: 0.3 }}

            className="mt-8 flex flex-wrap items-center gap-4"

          >

            <a

              href="#projects"

              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"

            >

              View Projects

              <ArrowRight

                size={18}

                className="transition-transform group-hover:translate-x-1"

              />

            </a>



            <a

              href="#contact"

              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"

            >

             Connect Me

            </a>

          </motion.div>



          {/* Social Links */}

         <motion.div

  initial={{ opacity: 0 }}

  animate={{ opacity: 1 }}

  transition={{ duration: 0.6, delay: 0.4 }}

  className="mt-7 flex items-center gap-4"

>

  <a

    href="#"

    className="text-sm font-medium text-slate-500 transition hover:text-cyan-400"

  >

    LinkedIn

  </a>



  <div className="h-5 w-px bg-slate-800" />



  <span className="text-sm text-slate-500">

    Cloud • DevOps • Automation

  </span>

</motion.div>

        </div>



        {/* Technology Icons */}

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.7, delay: 0.5 }}

          className="mt-16 border-t border-slate-800/70 pt-8"

        >

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">

            Technologies I work with

          </p>



          <div className="flex flex-wrap items-center gap-3">

            <TechIcon icon={<Cloud size={18} />} label="AWS" />

            <TechIcon icon={<Container size={18} />} label="Docker" />

            <TechIcon icon={<Server size={18} />} label="Kubernetes" />

            <TechIcon icon={<Settings2 size={18} />} label="Terraform" />

            <TechIcon icon={<Terminal size={18} />} label="Jenkins" />

          </div>

        </motion.div>

      </div>



      {/* Scroll Indicator */}

      <motion.a

        href="#about"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 1 }}

        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-600 transition hover:text-cyan-400 md:block"

        aria-label="Scroll to About section"

      >

        <ArrowDown size={20} className="animate-bounce" />

      </motion.a>

    </section>

  );

}



function TechIcon({

  icon,

  label,

}: {

  icon: React.ReactNode;

  label: string;

}) {

  return (

    <div className="group flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-2.5 text-sm text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300">

      <span className="text-slate-500 transition group-hover:text-cyan-400">

        {icon}

      </span>

      {label}

    </div>

  );

}