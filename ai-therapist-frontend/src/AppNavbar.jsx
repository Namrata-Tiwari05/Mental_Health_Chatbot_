import React from 'react';
import { HeartIcon, HomeIcon, ChatIcon, VolumeUpIcon, BookOpenIcon, PhoneIcon } from './Components/UI/Icons';
import { NavLink } from './Components/UI/UtilityComponents';

/**
 * The main application navbar.
 */
const AppNavbar = ({ isLoggedIn, user, view, setView, handleLogout }) => (
  <header className="bg-slate-900 shadow-xl border-b border-slate-700 sticky top-0 z-50">
    <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
      {/* Logo and Name (InnerEase) */}
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => isLoggedIn && setView('dashboard')}>
        <HeartIcon />
        <span className="text-2xl font-extrabold text-teal-400">InnerEase</span>
      </div>

      {isLoggedIn && (
        <>
          {/* Navigation Links for core features */}
          <nav className="hidden md:flex space-x-8">
            <NavLink icon={<HomeIcon />} label="Dashboard" targetView="dashboard" currentView={view} setView={setView} />
            <NavLink icon={<ChatIcon />} label="Therapy Chat" targetView="chat" currentView={view} setView={setView} />
            <NavLink icon={<VolumeUpIcon />} label="Meditations" targetView="meditations" currentView={view} setView={setView} />
            <NavLink icon={<BookOpenIcon />} label="Journaling" targetView="journaling" currentView={view} setView={setView} />
            <NavLink icon={<PhoneIcon />} label="Emergency" targetView="emergency" currentView={view} setView={setView} isEmergency />
          </nav>

          {/* User Info and Logout */}
          <div className="flex items-center space-x-4">
            <span className="text-slate-400 hidden sm:inline">Hello, {user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  </header>
);

export default AppNavbar;