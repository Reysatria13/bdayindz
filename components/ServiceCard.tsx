import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <motion.div
    className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center 
               hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2"
    whileHover={{ scale: 1.02 }}
    style={{
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    }}
  >
    <div className="relative w-16 h-16 flex items-center justify-center mb-4">
      <motion.div
        className="absolute inset-0 bg-terracotta/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <span className="text-4xl relative z-10">{icon}</span>
    </div>
    
    <h3 className="text-xl font-bold text-terracotta mb-3">{title}</h3>
    <p className="text-teal text-center">
      {description}
    </p>

    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/30 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

export default ServiceCard;
