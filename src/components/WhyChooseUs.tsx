import React from 'react';
import SectionPanel from './SectionPanel';

const stats = [
  { title: '99.9%', desc: 'Uptime', sub: 'Reliable platform availability', icon: <span className="text-accent2 text-2xl">⏱️</span> },
  { title: '<0.1%', desc: 'Average Slippage', sub: 'Optimized trade execution', icon: <span className="text-accent3 text-2xl">⚡</span> },
  { title: '24/7', desc: 'Support', sub: 'Always here to help', icon: <span className="text-accent text-2xl">💬</span> },
];

const features = [
  { title: 'Non-Custodial Security', desc: 'Your assets remain in your control. We never store your private keys or have access to your funds.', icon: <span className="text-accent2 text-2xl">🛡️</span>, bullets: ['Private keys never leave your wallet', 'Audited smart contracts'] },
  { title: 'Lightning Fast', desc: 'Execute trades instantly with minimal slippage thanks to our optimized routing and deep liquidity pools.', icon: <span className="text-accent3 text-2xl">⚡</span>, bullets: ['Sub-second trade execution', 'Optimized routing algorithms'] },
  { title: 'Advanced Tools', desc: 'Professional-grade trading tools, real-time analytics, and customizable automation features.', icon: <span className="text-accent text-2xl">🛠️</span>, bullets: ['Custom trading bots', 'Real-time market analysis'] },
  { title: 'Community Driven', desc: 'Join a thriving community of traders and developers building the future of DeFi.', icon: <span className="text-accent4 text-2xl">👥</span>, bullets: ['Governance system', 'Community events', 'Loyalty rewards'] },
];

const WhyChooseUs: React.FC = () => (
  <section className="w-full py-16">
    <h2 className="text-3xl font-audiowide font-bold text-heading text-center mb-4">Why Choose SNIPER?</h2>
    <p className="text-text text-center max-w-2xl mx-auto mb-10">
      Built by traders for traders, SNIPER represents the next evolution in decentralized trading. Our platform combines professional-grade tools with unmatched performance on Solana, delivering an experience that rivals traditional centralized exchanges while maintaining the benefits of decentralization.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {stats.map((s, i) => (
        <SectionPanel key={i} icon={s.icon} accent={i === 0 ? 'accent2' : i === 1 ? 'accent3' : 'accent'} className="items-center text-center">
          <div className="text-3xl font-audiowide font-bold text-heading mb-1">{s.title}</div>
          <div className="text-accent2 font-audiowide font-bold text-lg mb-1">{s.desc}</div>
          <div className="text-text text-sm">{s.sub}</div>
        </SectionPanel>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, i) => (
        <SectionPanel key={i} icon={f.icon} accent={['accent2','accent3','accent','accent4'][i]}>
          <div className="text-lg font-audiowide font-bold text-heading mb-1">{f.title}</div>
          <div className="text-text text-base mb-2">{f.desc}</div>
          <ul className="list-disc list-inside text-accent2 text-sm pl-2">
            {f.bullets.map((b, j) => <li key={j}>{b}</li>)}
          </ul>
        </SectionPanel>
      ))}
    </div>
  </section>
);

export default WhyChooseUs; 