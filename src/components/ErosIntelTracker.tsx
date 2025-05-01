import React, { useEffect, useState } from 'react';

interface NewsItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
}

const RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://app.chaingpt.org/rssfeeds.xml';

const ErosIntelTracker: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchNews = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(RSS_URL);
      const data = await response.json();
      if (data.items) {
        setNews(data.items.slice(0, 5)); // Only latest 5
      } else {
        setNews([]);
      }
    } catch (err) {
      setError('Failed to fetch news feed.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 120000); // auto-update every 2 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-accent2 mb-2">EROS INTEL TRACKER</h2>
        <p className="text-muted text-base">Live AI-generated crypto news from ChainGPT</p>
      </div>
      <div className="bg-card border border-accent2 rounded-xl p-6 min-h-[350px]">
        {loading && <div className="text-accent2">Loading news...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && news.length === 0 && <div className="text-muted">No news found.</div>}
        <ul className="space-y-6">
          {news.map((item, idx) => (
            <li key={idx} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-accent2 hover:underline">
                {item.title}
              </a>
              <div className="text-xs text-muted mb-1">{new Date(item.pubDate).toLocaleString()}</div>
              <div className="text-sm text-text mb-2" dangerouslySetInnerHTML={{ __html: item.description.replace(/Read more AI-generated news on:.*/, '').trim() }} />
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent underline">Read more</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ErosIntelTracker; 