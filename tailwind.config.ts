import { defineConfig } from 'tailwindcss';

export default defineConfig({
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
