// components/sub/hero-content.tsx
"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  buttonHover,
  floating,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

export const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-6 md:mt-24 w-full z-[20]"
    >
      {/* Left Content */}
      <motion.div
        variants={staggerItem}
        className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start"
      >
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop(0.2)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(180, 155, 255, 0.3)",
          }}
          className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0 cursor-default"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
          </motion.div>
          <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
            Fullstack Developer
          </h1>
        </motion.div>

        {/* Hero Heading with text reveal effect */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Transforming{" "}
          </motion.span>
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Ideas
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {" "}
            into Seamless User{" "}
          </motion.span>
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Experiences
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          I&apos;m a Full Stack Software Engineer specializing in building
          modern web applications. Check out my projects and skills.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#projects"
          variants={slideInFromLeft(1)}
          {...buttonHover}
          className="py-4 px-5 sm:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-base sm:text-base font-medium rounded-full shadow-lg max-w-[110px] sm:max-w-[180px] mx-auto md:mx-0 flex items-center justify-center cursor-pointer"
        >
          Learn more
        </motion.a>
      </motion.div>

      {/* Right Side Image with floating animation */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center md:justify-end md:ml-0 lg:ml-20 xl:ml-32 items-center mt-8 md:mt-0"
      >
        <motion.div variants={floating} animate="animate">
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={400}
            width={400}
            draggable={false}
            className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
