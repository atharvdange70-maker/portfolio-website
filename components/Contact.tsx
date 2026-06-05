"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Contact Me
          </h2>


        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold text-blue-400">
                  Email
                </h4>

                <a
                  href="mailto:atharvdange70@gmail.com"
                  className="text-gray-300 hover:text-blue-400"
                >
                  atharvdange70@gmail.com
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-blue-400">
                  LinkedIn
                </h4>

                <a
                  href="https://www.linkedin.com/in/atharv-dange-03960a3b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400"
                >
                  linkedin.com/in/atharv-dange-03960a3b8
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-blue-400">
                  GitHub
                </h4>

                <a
                  href="https://github.com/atharvdange70-maker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400"
                >
                  github.com/atharvdange70-maker
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}

          <form
            action="https://formsubmit.co/atharvdange70@gmail.com"
            method="POST"
            className="bg-slate-900 p-8 rounded-3xl border border-slate-800"
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
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition p-4 rounded-xl font-semibold"
              >
                Send Message
              </button>

            </div>
          </form>

        </div>

      </div>
    </section>
  );
}