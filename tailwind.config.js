/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        asphalt: "#0a0a0a",
        coal2: "#111111",
        smoke2: "#191919",
        concrete: "#e9e9e4",
        bone: "#f4f4f0",
        volt: "#c8ff16",
        voltdim: "#a7d70d",
        danger: "#ff2d34",
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        body: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        marqueeRev: { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0)" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(26px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        bump: { "0%": { transform: "scale(1)" }, "40%": { transform: "scale(1.4)" }, "100%": { transform: "scale(1)" } },
        floaty: { "0%,100%": { transform: "translateY(0) rotate(-6deg)" }, "50%": { transform: "translateY(-14px) rotate(-6deg)" } },
        spinslow: { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        flash: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        "marquee-slow": "marquee 46s linear infinite",
        marqueeRev: "marqueeRev 46s linear infinite",
        fadeUp: "fadeUp .6s cubic-bezier(.22,.61,.36,1) both",
        bump: "bump .4s ease",
        floaty: "floaty 6.5s ease-in-out infinite",
        "spin-slow": "spinslow 16s linear infinite",
        flash: "flash 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
