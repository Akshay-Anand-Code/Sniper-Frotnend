import React from 'react';
import SectionPanel from './SectionPanel';
import Spline from '@splinetool/react-spline';

const code = `import { EROSClient } from '@EROS/sdk';

// Initialize EROS Client
const client = new EROSClient({
  env: 'mainnet',
  apikey: process.env.EROS_API_KEY
});
// Get market data
const marketData = await client.getMarketData();
`;

const DeveloperAPI: React.FC = () => (
  <div className="w-full flex flex-col gap-10 items-stretch py-16">
    {/* Top Row: Spline + Info Panel */}
    <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch">
      {/* Spline Model as Square */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Golden Glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: 440,
            height: 440,
            borderRadius: '50%',
            background: `
              radial-gradient(circle,
                rgba(255, 223, 0, 0.85) 0%,
                
                
                
                transparent 100%
              )
            `,
            boxShadow: '0 0 60px 20px rgba(255, 215, 0, 0.45), 0 0 120px 40px rgba(255, 200, 40, 0.18)',
            filter: 'blur(6px)',
            zIndex: 0,
          }}
        />
        {/* Spline 3D Asset */}
        <main className="relative z-10">
          <Spline
            scene="https://prod.spline.design/Bk07gjNOhzxaqt7K/scene.splinecode"
            style={{ width: '500px', height: '500px' }}
          />
        </main>
      </div>
      {/* Info Panel */}
      <div className="flex-1 flex flex-col justify-between" style={{ height: '500px' }}>
        <SectionPanel accent="accent2" className="h-full flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-audiowide font-bold text-heading-yellow mb-4">Developer API</h2>
            <p className="text-text mb-6">
              Integrate EROS trading into your app with our simple API and SDK.
            </p>
            <pre className="text-base bg-[#10151f] border-l-4 border-accent3 rounded-lg p-4 shadow-lg overflow-x-auto whitespace-pre font-mono mb-6" style={{fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace', boxShadow: '0 4px 24px 0 #0a1623cc', color: '#eaeaea'}}>
{code}
            </pre>
          </div>
          <div className="flex gap-4 mt-2">
            <button className="border-2 border-accent2 text-heading-white bg-transparent px-4 py-2 rounded-lg font-audiowide font-bold transition hover:border-accent3 hover:text-accent3">Get Started</button>
            <button className="border-2 border-accent2 text-heading-white bg-transparent px-4 py-2 rounded-lg font-audiowide font-bold transition hover:border-accent3 hover:text-accent3">Docs</button>
          </div>
        </SectionPanel>
      </div>
    </div>
  </div>
);

export default DeveloperAPI; 