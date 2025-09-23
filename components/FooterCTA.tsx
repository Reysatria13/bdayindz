import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const FloatingHeart = ({ delay = 0 }) => (
  <motion.div
    className="absolute text-2xl"
    initial={{ y: 0, opacity: 1 }}
    animate={{
      y: -100,
      opacity: 0,
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay,
      ease: "easeOut"
    }}
  >
    ❤️
  </motion.div>
);

const FooterCTA: React.FC = () => (
  <footer className="relative w-full overflow-hidden">
    {/* Background gradient and blur effects */}
    <div className="absolute inset-0 bg-gradient-to-b from-beige to-terracotta opacity-90" />
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-teal/20 via-transparent to-terracotta/20"
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Content container */}
    <div className="relative max-w-7xl mx-auto px-6 py-20">
      <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 lg:p-20 
                    shadow-2xl overflow-hidden">
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(220,106,62,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(220,106,62,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(220,106,62,0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating hearts */}
        <div className="absolute left-1/4 bottom-0">
          <FloatingHeart delay={0} />
        </div>
        <div className="absolute left-1/2 bottom-0">
          <FloatingHeart delay={1.5} />
        </div>
        <div className="absolute left-3/4 bottom-0">
          <FloatingHeart delay={1} />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            HAPPY BIRTHDAY, INDIRA SAYANGKU!
          </motion.h2>
          
          <motion.p
            className="text-xl text-white/90 mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's see more details about the surprise I made for you by clicking the button below!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button href="/timeline">See more details here</Button>
          </motion.div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-teal/20 to-transparent rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-terracotta/20 to-transparent rounded-tl-full" />
      </div>
    </div>
  </footer>
);

export default FooterCTA;
