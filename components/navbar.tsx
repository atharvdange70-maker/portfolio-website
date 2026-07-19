"use client";

import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-5">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-7xl rounded-2xl border border-slate-700/40
        bg-slate-950/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
      >
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-xl opacity-70 -z-10" />

        <div className="flex items-center justify-between px-8 py-4">

          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="group"
          >
            <h1 className="text-2xl font-extrabold tracking-wide">
              <span className="text-white">Atharv</span>
              <span className="text-cyan-400"> Dange</span>
            </h1>

            <p className="text-xs text-slate-400 group-hover:text-cyan-300 transition">
              AWS • DevOps • Cloud Engineer
            </p>
          </motion.a>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="relative text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-400 group"
              >
                {item.name}

                <span
                  className="absolute left-0 -bottom-1 h-0.5 w-0
                  bg-cyan-400 transition-all duration-300
                  group-hover:w-full"
                />
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <ThemeToggle />

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
              hidden md:flex
              items-center
              gap-2
              rounded-xl
              bg-linear-to-r
              from-cyan-500
              to-blue-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-cyan-500/20
              transition
              hover:shadow-cyan-400/40"
            >
              Hire Me
              <ArrowUpRight size={17} />
            </motion.a>
          </div>

        </div>
      </motion.nav>
    </header>
  );
}