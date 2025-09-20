import React from 'react';
import Button from './Button';

const FooterCTA: React.FC = () => (
  <footer className="w-full py-8 bg-terracotta flex flex-col items-center rounded-t-3xl mt-8">
    <h2 className="text-2xl font-playful text-white mb-4">Ready to celebrate?</h2>
    <Button href="/timeline">Get Started</Button>
  </footer>
);

export default FooterCTA;
