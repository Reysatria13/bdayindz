'use client';

import React from 'react';
import Gallery from '../../components/Gallery';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-beige">
      <div className="max-w-7xl mx-auto px-4 py-8">
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

        <Gallery />
        
        {/* Navigation buttons */}
        <motion.div 
          className="py-12 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button href="/timeline">View Timeline</Button>
          <Button href="/wishes">Read Wishes</Button>
        </motion.div>
      </div>
    </main>
  );
}
