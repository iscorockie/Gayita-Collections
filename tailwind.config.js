/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141210",
        coal: "#0b0a09",
        smoke: "#1c1916",
        paper: "#faf6ee",
        cream: "#f3ecdd",
        sand: "#e6dcc6",
        gold: "#b08d4f",
        goldlight: "#d3b47c",
        clay: "#9c5b34",
      },
      fontFamily: {
        display: ["'Instrument Serif'", "'Playfair Display'", "Georgia", "serif"],
        body: ["'General Sans'", "Manrope", "system-ui", "sans-serif"],
        mono: ["'Geist Mono'", "monospace"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        fadeUp: "fadeUp .7s cubic-bezier(.22,.61,.36,1) both",
      },
    },
  },
  plugins: [],
};
