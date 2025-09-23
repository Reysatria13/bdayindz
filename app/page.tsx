'use client';

import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Timeline from '../components/Timeline';
import FooterCTA from '../components/FooterCTA';
import BlurBlob from '../components/BlurBlob';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-beige font-playful overflow-hidden">
      {/* Decorative blurred background elements */}
      <BlurBlob color="terracotta" className="top-0 left-0" />
      <BlurBlob color="teal" className="top-1/3 right-0" />
      <BlurBlob color="lightblue" className="bottom-0 left-1/2" />
      
      {/* Content sections with container and spacing */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-24 md:mt-32"
          >
            <Services />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <FooterCTA />
        </motion.div>
      </div>
    </main>
  );
}
