import React from 'react';
import SectionPanel from './SectionPanel';

const code = `import { EROSClient } from '@EROS/sdk';

// Initialize EROS Client
const client = new EROSClient({
  env: 'mainnet',
  apikey: process.env.EROS_API_KEY
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
      <SectionPanel icon={<span className="text-accent2 text-3xl">{'</>'}</span>} accent="accent2">
        <div>
          <h2 className="text-3xl font-audiowide font-bold text-heading-yellow mb-4">Developer API</h2>
          <p className="text-text mb-8">
            Integrate EROS's powerful trading infrastructure into your applications with our comprehensive API and SDK. Our developer tools provide everything needed to build sophisticated trading applications, from market data feeds to order execution endpoints. With extensive documentation, robust error handling, and dedicated support, we make it easy to leverage EROS's capabilities in your projects.<br /><br />
            The EROS Developer API is designed for flexibility and scalability, enabling seamless integration with a wide range of platforms, bots, and custom trading solutions. Whether you are building high-frequency trading systems, portfolio management dashboards, or automated market-making strategies, our API delivers the performance and reliability you need.<br /><br />
            Empower your development team with real-time access to liquidity, advanced order types, and comprehensive analytics. Join a growing ecosystem of innovators leveraging EROS to unlock new possibilities in decentralized finance and algorithmic trading.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="border-2 border-accent2 text-heading-white bg-transparent px-6 py-2 rounded-lg font-audiowide font-bold transition hover:border-accent3 hover:text-accent3">Get Started</button>
          <button className="border-2 border-accent2 text-heading-white bg-transparent px-6 py-2 rounded-lg font-audiowide font-bold transition hover:border-accent3 hover:text-accent3">View Documentation</button>
        </div>
      </SectionPanel>
    </div>
    <div className="flex-1 flex flex-col">
      <SectionPanel accent="accent2" className="h-full flex flex-col justify-between">
        <div className="relative mb-6">
          {/* VS Code style header bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#181f2a] rounded-t-lg border-b border-[#232b3b]">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          </div>
          <pre className="text-base bg-[#10151f] border-l-4 border-accent3 rounded-b-lg p-6 shadow-lg overflow-x-auto whitespace-pre font-mono" style={{fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace', boxShadow: '0 4px 24px 0 #0a1623cc', color: '#eaeaea'}}>
{`import { EROSClient } from '@EROS/sdk';

// Initialize EROS Client
const client = new EROSClient({
  env: 'mainnet',
  apikey: process.env.EROS_API_KEY
});

// Get market data
const marketData = await client.getMarketData();

// Execute a snipe
const txResult = await client.snipeToken({
  tokenAddress,
  amount,
  takeProfit,
  stopLoss
});`}
          </pre>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {features.map((f, i) => (
            <SectionPanel key={i} icon={f.icon} accent={i === 0 ? 'accent2' : 'accent3'} className="h-full">
              <div className="text-lg font-audiowide font-bold text-heading-yellow mb-1">{f.title}</div>
              <div className="text-text text-base">{f.desc}</div>
            </SectionPanel>
          ))}
        </div>
      </SectionPanel>
    </div>
  </div>
);

export default DeveloperAPI; 