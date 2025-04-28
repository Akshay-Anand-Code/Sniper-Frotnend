import React, { ReactNode } from 'react';

interface SectionPanelProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  accent?: string; // e.g. 'accent', 'accent2', etc.
}

const SectionPanel: React.FC<SectionPanelProps> = ({ children, className = '', icon, accent = 'accent2' }) => {
  return (
    <div
      className={`relative bg-card border border-border rounded-xl shadow-card p-8 flex items-start gap-6 ${className}`}
      style={{ minHeight: '120px' }}
    >
      {icon && (
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-background flex items-center justify-center border border-${accent}`}>
          {icon}
        </div>
      )}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SectionPanel; 