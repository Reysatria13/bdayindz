'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../components/Button';

export default function GiftsPage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const openEnvelope = () => {
    setIsEnvelopeOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowTicket(true), 800);
    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const closeEnvelope = () => {
    setShowTicket(false);
    setShowConfetti(false);
    setTimeout(() => setIsEnvelopeOpen(false), 300);
  };

  return (
    <main className="min-h-screen bg-beige py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Home button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button href="/">
            <span className="flex items-center gap-2">
              <span className="text-xl">🏠</span>
              Back Home
            </span>
          </Button>
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold text-terracotta text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Special Birthday Gift
        </motion.h1>
        
        <motion.p 
          className="text-teal text-center text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A surprise dinner reservation prepared with love, just for you.
        </motion.p>

        {/* Envelope Card */}
        <div className="flex justify-center items-center min-h-[500px] relative">
          {/* Confetti Animation */}
          <AnimatePresence>
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    initial={{
                      x: '50%',
                      y: '50%',
                      scale: 0,
                      rotate: 0,
                    }}
                    animate={{
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight,
                      scale: [0, 1, 0],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      ease: "easeOut",
                    }}
                  >
                    {['🎉', '🎊', '✨', '🎈', '🎂', '💖', '🌟', '🎁'][i % 8]}
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Envelope */}
            <motion.div
              className="relative w-80 h-56 bg-gradient-to-br from-terracotta to-terracotta/80 rounded-lg shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={!isEnvelopeOpen ? openEnvelope : undefined}
            >
              {/* Envelope flap */}
              <motion.div
                className="absolute top-0 left-0 w-full h-28 bg-gradient-to-br from-terracotta/90 to-terracotta origin-top"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  transformStyle: 'preserve-3d'
                }}
                animate={{
                  rotateX: isEnvelopeOpen ? -180 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Envelope body */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border-2 border-white/20">
                {/* Wax seal */}
                {!isEnvelopeOpen && (
                  <motion.div
                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-teal to-teal/80 rounded-full flex items-center justify-center text-2xl shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🍽️
                  </motion.div>
                )}

                {/* Click instruction */}
                {!isEnvelopeOpen && (
                  <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm text-center"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    Click to open your gift!
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Ticket that appears */}
            <AnimatePresence>
              {showTicket && (
                <motion.div
                  className="absolute top-0 left-0 w-80"
                  initial={{ y: 50, opacity: 0, scale: 0.8 }}
                  animate={{ y: -20, opacity: 1, scale: 1 }}
                  exit={{ y: 50, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Restaurant Ticket */}
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-teal/20">
                    {/* Ticket Header */}
                    <div className="bg-gradient-to-r from-teal to-lightblue p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold text-lg">🎂 Birthday Dinner</h3>
                        <span className="text-white/90 text-sm">RESERVATION</span>
                      </div>
                    </div>

                    {/* Ticket Body */}
                    <div className="p-6 space-y-4">
                      <div className="text-center">
                        <h2 className="text-2xl font-bold text-terracotta mb-2">Littlechef Whitely</h2>
                        <p className="text-teal font-medium">Shibuya, Tokyo</p>
                      </div>

                      <div className="border-t border-dashed border-teal/30 pt-4 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-semibold">Friday, Sep 26, 2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-semibold">5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Party Size:</span>
                          <span className="font-semibold">Reserved for 2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-semibold text-sm">神南1丁目6-14 ジョルディビル 2F</span>
                        </div>
                      </div>

                      <div className="border-t border-dashed border-teal/30 pt-4">
                        <motion.a
                          href="https://www.mds-fund.com/cg"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-gradient-to-r from-teal to-lightblue text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          View Full Reservation Details
                        </motion.a>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-32 left-0 w-4 h-4 bg-beige rounded-full transform -translate-x-2"></div>
                    <div className="absolute top-32 right-0 w-4 h-4 bg-beige rounded-full transform translate-x-2"></div>
                  </div>

                  {/* Close button */}
                  <motion.button
                    onClick={closeEnvelope}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-terracotta text-white rounded-full flex items-center justify-center text-sm hover:bg-terracotta/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ✕
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div 
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button href="/wishes">Read Wishes</Button>
        </motion.div>
      </div>
    </main>
  );
}
