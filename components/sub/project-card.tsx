// components/sub/project-card.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cardHover, scaleIn } from "@/lib/motion";

type ProjectCardProps = {
  src: string;
  title: string;
  link: string;
  index?: number;
};

export const ProjectCard = ({
  src,
  title,
  link,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileTap={{ scale: 0.98 }}
      className="w-full relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group"
    >
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="block"
      >
        {/* Image Container */}
        <motion.div
          className="relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-60 object-cover object-left-top transition-all duration-500"
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Hover Icon */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 bg-purple-500/80 rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative p-4 bg-[#0a0a0a]/80 backdrop-blur-sm"
          whileHover={{ backgroundColor: "rgba(112, 66, 248, 0.05)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1
            className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
};
