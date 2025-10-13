import React from 'react';
import { HomeIcon, PhoneIcon } from '../UI/Icons'; // Assuming you import Icons

/**
 * Displays critical emergency helplines clearly.
 */
const EmergencyView = ({ setView }) => {
  // Note: PhoneIcon is defined in Icons.js, but re-defined locally in the original code, 
  // so we'll use the imported one and remove the redundant local definition.

  const helplines = [
    { name: "National Suicide Prevention Lifeline", number: "988", description: "Provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week." },
    { name: "Crisis Text Line", number: "Text HOME to 741741", description: "Connect with a crisis counselor for free, 24/7. Confidential and secure." },
    { name: "The Trevor Project", number: "1-866-488-7386", description: "Crisis intervention and suicide prevention services for LGBTQ young people." },
    { name: "SAMHSA National Helpline", number: "1-800-662-HELP (4357)", description: "Free, confidential, 24/7, 365-day-a-year treatment referral and information service." },
  ];

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      <div className="bg-red-800/70 p-6 rounded-2xl shadow-2xl border border-red-700 text-center">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <PhoneIcon />
          <h1 className="text-4xl font-extrabold text-white">Emergency Support</h1>
        </div>
        <p className="text-xl text-red-200">If you are in immediate danger or distress, please call one of the numbers below.</p>
      </div>

      <div className="space-y-4">
        {helplines.map((line, index) => (
          <div key={index} className="bg-slate-800/70 p-6 rounded-xl shadow-lg border-l-4 border-red-500 transition-all duration-300 hover:bg-slate-700">
            <h3 className="text-2xl font-bold text-red-400">{line.name}</h3>
            <p className="text-3xl font-extrabold text-white my-2">{line.number}</p>
            <p className="text-slate-400">{line.description}</p>
            <a href={`tel:${line.number.replace(/\D/g, '')}`} className="mt-3 inline-block text-sm font-semibold text-red-500 hover:text-red-400 transition-colors">
              Call Now
            </a>
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

export default EmergencyView;