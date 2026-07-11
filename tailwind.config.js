/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#05070D',
          900: '#0A0E1A',
          800: '#0F1424',
          700: '#161C32',
          600: '#1E2640',
        },
        blue: {
          400: '#6E93FF',
          500: '#4F7DF9',
          600: '#3A63D8',
        },
        violet: {
          400: '#B37CFF',
          500: '#9D5CFF',
          600: '#7F3FE0',
        },
        signal: {
          DEFAULT: '#22D3AA',
          dim: '#1B8F73',
        },
        ink: {
          100: '#E8ECF7',
          300: '#B7BFD6',
          500: '#8B93A7',
          700: '#5B637A',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #4F7DF9 0%, #9D5CFF 100%)',
        'grad-radial-glow': 'radial-gradient(circle at 50% 0%, rgba(79,125,249,0.18), transparent 60%)',
        'grid-lines': 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        glow: '0 0 40px rgba(79,125,249,0.25)',
        'glow-violet': '0 0 40px rgba(157,92,255,0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4,0,0.6,1) infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
