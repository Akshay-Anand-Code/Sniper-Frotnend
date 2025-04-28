import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TokenInfo from './components/TokenInfo';
import DeveloperAPI from './components/DeveloperAPI';
import WhyChooseUs from './components/WhyChooseUs';
// import SettingsPanel from './components/SettingsPanel';
import SnipeForm from './components/SnipeForm';
import LiveLogs from './components/LiveLogs';
import StatusCards from './components/StatusCards';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import Whitepaper from './components/Whitepaper';

const sectionSpring = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { type: 'spring', stiffness: 60, damping: 18 },
  viewport: { once: true, amount: 0.2 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const App: React.FC = () => {
  const [showWhitepaper, setShowWhitepaper] = React.useState(false);

  if (showWhitepaper) {
    return (
      <div className="min-h-screen bg-background font-body text-text flex flex-col relative overflow-x-hidden">
        <Navbar onWhitepaperClick={() => setShowWhitepaper(false)} />
        <Whitepaper />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body text-text flex flex-col relative overflow-x-hidden">
      {/* Subtle SVG dot grid background */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{opacity:0.13}} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotgrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#b0b8c1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>
      <div className="relative z-10">
        <Navbar onWhitepaperClick={() => setShowWhitepaper(true)} />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.div {...sectionSpring}><Hero /></motion.div>
            <motion.div {...sectionSpring} className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-stretch">
              <SnipeForm />
              <LiveLogs />
            </motion.div>
            <motion.div {...sectionSpring} className="mt-12">
              <StatusCards />
            </motion.div>
            {/* <SettingsPanel /> */}
            <motion.div {...sectionSpring}><TokenInfo /></motion.div>
            <motion.div {...sectionSpring}><DeveloperAPI /></motion.div>
            <motion.div {...sectionSpring}><WhyChooseUs /></motion.div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App; 