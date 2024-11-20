import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // Use 'class' for dynamic dark mode control
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        foreground: 'var(--foreground-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
} satisfies Config;
