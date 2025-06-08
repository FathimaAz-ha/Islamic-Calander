/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#0F1C3F',
        'golden': '#FFD700',
        'cream': '#FFFDD0',
        'beige': '#F5F5DC',
        'islamic-green': '#2E8B57',
      },
      fontFamily: {
        'arabic': ['Noto Naskh Arabic', 'Arabic UI Text', 'Geeza Pro', 'Arabic Typesetting', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'islamic': '0 10px 40px rgba(15, 28, 63, 0.1), 0 4px 6px rgba(255, 215, 0, 0.1)',
        'golden': '0 4px 20px rgba(255, 215, 0, 0.3)',
      },
    },
  },
  plugins: [],
};