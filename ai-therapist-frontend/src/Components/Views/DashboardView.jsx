import React from 'react';
import { ChatIcon, VolumeUpIcon, BookOpenIcon, PhoneIcon } from '../UI/Icons';
import { StreakDisplay, FeatureCard } from '../UI/UtilityComponents';

/**
 * The primary landing page after login, showing features and streak.
 */
const DashboardView = ({ user, streak, incrementStreak, setView }) => (
  <div className="p-4 md:p-8 space-y-8 max-w-6xl mx-auto">
    {/* Welcome Banner */}
    <div className="bg-indigo-700/50 p-8 rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-extrabold text-white">Welcome back, {user.name}.</h1>
      <p className="text-xl text-teal-300 mt-2">Your journey to wellness continues today.</p>
    </div>

    <StreakDisplay streak={streak} />

    {/* Daily Check-in CTA */}
    <div className="flex justify-between items-center bg-slate-800/70 p-4 rounded-xl shadow-inner border border-slate-700">
      <p className="text-slate-300 text-lg">Ready for your daily check-in?</p>
      <button
        onClick={incrementStreak} // This simulates completing the daily session
        className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
      >
        Complete Today's Session
      </button>
    </div>

    <h2 className="text-3xl font-bold text-teal-400 pt-4">Your Wellness Toolkit</h2>
    {/* Feature Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard
        icon={<ChatIcon />}
        title="Start Therapy Chat"
        description="Connect with your AI therapist for a personalized, confidential session."
        onClick={() => setView('chat')}
      />
      <FeatureCard
        icon={<VolumeUpIcon />}
        title="Guided Meditations"
        description="Access calming audio sessions to help reduce stress and improve focus."
        onClick={() => setView('meditations')}
      />
      <FeatureCard
        icon={<BookOpenIcon />}
        title="Daily Journaling"
        description="Reflect on your day, track your mood, and monitor your emotional patterns."
        onClick={() => setView('journaling')}
      />
    </div>

    {/* Emergency Link */}
    <div className="pt-8 text-center">
      <button
        onClick={() => setView('emergency')}
        className="text-red-400 hover:text-red-300 flex items-center justify-center mx-auto space-x-2 transition-colors duration-300"
      >
        <PhoneIcon />
        <span className="text-xl font-medium">Crisis? Click for Emergency Helplines.</span>
      </button>
    </div>
  </div>
);

export default DashboardView;