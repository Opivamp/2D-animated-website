/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bc1': '#0C0C0C',
        'brand-bc2': '#161616',
        'brand-bc3': '#410306',
        'brand-bc4': '#C5A064',
        'brand-bc5': '#F2F1ED',
      },
      fontFamily: {
        editorial: ['editorial', 'Georgia', 'serif'],
        geist: ['GeistSans', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      transitionTimingFunction: {
        'bezzy': 'cubic-bezier(0.8, 0, 0, 1)',
        'bezzy2': 'cubic-bezier(0.430, 0.195, 0.020, 1)',
        'bezzy3': 'cubic-bezier(0.5, 0, 0, 1)',
      }
    },
  },
  plugins: [],
};
