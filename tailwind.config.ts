import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        flagflies: ['Flagfies', 'monospace'],
      },
      colors: {
        // Add your custom colors here
      },
    },
  },
  plugins: [],
  // Tailwind v4 features
  future: {
    // Enable any upcoming features you want to use
  },
  // You can add any v4-specific configuration here
};

export default config;

