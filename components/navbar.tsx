"use client";

import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Certifications", href: "#certifications", id: "certifications" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 140;

      for (const item of links) {
        const section = document.getElementById(item.id);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActive(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-99999
        flex
        justify-center
        px-3
        pt-4
        pointer-events-none
      "
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`
          pointer-events-auto
          relative
          w-full
          max-w-7xl
          rounded-2xl
          border
          transition-all
          duration-500
          ${
            scrolled
              ? "border-cyan-400/20 bg-slate-950/95 shadow-[0_10px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
              : "border-slate-700/40 bg-slate-950/70 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          }
        `}
      >
        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            -z-10
            rounded-2xl
            bg-linear-to-r
            from-cyan-500/10
            via-blue-500/5
            to-indigo-500/10
            blur-xl
          "
        />

        <div className="flex items-center justify-between px-5 py-3 lg:px-8 lg:py-4">

          {/* LOGO */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.04 }}
            className="group shrink-0"
          >
            <h1 className="text-xl font-extrabold tracking-wide lg:text-2xl">
              <span className="text-white">Atharv</span>
              <span className="text-cyan-400"> Dange</span>
            </h1>

            <p className="text-[10px] text-slate-400 transition group-hover:text-cyan-300 lg:text-xs">
              AWS • DevOps • Cloud Engineer
            </p>
          </motion.a>

          {/* NAV LINKS */}
          <div className="hidden xl:flex items-center gap-6">
            {links.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`
                  relative
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active === item.id
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-300"
                  }
                `}
              >
                {item.name}

                <motion.span
                  initial={false}
                  animate={{
                    width: active === item.id ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    absolute
                    left-0
                    -bottom-1.5
                    h-0.5
                    rounded-full
                    bg-cyan-400
                  "
                />
              </motion.a>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 lg:gap-4">

            <ThemeToggle />

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                hidden
                md:flex
                items-center
                gap-2
                rounded-xl
                bg-linear-to-r
                from-cyan-500
                to-blue-600
                px-4
                py-2
                lg:px-5
                lg:py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-500/20
                transition
                hover:shadow-cyan-400/40
              "
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