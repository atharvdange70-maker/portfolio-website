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
    <section className="bg-[#111315] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[22px] bg-sky-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Card */}
              <div
                className="
                  relative
                  h-30
                  md:h-32.5
                  rounded-[22px]
                  border
                  border-sky-500/20
                  bg-linear-to-br
                  from-[#23272b]
                  to-[#1b1d21]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  shadow-[0_12px_30px_rgba(0,0,0,0.45)]
                  transition-all
                  duration-300
                  group-hover:border-sky-400/40
                "
              >
                <h2 className="text-4xl md:text-[42px] font-bold text-sky-400 leading-none">
                  {item.number}
                </h2>

                <p className="mt-3 text-[15px] md:text-[18px] text-gray-300">
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