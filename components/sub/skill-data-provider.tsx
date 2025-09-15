"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
  className?: string; // 👈 for per-skill adjustments
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
  className,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      whileHover={{ scale: 1.1 }} // 👈 interactive hover
      className={`flex flex-col items-center justify-center w-20 h-20 ${
        className ?? ""
      }`}
    >
      <Image
        src={`/skills/${src}`}
        alt={name}
        width={width}
        height={height}
        className="object-contain"
      />
      <p className="text-xs text-white mt-1">{name}</p>
    </motion.div>
  );
};
