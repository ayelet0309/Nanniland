import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF6EE",
        sand: "#F3E9D8",
        beige: "#EAD9BF",
        blush: "#F7DDE0",
        "blush-dark": "#EFC2C9",
        sage: "#A9C0A0",
        "sage-dark": "#7E9C73",
        gold: "#E0A95C",
        "gold-dark": "#C98C3D",
        ink: "#4A3F35",
        "ink-light": "#7A6C5D",
      },
      fontFamily: {
        heebo: ["Heebo", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(122, 96, 60, 0.18)",
        card: "0 8px 24px -8px rgba(122, 96, 60, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
