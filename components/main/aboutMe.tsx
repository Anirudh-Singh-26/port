// components/main/aboutMe.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  staggerItem,
  viewportSettings,
} from "@/lib/motion";

export const AboutMe = () => {
  return (
    <motion.section
      id="about-me"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20"
    >
      {/* Left Side Image */}
      <motion.div
        variants={slideInFromLeft(0.2)}
        className="flex justify-center"
      >
        <motion.div
          className="w-[420px] h-[480px] overflow-hidden rounded-2xl shadow-lg"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(112, 66, 248, 0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <Image
              src="/Me.jpg"
              alt="About Me"
              width={420}
              height={480}
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        variants={slideInFromRight(0.2)}
        className="flex flex-col gap-6 text-center md:text-left max-w-2xl"
      >
        <motion.h2
          variants={staggerItem}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="text-gray-400 text-base md:text-lg leading-relaxed"
        >
          I am a{" "}
          <motion.span
            className="text-purple-400 font-semibold"
            whileHover={{
              color: "#a855f7",
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
          >
            Fullstack Developer
          </motion.span>{" "}
          with expertise in building modern, responsive, and scalable web
          applications. I enjoy creating solutions that balance clean design
          with robust functionality.
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="text-gray-400 text-base md:text-lg leading-relaxed"
        >
          Skilled in both{" "}
          <motion.span
            className="text-white font-medium"
            whileHover={{ color: "#e879f9" }}
          >
            frontend frameworks
          </motion.span>{" "}
          and{" "}
          <motion.span
            className="text-white font-medium"
            whileHover={{ color: "#06b6d4" }}
          >
            backend systems
          </motion.span>
          , I focus on writing clean, maintainable code and delivering
          efficient, user-friendly applications.
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="text-gray-400 text-base md:text-lg leading-relaxed"
        >
          I stay curious about new technologies and development practices,
          always striving to improve and contribute to impactful projects.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};
