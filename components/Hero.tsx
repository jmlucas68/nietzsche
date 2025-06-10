
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div 
      className="relative bg-cover bg-center text-white py-20 md:py-32 px-6 shadow-lg" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrl})` }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-wide">
          {title}
        </h1>
        <p className="text-lg md:text-2xl font-light opacity-90">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Hero;
