import React from 'react';

interface Entry {
  title: string;
  image: string;
  message: string;
}

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface TimelineProps {
  entries?: Step[];
}

const defaultSteps: Step[] = [
  { icon: '📝', title: 'Plan', description: 'Share your wishes and ideas.' },
  { icon: '🎉', title: 'Celebrate', description: 'Enjoy the party and surprises.' },
  { icon: '💖', title: 'Cherish', description: 'Make memories that last forever.' },
];

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  const steps = entries || defaultSteps;
  return (
    <section className="py-10 flex flex-col items-center bg-beige">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-4xl mb-2">{step.icon}</span>
            <h4 className="text-lg font-playful text-terracotta mb-1">{step.title}</h4>
            <p className="text-teal text-center text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
