import React, { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';

interface NavbarProps {
  onWhitepaperClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onWhitepaperClick }) => {
  const [toolsOpen, setToolsOpen] = useState(false);

  // Handle hover for dropdown with delay on mouse leave
  let closeTimeout: NodeJS.Timeout;
  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setToolsOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setToolsOpen(false), 150);
  };

  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-card border-b border-border shadow-card rounded-b-xl relative">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.href = '/'}>
        <img src="/eros.png" alt="EROS Logo" className="h-14 w-auto" />
      </div>
      <div className="hidden md:flex space-x-8 text-text text-base font-medium items-center">
        <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button
            className={`hover:text-accent transition px-2 py-1 rounded ${toolsOpen ? 'bg-accent2 text-heading' : ''}`}
            onClick={() => setToolsOpen((open) => !open)}
            type="button"
          >
            Tools <span className="ml-1">▾</span>
          </button>
          {toolsOpen && (
            <div className="absolute left-0 top-full mt-0 w-56 bg-[#182235] border border-border rounded-lg shadow-lg z-20 flex flex-col text-left animate-fade-in">
              <a href="#eros-ai-analyst" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-lg" onClick={() => setToolsOpen(false)}>EROS AI ANALYST</a>
              <a href="#eros-intel-tracker" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-lg" onClick={() => setToolsOpen(false)}>EROS INTEL TRACKER</a>
              <a href="#eros-ai-agent" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-lg" onClick={() => setToolsOpen(false)}>EROS AI AGENT</a>
              <a href="#eros-investigator" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-lg" onClick={() => setToolsOpen(false)}>EROS INVESTIGATOR</a>
              <a href="#sniper-bot" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-lg" onClick={() => setToolsOpen(false)}>SNIPER BOT</a>
            </div>
          )}
        </div>
        <a href="#about" className="hover:text-accent4 transition">About</a>
        <button
          className="hover:text-emerald-400 transition focus:outline-none"
          onClick={onWhitepaperClick}
        >
          Whitepaper
        </button>
        <a
          href="https://x.com/ErosIntel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-accent3 transition font-bold"
          aria-label="ErosIntel on X"
        >
          <FaXTwitter className="text-xl" />
          <span className="hidden md:inline">ErosIntel</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 