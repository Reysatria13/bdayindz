'use client';

import Timeline from '../../components/Timeline';
import { motion } from 'framer-motion';
import Button from '../../components/Button';

const entries = [
  { 
    icon: '🎂', 
    title: 'Your Birthday in 2023', 
    description: 'Vidcall with mario cake!',
    photo: '/images/IMG_1575.jpeg',
    video: '/images/IMG_1577.MOV'
  },
  { 
    icon: '🎡', 
    title: 'Your Birthday in 2024', 
    description: 'We had a fun day in DisneySea!',
    photo: '/images/IMG_0011.jpeg',
    video: '/images/IMG_0032.MOV'
  },
  { 
    icon: '✨', 
    title: 'Happy Birthday in 2025!', 
    description: 'Today, we celebrate your birthday in Dogan and as my wife!' 
  }
];

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-beige pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Home button */}
        <motion.div
          className="mb-16 mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button href="/">
            <span className="flex items-center gap-2">
              <span className="text-xl"></span>
              Back to Home
            </span>
          </Button>
        </motion.div>

        {/* <h1 className="text-2xl font-playful text-terracotta text-center mb-8">Your Birthday Journey</h1> */}
        <Timeline entries={entries} />
      </div>
    </main>
  );
}
