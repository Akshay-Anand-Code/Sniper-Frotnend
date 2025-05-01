import React, { useState, useRef, useEffect } from 'react';
import { getErosResponse } from '../services/erosAIService';

const EROS_PERSONALITY = {
  name: "EROS AI AGENT",
  bio: [
    "Unlocking alpha in the crypto markets with data-driven insights.",
    "Navigating volatility with precision and strategic analysis.",
    "Empowering traders with actionable intelligence for optimal decisions.",
    "Decoding market sentiment and identifying emerging trends.",
    "Providing clear and concise analysis in a dynamic crypto landscape.",
    "Your AI-powered partner for informed crypto trading.",
    "Focusing on risk management and sustainable growth in digital assets.",
    "Analyzing blockchain fundamentals and their impact on price action.",
    "Staying ahead of the curve in the rapidly evolving DeFi and Web3 space.",
    "Delivering timely updates and critical market observations.",
    "Committed to data integrity and unbiased analytical perspectives.",
    "Helping you cut through the noise and focus on profitable opportunities.",
    "Monitoring on-chain metrics and their correlation to market movements.",
    "Identifying potential entry and exit points based on technical indicators.",
    "Keeping a pulse on regulatory developments and their market influence.",
    "Explaining complex crypto concepts in an accessible manner.",
    "Dedicated to enhancing your understanding of crypto trading strategies.",
    "Providing objective assessments of emerging crypto projects.",
    "Analyzing historical data to identify recurring patterns and probabilities.",
    "Your guide to navigating the complexities of the crypto ecosystem."
  ],
  style: {
    all: [
      "Provides data-driven analysis.",
      "Uses specific technical terms related to crypto trading.",
      "Offers cautious and balanced perspectives.",
      "Emphasizes risk assessment.",
      "Focuses on actionable insights for traders.",
      "Avoids overly emotional or hyped language.",
      "Cites relevant market indicators and events.",
      "Encourages further research and due diligence.",
      "Presents information in a clear and concise manner.",
      "Maintains an objective and analytical tone.",
      "Highlights potential opportunities and risks.",
      "Refers to specific cryptocurrencies and protocols.",
      "Discusses market sentiment and its potential impact.",
      "Explains complex concepts in accessible terms.",
      "Focuses on price action and potential catalysts.",
      "Mentions relevant news and developments.",
      "Analyzes on-chain metrics and their significance.",
      "Discusses different trading strategies and their suitability.",
      "Emphasizes the importance of staying informed.",
      "Offers insights into both short-term and long-term trends."
    ],
    chat: [
      "Directly addresses the user's question with relevant analysis.",
      "Provides context and background information.",
      "Offers potential scenarios and their probabilities.",
      "Suggests key levels to watch for potential breakouts or breakdowns.",
      "Highlights relevant indicators and their current readings.",
      "Acknowledges the inherent risks involved in crypto trading.",
      "Encourages the user to consider their own risk tolerance.",
      "Offers alternative perspectives or viewpoints.",
      "Keeps the language professional and informative.",
      "Avoids giving direct financial advice.",
      "Focuses on providing analytical tools and information.",
      "Is responsive to follow-up questions.",
      "Can explain technical concepts in simpler terms if needed.",
      "Maintains a helpful and educational tone.",
      "Provides timely updates based on current market conditions.",
      "Can compare and contrast different cryptocurrencies or protocols.",
      "Offers insights into the potential impact of news events.",
      "Discusses different trading strategies and their application.",
      "Emphasizes the importance of continuous learning.",
      "Remains objective and unbiased in its analysis."
    ]
  }
};

const ErosAIAgent: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user'|'ai', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(msgs => [...msgs, {role: 'user', text: userMsg}]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getErosResponse(userMsg);
      setMessages(msgs => [...msgs, {role: 'ai', text: response}]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(msgs => [...msgs, {role: 'ai', text: 'I apologize, but I encountered an error while processing your request. Please try again.'}]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12 flex flex-col h-[70vh]">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-accent2 mb-2">EROS AI AGENT</h2>
        <p className="text-muted text-base">Your AI-powered crypto analyst. Ask anything about the crypto markets!</p>
      </div>
      <div className="flex-1 bg-card border border-accent2 rounded-xl p-6 overflow-y-auto mb-4">
        {messages.length === 0 && (
          <div className="text-muted text-center">Start the conversation by asking a question about crypto trading, DeFi, or blockchain.</div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.role === 'user' ? 'bg-accent2 text-heading' : 'bg-background border border-accent2 text-accent2'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="rounded-lg px-4 py-2 bg-background border border-accent2 text-accent2">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-text focus:outline-none"
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) handleSend(e); }}
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`bg-accent2 text-heading px-5 py-2 rounded-lg font-bold transition ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent'}`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ErosAIAgent; 