import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out w-56 m-2">
    <span className="text-4xl mb-2">{icon}</span>
    <h3 className="text-xl font-playful text-terracotta mb-1">{title}</h3>
    <p className="text-teal text-center text-base">{description}</p>
  </div>
);

export default ServiceCard;
