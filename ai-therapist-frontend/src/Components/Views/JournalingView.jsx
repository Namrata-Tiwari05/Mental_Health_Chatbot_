import React, { useState } from 'react';
import { HomeIcon } from '../UI/Icons'; // Assuming you import Icons

/**
 * The screen where users can write, save, and view past journal entries.
 */
const JournalingView = ({ setView }) => {
  const [journalEntry, setJournalEntry] = useState('');
  const [entries, setEntries] = useState([
    // Mock entries to show the history feature
    { id: 1, date: 'Oct 12, 2025', text: 'Today I felt overwhelmed but managed to finish the main task. Grateful for a supportive partner.' },
    { id: 2, date: 'Oct 11, 2025', text: 'Started the day with the 5-Minute Stress Release meditation. It actually helped me feel focused before my morning meeting. I need to remember to do this daily.' },
  ]);

  const handleSaveEntry = (e) => {
    e.preventDefault();
    if (journalEntry.trim()) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        text: journalEntry.trim(),
      };
      // Prepend the new entry to the state array
      setEntries([newEntry, ...entries]);
      setJournalEntry('');
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-extrabold text-teal-400">Daily Journaling</h1>
      <p className="text-xl text-slate-300">Reflect on your thoughts and track your emotional journey.</p>

      {/* New Entry Form */}
      <form onSubmit={handleSaveEntry} className="bg-slate-800/70 p-6 rounded-xl shadow-xl border border-slate-700 space-y-4">
        <textarea
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="What is on your mind today? Write about your mood, gratitude, or challenges..."
          rows="5"
          className="w-full p-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          Save Entry
        </button>
      </form>

      {/* Past Entries */}
      <h2 className="text-2xl font-bold text-teal-400 pt-4">Past Entries</h2>
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-slate-800/70 p-4 rounded-lg border border-slate-700">
            <p className="text-sm font-semibold text-teal-300 mb-1">{entry.date}</p>
            <p className="text-slate-300">{entry.text}</p>
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

export default JournalingView;