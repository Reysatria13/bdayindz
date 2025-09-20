import React from 'react';
import Button from './Button';

const Hero: React.FC = () => (
  <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 bg-beige rounded-3xl shadow-lg mb-8">
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold font-playful text-terracotta mb-4">Celebrate Your Special Day</h1>
      <p className="text-lg md:text-xl text-teal mb-6">Make birthdays magical with love and surprises</p>
      <Button href="/timeline">Get Started</Button>
    </div>
    <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
      {/* Illustration placeholder: balloons/cake */}
      <div className="w-48 h-48 bg-lightblue rounded-full flex items-center justify-center shadow-lg">
        <span className="text-6xl">🎂</span>
      </div>
    </div>
  </section>
);

export default Hero;
