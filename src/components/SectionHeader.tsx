import React from 'react';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accentColor?: string; // Optional accent color for icon
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon, title, subtitle, accentColor = 'accent3' }) => (
  <div className="flex flex-col items-center mb-2">
    <div className={`rounded-full p-3 mb-3 bg-${accentColor}/20`}>{icon}</div>
    <h2 className="text-3xl font-bold text-center mb-2 text-heading-yellow">{title}</h2>
    <p className="text-accent2 cascadia-mono text-base md:text-lg text-center mb-2 tracking-wide">{subtitle}</p>
  </div>
);

export default SectionHeader; 