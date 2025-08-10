import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import CustomTable from './CustomTable';

interface MarkdownSectionProps {
  filename?: string;  // Optional now
  content?: string;   // Can provide content directly
}

const MarkdownSection: React.FC<MarkdownSectionProps> = ({ filename, content: providedContent }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(providedContent ? false : true);
  
  // Function to parse markdown tables and convert them to structured data
  const parseMarkdownTable = (markdown: string) => {
    const tables: Array<{ headers: string[], rows: string[][] }> = [];
    const lines = markdown.split('\n');
    
    let inTable = false;
    let currentTable: { headers: string[], rows: string[][] } = { headers: [], rows: [] };
    let headerSeparatorLine = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check if this line starts a table
      if (line.startsWith('|') && !inTable) {
        inTable = true;
        currentTable = { headers: [], rows: [] };
        
        // Parse headers
        const headerCells = line.split('|')
          .filter(cell => cell.trim() !== '')
          .map(cell => cell.trim());
        currentTable.headers = headerCells;
        
        // Check if next line is separator
        if (i + 1 < lines.length && lines[i + 1].trim().startsWith('|') && lines[i + 1].includes('-')) {
          headerSeparatorLine = i + 1;
          i++; // Skip the separator line
        }
      } 
      // Parse table rows
      else if (inTable && line.startsWith('|')) {
        const cells = line.split('|')
          .filter(cell => cell.trim() !== '')
          .map(cell => cell.trim());
        
        currentTable.rows.push(cells);
      }
      // End of table
      else if (inTable && !line.startsWith('|')) {
        tables.push(currentTable);
        inTable = false;
      }
    }
    
    // If we're still in a table at the end of processing
    if (inTable) {
      tables.push(currentTable);
    }
    
    return tables;
  };

  useEffect(() => {
    // If content is provided directly, use it
    if (providedContent) {
      setContent(providedContent);
      setLoading(false);
      setError(false);
      return;
    }
    
    // Otherwise fetch from file if filename is provided
    if (filename) {
      setError(false);
      setLoading(true);
      fetch(`/whitepaper/${filename}.md`)
        .then((res) => {
          if (!res.ok) throw new Error('Not found');
          return res.text();
        })
        .then((text) => {
          setContent(text);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    } else {
      setError(true);
      setLoading(false);
    }
  }, [filename, providedContent]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-2">
          <div className="w-3 h-3 bg-accent3 rounded-full"></div>
          <div className="w-3 h-3 bg-accent3 rounded-full animation-delay-200"></div>
          <div className="w-3 h-3 bg-accent3 rounded-full animation-delay-400"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-accent3 p-8 text-center">Section not found or still being written.</div>;
  }

  return (
    <div className="relative">
      {/* Content container with improved layout */}
      <div className="relative z-10">
        <ReactMarkdown
          components={{
            h1: ({node, ...props}) => (
              <h1 id={props.children[0]?.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')} 
                className="font-heading uppercase text-3xl md:text-4xl text-accent3 font-bold mb-6 tracking-wider pb-3 flex items-center gap-3 border-b border-accent2/30">
                <span className="inline-block w-8 h-8 rounded-full bg-accent3/20 text-accent3 font-bold text-lg flex items-center justify-center mr-2">
                  {props.children[0]?.toString().match(/^\d+/) ? props.children[0]?.toString().match(/^\d+/)[0] : ''}
                </span>
                {props.children}
              </h1>
            ),
            h2: ({node, ...props}) => {
              const id = props.children[0]?.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
              return (
                <h2 id={id} className="font-heading uppercase text-2xl md:text-3xl text-accent2 font-bold mt-10 mb-4 tracking-wide border-b border-accent2/20 pb-2 flex items-center gap-2">
                  {props.children}
                </h2>
              );
            },
            h3: ({node, ...props}) => {
              const id = props.children[0]?.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
              return (
                <h3 id={id} className="font-heading uppercase text-xl text-accent3 font-semibold mt-6 mb-3 tracking-wide flex items-center gap-2">
                  {props.children}
                </h3>
              );
            },
            ul: ({node, ...props}) => <ul className="list-disc list-outside text-accent2 pl-6 my-4 space-y-1">{props.children}</ul>,
            ol: ({node, ...props}) => <ol className="list-decimal list-outside text-accent2 pl-6 my-4 space-y-1">{props.children}</ol>,
            li: ({node, ...props}) => <li className="mb-1 text-base text-text font-body leading-relaxed">{props.children}</li>,
            p: ({node, ...props}) => <p className="text-base text-gray-100 mb-4 leading-relaxed font-body">{props.children}</p>,
            strong: ({node, ...props}) => <strong className="text-accent3 font-bold">{props.children}</strong>,
            a: ({node, ...props}) => <a className="text-accent2 underline hover:text-accent3 transition" {...props} />,
            blockquote: ({node, ...props}) => (
              <blockquote className="border-l-4 border-accent3 pl-4 py-1 my-5 bg-accent3/5 rounded-r">
                <p className="italic text-gray-300 font-body">{props.children}</p>
              </blockquote>
            ),
            code: ({node, ...props}) => {
              // Check if this is an ASCII table
              const content = props.children?.toString() || '';
              if (content.includes('┌') || content.includes('│') || content.includes('└') || content.includes('┐') || content.includes('┘')) {
                // This is likely an ASCII table, replace it with a styled div
                return (
                  <div className="my-4 p-4 bg-gray-900/50 rounded-lg border border-accent2/30 overflow-x-auto">
                    <pre className="text-accent3 font-mono text-sm whitespace-pre">{props.children}</pre>
                  </div>
                );
              }
              // Regular code
              return <code className="bg-gray-900 text-accent3 px-2 py-1 rounded text-sm font-mono">{props.children}</code>;
            },
            table: ({node, ...props}) => {
              // Extract the raw markdown from the node's value
              const rawMarkdown = node?.value || '';
              
              // Parse the table
              const tables = parseMarkdownTable(rawMarkdown);
              
              // If we successfully parsed a table, use our custom component
              if (tables.length > 0) {
                return <CustomTable headers={tables[0].headers} rows={tables[0].rows} />;
              }
              
              // Fallback to default rendering
              return (
                <div className="overflow-x-auto my-5 rounded-lg border border-accent2/30 shadow-lg">
                  <table className="min-w-full divide-y divide-accent2/30">{props.children}</table>
                </div>
              );
            },
            thead: ({node, ...props}) => <thead className="bg-accent2/20 border-b border-accent2/30">{props.children}</thead>,
            tbody: ({node, ...props}) => <tbody className="divide-y divide-accent2/20">{props.children}</tbody>,
            tr: ({node, ...props}) => {
              // Check if this is a separator row (all dashes or pipes)
              const isAllChildren = props.children && Array.isArray(props.children);
              const isSeparatorRow = isAllChildren && 
                props.children.every(child => {
                  const content = child?.props?.children?.toString() || '';
                  return content.trim() === '' || /^[-|]+$/.test(content.trim());
                });
              
              // If it's a separator row, don't render it
              if (isSeparatorRow) {
                return null;
              }
              
              // Otherwise render normally
              return <tr className="hover:bg-accent2/10">{props.children}</tr>;
            },
            th: ({node, ...props}) => <th className="px-4 py-3 text-left text-sm font-heading text-accent3 uppercase font-bold">{props.children}</th>,
            td: ({node, ...props}) => <td className="px-4 py-3 text-sm font-body text-gray-100">{props.children}</td>,
            img: ({node, ...props}) => (
              <div className="flex justify-center my-5">
                <img {...props} className="max-w-full rounded-lg shadow-lg border border-accent2/30" />
              </div>
            ),
            hr: ({node, ...props}) => <hr className="my-6 border-t border-accent2/30" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownSection; 