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
import AnimatedBackground from './components/AnimatedBackground';

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
      <AnimatedBackground 
        direction="horizontal"
        color="#b0b8c1"
        opacity={0.13}
        dotSize={1.5}
        speed={20}
      />
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