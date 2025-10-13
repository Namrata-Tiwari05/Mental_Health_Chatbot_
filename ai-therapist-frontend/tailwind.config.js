/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- IMPORTANT: Watches all component files
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for a mental health app
        'indigo-600': '#4f46e5',
        'indigo-700': '#4338ca',
        'emerald-500': '#10b981',
        'calm-bg': '#f3f4f6',
      },
      // You can also extend typography, spacing, etc.
    },
  },
  plugins: [
    // optional: require('@tailwindcss/forms'),
  ],
}