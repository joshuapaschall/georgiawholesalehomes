import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        gold: '#C9A84C',
        'gold-light': '#E8D5A3',
        cream: '#FAF8F4',
      },
      fontFamily: {
        heading: ['var(--font-cormorant-garamond)'],
        body: ['var(--font-dm-sans)'],
      },
      boxShadow: {
        soft: '0 12px 35px rgba(10, 22, 40, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
