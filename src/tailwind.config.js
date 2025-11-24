/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050509",
        soft: "#0d0d13",
        card: "#111119",
        accent: "#4db9ff",
        textLight: "#f3f3f5",
        muted: "#a5abbd",
      },
    },
  },
  plugins: [],
};
