import React, { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  onWhitepaperClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onWhitepaperClick }) => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

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
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-text text-base font-medium items-center font-body">
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
              <a href="#eros-ai-analyst" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-sm" onClick={() => setToolsOpen(false)}>EROS AI ANALYST</a>
              <a href="#eros-intel-tracker" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-sm" onClick={() => setToolsOpen(false)}>EROS INTEL TRACKER</a>
              <a href="#eros-ai-agent" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-sm" onClick={() => setToolsOpen(false)}>EROS AI AGENT</a>
              <a href="#eros-investigator" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-sm" onClick={() => setToolsOpen(false)}>EROS INVESTIGATOR</a>
              <a href="#sniper-bot" className="px-5 py-3 hover:bg-accent3/10 hover:text-accent3 transition font-bold text-white tracking-wide text-sm" onClick={() => setToolsOpen(false)}>SNIPER BOT</a>
            </div>
          )}
        </div>
        <a href="#eros-token" className="hover:text-accent4 transition">About</a>
        <button
          className="hover:text-emerald-400 transition focus:outline-none"
          onClick={onWhitepaperClick}
        >
          Whitepaper
        </button>
        <a
          href="https://x.com/ErosIntelSol"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-accent3 transition font-bold"
          aria-label="ErosIntel on X"
        >
          <FaXTwitter className="text-xl" />
          <span className="hidden md:inline">ErosIntel</span>
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-text hover:text-accent3 transition p-2"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-card z-50 md:hidden animate-fade-in">
          <div className="flex flex-col font-body">
            <div className="border-b border-border">
              <button
                className="w-full text-left px-6 py-4 hover:bg-accent2/20 transition flex justify-between items-center"
                onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
              >
                <span>Tools</span>
                <span>{mobileToolsOpen ? '▲' : '▼'}</span>
              </button>
              {mobileToolsOpen && (
                <div className="bg-[#182235]/50 flex flex-col">
                  <a href="#eros-ai-analyst" className="px-8 py-3 hover:bg-accent3/10 hover:text-accent3 transition" onClick={() => setMobileMenuOpen(false)}>EROS AI ANALYST</a>
                  <a href="#eros-intel-tracker" className="px-8 py-3 hover:bg-accent3/10 hover:text-accent3 transition" onClick={() => setMobileMenuOpen(false)}>EROS INTEL TRACKER</a>
                  <a href="#eros-ai-agent" className="px-8 py-3 hover:bg-accent3/10 hover:text-accent3 transition" onClick={() => setMobileMenuOpen(false)}>EROS AI AGENT</a>
                  <a href="#eros-investigator" className="px-8 py-3 hover:bg-accent3/10 hover:text-accent3 transition" onClick={() => setMobileMenuOpen(false)}>EROS INVESTIGATOR</a>
                  <a href="#sniper-bot" className="px-8 py-3 hover:bg-accent3/10 hover:text-accent3 transition" onClick={() => setMobileMenuOpen(false)}>SNIPER BOT</a>
                </div>
              )}
            </div>
            <a href="#eros-token" className="px-6 py-4 hover:bg-accent2/20 transition border-b border-border" onClick={() => setMobileMenuOpen(false)}>About</a>
            <button
              className="px-6 py-4 hover:bg-accent2/20 transition text-left border-b border-border"
              onClick={() => {
                onWhitepaperClick?.();
                setMobileMenuOpen(false);
              }}
            >
              Whitepaper
            </button>
            <a
              href="https://x.com/ErosIntel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 hover:bg-accent2/20 transition flex items-center gap-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaXTwitter className="text-xl" />
              <span>X (Twitter)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 