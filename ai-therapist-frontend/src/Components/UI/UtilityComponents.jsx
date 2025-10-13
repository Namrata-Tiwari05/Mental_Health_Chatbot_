import React from 'react';
import { FireIcon, PhoneIcon, HomeIcon, ChatIcon, VolumeUpIcon, BookOpenIcon } from './Icons';

// A self-contained component for displaying the user's current session streak.
export const StreakDisplay = ({ streak }) => (
  <div className="bg-slate-700/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-600 flex items-center justify-between transition-transform duration-300 hover:scale-[1.02]">
    <div className="flex items-center space-x-3">
      <FireIcon />
      <h3 className="text-xl font-semibold text-white">Current Streak</h3>
    </div>
    <div className="text-4xl font-extrabold text-teal-400">
      {streak} Days
    </div>
  </div>
);

// A card component for the main features on the dashboard.
export const FeatureCard = ({ icon, title, description, onClick }) => (
  <div
    className="bg-slate-800/70 p-6 rounded-xl shadow-xl border border-slate-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group"
    onClick={onClick}
  >
    <div className="text-teal-400 mb-3 transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-white group-hover:text-teal-300">{title}</h4>
    <p className="text-slate-400 text-sm mt-2">{description}</p>
  </div>
);

// Helper component for clean navigation buttons
export const NavLink = ({ icon, label, targetView, currentView, setView, isEmergency = false }) => {
  const activeClass = currentView === targetView ? 'text-teal-400 font-semibold' : 'text-slate-300';
  const hoverClass = isEmergency ? 'hover:text-red-400' : 'hover:text-teal-400';
  const colorClass = isEmergency ? 'text-red-500' : 'text-slate-300';

  return (
    <button
      onClick={() => setView(targetView)}
      className={`${activeClass} ${hoverClass} transition-colors flex items-center space-x-1`}
    >
      {React.cloneElement(icon, { className: `h-6 w-6 ${colorClass}` })} {/* Clone to apply dynamic color */}
      <span>{label}</span>
    </button>
  );
};