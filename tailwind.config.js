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
        'light-text-secondary': '#475569',
        'light-border': '#E2E8F0',
        'light-accent': '#1D4ED8',
        'light-accent-hover': '#1E40AF',
        'light-accent-bg': '#EFF6FF',
        'light-success': '#15803D',
        'light-warning': '#B45309',
        'light-error': '#B91C1C',
        'dark-bg': '#1e1e2e',
        'dark-bg-secondary': '#181825',
        'dark-text': '#E2E8F0',
        'dark-text-secondary': '#CBD5E1',
        'dark-border': '#313244',
        'dark-accent': '#93C5FD',
        'dark-accent-hover': '#60A5FA',
        'dark-accent-bg': 'rgba(147, 197, 253, 0.15)',
        'dark-success': '#86EFAC',
        'dark-warning': '#FBBF24',
        'dark-error': '#FCA5A5',
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
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'fade-out': 'fadeOut 0.2s ease-out forwards',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: .7, transform: 'scale(0.95)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      backgroundColor: {
        'dark': {
          DEFAULT: '#1e1e2e',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 