"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center gap-12 px-6 md:px-20 py-20"
    >
      {/* Section Heading */}
      <motion.h2
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        My <span className="text-cyan-400">Education</span>
      </motion.h2>

      {/* Timeline Style */}
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>

        <div className="flex flex-col gap-12">
          {/* Graduation */}
          <motion.div
            variants={slideInFromRight(0.5)}
            initial="hidden"
            animate="visible"
            className="relative flex items-start gap-6 md:gap-12"
          >
            <div className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center z-10 relative">
              <Image
                src="/skills/demopp.jpg"
                alt="Graduation Logo"
                width={24}
                height={24}
              />
            </div>
            <div className="backdrop-blur-sm border border-purple-500/40 rounded-xl p-6 shadow-lg w-full">
              <h3 className="text-xl font-semibold text-white">
                Bachelor of Technology (B.Tech) in Computer Science
              </h3>
              <p className="text-purple-400 text-sm">Your University Name</p>
              <p className="text-gray-400 text-sm mt-2">Aug 2021 – Jul 2025</p>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Learned core computer science fundamentals, software engineering
                principles, and modern web development technologies.
              </p>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            animate="visible"
            className="relative flex items-start gap-6 md:gap-12"
          >
            <div className="bg-cyan-500 w-10 h-10 rounded-full flex items-center justify-center z-10 relative">
              <Image
                src="/skills/demopp.jpg"
                alt="Certificate Logo"
                width={24}
                height={24}
              />
            </div>
            <div className="backdrop-blur-sm border border-cyan-500/40 rounded-xl p-6 shadow-lg w-full">
              <h3 className="text-xl font-semibold text-white">
                Remote Internship Certificate
              </h3>
              <p className="text-cyan-400 text-sm">Xebia</p>
              <p className="text-gray-400 text-sm mt-2">
                June 2024 – July 2024
              </p>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Certified internship program in fullstack development, covering
                modern web frameworks, project collaboration, and problem
                solving in real-world scenarios.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
