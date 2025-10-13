import React from 'react';
import { HomeIcon, VolumeUpIcon } from '../UI/Icons'; // Assuming you import Icons

/**
 * The screen for accessing guided audio meditations, categorized for usability.
 */
const MeditationsView = ({ setView }) => {
  // Mock data structured by category for better modularity
  const categories = [
    {
      name: "Quick Stress Relief",
      meditations: [
        { title: "5-Minute Stress Release", length: "5 min", focus: "Breathing & Calm" },
        { title: "3-Minute Body Scan (Quick)", length: "3 min", focus: "Tension Check" },
      ]
    },
    {
      name: "Sleep & Relaxation",
      meditations: [
        { title: "Deep Sleep Preparation", length: "15 min", focus: "Body Scan & Relaxation" },
        { title: "Calming Wind Down", length: "20 min", focus: "Anxiety & Sleep" },
        { title: "Rainy Day Rest", length: "30 min", focus: "Ambient Soundscape" },
      ]
    },
    {
      name: "Focus & Positivity",
      meditations: [
        { title: "Morning Positivity Boost", length: "10 min", focus: "Gratitude & Energy" },
        { title: "Focus for Work", length: "12 min", focus: "Concentration" },
      ]
    }
  ];

  const featured = categories[1].meditations[0];

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-extrabold text-teal-400">Guided Meditations</h1>
      <p className="text-xl text-slate-300">Find peace and focus with our curated audio sessions.</p>

      {/* Featured Meditation Block - Highly visible CTA */}
      <div className="bg-indigo-700/50 p-6 rounded-xl shadow-2xl border border-indigo-600 flex flex-col md:flex-row items-center justify-between transition-transform duration-300 hover:scale-[1.02]">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <VolumeUpIcon />
          <div>
            <h3 className="text-2xl font-bold text-white">Featured: {featured.title}</h3>
            <p className="text-teal-300 text-sm">Focus: {featured.focus} | Duration: {featured.length}</p>
          </div>
        </div>
        <button className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-md w-full md:w-auto">
          Start Now
        </button>
      </div>

      {/* Categories List */}
      <div className="space-y-6 pt-4">
        {categories.map((category, catIndex) => (
          <div key={catIndex}>
            <h2 className="text-2xl font-bold text-indigo-400 mb-3">{category.name}</h2>
            <div className="space-y-3">
              {category.meditations.map((m, index) => (
                <div key={index} className="bg-slate-800/70 p-4 rounded-xl shadow-lg border-l-4 border-slate-700 flex items-center justify-between transition-all duration-300 hover:bg-slate-700/80 hover:border-teal-500">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{m.title}</h4>
                    <p className="text-slate-400 text-sm mt-0.5">Focus: {m.focus} | {m.length}</p>
                  </div>
                  <button className="text-teal-400 hover:text-teal-300 transition-colors">
                    {/* Play icon */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      <button
        onClick={() => setView('dashboard')}
        className="mt-8 text-indigo-400 hover:text-indigo-300 flex items-center space-x-2 transition-colors duration-300"
      >
        <HomeIcon />
        <span>Back to Dashboard</span>
      </button>
    </div>
  );
};

export default MeditationsView;