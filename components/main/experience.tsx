// components/main/experience.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  staggerItem,
  cardHover,
  viewportSettings,
} from "@/lib/motion";

export const Experience = () => {
  return (
    <motion.section
      id="experience"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col items-center justify-center gap-12 px-6 md:px-20 py-20"
    >
      {/* Section Heading */}
      <motion.h2
        variants={staggerItem}
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        My <span className="text-purple-400">Experience</span>
      </motion.h2>

      {/* Experience Cards */}
      <motion.div
        variants={staggerContainer}
        className="flex flex-col md:flex-row gap-8 w-full max-w-5xl"
      >
        {/* Xebia Internship */}
        <motion.div
          variants={staggerItem}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="flex flex-col gap-4 border border-purple-500/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-shadow w-full relative overflow-hidden"
        >
          {/* Background gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="flex items-center gap-4 relative z-10"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.1,
              }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/skills/demopp.jpg"
                alt="Xebia"
                width={60}
                height={60}
                className="rounded-md"
              />
            </motion.div>
            <div>
              <motion.h3
                className="text-xl font-semibold text-white"
                whileHover={{ color: "#a855f7" }}
              >
                Remote Intern
              </motion.h3>
              <p className="text-purple-400 text-sm">Xebia</p>
              <p className="text-gray-400 text-xs">
                June 1, 2024 – July 12, 2024
              </p>
            </div>
          </motion.div>

          <motion.ul
            className="list-disc list-inside text-gray-400 text-sm md:text-base leading-relaxed space-y-2 relative z-10"
            variants={staggerContainer}
          >
            {[
              "Built and optimized fullstack applications with modern frameworks.",
              "Collaborated remotely with distributed teams using Git workflows.",
              "Applied agile methodologies for project execution and delivery.",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={staggerItem}
                whileHover={{ x: 10, color: "#d1d5db" }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Future Slot */}
        <motion.div
          variants={staggerItem}
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(156, 163, 175, 0.6)",
          }}
          className="flex flex-col gap-4 border border-gray-700 rounded-xl p-6 backdrop-blur-sm opacity-60 hover:opacity-80 transition-all w-full relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          <div className="flex items-center gap-4 relative z-10">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/skills/demopp.jpg"
                alt="Future Experience"
                width={60}
                height={60}
                className="rounded-md"
              />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-gray-300">
                Coming Soon
              </h3>
              <p className="text-gray-500 text-sm">Your Next Role</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed relative z-10">
            This space will be updated with my upcoming work experience.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
