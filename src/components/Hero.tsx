import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <section className="w-full py-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Heading and Logo */}
        <div className="relative flex flex-col justify-center items-center mb-2 z-10" style={{ minHeight: '180px' }}>
          {/* Glow */}
          <div
            className="absolute inset-0 flex justify-center items-center"
            aria-hidden="true"
          >
            <div
              className="rounded-full blur-2xl"
              style={{
                width: '320px',
                height: '90px',
                background: 'radial-gradient(ellipse at center, #fff 0%, #00ffe7 60%, transparent 100%)',
                opacity: 0.18,
                zIndex: 0,
              }}
            />
          </div>
          {/* Logo with V2.0 badge */}
          <div className="relative inline-block">
            <img src="/eros.png" alt="EROS Logo" className="relative z-10 h-32 md:h-44 w-auto mx-auto" />
            <span className="absolute -top-2 -right-2 bg-black/80 px-3 py-1 rounded-lg text-accent3 font-bold text-xs md:text-base tracking-widest shadow-lg border border-accent3">V2.0</span>
          </div>
        </div>
        <p className="text-lg md:text-xl text-heading-white mb-4 max-w-2xl mx-auto relative z-10">
          The ultimate toolkit for lightning-fast, secure token sniping on Solana. Experience professional-grade automation and analytics.
        </p>
        <div className="flex gap-4 relative z-10 mb-6">
          {/* Learn More button removed */}
        </div>
        {/* Video embedded in hero section */}
        <div className="w-full flex justify-center items-center">
          <video
            className="w-full max-w-3xl rounded-lg shadow-lg object-cover"
            src="/erosvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ minHeight: '200px', maxHeight: '340px' }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero; 