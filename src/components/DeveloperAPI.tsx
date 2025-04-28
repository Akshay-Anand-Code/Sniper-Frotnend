import React from 'react';
import SectionPanel from './SectionPanel';

const code = `import { SniperClient } from '@sniper/sdk';

// Initialize Sniper Client
const client = new SniperClient({
  env: 'mainnet',
  apikey: process.env.SNIPER_API_KEY
});

// Get market data
const marketData = await client.getMarketData();

// Execute a snipe
const txResult = await client.snipeToken({
  tokenAddress,
  amount,
  takeProfit,
  stopLoss
});`;

const features = [
  {
    title: 'WebSocket API',
    desc: 'Real-time market data and order updates',
    icon: <span className="text-accent2 text-2xl">🔌</span>,
  },
  {
    title: 'Historical Data',
    desc: 'Access comprehensive market history',
    icon: <span className="text-accent3 text-2xl">🗃️</span>,
  },
];

const DeveloperAPI: React.FC = () => (
  <div className="w-full flex flex-col md:flex-row gap-10 items-stretch py-16">
    <div className="flex-1 flex flex-col">
      <SectionPanel icon={<span className="text-accent2 text-3xl">{'</>'}</span>} accent="accent2" className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-audiowide font-bold text-heading mb-4">Developer API</h2>
          <p className="text-text mb-8">
            Integrate SNIPER's powerful trading infrastructure into your applications with our comprehensive API and SDK. Our developer tools provide everything needed to build sophisticated trading applications, from market data feeds to order execution endpoints. With extensive documentation, robust error handling, and dedicated support, we make it easy to leverage SNIPER's capabilities in your projects.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-accent2 text-heading px-6 py-2 rounded-lg font-audiowide font-bold hover:bg-accent transition">Get Started</button>
          <button className="border border-accent2 text-accent2 px-6 py-2 rounded-lg font-audiowide font-bold hover:bg-card hover:text-heading transition">View Documentation</button>
        </div>
      </SectionPanel>
    </div>
    <div className="flex-1 flex flex-col">
      <SectionPanel accent="accent2" className="h-full flex flex-col justify-between">
        <pre className="bg-background border border-border rounded-lg p-4 text-xs text-accent2 overflow-x-auto mb-6 whitespace-pre-wrap flex-1">
          {code}
        </pre>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {features.map((f, i) => (
            <SectionPanel key={i} icon={f.icon} accent={i === 0 ? 'accent2' : 'accent3'} className="h-full">
              <div className="text-lg font-audiowide font-bold text-heading mb-1">{f.title}</div>
              <div className="text-text text-base">{f.desc}</div>
            </SectionPanel>
          ))}
        </div>
      </SectionPanel>
    </div>
  </div>
);

export default DeveloperAPI; 