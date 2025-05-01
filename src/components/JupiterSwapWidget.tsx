import React, { useEffect, useRef, useState } from "react";

// Extend the Window interface for TypeScript
declare global {
  interface Window {
    Jupiter?: any;
  }
}

const RPC_ENDPOINT = process.env.NEXT_PUBLIC_HELIUS_RPC_ENDPOINT || "https://api.mainnet-beta.solana.com";

const JupiterSwapWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Wait for the Jupiter script to be loaded
    const interval = setInterval(() => {
      if (window.Jupiter && containerRef.current) {
        window.Jupiter.init({
          displayMode: "integrated",
          integratedTargetId: "jupiter-terminal-container",
          endpoint: RPC_ENDPOINT,
          containerClassName: "max-h-[90vh] w-full lg:w-[600px] mx-auto",
        });
        setWidgetLoaded(true);
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="jupiter-terminal-container" ref={containerRef} />
      {!widgetLoaded && (
        <div className="text-center text-accent2 mt-4">Loading Jupiter Swap Widget...</div>
      )}
    </div>
  );
};

export default JupiterSwapWidget; 