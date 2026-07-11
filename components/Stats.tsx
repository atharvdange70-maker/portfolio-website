"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "AWS Services Used",
  },
  {
    number: "4+",
    title: "Production Projects",
  },
  {
    number: "100%",
    title: "Hands-On Learning",
  },
  {
    number: "24/7",
    title: "Learning Mode",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#111315] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[26px] bg-sky-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}
              <div
                className="
                  relative
                  h-35
                  sm:h-36.25
                  lg:h-37.5
                  rounded-[26px]
                  border
                  border-sky-500/25
                  bg-linear-to-br
                  from-[#23272c]
                  to-[#1b1d21]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                  transition-all
                  duration-300
                  group-hover:border-sky-400/40
                "
              >
                <h2 className="text-4xl md:text-5xl font-bold text-sky-400 leading-none">
                  {item.number}
                </h2>

                <p className="mt-5 text-[17px] md:text-xl text-gray-300">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}