import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownSectionProps {
  filename: string;
}

const MarkdownSection: React.FC<MarkdownSectionProps> = ({ filename }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    fetch(`/whitepaper/${filename}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.text();
      })
      .then(setContent)
      .catch(() => setError(true));
  }, [filename]);

  if (error) {
    return <div className="text-red-500 p-8">Section not found.</div>;
  }

  return (
    <div
      className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/80 border border-accent2 rounded-2xl shadow-2xl p-10 md:p-14 mt-8 mb-8 overflow-hidden"
      style={{
        boxShadow: '0 0 12px 0 #00ffe7, 0 2px 12px 0 #000',
      }}
    >
      {/* Sleek, subtle glow border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-accent2 opacity-10 blur" style={{ zIndex: 0 }} />
      <ReactMarkdown
        components={{
          h1: ({node, ...props}) => <h1 className="font-audiowide text-3xl md:text-4xl text-accent2 font-bold mb-6 tracking-wider border-b border-accent2 pb-2 flex items-center gap-3"><span className="inline-block w-7 h-7 rounded-full bg-accent2/20 text-accent2 font-bold text-lg flex items-center justify-center mr-2">{props.children[0]?.toString().match(/^\d+/) ? props.children[0]?.toString().match(/^\d+/)[0] : ''}</span>{props.children}</h1>,
          h2: ({node, ...props}) => <h2 className="font-audiowide text-2xl md:text-3xl text-accent font-bold mt-8 mb-4 tracking-wide border-b border-accent pb-1 flex items-center gap-2">{props.children}</h2>,
          h3: ({node, ...props}) => <h3 className="font-audiowide text-xl text-accent3 font-semibold mt-6 mb-2 tracking-wide flex items-center gap-2">{props.children}</h3>,
          ul: ({node, ...props}) => <ul className="list-disc list-inside text-accent2 pl-4 my-4 space-y-1">{props.children}</ul>,
          ol: ({node, ...props}) => <ol className="list-decimal list-inside text-accent2 pl-4 my-4 space-y-1">{props.children}</ol>,
          li: ({node, ...props}) => <li className="mb-1 text-base text-text font-medium">{props.children}</li>,
          p: ({node, ...props}) => <p className="text-lg text-gray-100 mb-4 leading-relaxed">{props.children}</p>,
          strong: ({node, ...props}) => <strong className="text-accent2 font-bold">{props.children}</strong>,
          a: ({node, ...props}) => <a className="text-accent3 underline hover:text-accent2 transition" {...props} />,
          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-accent2 pl-4 italic text-accent2/80 my-4">{props.children}</blockquote>,
          code: ({node, ...props}) => <code className="bg-gray-900 text-accent2 px-2 py-1 rounded text-sm font-mono">{props.children}</code>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownSection; 