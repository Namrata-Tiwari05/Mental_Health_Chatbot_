import React, { useState, useEffect } from 'react';
import AppNavbar from './AppNavbar';

// Import Views
import LoginView from './Components/Views/LoginView';
import DashboardView from './Components/Views/DashboardView';
import ChatInterfaceView from './Components/Views/ChatInterfaceView';
import MeditationsView from './Components/Views/MeditationsView';
import JournalingView from './Components/Views/JournalingView';
import EmergencyView from './Components/Views/EmergencyView';


const App = () => {
  // Authentication and user state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'User' });

  // Application state management (view navigation)
  const [view, setView] = useState('login');

  // Feature-specific states
  const [streak, setStreak] = useState(0);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: 'ai', text: "Hello! I'm your AI therapist. How are you feeling today?" },
  ]);

  // Helper to generate a unique starting message based on username
  const getInitialChatHistory = (username) => {
    return [
      { id: Date.now(), sender: 'ai', text: `Welcome back, ${username}. I see you're ready for a session. How can I help you find some InnerEase today?` },
    ];
  };

  // UseEffect for initial route check
  useEffect(() => {
    if (!isLoggedIn) {
      setView('login');
    } else if (view === 'login') {
      // If they just logged in, take them to the dashboard
      setView('dashboard');
    }
  }, [isLoggedIn, view]);

  // --- Handlers ---

  const handleLogin = (name) => {
    const displayName = name.split('@')[0] || 'User';
    setUser({ name: displayName });
    setIsLoggedIn(true);

    // Reset/set the streak to 0 upon mock login 
    setStreak(0);

    // Set the unique initial chat history for this "user"
    setChatHistory(getInitialChatHistory(displayName));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ name: 'User' });
    setStreak(0);
  };

  const incrementStreak = () => {
    setStreak(prev => prev + 1);
  };

  // --- View Rendering Logic (The Router) ---

  const renderCurrentView = () => {
    if (!isLoggedIn) {
      return <LoginView handleLogin={handleLogin} />;
    }

    switch (view) {
      case 'dashboard':
        return <DashboardView user={user} streak={streak} incrementStreak={incrementStreak} setView={setView} />;
      case 'chat':
        return <ChatInterfaceView chatHistory={chatHistory} setChatHistory={setChatHistory} />;
      case 'meditations':
        return <MeditationsView setView={setView} />;
      case 'journaling':
        return <JournalingView setView={setView} />;
      case 'emergency':
        return <EmergencyView setView={setView} />;
      default:
        // Default to dashboard if we somehow hit an unknown view (safe fallback)
        return <DashboardView user={user} streak={streak} incrementStreak={incrementStreak} setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <script src="https://cdn.tailwindcss.com"></script>
      <AppNavbar
        isLoggedIn={isLoggedIn}
        user={user}
        view={view}
        setView={setView}
        handleLogout={handleLogout}
      />
      <main className="pb-8">
        {renderCurrentView()}
      </main>
    </div>
  );
};

export default App;