import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E3A8A',
          50: '#EFF2F9',
          100: '#D8DEEF',
          200: '#B1BDDF',
          400: '#5A78C2',
          600: '#1E3A8A',
          800: '#162A65',
          900: '#0E1B40',
        },
        orange: {
          DEFAULT: '#F97316',
          50: '#FEF1E7',
          100: '#FDD8B8',
          200: '#FBB175',
          400: '#FA9039',
          500: '#F97316',
          600: '#D85A09',
          700: '#A24308',
        },
        cream: '#F9F7F1',
        ink: '#1F2937',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
