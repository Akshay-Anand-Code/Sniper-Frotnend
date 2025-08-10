import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TokenInfo from './components/TokenInfo';
import DeveloperAPI from './components/DeveloperAPI';
import WhyChooseUs from './components/WhyChooseUs';
import DocsPage from './components/DocsPage';
// import SettingsPanel from './components/SettingsPanel';
import SnipeForm from './components/SnipeForm';
import LiveLogs from './components/LiveLogs';
import StatusCards from './components/StatusCards';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import Whitepaper from './components/Whitepaper';
import AnimatedBackground from './components/AnimatedBackground';
import ErosAIAnalyst from './components/ErosAIAnalyst';
import ErosIntelTracker from './components/ErosIntelTracker';
import ErosAIAgent from './components/ErosAIAgent';
import ErosInvestigator from './components/ErosInvestigator';
import JupiterSwapWidget from './components/JupiterSwapWidget';
import SectionHeader from './components/SectionHeader';
import { FaCoins, FaTools, FaCode, FaHandshake } from 'react-icons/fa';
import FloatingChatbot from './components/FloatingChatbot';
import Spline from '@splinetool/react-spline';
import Starfield from './components/Starfield';
import Loader from './components/Loader';
import DocsPage from './components/DocsPage';

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
  const [hash, setHash] = React.useState(window.location.hash);

  // Loader state
  const [loaded, setLoaded] = React.useState(false);
  const [percent, setPercent] = React.useState(0);

  // List of assets to track (add more as needed)
  const assets = [
    '/eros.png',
    '/erosvideo.mp4',
    // Add more asset URLs if needed
  ];

  // Listen for hash changes to update the hash state
  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  React.useEffect(() => {
    let loadedCount = 0;
    const start = Date.now();
    function handleAssetLoad() {
      loadedCount++;
      setPercent(Math.round((loadedCount / assets.length) * 100));
      if (loadedCount === assets.length) {
        const elapsed = Date.now() - start;
        const minDelay = 2000; // 2 seconds
        const remaining = Math.max(0, minDelay - elapsed);
        setTimeout(() => setLoaded(true), remaining);
      }
    }
    assets.forEach((src) => {
      if (src.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = src;
        video.oncanplaythrough = handleAssetLoad;
        video.onerror = handleAssetLoad;
      } else {
        const img = new window.Image();
        img.src = src;
        img.onload = handleAssetLoad;
        img.onerror = handleAssetLoad;
      }
    });
    // eslint-disable-next-line
  }, []);

  if (!loaded) {
    return <Loader percent={percent} />;
  }

  if (showWhitepaper) {
    return (
      <div className="min-h-screen bg-background font-body text-text flex flex-col relative overflow-x-hidden">
        <Navbar onWhitepaperClick={() => setShowWhitepaper(false)} />
        <Whitepaper />
      </div>
    );
  }

  if (hash === '#sniper-bot') {
    return (
      <div className="min-h-screen bg-background font-body text-text flex flex-col relative overflow-x-hidden">
        <div className="relative z-10">
          <Navbar onWhitepaperClick={() => setShowWhitepaper(true)} />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
            <div className="relative mb-8">
              <h2 className="text-3xl font-audiowide font-bold text-center text-accent2 mb-8">Coming soon</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <SnipeForm />
                <LiveLogs />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="text-accent2 font-audiowide font-bold text-lg mb-1">Bot Status</div>
                <div className="text-text">Active</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="text-accent2 font-audiowide font-bold text-lg mb-1">Total Snipes</div>
                <div className="text-text">12</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="text-accent4 font-audiowide font-bold text-lg mb-1">Errors</div>
                <div className="text-text">0</div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  if (hash === '#eros-investigator') {
    return (
      <div className="min-h-screen bg-background font-body text-text flex flex-col relative overflow-x-hidden">
        <div className="relative z-10">
          <Navbar onWhitepaperClick={() => setShowWhitepaper(true)} />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
            <ErosInvestigator />
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  if (hash === '#eros-ai-agent') {
    return (
      <div className="min-h-screen bg-background font-body text-text flex flex-col relative overflow-x-hidden">
        <div className="relative z-10">
          <Navbar onWhitepaperClick={() => setShowWhitepaper(true)} />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
            <ErosAIAgent />
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  if (hash === '#eros-intel-tracker') {
    return (
      <div className="min-h-screen bg-background font-body text-text flex flex-col relative overflow-x-hidden">
        <div className="relative z-10">
          <Navbar onWhitepaperClick={() => setShowWhitepaper(true)} />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
            <ErosIntelTracker />
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  if (hash === '#eros-ai-analyst') {
    return (
      <div className="min-h-screen bg-background font-body text-text flex flex-col relative overflow-x-hidden">
        <div className="relative z-10">
          <Navbar onWhitepaperClick={() => setShowWhitepaper(true)} />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
            <ErosAIAnalyst />
          </main>
          <Footer />
        </div>
      </div>
    );
  }
  
  if (hash === '#docs') {
    return (
      <>
        <Navbar onWhitepaperClick={() => setShowWhitepaper(true)} />
        <DocsPage />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-black font-body text-text flex flex-col relative overflow-x-hidden">
      {/* Shiny glossy overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      {/* Twinkling starfield effect */}
      <Starfield />
      {/* Vignette effect for main landing page */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      <FloatingChatbot />
      <div className="relative z-20">
        <Navbar onWhitepaperClick={() => setShowWhitepaper(true)} />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.div {...sectionSpring}><Hero /></motion.div>
            <div id="eros-token">
              <SectionHeader
                title="$Eros Token"
                subtitle="The native utility token powering the EROS ecosystem."
              />
              <motion.div {...sectionSpring}><TokenInfo onWhitepaperClick={() => setShowWhitepaper(true)} /></motion.div>
            </div>
            <SectionHeader
              title="Why Choose Us"
              subtitle="Professional-grade tools, analytics, and automation."
            />
            <motion.div {...sectionSpring}><WhyChooseUs /></motion.div>
            <SectionHeader
              title="Developer API"
              subtitle="Integrate EROS with your own trading infrastructure."
            />
            <motion.div {...sectionSpring}><DeveloperAPI /></motion.div>
          </motion.div>
        </main>
        {/* Wrapper for Built On section and Footer */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
          {/* Spline 3D Background */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ opacity: 0.35 }}>
            <Spline scene="https://prod.spline.design/DNsQZow13xxBcaab/scene.splinecode" />
          </div>
          {/* Built On Section */}
          <section className="relative w-full flex flex-col items-center justify-center py-20 z-10" style={{ minHeight: '80vh' }}>
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
              <div className="flex flex-col items-center mb-8">
                <div className="bg-emerald-700/20 rounded-full p-3 mb-4">
                  <svg width="32" height="32" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h2 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'Cascadia Mono, monospace' }}>Built on</h2>
                <p className="text-emerald-400 font-mono text-sm mb-6 tracking-widest">INSTITUTIONAL-GRADE PARTNERS</p>
                <p className="text-text text-center max-w-2xl mx-auto mb-8 cascadia-mono text-base md:text-lg">
                  We're revolutionizing your trading experience with cutting-edge intelligence tools, forged through strategic partnerships with the best in the industry. By uniting Solana's lightning-fast blockchain, Jupiter's extensive liquidity aggregation, and QuickNode's robust infrastructure, we've created an unparalleled trading environment. This powerful synergy allows us to deliver sophisticated, institutional-grade features while maintaining the intuitive accessibility you expect. Our collaborations are building a robust ecosystem that redefines the possibilities of decentralized finance, empowering you with the intelligence needed to trade with confidence.
                </p>
              </div>
              <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {/* Solana Card */}
                <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-start shadow-card cascadia-mono" style={{ boxShadow: '0 0 12px 0 #10b98122' }}>
                  <img src="./sol.png" alt="Solana" className="h-10 mb-2" />
                  <span className="text-lg font-bold mb-1">Solana</span>
                  <span className="text-sm text-text">High-performance blockchain infrastructure</span>
                </div>
                {/* Jupiter Card */}
                <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-start shadow-card cascadia-mono" style={{ boxShadow: '0 0 12px 0 #10b98122' }}>
                  <img src="./jupiter.png" alt="Jupiter" className="h-10 mb-2" />
                  <span className="text-lg font-bold mb-1">Jupiter</span>
                  <span className="text-sm text-text">Leading Solana DEX aggregator</span>
                </div>
                {/* QuickNode Card */}
                <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-start shadow-card cascadia-mono" style={{ boxShadow: '0 0 12px 0 #10b98122' }}>
                  <img src="quicknode.png" alt="QuickNode" className="h-10 mb-2" />
                  <span className="text-lg font-bold mb-1">QuickNode</span>
                  <span className="text-sm text-text">Enterprise-grade node infrastructure</span>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <div className="relative z-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 