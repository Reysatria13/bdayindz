import React from 'react';

const images = [
  { src: '/images/photo1.jpg', wish: 'Wishing you joy and laughter!' },
  { src: '/images/photo2.jpg', wish: 'May your day be filled with love.' },
  { src: '/images/photo3.jpg', wish: 'Cheers to another year of memories!' },
  { src: '/images/photo1.jpg', wish: 'You are the star of the party!' },
];

const Gallery: React.FC = () => (
  <section className="py-10 bg-beige flex flex-col items-center">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
      {images.map((img, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img src={img.src} alt={img.wish} className="w-32 h-32 object-cover rounded-2xl shadow-lg mb-2 bg-white" />
          <p className="text-teal text-center text-sm font-playful">{img.wish}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
