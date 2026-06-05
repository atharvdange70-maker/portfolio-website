"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-400">
          Atharv Dange
        </h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
           <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}