/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D946EF',
          magenta: '#C026D3',
          pink: '#EC4899',
        },
        accent: {
          violet: '#A855F7',
          purple: '#9333EA',
        },
        surface: {
          light: '#FFF9FC',
          dark: '#0F0B14',
          cardLight: '#FFFFFF',
          cardDark: '#181320',
        },
        ink: {
          light: '#1A1A1A',
          dark: '#F5F5F5',
        },
      },
      fontFamily: {
        display: ['"Clash Display"', '"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #C026D3 0%, #D946EF 45%, #EC4899 100%)',
        'gradient-brand-alt': 'linear-gradient(135deg, #9333EA 0%, #A855F7 50%, #EC4899 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(217,70,239,0.25) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(168,85,247,0.25) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(236,72,153,0.25) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(147,51,234,0.25) 0px, transparent 50%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(217, 70, 239, 0.35)',
        'glow-sm': '0 0 20px rgba(217, 70, 239, 0.25)',
        card: '0 8px 30px rgba(0,0,0,0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
