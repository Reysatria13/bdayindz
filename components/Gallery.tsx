'use client';

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/photo1.jpg', wish: 'Wishing you joy and laughter!' },
  { src: '/images/photo2.jpg', wish: 'May your day be filled with love.' },
  { src: '/images/photo3.jpg', wish: 'Cheers to another year of memories!' },
  { src: '/images/photo1.jpg', wish: 'You are the star of the party!' },
];

const Gallery: React.FC = () => (
  <section className="py-20 bg-beige">
    <motion.h2 
      className="text-3xl font-bold text-terracotta text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Captured Moments
    </motion.h2>

    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Card container with perspective */}
            <div className="perspective-1000">
              <motion.div
                className="relative bg-white rounded-2xl p-3 shadow-xl transform-gpu preserve-3d"
                whileHover={{ 
                  rotateX: 2,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Image */}
                <div className="relative rounded-xl overflow-hidden">
                  <motion.img
                    src={img.src}
                    alt={img.wish}
                    className="w-full aspect-square object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-terracotta/80 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-center font-medium transform translate-y-4 
                                  group-hover:translate-y-0 transition-transform duration-300">
                        {img.wish}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -inset-3 bg-gradient-to-r from-teal/20 to-terracotta/20 rounded-3xl 
                              opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
