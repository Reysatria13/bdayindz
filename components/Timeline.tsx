'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface Step {
  icon: string;
  title: string;
  description: string;
  photo?: string;
  video?: string;
}

interface TimelineProps {
  entries?: Step[];
}

const defaultSteps: Step[] = [
  { 
    icon: '🎂', 
    title: 'Your Birthday in 2023', 
    description: 'Our first celebration together. A day filled with joy, laughter, and the beginning of our beautiful tradition.' 
  },
  { 
    icon: '🎈', 
    title: 'Your Birthday in 2024', 
    description: 'Another wonderful year of loving you. Each moment made more special by your smile and warmth.' 
  },
  { 
    icon: '✨', 
    title: 'Happy Birthday in 2025!', 
    description: 'Today we celebrate you, my love. Here\'s to another year of making precious memories together.' 
  }
];

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  const steps = entries || defaultSteps;
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; type: 'photo' | 'video' } | null>(null);
  
  const openMedia = (src: string, type: 'photo' | 'video') => {
    setSelectedMedia({ src, type });
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };
  
  return (
    <section className="py-20 bg-beige relative">
      <motion.h2 
        className="text-3xl font-bold text-terracotta text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Your Birthday Journey!
      </motion.h2>

      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Vertical line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal/20"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal rounded-full border-4 border-white"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />

                {/* Content card */}
                <motion.div 
                  className={`w-1/2 ${idx % 2 === 0 ? 'pr-12' : 'pl-12'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative group">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{step.icon}</span>
                      <h3 className="text-xl font-bold text-terracotta">{step.title}</h3>
                    </div>
                    <p className="text-teal mb-4">{step.description}</p>
                    
                    {/* Media buttons */}
                    <div className="flex gap-2">
                      {step.photo && (
                        <motion.button
                          onClick={() => openMedia(step.photo!, 'photo')}
                          className="bg-teal/20 hover:bg-teal/30 text-teal px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>📸</span>
                          View Photo
                        </motion.button>
                      )}
                      {step.video && (
                        <motion.button
                          onClick={() => openMedia(step.video!, 'video')}
                          className="bg-terracotta/20 hover:bg-terracotta/30 text-terracotta px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>🎬</span>
                          Watch Video
                        </motion.button>
                      )}
                    </div>

                    {/* Decorative gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal/5 to-terracotta/5 opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Navigation button to wishes page */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <Button href="/wishes">View Birthday Wishes</Button>
          </motion.div>
        </div>
      </div>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMedia}
          >
            <motion.div
              className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'photo' ? (
                <img
                  src={selectedMedia.src}
                  alt="Birthday memory"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-lg shadow-2xl"
                  style={{ maxHeight: '80vh' }}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <motion.button
                onClick={closeMedia}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white w-10 h-10 rounded-full hover:bg-black/70 transition-colors flex items-center justify-center text-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Timeline;
