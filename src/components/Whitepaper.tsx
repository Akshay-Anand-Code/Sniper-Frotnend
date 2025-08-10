import React, { useState, useEffect, useRef } from 'react';
import WhitepaperSidebar from './WhitepaperSidebar';
import MarkdownSection from './MarkdownSection';
import { sidebarSections } from '../whitepaper/sidebarSections';
import { SidebarSection, SubSection } from '../whitepaper/types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Helper function to find the section or subsection title by filename
const findSectionTitle = (filename: string): string => {
  // Check main sections
  const mainSection = sidebarSections.find(section => section.filename === filename);
  if (mainSection) return mainSection.title;
  
  // Check subsections
  for (const section of sidebarSections) {
    if (section.subsections) {
      const subsection = section.subsections.find(sub => sub.filename === filename);
      if (subsection) return subsection.title;
    }
  }
  
  return 'Unknown Section';
};

const Whitepaper: React.FC = () => {
  const [activeSection, setActiveSection] = useState(sidebarSections[0].filename);
  const [activePage, setActivePage] = useState(0);
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Fetch content and split into pages
  useEffect(() => {
    setLoading(true);
    fetch(`/whitepaper/${activeSection}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then((content) => {
        // Reset to first page when changing sections
        setActivePage(0);
        
        // Don't strip the content - display it directly
        setPages([content]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setPages(['# Section not found']);
      });
  }, [activeSection]);
  
  // Handle page navigation
  const nextPage = () => {
    if (activePage < pages.length - 1) {
      setActivePage(activePage + 1);
      // Scroll to top when changing pages
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }
  };
  
  const prevPage = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
      // Scroll to top when changing pages
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }
  };
  
  // Handle section change
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setActivePage(0); // Reset to first page when changing sections
  };

  return (
    <div className="flex min-h-screen bg-gray-950">
      <WhitepaperSidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div 
          ref={contentRef}
          className="flex-1 overflow-y-auto px-4 py-4 md:px-8 md:py-6"
        >
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse flex space-x-2">
                <div className="w-3 h-3 bg-accent3 rounded-full"></div>
                <div className="w-3 h-3 bg-accent3 rounded-full animation-delay-200"></div>
                <div className="w-3 h-3 bg-accent3 rounded-full animation-delay-400"></div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 rounded-xl shadow-lg p-6 md:p-8 mb-4">
                <h2 className="text-xl font-heading font-bold mb-6 tracking-wide uppercase text-accent3">
                  {findSectionTitle(activeSection)}
                </h2>
                {pages[activePage] ? (
                  <MarkdownSection content={pages[activePage]} />
                ) : (
                  <div className="text-accent3 p-4 text-center">Loading content...</div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Pagination controls - removed since we're not paginating content anymore */}
      </main>
    </div>
  );
};

export default Whitepaper; 