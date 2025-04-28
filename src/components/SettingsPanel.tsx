import React from 'react';

const SettingsPanel: React.FC = () => {
  return (
    <section id="settings" className="bg-card border border-border rounded-xl p-8 mb-8 shadow-card">
      <h2 className="text-2xl font-audiowide font-bold text-heading mb-6">Settings</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-text mb-2 font-medium">Helius API Key</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg bg-background border border-accent2 text-heading focus:outline-none focus:ring-2 focus:ring-accent2" placeholder="Enter your Helius API key" />
        </div>
        <div>
          <label className="block text-text mb-2 font-medium">EROSoo API Key</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg bg-background border border-accent3 text-heading focus:outline-none focus:ring-2 focus:ring-accent3" placeholder="Enter your EROSoo API key" />
        </div>
        <div>
          <label className="block text-text mb-2 font-medium">Solana Wallet Address</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg bg-background border border-accent text-heading focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter your Solana wallet address" />
        </div>
      </form>
    </section>
  );
};

export default SettingsPanel; 