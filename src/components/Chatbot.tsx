import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your SakhaSahayak AI assistant. I can help you with tourism information and disaster safety guidance for Uttarakhand. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/guide') return 'Tourist Guide';
    if (path === '/accommodation') return 'Hotels & Restaurants';
    if (path === '/transportation') return 'Transportation';
    if (path === '/weather') return 'Weather';
    if (path === '/events') return 'Events & Festivals';
    if (path === '/disaster') return 'Emergency';
    return 'Website';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          context: {
            page: getCurrentPage()
          }
        }),
      });

      const result = await response.json();

      const botResponse: Message = {
        id: messages.length + 2,
        text: result.response || 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorResponse: Message = {
        id: messages.length + 2,
        text: 'Sorry, I\'m having trouble connecting. Please try again later.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          style={{
            boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
          }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-full">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">SakhaSahayak AI</h3>
              <p className="text-xs text-blue-100">Tourism & Safety Assistant</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot className="h-4 w-4 mt-0.5 text-blue-600" />
                    )}
                    {message.sender === 'user' && (
                      <User className="h-4 w-4 mt-0.5 text-white" />
                    )}
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-blue-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about tourism or safety..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;