import React from 'react';
import SectionPanel from './SectionPanel';
import { FiLock, FiUser, FiCalendar, FiDollarSign } from 'react-icons/fi';
import Spline from '@splinetool/react-spline';

interface TokenInfoProps {
  onWhitepaperClick?: () => void;
}

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

const TokenInfo: React.FC<TokenInfoProps> = ({ onWhitepaperClick }) => (
  <div className="w-full flex flex-col gap-10 items-stretch py-16">
    {/* Top Row: Info Panel + Spline */}
    <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch">
      {/* Info Panel */}
      <div className="flex-1 flex flex-col justify-between">
        <SectionPanel accent="accent" className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-audiowide font-bold text-heading-yellow mb-4">$Eros</h2>
            <p className="text-text mb-6">
              The native utility token powering the EROS ecosystem, designed to align incentives across users, liquidity providers, and the platform. 
              $EROS represents more than just a token – it's your key to accessing premium features, participating in governance, and earning rewards through various platform activities. 
              EROS holders become true stakeholders in the future of decentralized trading.
            </p>
            <div className="mt-4">
              <button
                onClick={onWhitepaperClick}
                className="btn border-2 border-accent2 text-white bg-transparent px-6 py-2 rounded-lg transition hover:border-accent3 hover:text-accent3"
              >
                Learn More
              </button>
            </div>
          </div>

        </SectionPanel>
      </div>
      {/* Spline Model as Circle */}
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-full bg-transparent shadow-lg flex items-center justify-center"
          style={{ width: '480px', height: '480px', minWidth: '320px', minHeight: '320px', aspectRatio: '1/1', overflow: 'hidden', background: 'transparent' }}>
          <Spline
            scene="https://prod.spline.design/pv-jKA7u-ovY644h/scene.splinecode"
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
          />
        </div>
      </div>
    </div>
    {/* Bottom Row: Feature Cards */}
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      {features.map((f, i) => (
        <div key={i} className="flex-1 flex">
          <SectionPanel accent={i === 0 ? 'accent2' : i === 1 ? 'accent' : 'accent3'} className="h-full w-full flex items-center">
            <div className="flex flex-col justify-center text-left w-full">
              <div className="text-lg font-audiowide font-bold text-heading-yellow mb-1">{f.title}</div>
              <div className="text-text text-base">{f.desc}</div>
            </div>
          </SectionPanel>
        </div>
      ))}
    </div>
  </div>
);

export default TokenInfo; 