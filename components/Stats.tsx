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
    <section className="py-24 bg-[#111315]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >

              {/* Glow */}

              <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Card */}

              <div
                className="
                relative
                rounded-3xl
                bg-[#1a1d20]
                border
                border-blue-500/30
                shadow-[0_15px_35px_rgba(0,0,0,.45)]
                backdrop-blur-lg
                p-10
                text-center
                transition-all
                duration-500
                group-hover:border-blue-400
                group-hover:shadow-[0_20px_45px_rgba(0,120,255,.35)]
                "
              >

                <h2 className="text-5xl font-bold text-sky-400 mb-5">

                  {item.number}

                </h2>

                <p className="text-gray-300 text-xl">

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