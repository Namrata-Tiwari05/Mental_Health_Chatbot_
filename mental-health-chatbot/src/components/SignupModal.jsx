import React, { useState } from 'react';

const SignupModal = ({ onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder for API call to Flask backend
    console.log('Attempting to sign up...');
    alert('Signup successful! Please log in.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">&times;</button>
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Join Us!</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-bold"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-6 text-gray-400">
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="text-green-400 hover:underline">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;