import React, { useState, useEffect, useRef } from 'react';

/**
 * The dedicated screen for the AI chatbot interface.
 */
const ChatInterfaceView = ({ chatHistory, setChatHistory }) => {
  const [message, setMessage] = useState('');
  const chatEndRef = useRef(null);

  // Auto-scroll logic for smooth chat experience
  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToBottom, [chatHistory]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newUserMessage = { id: Date.now(), sender: 'user', text: message };
    setChatHistory(prev => [...prev, newUserMessage]);
    setMessage('');

    // --- Humanized Logic: AI Response Simulation ---
    setTimeout(() => {
      const responseId = Date.now() + 1;
      let aiResponseText = "Thanks for sharing that with me. I'm here to listen and help you process your thoughts. What's one small thing you've done to cope with that feeling recently?";

      // Simple keyword-based empathy response simulation
      if (newUserMessage.text.toLowerCase().includes('sad') || newUserMessage.text.toLowerCase().includes('depressed')) {
        aiResponseText = "It takes courage to acknowledge sadness. Please know you are not alone. Let's explore that feeling together—would you like to try a short grounding exercise?";
      }

      const newAiMessage = { id: responseId, sender: 'ai', text: aiResponseText };
      setChatHistory(prev => [...prev, newAiMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[85vh] max-w-4xl mx-auto bg-slate-800 rounded-xl shadow-2xl border border-slate-700">
      <div className="p-4 bg-indigo-700 rounded-t-xl text-center">
        <h2 className="text-xl font-bold text-white">Your AI Therapist</h2>
      </div>

      {/* Message Area */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md p-3 rounded-lg shadow-md ${msg.sender === 'user'
                ? 'bg-teal-600 text-white rounded-br-none'
                : 'bg-slate-700 text-slate-200 rounded-tl-none'
              }`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700 flex space-x-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Talk to your therapist..."
          className="flex-grow p-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
        />
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterfaceView;