"use client";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
   <section
  id="contact"
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent text-white px-6"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Contact Me
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for DevOps, Cloud and AWS opportunities.
            Feel free to contact me for internships, collaborations or projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Card */}
          <div className="bg-slate-900/70 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <a
                href="mailto:atharvdange70@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
              >
                <FaEnvelope className="text-cyan-400 text-2xl" />

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium">
                    atharvdange70@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/atharv-dange-03960a3b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
              >
                <FaLinkedin className="text-cyan-400 text-2xl" />

                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <p className="font-medium">
                    linkedin.com/in/atharv-dange-03960a3b8
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/atharvdange70-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
              >
                <FaGithub className="text-cyan-400 text-2xl" />

                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <p className="font-medium">
                    github.com/atharvdange70-maker
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/atharvdange70@gmail.com"
            method="POST"
            className="bg-slate-900/70 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >

            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold p-4 rounded-xl transition duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}