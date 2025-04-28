import React from 'react';

interface NavbarProps {
  onWhitepaperClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onWhitepaperClick }) => {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-card border-b border-border shadow-card rounded-b-xl">
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-audiowide font-bold text-heading tracking-widest">EROS</span>
        <span className="text-accent2 font-audiowide font-bold text-lg">BOT</span>
      </div>
      <div className="hidden md:flex space-x-8 text-text text-base font-medium">
        <a href="#features" className="hover:text-accent transition">Features</a>
        <a href="#settings" className="hover:text-accent2 transition">Settings</a>
        <a href="#logs" className="hover:text-accent3 transition">Logs</a>
        <a href="#about" className="hover:text-accent4 transition">About</a>
        <button
          className="hover:text-emerald-400 transition focus:outline-none"
          onClick={onWhitepaperClick}
        >
          Whitepaper
        </button>
      </div>
      <div>
        {/* Wallet Connect Button Placeholder */}
        <button className="bg-accent2 text-heading px-5 py-2 rounded-lg font-audiowide font-bold hover:bg-accent transition">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar; 