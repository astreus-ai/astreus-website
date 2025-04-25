/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'pixel': ['var(--font-press-start-2p)'],
      },
      colors: {
        black: '#1e1e1e',
        'bg-color': '#d7e1e1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'button': '0 5px rgba(0, 0, 0, 0.15)',
        'container': '0 8px rgba(0, 0, 0, 0.15)',
        'marquee': '0 8px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'scroll': 'scroll 45s linear infinite',
        'scroll-slow': 'scroll 120s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1rem))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 