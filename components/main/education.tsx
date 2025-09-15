// components/main/education.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  staggerItem,
  progressBar,
  viewportSettings,
} from "@/lib/motion";

export const Education = () => {
  return (
    <motion.section
      id="education"
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
        My <span className="text-cyan-400">Education</span>
      </motion.h2>

      {/* Timeline Style */}
      <div className="relative w-full max-w-4xl">
        {/* Animated Vertical Line */}
        <motion.div
          className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportSettings}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <motion.div
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          {/* Graduation */}
          <motion.div
            variants={staggerItem}
            className="relative flex items-start gap-6 md:gap-12"
          >
            <motion.div
              className="bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center z-10 relative"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/skills/demopp.jpg"
                  alt="Graduation Logo"
                  width={24}
                  height={24}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="backdrop-blur-sm border border-purple-500/40 rounded-xl p-6 shadow-lg w-full relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.h3
                className="text-xl font-semibold text-white relative z-10"
                whileHover={{ x: 5, color: "#a855f7" }}
                transition={{ duration: 0.2 }}
              >
                Bachelor of Technology (B.Tech) in Computer Science
              </motion.h3>
              <p className="text-purple-400 text-sm">Your University Name</p>
              <p className="text-gray-400 text-sm mt-2">Aug 2021 – Jul 2025</p>

              {/* Progress bar */}
              <motion.div
                className="w-full bg-gray-700 rounded-full h-2 mt-4 overflow-hidden"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                  variants={progressBar}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                />
              </motion.div>

              <motion.p
                className="text-gray-400 text-sm mt-3 leading-relaxed relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                Learned core computer science fundamentals, software engineering
                principles, and modern web development technologies.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Certification */}
          <motion.div
            variants={staggerItem}
            className="relative flex items-start gap-6 md:gap-12"
          >
            <motion.div
              className="bg-cyan-500 w-10 h-10 rounded-full flex items-center justify-center z-10 relative"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.6)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                whileHover={{ rotate: -360 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/skills/demopp.jpg"
                  alt="Certificate Logo"
                  width={24}
                  height={24}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="backdrop-blur-sm border border-cyan-500/40 rounded-xl p-6 shadow-lg w-full relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.h3
                className="text-xl font-semibold text-white relative z-10"
                whileHover={{ x: 5, color: "#06b6d4" }}
                transition={{ duration: 0.2 }}
              >
                Remote Internship Certificate
              </motion.h3>
              <p className="text-cyan-400 text-sm">Xebia</p>
              <p className="text-gray-400 text-sm mt-2">
                June 2024 – July 2024
              </p>

              {/* Progress bar */}
              <motion.div
                className="w-full bg-gray-700 rounded-full h-2 mt-4 overflow-hidden"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                  variants={progressBar}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  transition={{ delay: 0.5 }}
                />
              </motion.div>

              <motion.p
                className="text-gray-400 text-sm mt-3 leading-relaxed relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                Certified internship program in fullstack development, covering
                modern web frameworks, project collaboration, and problem
                solving in real-world scenarios.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
