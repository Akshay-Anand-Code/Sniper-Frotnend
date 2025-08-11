import React, { ReactNode } from 'react';

interface SectionPanelProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  accent?: string; // e.g. 'accent', 'accent2', etc.
  style?: React.CSSProperties;
}

const SectionPanel: React.FC<SectionPanelProps> = ({ children, className = '', icon, accent = 'accent2', style }) => {
  return (
    <div
      className={`relative bg-card border border-border rounded-xl shadow-card p-6 flex flex-col items-center gap-4 ${className}`}
      style={{ minHeight: '120px', boxShadow: '0 0 16px 0 #3bb0ff22, 0 2px 4px 0 #1a2e4a11', ...style }}
    >
      {icon && (
        <div className={`flex-shrink-0 flex items-center justify-center`}>
          {icon}
        </div>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default SectionPanel; 