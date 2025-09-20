import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  { icon: '🎂', title: 'Birthday Cakes', description: 'Delicious cakes for every celebration.' },
  { icon: '🎉', title: 'Party Plans', description: 'Creative themes and fun activities.' },
  { icon: '📸', title: 'Memories', description: 'Capture every magical moment.' },
  { icon: '🎁', title: 'Gifts', description: 'Thoughtful surprises for loved ones.' },
];

const Services: React.FC = () => (
  <section className="flex flex-wrap justify-center items-center py-10 bg-beige">
    {services.map((service, idx) => (
      <ServiceCard key={idx} {...service} />
    ))}
  </section>
);

export default Services;
