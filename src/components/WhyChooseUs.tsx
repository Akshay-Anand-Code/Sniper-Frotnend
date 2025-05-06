import React from 'react';
import SectionPanel from './SectionPanel';
import { FiShield, FiZap, FiTool, FiUsers, FiClock, FiTrendingUp, FiMessageCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const iconWrapper = (icon: React.ReactElement, accent: string = 'accent2') => (
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-900/80">
    {React.cloneElement(icon, { className: `${icon.props.className || ''} text-emerald-400 text-2xl` })}
  </div>
);

const stats = [
  { title: '99.9%', desc: 'Uptime', sub: 'Reliable platform availability', icon: iconWrapper(<FiClock />, 'accent2') },
  { title: '<0.1%', desc: 'Average Slippage', sub: 'Optimized trade execution', icon: iconWrapper(<FiTrendingUp />, 'accent3') },
  { title: '24/7', desc: 'Support', sub: 'Always here to help', icon: iconWrapper(<FiMessageCircle />, 'accent') },
];

const features = [
  { title: 'Non-Custodial Security', desc: 'Your assets remain in your control. We never store your private keys or have access to your funds.', icon: iconWrapper(<FiShield />, 'accent2'), bullets: ['Private keys never leave your wallet', 'Audited smart contracts'] },
  { title: 'Lightning Fast', desc: 'Execute trades instantly with minimal slippage thanks to our optimized routing and deep liquidity pools.', icon: iconWrapper(<FiZap />, 'accent3'), bullets: ['Sub-second trade execution', 'Optimized routing algorithms'] },
  { title: 'Advanced Tools', desc: 'Professional-grade trading tools, real-time analytics, and customizable automation features for both novice and professional traders.', icon: iconWrapper(<FiTool />, 'accent'), bullets: ['Custom trading bots', 'Real-time market analysis'] },
  { title: 'Community Driven', desc: 'Join a thriving community of traders and developers building the future of DeFi. Participate in governance, access exclusive events, and earn loyalty rewards as you help shape the platform.', icon: iconWrapper(<FiUsers />, 'accent4'), bullets: ['Governance system', 'Community events', 'Loyalty rewards'] },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const WhyChooseUs: React.FC = () => (
  <section className="w-full py-16">
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((s, i) => (
        <motion.div key={i} variants={cardVariants}>
          <SectionPanel icon={s.icon} accent={i === 0 ? 'accent2' : i === 1 ? 'accent3' : 'accent'} className="items-center text-center">
            <div className="text-3xl font-audiowide font-bold text-heading-yellow mb-1">{s.title}</div>
            <div className="text-accent2 font-audiowide font-bold text-lg mb-1">{s.desc}</div>
            <div className="text-text text-sm">{s.sub}</div>
          </SectionPanel>
        </motion.div>
      ))}
    </motion.div>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {features.map((f, i) => (
        <motion.div key={i} variants={cardVariants}>
          <SectionPanel icon={f.icon} accent={['accent2','accent3','accent','accent4'][i]} className="h-full">
            <div className="flex flex-col h-full justify-start items-start text-left w-full">
              <div className="text-2xl font-audiowide font-bold text-heading-yellow mb-3">{f.title}</div>
              <div className="text-text text-base mb-4 leading-relaxed">{f.desc}</div>
              <ul className="list-disc list-inside text-text text-sm pl-2 space-y-1 font-mono">
                {f.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </SectionPanel>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default WhyChooseUs; 