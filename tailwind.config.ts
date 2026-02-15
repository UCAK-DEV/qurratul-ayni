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
        'emerald-950-dynamic': 'hsl(var(--emerald-950-dynamic))',
        gold: '#C9A961',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        amiri: ['Amiri', 'serif'], 
      },
      backdropBlur: {
        '20px': '20px', // Custom blur value
      },
    },
  },
  plugins: [],
};
export default config;
