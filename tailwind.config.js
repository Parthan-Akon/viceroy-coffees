/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A2C2A",
        secondary: "#8B5E3C",
        accent: "#C69C6D",
        cream: "#F8F4EF",
        dark: "#1F1A17",
      },
      fontFamily: {
        display: ["\"Cormorant Garamond\"", "serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        "premium-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
