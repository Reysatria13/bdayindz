import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => (
  <Link href={href}>
    <span className="bg-teal text-white font-playful px-6 py-3 rounded-full shadow-lg hover:bg-terracotta transition-colors duration-200 text-lg">
      {children}
    </span>
  </Link>
);

export default Button;
