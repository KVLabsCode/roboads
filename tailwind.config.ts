import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F5",
        "bg-soft": "#F5F1EC",
        "bg-warm": "#F0EBE3",
        foreground: "#2C2418",
        "text-body": "#5C5346",
        "text-muted": "#9C9488",
        accent: "#C4993D",
        "accent-dark": "#A67C2E",
        "accent-light": "#FBF4E4",
        warm: "#D4A843",
        terra: "#B8734A",
        sage: "#7D8C6E",
        border: "#E8E2D9",
        "border-light": "#F0EBE3",
        surface: "#FFFFFF",
        muted: "#9C9488",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "soft-sm":
          "0 1px 3px rgba(44, 36, 24, 0.04), 0 1px 2px rgba(44, 36, 24, 0.06)",
        "soft-md":
          "0 4px 6px -1px rgba(44, 36, 24, 0.05), 0 2px 4px -2px rgba(44, 36, 24, 0.05)",
        "soft-lg":
          "0 10px 25px -3px rgba(44, 36, 24, 0.06), 0 4px 6px -4px rgba(44, 36, 24, 0.04)",
        "soft-xl": "0 20px 50px -12px rgba(44, 36, 24, 0.08)",
        "glow-accent": "0 0 40px rgba(196, 153, 61, 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 8s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "scale-in": "scale-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
