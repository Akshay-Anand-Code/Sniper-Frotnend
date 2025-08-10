import React, { useState } from 'react';
import { sidebarSections } from '../whitepaper/sidebarSections';
import { SubSection } from '../whitepaper/types';

interface WhitepaperSidebarProps {
  activeSection: string;
  onSectionChange: (filename: string) => void;
}

const WhitepaperSidebar: React.FC<WhitepaperSidebarProps> = ({ activeSection, onSectionChange }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (filename: string) => {
    if (expandedSections.includes(filename)) {
      setExpandedSections(expandedSections.filter(s => s !== filename));
    } else {
      setExpandedSections([...expandedSections, filename]);
    }
  };

  // Auto-expand the active section
  React.useEffect(() => {
    if (activeSection && !expandedSections.includes(activeSection)) {
      setExpandedSections(prev => [...prev, activeSection]);
    }
  }, [activeSection]);

  const [sidebarVisible, setSidebarVisible] = useState(true);
  
  // Toggle sidebar visibility (for mobile)
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  
  return (
    <>
      {/* Mobile sidebar toggle button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-accent3 text-black p-2 rounded-full shadow-lg"
        onClick={toggleSidebar}
        aria-label={sidebarVisible ? "Hide sidebar" : "Show sidebar"}
      >
        {sidebarVisible ? '←' : '→'}
      </button>
      
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 fixed md:static top-0 left-0 z-40 w-64 md:w-72 bg-gray-900 text-white h-full border-r border-gray-800 overflow-y-auto md:translate-x-0`}
      >
        <div className="p-6">
          <h2 className="text-xl font-heading font-bold mb-6 tracking-wide uppercase text-accent3">Contents</h2>
          <nav>
            <ul className="space-y-1">
              {sidebarSections.map((section) => {
                const isActive = activeSection === section.filename;
                const hasSubsections = section.subsections && section.subsections.length > 0;
                const isExpanded = expandedSections.includes(section.filename);
                
                return (
                  <li key={section.filename} className="mb-2">
                    <div className="flex items-center">
                      {hasSubsections && (
                        <button 
                          className="w-4 h-4 flex items-center justify-center text-xs mr-1 text-accent3 hover:text-accent4"
                          onClick={() => toggleSection(section.filename)}
                        >
                          {isExpanded ? '▼' : '▶'}
                        </button>
                      )}
                      <button
                        className={`w-full text-left px-3 py-2 rounded transition-colors duration-150 font-body ${
                          isActive
                            ? 'bg-accent3 text-black font-semibold'
                            : 'hover:bg-gray-800 text-gray-300'
                        }`}
                        onClick={() => {
                          onSectionChange(section.filename);
                          // Close sidebar on mobile when selecting a section
                          if (window.innerWidth < 768) {
                            setSidebarVisible(false);
                          }
                        }}
                      >
                        {section.title}
                      </button>
                    </div>
                    
                    {hasSubsections && isExpanded && (
                      <ul className="pl-6 mt-1 space-y-1">
                        {section.subsections.map((subsection) => (
                          <li key={subsection.id}>
                            <a 
                              href={`#${subsection.id}`}
                              className="block text-sm px-3 py-1.5 rounded text-gray-400 hover:text-accent3 hover:bg-gray-800/50 transition-colors duration-150"
                              onClick={(e) => {
                                e.preventDefault();
                                // If subsection has its own file, use that instead of the parent section
                                if (subsection.filename) {
                                  onSectionChange(subsection.filename);
                                } else {
                                  onSectionChange(section.filename);
                                  // Only scroll to ID if we're staying on the same page
                                  setTimeout(() => {
                                    const element = document.getElementById(subsection.id);
                                    if (element) {
                                      element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                  }, 100);
                                }
                                
                                // Close sidebar on mobile when selecting a subsection
                                if (window.innerWidth < 768) {
                                  setSidebarVisible(false);
                                }
                              }}
                            >
                              {subsection.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
      
      {/* Overlay for mobile when sidebar is visible */}
      {sidebarVisible && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarVisible(false)}
        />
      )}
    </>
  );
};

export default WhitepaperSidebar; 