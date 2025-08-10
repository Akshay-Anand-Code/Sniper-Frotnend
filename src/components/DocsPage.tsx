import React, { useEffect } from 'react';

const DocsPage: React.FC = () => {
  useEffect(() => {
    console.log('DocsPage component mounted');
    // Force scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-accent2 rounded-xl p-6 md:p-8 shadow-lg">
          <h1 className="text-3xl font-heading font-bold mb-8 tracking-wide uppercase text-accent3 border-b border-accent2/30 pb-4">
            API Documentation
          </h1>
          
          <div className="mb-10">
            <h2 className="text-2xl font-heading uppercase text-accent2 font-bold mb-4">Overview</h2>
            <p className="text-base text-gray-100 mb-4 leading-relaxed font-body">
              The EROS API provides programmatic access to the EROS trading ecosystem, 
              allowing developers to integrate advanced trading capabilities into their own applications.
            </p>
            <p className="text-base text-gray-100 mb-4 leading-relaxed font-body">
              Our open-source API is currently in development and will be released in the near future.
              This documentation will be expanded with comprehensive guides, examples, and reference materials.
            </p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-heading uppercase text-accent2 font-bold mb-4">Coming Soon</h2>
            <ul className="list-disc list-outside text-accent2 pl-6 my-4 space-y-2">
              <li className="text-base text-gray-100 font-body leading-relaxed">
                <strong className="text-accent3 font-bold">SDK Installation Guide</strong>: Step-by-step instructions for installing and configuring the EROS SDK
              </li>
              <li className="text-base text-gray-100 font-body leading-relaxed">
                <strong className="text-accent3 font-bold">Authentication</strong>: Secure API key management and authentication procedures
              </li>
              <li className="text-base text-gray-100 font-body leading-relaxed">
                <strong className="text-accent3 font-bold">Market Data</strong>: Real-time and historical market data endpoints
              </li>
              <li className="text-base text-gray-100 font-body leading-relaxed">
                <strong className="text-accent3 font-bold">Trading Operations</strong>: Order placement, management, and execution
              </li>
              <li className="text-base text-gray-100 font-body leading-relaxed">
                <strong className="text-accent3 font-bold">Analytics</strong>: Advanced market analytics and intelligence
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-lg border border-accent2/20 mb-10">
            <h3 className="text-xl font-heading uppercase text-accent3 font-semibold mb-3">Stay Updated</h3>
            <p className="text-base text-gray-100 mb-4 leading-relaxed font-body">
              Join our community to receive updates about the API release and early access opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://x.com/ErosIntelSol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-transparent text-white px-6 py-2 rounded-lg border-2 border-accent2 hover:border-accent3 hover:text-accent3 transition-all"
              >
                Twitter
              </a>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl font-heading uppercase text-accent2 font-bold mb-6">Development Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Developer 1 */}
              <div className="bg-gray-900/40 p-6 rounded-lg border border-accent2/20 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-accent2/20 mb-4 overflow-hidden flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#fff86b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#fff86b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-heading text-accent3 mb-1">Lead Developer</h3>
                <p className="text-gray-300 font-body mb-3 text-center">Backend & Blockchain Integration</p>
                <p className="text-sm text-gray-400 text-center mb-4">
                  Specializes in Solana blockchain development and high-performance trading systems.
                </p>
              </div>
              
              {/* Developer 2 */}
              <div className="bg-gray-900/40 p-6 rounded-lg border border-accent2/20 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-accent2/20 mb-4 overflow-hidden flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#fff86b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#fff86b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-heading text-accent3 mb-1">Frontend Lead</h3>
                <p className="text-gray-300 font-body mb-3 text-center">UI/UX & API Integration</p>
                <p className="text-sm text-gray-400 text-center mb-4">
                  Expert in React, TypeScript and building intuitive trading interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;