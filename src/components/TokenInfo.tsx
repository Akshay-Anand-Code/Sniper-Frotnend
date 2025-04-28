import React from 'react';
import SectionPanel from './SectionPanel';

const features = [
  {
    title: 'Platform Access',
    desc: 'Hold $SNIPER to access advanced trading tools & features',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
  },
  {
    title: 'Community Governance',
    desc: 'Vote on protocol upgrades and platform development',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
    ),
  },
  {
    title: 'Trading Benefits',
    desc: 'Enjoy zero fees and enhanced platform capabilities',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent3"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4M4 11h16"/></svg>
    ),
  },
];

const TokenInfo: React.FC = () => (
  <div className="w-full flex flex-col md:flex-row gap-10 items-stretch py-16">
    <div className="flex-1 flex flex-col">
      <SectionPanel icon={<span className="text-accent text-3xl">$</span>} accent="accent" className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-audiowide font-bold text-heading mb-4">$SNIPER Token</h2>
          <p className="text-text mb-8">
            The native utility token powering the SNIPER ecosystem, designed to align incentives across users, liquidity providers, and the platform. $SNIPER represents more than just a token – it's your key to accessing premium features, participating in governance, and earning rewards through various platform activities. SNIPER holders become true stakeholders in the future of decentralized trading.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="bg-accent3 text-heading px-6 py-2 rounded-lg font-audiowide font-bold hover:bg-accent2 transition">Buy $SNIPER</button>
          <button className="border border-accent2 text-accent2 px-6 py-2 rounded-lg font-audiowide font-bold hover:bg-card hover:text-heading transition">Learn More</button>
        </div>
      </SectionPanel>
    </div>
    <div className="flex-1 flex flex-col gap-6 justify-between">
      {features.map((f, i) => (
        <SectionPanel key={i} icon={f.icon} accent={i === 0 ? 'accent2' : i === 1 ? 'accent' : 'accent3'} className="h-full flex items-center">
          <div>
            <div className="text-lg font-audiowide font-bold text-heading mb-1">{f.title}</div>
            <div className="text-text text-base">{f.desc}</div>
          </div>
        </SectionPanel>
      ))}
    </div>
  </div>
);

export default TokenInfo; 