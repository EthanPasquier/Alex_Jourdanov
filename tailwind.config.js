/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette principale - tons sombres
        'game-bg': '#0a0b1a',
        'game-bg-light': '#141526',
        'game-card': '#1a1b2e',
        'game-card-hover': '#252640',
        
        // Accents principaux
        'game-gold': '#d4af37',
        'game-gold-light': '#f7d794',
        'game-red': '#8b1538',
        'game-red-light': '#c53030',
        
        // Couleurs texte
        'game-text': '#e2e8f0',
        'game-text-muted': '#94a3b8',
        'game-text-dim': '#64748b',
        
        // Bordures et éléments UI
        'game-border': '#334155',
        'game-border-light': '#475569',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
