import { useState } from 'react';
import ChatbotUI from './components/ChatbotUI';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
    setIsLoginModalOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ChatbotUI
        username={username}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onSignupClick={() => setIsSignupModalOpen(true)}
      />

      {isLoginModalOpen && (
        <LoginModal
          onClose={() => setIsLoginModalOpen(false)}
          onLoginSuccess={handleLoginSuccess}
          onSwitchToSignup={() => {
            setIsLoginModalOpen(false);
            setIsSignupModalOpen(true);
          }}
        />
      )}

      {isSignupModalOpen && (
        <SignupModal
          onClose={() => setIsSignupModalOpen(false)}
          onSwitchToLogin={() => {
            setIsSignupModalOpen(false);
            setIsLoginModalOpen(true);
          }}
        />
      )}
    </div>
  );
}

export default App;