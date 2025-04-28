import React from 'react';
import { motion } from 'framer-motion';

const LiveLogs: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
      id="logs"
      className="bg-card border border-border rounded-xl p-8 mb-8 shadow-card group relative overflow-hidden"
    >
      {/* Animated border effect */}
      <span className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent3 transition-all duration-500" style={{boxShadow: '0 0 0 0 #ffc400'}} />
      <h2 className="text-2xl font-audiowide font-bold text-heading mb-6">Live Logs</h2>
      <div className="h-48 overflow-y-auto bg-background rounded-lg border border-border p-3 font-mono text-sm text-text">
        {/* Replace with real-time logs */}
        <div>[12:00:01] 🚀 Starting EROS...</div>
        <div>[12:00:02] ✅ Subscription confirmed</div>
        <div>[12:00:05] 💦 New Liquidity Pool signature found</div>
        <div>[12:00:06] 🔫 Sniping token using EROSoo...</div>
        <div>[12:00:07] ✅ Token swapped successfully</div>
      </div>
    </motion.section>
  );
};

export default LiveLogs; 