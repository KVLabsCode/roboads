import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F2F2EF",
        card: "#F8F8F5",
        ink: "#111110",
        muted: "#595751",
        rule: "#8C897F",
        line: "#D5D3CC",
        gold: "#F2B632",
        orange: "#B34A1A",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "Menlo", "monospace"],
        doto: ["var(--font-doto)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
