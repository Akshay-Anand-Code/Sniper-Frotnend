export interface SubSection {
  title: string;
  id: string;
  filename?: string; // Optional filename for subsections with their own pages
}

export interface SidebarSection {
  title: string;
  filename: string;
  subsections?: SubSection[];
}