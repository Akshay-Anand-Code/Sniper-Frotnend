import React, { useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import ErosAIAgent from './ErosAIAgent';

const FloatingChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#101c1c] hover:bg-accent2 text-white px-4 py-3 rounded-full shadow-lg transition-all focus:outline-none"
        style={{ boxShadow: '0 4px 24px 0 #0008' }}
        onClick={() => setOpen(true)}
        aria-label="Open EROS AI Chatbot"
      >
        <FaRobot className="text-2xl" />
        <span className="font-bold font-audiowide text-base">EROS AI</span>
      </button>

      {/* Chat Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:items-end justify-end bg-black/20 md:bg-transparent" onClick={() => setOpen(false)}>
          <div
            className="w-full md:w-[380px] h-[70vh] md:h-[600px] bg-card border border-accent2 rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in md:mr-8 md:mb-8"
            style={{ maxWidth: '95vw' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background">
              <div className="flex items-center gap-2">
                <FaRobot className="text-accent2 text-xl" />
                <span className="font-bold text-lg font-audiowide text-accent2">EROS AI</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-accent2 hover:text-accent4 text-xl focus:outline-none" aria-label="Close chat">
                <FaTimes />
              </button>
            </div>
            {/* Chat UI */}
            <div className="flex-1 overflow-y-auto bg-card px-4 py-3 md:px-5 md:py-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              <ErosAIAgent />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot; 