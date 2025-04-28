import React from 'react';
import { motion } from 'framer-motion';

const StatusCards: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      className="space-y-6"
    >
      <div className="bg-card border border-border rounded-xl p-6 shadow-card group relative overflow-hidden">
        <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent transition-all duration-500" style={{boxShadow: '0 0 0 0 #1de9b6'}} />
        <div className="text-accent font-audiowide font-bold text-lg mb-1">Bot Status</div>
        <div className="text-text">Active</div>
      </div>
      <div className="bg-card border border-border rounded-xl p-6 shadow-card group relative overflow-hidden">
        <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent2 transition-all duration-500" style={{boxShadow: '0 0 0 0 #00bfae'}} />
        <div className="text-accent2 font-audiowide font-bold text-lg mb-1">Total Snipes</div>
        <div className="text-text">12</div>
      </div>
      <div className="bg-card border border-border rounded-xl p-6 shadow-card group relative overflow-hidden">
        <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent4 transition-all duration-500" style={{boxShadow: '0 0 0 0 #ff5252'}} />
        <div className="text-accent4 font-audiowide font-bold text-lg mb-1">Errors</div>
        <div className="text-text">0</div>
      </div>
    </motion.section>
  );
};

export default StatusCards; 