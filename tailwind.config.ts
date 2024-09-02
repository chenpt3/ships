import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryText: {
          light: '#1a1a1a', // Near-Black for Light Mode
          dark: '#f5f5f5', // Near-White for Dark Mode
        },
        secondaryText: {
          light: '#4a4a4a', // Dark Gray for Light Mode
          dark: '#d1d1d1', // Light Gray for Dark Mode
        },
        mutedText: {
          light: '#737373', // Medium Gray for Light Mode
          dark: '#737373', // Medium Gray for Dark Mode
        },
        primaryIcon: {
          light: '#1a1a1a', // Near-Black for Light Mode
          dark: '#f5f5f5', // Near-White for Dark Mode
        },
        secondaryIcon: {
          light: '#4a4a4a', // Dark Gray for Light Mode
          dark: '#d1d1d1', // Light Gray for Dark Mode
        },
        mutedIcon: {
          light: '#737373', // Medium Gray for Light Mode
          dark: '#737373', // Medium Gray for Dark Mode
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode support
  plugins: [],
};

export default config;
