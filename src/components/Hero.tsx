import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center text-center">
      <div className="relative flex justify-center items-center mb-4">
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
        {/* Heading */}
        <h1 className="relative z-10 text-5xl md:text-6xl font-audiowide font-bold text-heading">
          EROS
        </h1>
      </div>
      <p className="text-lg md:text-xl text-text mb-10 max-w-2xl mx-auto">
        The ultimate toolkit for lightning-fast, secure token sniping on Solana. Experience professional-grade automation and analytics.
      </p>
      <div className="flex gap-4">
        <button className="bg-accent3 text-heading px-8 py-3 rounded-lg font-audiowide font-bold hover:bg-accent2 transition text-lg">Start Sniping</button>
        <button className="border border-accent2 text-accent2 px-8 py-3 rounded-lg font-audiowide font-bold hover:bg-card hover:text-heading transition text-lg">Learn More</button>
      </div>
    </section>
  );
};

export default Hero; 