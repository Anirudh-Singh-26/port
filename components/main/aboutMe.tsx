"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20"
    >
      {/* Left Side Image */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="flex justify-center"
      >
        <div className="w-[420px] h-[480px] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/Me.jpg"
            alt="About Me"
            width={420}
            height={480}
            className="rounded-2xl shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-150"
          />
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 text-center md:text-left max-w-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About <span className="text-purple-400">Me</span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          I am a{" "}
          <span className="text-purple-400 font-semibold">
            Fullstack Developer
          </span>{" "}
          with expertise in building modern, responsive, and scalable web
          applications. I enjoy creating solutions that balance clean design
          with robust functionality.
        </p>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Skilled in both{" "}
          <span className="text-white font-medium">frontend frameworks</span>{" "}
          and <span className="text-white font-medium">backend systems</span>, I
          focus on writing clean, maintainable code and delivering efficient,
          user-friendly applications.
        </p>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          I stay curious about new technologies and development practices,
          always striving to improve and contribute to impactful projects.
        </p>
      </motion.div>
    </section>
  );
};
