
"use client";

import ThemeToggle from "./ThemeToggle";

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
    <header className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-4 shadow-2xl backdrop-blur-xl lg:px-7">

        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          <div className="text-xl font-bold tracking-wide sm:text-2xl">
            <span className="text-white">Atharv</span>
            <span className="text-cyan-400"> Dange</span>
          </div>

          <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">
            AWS • DevOps • Cloud Engineer
          </p>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.name}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 md:block"
          >
            Hire Me
          </a>
        </div>

      </nav>
    </header>
  );
}