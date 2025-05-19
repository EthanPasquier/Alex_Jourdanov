/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff0059',
        'neon-pink': '#ff00b4',
        'neon-purple': '#a259ff',
        'neon-blue': '#00eaff',
        'casino-bg': '#1a0022',
        'casino-bg-dark': '#0a0a23',
        'casino-border': '#ff0059',
        'casino-yellow': '#ffe066',
      },
    },
  },
  plugins: [],
};
