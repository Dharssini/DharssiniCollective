/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0e16',  // Deep blue-black background
          900: '#151a24',  // Surface/card backgrounds
          800: '#1e2837',  // Borders
          700: '#2a3441',
          600: '#3a4556',
          500: '#4a5568',
          400: '#8b95a8',  // Secondary text
          300: '#a0aec0',
          200: '#cbd5e0',
          100: '#e8edf5',  // Primary text
        },
        primary: {
          500: '#60a5fa',  // Electric blue (NLP/Research)
          400: '#3b82f6',
          600: '#2563eb',
        },
        accent: {
          500: '#f59e0b',  // Amber (Production)
          400: '#fbbf24',
          600: '#d97706',
        },
        violet: {
          500: '#8b5cf6',  // Highlight
          400: '#a78bfa',
          600: '#7c3aed',
        },
        success: {
          500: '#10b981',  // Metrics/Success
          400: '#34d399',
          600: '#059669',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'SF Mono', 'Roboto Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(96, 165, 250, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.8)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'terminal-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
