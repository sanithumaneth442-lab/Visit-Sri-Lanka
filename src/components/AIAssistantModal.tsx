import React, { useState } from 'react';
import { X, Sparkles, Send, Loader2, Bot, User } from 'lucide-react';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'assistant';
  text: string;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: 'Ayubowan! I am Ceylon AI, your luxury Sri Lanka travel architect. Ask me anything about routes, weather, wildlife seasons, or local secrets.'
    }
  ]);

  const quickQuestions = [
    'Best 7-day itinerary for couples',
    'When is Blue Whale season in Mirissa?',
    'What should I pack for Ella tea country?',
    'Top luxury eco-lodges in Sri Lanka'
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ask-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend })
      });
      const data = await res.json();
      if (data.success && data.answer) {
        setMessages((prev) => [...prev, { sender: 'assistant', text: data.answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: 'assistant', text: 'I am temporarily unable to connect to the island database. Please ask again shortly!' }
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'assistant', text: 'Sorry, an error occurred while consulting Ceylon AI.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-3xl overflow-hidden shadow-2xl border border-[#e4e2dd] flex flex-col h-[600px] max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-[#00502d] text-white p-5 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-[#81d9a1] text-[#00502d] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold leading-tight">Ceylon AI Travel Concierge</h3>
              <p className="text-[11px] text-[#81d9a1]">Powered by Gemini AI • Real-Time Island Insights</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#fbf9f4]">
          {messages.map((msg, idx) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={idx}
                className={`flex items-start space-x-2.5 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    isUser ? 'bg-[#733200] text-white' : 'bg-[#006b3e] text-white'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`max-w-[80%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                    isUser
                      ? 'bg-[#733200] text-white rounded-tr-none'
                      : 'bg-[#ffffff] text-[#1b1c19] border border-[#e4e2dd] rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex items-center space-x-2 text-xs text-[#6f7a70] bg-white p-3 rounded-xl border border-[#e4e2dd] w-fit">
              <Loader2 className="w-4 h-4 animate-spin text-[#006b3e]" />
              <span>Ceylon AI is thinking...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 bg-[#f0eee9] border-t border-[#e4e2dd] flex items-center space-x-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold text-[#733200] shrink-0 uppercase">Try:</span>
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="px-3 py-1 bg-white hover:bg-[#ffdbc9] hover:text-[#733200] text-[#3f4941] text-[11px] font-medium rounded-full border border-[#e4e2dd] whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 bg-white border-t border-[#e4e2dd] flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about travelling in Sri Lanka..."
            className="flex-1 text-xs sm:text-sm text-[#1b1c19] bg-[#f0eee9] px-4 py-3 rounded-2xl border border-[#e4e2dd] focus:outline-none focus:ring-2 focus:ring-[#006b3e]"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-3 bg-[#006b3e] hover:bg-[#00502d] text-white rounded-2xl disabled:opacity-50 transition-all shadow shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
