import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  return (
    <>
      <section className="w-full py-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Content Container with Glass Effect */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          {/* Heading and Logo */}
          <div className="relative flex flex-col justify-center items-center mb-2" style={{ minHeight: '180px' }}>
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
                }}
              />
            </div>
            {/* Logo with V2.0 badge */}
            <div className="relative inline-block">
              <img src="/eros.png" alt="EROS Logo" className="relative z-10 h-32 md:h-44 w-auto mx-auto" />
              <span className="absolute -top-2 -right-2 bg-black/80 px-3 py-1 rounded-lg text-accent3 font-bold text-xs md:text-base tracking-widest shadow-lg border border-accent3">V2.0</span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-heading-white mb-10 max-w-2xl mx-auto">
             Experience professional-grade automation and analytics.
          </p>
          {/* Video embedded in hero section */}
          <div className="w-full flex justify-center items-center relative">
            {/* Sky blue glow above video */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: '-38px',
                width: '70%',
                height: '70px',
                pointerEvents: 'none',
                background: 'radial-gradient(ellipse at center, rgba(80,200,255,0.18) 0%, rgba(80,200,255,0.08) 60%, transparent 100%)',
                filter: 'blur(12px)',
                zIndex: 1,
              }}
            />
            <video
              className="w-full max-w-3xl rounded-lg shadow-lg object-cover relative z-10"
              src="/erosvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                minHeight: '200px',
                maxHeight: '340px',
                boxShadow: '0 0 0 3px rgba(80,200,255,0.7), 0 0 24px 8px rgba(80,200,255,0.25)',
                border: '1.5px solid rgba(80,200,255,0.45)',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 