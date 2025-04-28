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
    <div className="prose prose-invert max-w-none text-gray-100 bg-gray-800 p-8 rounded-lg shadow-lg">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownSection; 