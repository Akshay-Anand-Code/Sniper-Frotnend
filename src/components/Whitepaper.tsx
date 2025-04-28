import React, { useState } from 'react';
import WhitepaperSidebar from './WhitepaperSidebar';
import MarkdownSection from './MarkdownSection';
import { sidebarSections } from '../whitepaper/sidebarSections';

const Whitepaper: React.FC = () => {
  const [activeSection, setActiveSection] = useState(sidebarSections[0].filename);

  return (
    <div className="flex min-h-screen bg-gray-950">
      <WhitepaperSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 flex flex-col items-center justify-start p-12">
        <div className="w-full max-w-3xl">
          <MarkdownSection filename={activeSection} />
        </div>
      </main>
    </div>
  );
};

export default Whitepaper; 