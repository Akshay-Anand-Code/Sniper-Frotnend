import React from 'react';

interface LoaderProps {
  percent: number;
}

const Loader: React.FC<LoaderProps> = ({ percent }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500" style={{ pointerEvents: 'all' }}>
    <div className="flex flex-col items-center">
      <span className="text-5xl font-audiowide text-heading-yellow mb-4">{percent}%</span>
      <span className="text-lg text-white tracking-widest">Loading...</span>
    </div>
  </div>
);

export default Loader; 