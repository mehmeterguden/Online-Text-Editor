/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#FFFFFF',
        'light-bg-secondary': '#F8FAFC',
        'light-text': '#1E293B',
        'light-text-secondary': '#64748B',
        'light-border': '#E2E8F0',
        'light-accent': '#2563EB',
        'light-accent-hover': '#1D4ED8',
        'light-accent-bg': '#EFF6FF',
        'light-success': '#16A34A',
        'light-warning': '#D97706',
        'light-error': '#DC2626',
        'dark-bg': '#1E1E2E',
        'dark-bg-secondary': '#181825',
        'dark-text': '#CDD6F4',
        'dark-text-secondary': '#A6ADC8',
        'dark-border': '#313244',
        'dark-accent': '#89B4FA',
        'dark-accent-hover': '#74C7EC',
        'dark-accent-bg': 'rgba(137, 180, 250, 0.1)',
        'dark-success': '#A6E3A1',
        'dark-warning': '#FAB387',
        'dark-error': '#F38BA8',
        primary: {
          100: '#EFF6FF',
          200: '#DBEAFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'
        }
      },
      boxShadow: {
        'light': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        'light-md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'dark': '0 2px 4px 0 rgb(0 0 0 / 0.4)',
        'dark-md': '0 6px 8px -2px rgb(0 0 0 / 0.5)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 