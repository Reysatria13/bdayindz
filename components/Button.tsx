import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => (
  <Link href={href} passHref>
    <motion.div 
      className="relative inline-flex items-center justify-center px-8 py-4 
                 text-lg font-medium text-white overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Button background with gradient */}
      <span className="absolute inset-0 bg-gradient-to-br from-teal to-teal/80 rounded-full" />
      
      {/* Hover effect overlay */}
      <span className="absolute inset-0 bg-gradient-to-br from-terracotta to-terracotta/80 rounded-full 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Button shadow/glow effect */}
      <span className="absolute inset-0 rounded-full blur-md bg-teal/30 group-hover:bg-terracotta/30 
                      transition-colors duration-300" />
      
      {/* Button content */}
      <span className="relative flex items-center gap-2">
        {children}
        <motion.svg 
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          initial={{ x: -5 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15
          }}
        >
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
        </motion.svg>
      </span>
    </motion.div>
  </Link>
);

export default Button;
