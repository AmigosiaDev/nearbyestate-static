/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
      },
      colors: {
        brand: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#2D6A4F',
          800: '#1B4332',
          900: '#081C15',
          accent: '#E63946',
          'accent-hover': '#D90429',
          mint: '#A1D4D4',
          'mint-light': '#E8F5F5',
          dark: '#0B132B',
          slate: '#1E293B',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.04), 0 12px 32px -4px rgba(15, 23, 42, 0.06)',
        'premium': '0 20px 45px -10px rgba(27, 67, 50, 0.12), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'phone': '0 30px 70px -15px rgba(11, 19, 43, 0.35), 0 0 25px 0 rgba(45, 106, 79, 0.15)',
        'badge': '0 6px 16px -2px rgba(45, 106, 79, 0.14)',
        'glow': '0 0 40px -10px rgba(45, 106, 79, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.5s infinite',
        'float-subtle': 'floatSubtle 5s ease-in-out infinite',
        'radar-pulse': 'radarPulse 3s cubic-bezier(0.2, 0.8, 0.2, 1) infinite',
        'radar-pulse-delayed': 'radarPulse 3s cubic-bezier(0.2, 0.8, 0.2, 1) 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        radarPulse: {
          '0%': { transform: 'scale(0.6)', opacity: '0.9' },
          '50%': { opacity: '0.4' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
