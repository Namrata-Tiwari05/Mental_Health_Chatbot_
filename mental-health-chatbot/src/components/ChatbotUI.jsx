import React, { useState, useEffect, useRef } from 'react';
import { SparklesIcon, FireIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const ChatbotUI = ({ isLoggedIn, onLoginClick, onSignupClick }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm here to help. How are you feeling today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [mood, setMood] = useState(null);
  const [points, setPoints] = useState(0);

  const moods = [
    { emoji: '😄', label: 'Happy' },
    { emoji: '😌', label: 'Calm' },
    { emoji: '😔', label: 'Sad' },
    { emoji: '😠', label: 'Angry' },
    { emoji: '😨', label: 'Anxious' }
  ];

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    // Placeholder for API call to Flask/Gemini AI backend
    try {
      const response = await fetch('http://127.0.0.1:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botResponse = data.response; // Assuming your backend sends the response in a 'response' key

      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        setPoints((prevPoints) => prevPoints + 10);
      }, 1000);

    } catch (error) {
      console.error("Error connecting to backend:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Sorry, I am unable to connect right now.", sender: 'bot' }]);
    }
  }
  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    setPoints((prevPoints) => prevPoints + 5);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `Thank you for sharing that you are feeling ${selectedMood.label}!`, sender: 'bot' }
    ]);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header with Auth Buttons */}
      <header className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-2">
          <SparklesIcon className="h-8 w-8 text-blue-400" />
          <h1 className="text-2xl font-bold text-white">Mindful AI</h1>
        </div>
        {!isLoggedIn && (
          <div className="space-x-4">
            <button onClick={onLoginClick} className="text-blue-400 hover:text-white transition-colors font-semibold">
              Log In
            </button>
            <button onClick={onSignupClick} className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors font-semibold">
              Sign Up
            </button>
          </div>
        )}
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Left Sidebar for Gamification & Mood */}
        <div className="w-1/5 bg-gray-900 p-6 space-y-8 border-r border-gray-700 hidden md:flex flex-col">
          <div className="bg-gray-800 p-4 rounded-xl text-center">
            <h3 className="text-lg font-semibold mb-2 text-yellow-400">Your Journey</h3>
            <div className="flex items-center justify-center space-x-2">
              <FireIcon className="h-6 w-6 text-orange-500" />
              <span className="text-2xl font-bold">{points}</span>
              <span className="text-sm text-gray-400">points</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">Interact to earn more points!</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">How are you feeling?</h3>
            <div className="flex justify-around">
              {moods.map((m) => (
                <button
                  key={m.label}
                  onClick={() => handleMoodSelect(m)}
                  className={`transform transition-transform duration-300 hover:scale-110 p-2 rounded-lg ${mood?.label === m.label ? 'bg-blue-600' : 'hover:bg-gray-700'
                    }`}
                >
                  <span className="text-3xl">{m.emoji}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-gray-900">
          <div className="flex-1 overflow-y-auto p-8 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-xl p-4 max-w-xl transition-all duration-300 ${msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-800 text-gray-200 rounded-bl-none'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-gray-800 border-t border-gray-700 flex items-center space-x-4">
            <input
              type="text"
              className="flex-1 p-3 bg-gray-700 text-white rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChatbotUI;