import React, { useState } from 'react';

/**
 * Handles user authentication (simulated login).
 */
const LoginView = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // A simple client-side check. In a real application, this calls an API service.
    if (username && password) {
      handleLogin(username);
    }
  };

  return (
    <div className="flex items-center justify-center p-8 min-h-screen">
      <div className="w-full max-w-md bg-slate-800 p-10 rounded-2xl shadow-2xl border border-indigo-600 transition-all duration-500 ease-in-out">
        <h2 className="text-4xl font-bold text-center text-teal-400 mb-8">Welcome to InnerEase</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-r from-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-teal-300 transition-transform duration-300 hover:scale-105"
          >
            <span className="w-full relative px-6 py-3 transition-all ease-in duration-75 bg-slate-900 rounded-md group-hover:bg-opacity-0">
              Access My Session
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;