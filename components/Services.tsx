import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: '🎂',
    title: 'Birthday Milestones',
    description: 'Your birthday timeline for the past 2 years, since we were together.',
  },
    {
    icon: '🎉',
    title: 'Birthday Wishes',
    description: 'Reres special message and wishes!',
  },
  {
    icon: '🎁',
    title: 'Gift',
    description: 'My gift to you, sayang!',
  },
];

const Services: React.FC = () => (
  <section className="py-16 bg-beige">
    <h2 className="text-3xl font-bold text-terracotta text-center mb-12">What's Inside This Gift</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
