/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        chalk: "#F6F4EF",
        paper: "#FFFFFF",
        stone: "#EAE5DC",
        line: "#DED8CC",
        ink: "#1E2420",
        slate: "#5C665E",
        euc: "#3A5A4A",
        "euc-lt": "#8FAE9B",
        "euc-dk": "#24382D",
        "euc-tint": "#E4EBE5",
        brass: "#A87B32",
        "brass-h": "#8C6526",
        "brass-tn": "#F2E9D8",
        err: "#A33B2A",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter Tight"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1240px",
      },
      borderRadius: {
        card: "10px",
        photo: "16px",
      },
    },
  },
  plugins: [],
};
