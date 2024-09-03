import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Text and Icon Colors
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

        // Background Colors
        headerFooterBg: {
          light: '#1f2937', // Dark Gray for Light Mode
          dark: '#111827', // Darker Gray for Dark Mode
        },
        mainBg: {
          light: '#ffffff', // White for Light Mode
          dark: '#1f2937', // Dark Gray for Dark Mode
        },
        asideBg: {
          light: '#f3f4f6', // Light Gray for Light Mode
          dark: '#374151', // Medium Gray for Dark Mode
        },
      },
    },
  },
  plugins: [],
};

export default config;
