"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-12 px-6 md:px-20 py-20"
    >
      {/* Section Heading */}
      <motion.h2
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        My <span className="text-purple-400">Experience</span>
      </motion.h2>

      {/* Experience Cards */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Xebia Internship */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 border border-purple-500/40 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition-shadow w-full"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/skills/demopp.jpg" // Add logo in /public/logos
              alt="Xebia"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">
                Remote Intern
              </h3>
              <p className="text-purple-400 text-sm">Xebia</p>
              <p className="text-gray-400 text-xs">
                June 1, 2024 – July 12, 2024
              </p>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-400 text-sm md:text-base leading-relaxed space-y-2">
            <li>
              Built and optimized fullstack applications with modern frameworks.
            </li>
            <li>
              Collaborated remotely with distributed teams using Git workflows.
            </li>
            <li>
              Applied agile methodologies for project execution and delivery.
            </li>
          </ul>
        </motion.div>

        {/* Future Slot */}
        <motion.div
          variants={slideInFromRight(0.8)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 border border-gray-700 rounded-xl p-6 backdrop-blur-sm opacity-60 hover:opacity-80 transition w-full"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/skills/demopp.jpg" // Placeholder image
              alt="Future Experience"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-300">
                Coming Soon
              </h3>
              <p className="text-gray-500 text-sm">Your Next Role</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            This space will be updated with my upcoming work experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
