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
    <section className="bg-[#111315] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-sky-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card */}
              <div
                className="
                  relative
                  h-42.5
                  md:h-50
                  rounded-[30px]
                  border
                  border-sky-500/20
                  bg-linear-to-br
                  from-[#22262b]
                  to-[#17191d]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  shadow-xl
                  transition-all
                  duration-300
                  group-hover:border-sky-400/40
                  group-hover:-translate-y-1
                "
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-400">
                  {item.number}
                </h2>

                <p className="mt-4 text-sm sm:text-base md:text-xl text-gray-200">
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