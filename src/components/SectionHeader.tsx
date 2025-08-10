import React from 'react';

interface SectionHeaderProps {
  
  title: string;
  subtitle: string;
  accentColor?: string; // Optional accent color for icon
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, accentColor = 'accent3' }) => (
  <div className="flex flex-col items-center mb-2">
    
    <h2 className="text-3xl font-bold text-center mb-2 text-heading-yellow">{title}</h2>
    <p className="text-white text-base md:text-lg text-center mb-2 tracking-wide font-body">{subtitle}</p>
  </div>
);

export default SectionHeader; 