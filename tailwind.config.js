/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.tsx",
    "./pages/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        base03: "rgb(var(--base03) / <alpha-value>)",
        base02: "rgb(var(--base02) / <alpha-value>)",
        base01: "rgb(var(--base01) / <alpha-value>)",
        base00: "rgb(var(--base00) / <alpha-value>)",
        base0: "rgb(var(--base0) / <alpha-value>)",
        base1: "rgb(var(--base1) / <alpha-value>)",
        base2: "rgb(var(--base2) / <alpha-value>)",
        base3: "rgb(var(--base3) / <alpha-value>)",
        yellow: "rgb(var(--yellow) / <alpha-value>)",
        orange: "rgb(var(--orange) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
        magenta: "rgb(var(--magenta) / <alpha-value>)",
        violet: "rgb(var(--violet) / <alpha-value>)",
        blue: "rgb(var(--blue) / <alpha-value>)",
        cyan: "rgb(var(--cyan) / <alpha-value>)",
        green: "rgb(var(--green) / <alpha-value>)",
      },
      spacing: {},
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
