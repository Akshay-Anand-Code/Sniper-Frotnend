import React from 'react';
import { motion } from 'framer-motion';

const SnipeForm: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      className="bg-card border border-border rounded-xl p-8 mb-8 shadow-card group relative overflow-hidden"
    >
      {/* Animated border effect */}
      <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent2 transition-all duration-500" style={{boxShadow: '0 0 0 0 #00bfae'}} />
      <h2 className="text-2xl font-audiowide font-bold text-heading mb-6">Snipe a Token</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-text mb-2 font-medium">Token Address</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg bg-background border border-accent2 text-heading focus:outline-none focus:ring-2 focus:ring-accent2" placeholder="Enter token mint address" disabled />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-text mb-2 font-medium">Amount (SOL)</label>
            <input type="number" className="w-full px-4 py-2 rounded-lg bg-background border border-accent text-heading focus:outline-none focus:ring-2 focus:ring-accent" placeholder="0.01" min="0" step="any" disabled />
          </div>
          <div className="flex-1">
            <label className="block text-text mb-2 font-medium">Take Profit (%)</label>
            <input type="number" className="w-full px-4 py-2 rounded-lg bg-background border border-accent3 text-heading focus:outline-none focus:ring-2 focus:ring-accent3" placeholder="50" min="0" disabled />
          </div>
          <div className="flex-1">
            <label className="block text-text mb-2 font-medium">Stop Loss (%)</label>
            <input type="number" className="w-full px-4 py-2 rounded-lg bg-background border border-accent4 text-heading focus:outline-none focus:ring-2 focus:ring-accent4" placeholder="15" min="0" disabled />
          </div>
        </div>
        <button type="submit" className="w-full mt-4 border-2 border-accent2 text-heading-white bg-transparent px-6 py-3 rounded-lg font-audiowide font-bold transition text-lg hover:border-accent3 hover:text-accent3" disabled>Snipe Token</button>
      </form>
    </motion.section>
  );
};

export default SnipeForm; 