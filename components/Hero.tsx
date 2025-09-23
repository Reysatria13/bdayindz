'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero: React.FC = () => (
  <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between 
                      px-6 py-16 bg-beige overflow-hidden">
    <motion.div 
      className="flex-1 relative z-10"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold font-playful text-terracotta mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Hewwoh, Indz!
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-teal mb-8 max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Here is a little surprise I made for your birthday! Hope you like it!
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* <Button href="/timeline">Get Started</Button> */}
      </motion.div>
    </motion.div>

    <motion.div 
      className="flex-1 relative flex justify-center md:justify-end mt-12 md:mt-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      {/* 3D Cake Illustration */}
      <div className="relative w-64 h-64 md:w-96 md:h-96">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-teal/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="relative z-10 w-full h-full bg-white/80 backdrop-blur-sm rounded-full 
                     shadow-2xl flex items-center justify-center transform perspective-1000"
          whileHover={{ rotateY: 10, rotateX: -10 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img 
            src="/images/IMG_9955.jpeg" 
            alt="Birthday celebration" 
            className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full transform translate-z-20"
          />
        </motion.div>
      </div>
    </motion.div>

    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-lightblue/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-terracotta/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  </section>
);

export default Hero;
