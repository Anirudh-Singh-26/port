"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { FaProjectDiagram, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const HighlightCard = ({ icon, title, description, delay }: CardProps) => (
  <CardContainer className="w-full">
    <CardBody className="border border-purple-500/30 rounded-2xl p-6  shadow-lg w-full h-full">
      <CardItem
        as={motion.div}
        translateZ={30}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <div className="p-3 bg-purple-500/10 rounded-full">{icon}</div>
        <h3 className="text-lg md:text-xl font-semibold text-white text-center">
          {title}
        </h3>
        <p className="text-gray-400 text-sm text-center">{description}</p>
      </CardItem>
    </CardBody>
  </CardContainer>
);

export const Highlights = () => {
  return (
    <section
      id="highlights"
      className=" backdrop-blur-sm flex flex-col items-center justify-center  px-6 md:px-20 pt-20"
    >
      <motion.h2
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-3xl pt-10 md:text-4xl font-bold text-white text-center"
      >
        My <span className="text-purple-400">Highlights</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <HighlightCard
          icon={<FaProjectDiagram className="text-purple-400 text-4xl" />}
          title="5+ Projects"
          description="Built and deployed fullstack apps with modern tech stack."
          delay={0.1}
        />
        <HighlightCard
          icon={<FaLaptopCode className="text-purple-400 text-4xl" />}
          title="1 Internship"
          description="Remote intern @ Xebia (June–July 2024)."
          delay={0.3}
        />
        <HighlightCard
          icon={<FaUserGraduate className="text-purple-400 text-4xl" />}
          title="1+ Year Experience"
          description="Hands-on coding, solving problems, and building projects."
          delay={0.5}
        />
      </div>
    </section>
  );
};
