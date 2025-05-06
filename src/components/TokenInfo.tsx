import React from 'react';
import SectionPanel from './SectionPanel';
import { FiLock, FiUser, FiCalendar, FiDollarSign } from 'react-icons/fi';

const iconWrapper = (icon: React.ReactElement) => (
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/80">
    {React.cloneElement(icon, { className: `${icon.props.className || ''} text-emerald-400 text-2xl` })}
  </div>
);

const features = [
  {
    title: 'Platform Access',
    desc: 'Hold $EROS to access advanced trading tools & features',
    icon: iconWrapper(<FiLock />),
  },
  {
    title: 'Community Governance',
    desc: 'Vote on protocol upgrades and platform development',
    icon: iconWrapper(<FiUser />),
  },
  {
    title: 'Trading Benefits',
    desc: 'Enjoy zero fees and enhanced platform capabilities',
    icon: iconWrapper(<FiCalendar />),
  },
];

const TokenInfo: React.FC = () => (
  <div className="w-full flex flex-col md:flex-row gap-10 items-stretch py-16">
    <div className="flex-1 flex flex-col">
      <SectionPanel icon={iconWrapper(<FiDollarSign />)} accent="accent" className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-audiowide font-bold text-heading-yellow mb-4">$Eros</h2>
          <p className="text-text mb-8">
            The native utility token powering the EROS ecosystem, designed to align incentives across users, liquidity providers, and the platform. $EROS represents more than just a token – it's your key to accessing premium features, participating in governance, and earning rewards through various platform activities. EROS holders become true stakeholders in the future of decentralized trading.
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="border-2 border-accent2 text-heading-white bg-transparent px-6 py-2 rounded-lg font-audiowide font-bold transition hover:border-accent3 hover:text-accent3">Buy $EROS</button>
          <button className="border-2 border-accent2 text-heading-white bg-transparent px-6 py-2 rounded-lg font-audiowide font-bold transition hover:border-accent3 hover:text-accent3">Learn More</button>
        </div>
      </SectionPanel>
    </div>
    <div className="flex-1 flex flex-col gap-6 justify-between">
      {features.map((f, i) => (
        <SectionPanel key={i} icon={null} accent={i === 0 ? 'accent2' : i === 1 ? 'accent' : 'accent3'} className="h-full flex items-center">
          <div className="flex flex-row items-center gap-6 w-full">
            {f.icon}
            <div className="flex flex-col justify-center text-left">
              <div className="text-lg font-audiowide font-bold text-heading-yellow mb-1">{f.title}</div>
              <div className="text-text text-base">{f.desc}</div>
            </div>
          </div>
        </SectionPanel>
      ))}
    </div>
  </div>
);

export default TokenInfo; 