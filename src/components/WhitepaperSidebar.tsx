import React from 'react';
import { sidebarSections } from '../whitepaper/sidebarSections';

interface WhitepaperSidebarProps {
  activeSection: string;
  onSectionChange: (filename: string) => void;
}

const WhitepaperSidebar: React.FC<WhitepaperSidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-full p-6 border-r border-gray-800">
      <h2 className="text-xl font-bold mb-6 tracking-wide">Contents</h2>
      <nav>
        <ul className="space-y-2">
          {sidebarSections.map((section) => (
            <li key={section.filename}>
              <button
                className={`w-full text-left px-3 py-2 rounded transition-colors duration-150 ${
                  activeSection === section.filename
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
                onClick={() => onSectionChange(section.filename)}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default WhitepaperSidebar; 