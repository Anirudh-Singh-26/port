"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const GithubStats = () => {
  return (
    <section
      id="github"
      className="flex flex-col items-center justify-center gap-12 px-6 md:px-20 py-20 backdrop-blur-none"
    >
      <motion.h2
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-4xl font-bold text-white text-center"
      >
        My <span className="text-purple-400">GitHub Stats</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Stats Card */}
        <motion.div
          variants={slideInFromRight(0.6)}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm p-4 rounded-xl border border-purple-500/40 shadow-lg hover:shadow-purple-500/20 transition-shadow"
        >
          <Image
            src={`/skills/demopp.jpg`}
            alt="GitHub Stats"
            width={500}
            height={300}
            className="rounded-md"
          />
        </motion.div>

        {/* Streak Card */}
        <motion.div
          variants={slideInFromRight(0.9)}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm p-4 rounded-xl border border-purple-500/40 shadow-lg hover:shadow-purple-500/20 transition-shadow"
        >
          <Image
            src={`/skills/demopp.jpg`}
            alt="GitHub Streak"
            width={500}
            height={300}
            className="rounded-md"
          />
        </motion.div>
      </div>
    </section>
  );
};
