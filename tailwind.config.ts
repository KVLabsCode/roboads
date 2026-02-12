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
        background: "#0a0a0a",
        foreground: "#ededed",
        accent: "#00d4ff",
        "accent-green": "#00ff88",
        surface: "#111111",
        "surface-light": "#1a1a1a",
        "surface-glass": "rgba(17, 17, 17, 0.6)",
        "border-subtle": "#222222",
        "border-glow": "rgba(0, 212, 255, 0.15)",
        muted: "#888888",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(0, 212, 255, 0.15)",
        "glow-md": "0 0 30px rgba(0, 212, 255, 0.2)",
        "glow-lg": "0 0 60px rgba(0, 212, 255, 0.25)",
        "glow-green-sm": "0 0 15px rgba(0, 255, 136, 0.3)",
        "neon-border":
          "0 0 15px rgba(0, 212, 255, 0.1), inset 0 0 15px rgba(0, 212, 255, 0.05)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 8px rgba(0, 212, 255, 0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.8)" },
        },
        "pulse-glow-green": {
          "0%, 100%": { boxShadow: "0 0 8px rgba(0, 255, 136, 0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 255, 136, 0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "pulse-glow-green": "pulse-glow-green 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
