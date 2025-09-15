// components/main/projects.tsx
"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import {
  staggerContainer,
  staggerItem,
  slideInFromTop,
  viewportSettings,
} from "@/lib/motion";

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="flex flex-col items-center justify-center py-20"
    >
      <motion.h1
        variants={slideInFromTop()}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        My Projects
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        className="h-full w-full flex flex-col md:flex-row gap-10 px-10"
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.title} variants={staggerItem}>
            <ProjectCard
              src={project.image}
              title={project.title}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
