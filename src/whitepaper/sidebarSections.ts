import { SidebarSection } from './types';

export const sidebarSections: SidebarSection[] = [
  { 
    title: 'Executive Summary',
    filename: 'executive-summary' 
  },
  { 
    title: 'Introduction',
    filename: 'introduction',
    subsections: [
      { title: 'Vision & Mission', id: 'vision-mission', filename: 'vision-mission' },
      { title: 'Market Overview', id: 'market-overview', filename: 'market-overview' },
      { title: 'Platform at a Glance', id: 'platform-overview', filename: 'platform-overview' }
    ]
  },
  { 
    title: 'Market Challenges',
    filename: 'problem-statement',
    subsections: [
      { title: 'Velocity & Execution', id: 'velocity-execution', filename: 'velocity-execution' },
      { title: 'Fragmented Liquidity', id: 'fragmented-liquidity', filename: 'fragmented-liquidity' },
      { title: 'Information Overload', id: 'information-overload', filename: 'information-overload' },
      { title: 'Technical Complexity', id: 'technical-complexity', filename: 'technical-complexity' },
      { title: 'Risk Assessment', id: 'risk-assessment', filename: 'risk-assessment' },
      { title: 'Need for Advanced Solutions', id: 'need-for-advanced-solutions', filename: 'need-for-advanced-solutions' }
    ]
  },
  { 
    title: 'EROS Platform',
    filename: 'solution',
    subsections: [
      { title: 'Platform Architecture', id: 'platform-architecture', filename: 'platform-architecture' },
      { title: 'Key Advantages', id: 'key-advantages', filename: 'key-advantages' },
      { title: 'Integration Ecosystem', id: 'integration-ecosystem', filename: 'integration-ecosystem' }
    ]
  },
  { 
    title: 'Technology Stack',
    filename: 'core-technology-and-system-infra',
    subsections: [
      { title: 'Blockchain Integration', id: 'blockchain-integration', filename: 'blockchain-integration' },
      { title: 'AI & ML Framework', id: 'ai-ml-framework', filename: 'ai-ml-framework' },
      { title: 'Data Processing', id: 'data-processing', filename: 'data-processing' },
      { title: 'Security Architecture', id: 'security-architecture', filename: 'security-architecture' }
    ]
  },
  { 
    title: 'Trading Tools Suite',
    filename: 'tools-detail',
    subsections: [
      { title: 'AI Analyst', id: 'ai-analyst', filename: 'ai-analyst' },
      { title: 'Intel Tracker', id: 'intel-tracker', filename: 'intel-tracker' },
      { title: 'AI Agent', id: 'ai-agent', filename: 'ai-agent' },
      { title: 'Investigator', id: 'investigator', filename: 'investigator' },
      { title: 'Sniper Bot', id: 'sniper-bot', filename: 'sniper-bot' }
    ]
  },

  { 
    title: 'Strategic Roadmap',
    filename: 'roadmap',
    subsections: [
      { title: 'Development Timeline', id: 'development-timeline' },
      { title: 'Future Innovations', id: 'future-innovations' },
      { title: 'Partnership Strategy', id: 'partnership-strategy' }
    ]
  }
];