'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

const wishes = [
  "Happiest birthday my forever bestiee 🥰",
  "May Allah give you all the blessings and happiness! 💖",
  "Thank you for being my perfect partner and always be my partner till Jannah, aamiin 🌟",
  "Here's to many more years of happiness together 🥂",
];

const WishesPage = () => {
  return (
    <div className="min-h-screen bg-beige py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-terracotta text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Birthday Wishes For You!
        </motion.h1>

        <div className="space-y-8">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <p className="text-xl text-teal text-center font-medium">{wish}</p>
            </motion.div>
          ))}
        </div>

        {/* Add a special personal message */}
        <motion.div
          className="mt-16 bg-terracotta/10 p-8 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-terracotta text-center mb-4">
            Rere's Special Message
          </h2>
          <p className="text-teal text-center text-lg leading-relaxed">
            To my beloved wife, Indira Salsabila, met ultah yah sayang! Semoga di umur yang baru kamu, kamu sebagai istriku bisa lebih sayang terus sama suaminya dan taat sama suaminya juga. 
            Semoga kamu selalu dalam perlindungan Allah SWT, selalu diberikan segala kemudahan, dan yang terpenting selalu disabarkan dan ditenangkan dalam segala hal.
            May this birthday bring you all the happiness and blessings you deserve and more.
            I love you, sayang ❤️
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          className="mt-12 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Button href="/timeline">Back to Timeline</Button>
          <Button href="/gifts">View Gifts</Button>
        </motion.div>
      </div>
    </div>
  );
};

export default WishesPage;
