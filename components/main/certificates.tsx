"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop, slideInFromLeft } from "@/lib/motion";

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center gap-12 px-6 md:px-20 py-20"
    >
      {/* Section Heading */}
      <motion.h2
        variants={slideInFromTop()}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        Certificates & <span className="text-purple-400">Achievements</span>
      </motion.h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Certificate Card */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm border border-purple-500/40 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
        >
          <Image
            src="/skills/demopp.jpg"
            alt="Certificate Logo"
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-white">
            Remote Internship Certificate
          </h3>
          <p className="text-purple-400 text-sm">Xebia</p>
          <p className="text-gray-400 text-sm mt-2">June – July 2024</p>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Recognized for completing remote internship in fullstack development
            with focus on scalable applications.
          </p>
        </motion.div>

        {/* Extra Example */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm border border-cyan-500/40 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
        >
          <Image
            src="/skills/demopp.jpg"
            alt="Course Logo"
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-white">
            JavaScript (Intermediate) Certificate
          </h3>
          <p className="text-cyan-400 text-sm">HackerRank</p>
          <p className="text-gray-400 text-sm mt-2">2023</p>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Certified for solving advanced problems and applying JavaScript
            concepts in real-world coding tasks.
          </p>
        </motion.div>

        {/* Achievement Example */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm border border-pink-500/40 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
        >
          <Image
            src="/skills/demopp.jpg"
            alt="Trophy Logo"
            width={60}
            height={60}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-white">
            Hackathon Finalist
          </h3>
          <p className="text-pink-400 text-sm">TechFest 2023</p>
          <p className="text-gray-400 text-sm mt-2">2023</p>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Secured finalist position in a 48-hour coding hackathon by building
            an AI-powered web app.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
