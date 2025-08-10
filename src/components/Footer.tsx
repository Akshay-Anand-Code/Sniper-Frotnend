import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
      className="w-full py-8 mt-8 bg-card border-t border-border text-center text-text rounded-t-xl shadow-card font-body"
    >
      <div className="mb-2">
        <span className="text-accent3 font-heading font-bold">EROS</span> &copy; 2025
      </div>
      <div className="space-x-4 font-body">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); alert('Documentation coming soon!'); }}
          className="hover:text-accent2 transition"
        >
          Docs
        </a>
        <a 
          href="https://github.com/ErosIntel" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accent3 transition"
        >
          GitHub
        </a>
        <a 
          href="https://x.com/ErosIntel" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-accent4 transition"
        >
          Contact
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer; 