import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Xin chào! Tôi là trợ lý ảo của MMO All-in-One. Bạn cần tư vấn về tính năng, bảng giá hay cách dùng tool?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await sendMessageToGemini(history, userMsg.text);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] bg-mmo-900 border border-mmo-700 rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-mmo-800 p-3 border-b border-mmo-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-mmo-accent rounded-full text-mmo-950">
                <Bot size={18} />
              </div>
              <span className="font-bold text-white">Trợ lý ảo AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-mmo-950/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-mmo-700 text-white rounded-br-none' 
                    : 'bg-mmo-800 border border-mmo-700 text-gray-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-mmo-800 border border-mmo-700 rounded-lg p-3 rounded-bl-none">
                  <Loader2 className="animate-spin text-mmo-accent" size={16} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-mmo-900 border-t border-mmo-700 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi về tính năng..."
              className="flex-1 bg-mmo-950 border border-mmo-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-mmo-accent"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-mmo-accent text-mmo-900 rounded p-2 hover:bg-yellow-500 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-mmo-accent text-mmo-950 rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-400 transition-colors border-2 border-mmo-900"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};