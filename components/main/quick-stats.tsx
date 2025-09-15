// components/main/quick-stats.tsx
"use client";

import { motion } from "framer-motion";
import { 
  slideInFromLeft, 
  staggerContainer, 
  staggerItem,
  scaleIn,
  cardHover,
  viewportSettings
} from "@/lib/motion";
import { FaProjectDiagram, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const HighlightCard = ({ icon, title, description, delay, color }: CardProps) => (
  <motion.div
    variants={staggerItem}
    whileHover={{
      y: -10,
      boxShadow: `0 20px 40px ${color}20`
    }}
    transition={{ duration: 0.3 }}
    className="w-full"
  >
    <CardContainer className="w-full">
      <CardBody className="border border-purple-500/30 rounded-2xl p-6 shadow-lg w-full h-full backdrop-blur-sm relative overflow-hidden group">
        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <CardItem
          as={motion.div}
          translateZ={30}
          className="flex flex-col items-center justify-center gap-4 relative z-10"
        >
          <motion.div 
            className="p-3 bg-purple-500/10 rounded-full"
            whileHover={{ 
              scale: 1.1,
              rotate: 360,
              backgroundColor: `${color}20`
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          
          <motion.h3 
            className="text-lg md:text-xl font-semibold text-white text-center"
            whileHover={{ 
              scale: 1.05,
              color: color === 'purple' ? '#a855f7' : '#06b6d4'
            }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 text-sm text-center"
            whileHover={{ color: '#d1d5db' }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.p>
        </CardItem>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          whileHover={{
            borderColor: color === 'purple' ? '#a855f7' : '#06b6d4',
            boxShadow: `0 0 20px ${color === 'purple' ? '#a855f7' : '#06b6d4'}40`
          }}
          transition={{ duration: 0.3 }}
        />
      </CardBody>
    </CardContainer>
  </motion.div>
);

export const Highlights = () => {
  return (
    <motion.section
      id="highlights"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="backdrop-blur-sm flex flex-col items-center justify-center px-6 md:px-20 pt-20"
    >
      <motion.h2
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-3xl pt-10 md:text-4xl font-bold text-white text-center"
      >
        My <span className="text-purple-400">Highlights</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
        <HighlightCard
          icon={<FaProjectDiagram className="text-purple-400 text-4xl" />}
          title="5+ Projects"
          description="Built and deployed fullstack apps with modern tech stack."
          delay={0.1}
          color="purple"
        />
        <HighlightCard
          icon={<FaLaptopCode className="text-cyan-400 text-4xl" />}
          title="1 Internship"
          description="Remote intern @ Xebia (June–July 2024)."
          delay={0.3}
          color="cyan"
        />
        <HighlightCard
          icon={<FaUserGraduate className="text-purple-400 text-4xl" />}
          title="1+ Year Experience"
          description="Hands-on coding, solving problems, and building projects."
          delay={0.5}
          color="purple"
        />
      </div>
    </motion.section>
  );
};