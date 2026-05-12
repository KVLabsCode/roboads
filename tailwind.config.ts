import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paper + amber palette tokens (also exposed as CSS vars in globals.css)
        paper: '#F1EDE2',
        surface: '#E8E3D4',
        'surface-2': '#DDD7C5',
        ink: '#14130F',
        'ink-dim': 'rgba(20, 19, 15, 0.62)',
        'ink-mute': 'rgba(20, 19, 15, 0.40)',
        accent: '#C77C1A',
        'accent-ink': '#F1EDE2',
        warm: '#C77C1A',
        cool: '#1F5BCC',
        line: 'rgba(20, 20, 18, 0.10)',
        'line-strong': 'rgba(20, 20, 18, 0.22)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
        serif: ['var(--font-serif)', 'Times New Roman', 'serif'],
        display: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'kovio-pulse': 'kovioPulse 1.6s ease-out infinite',
        'kovio-float': 'kovioFloat 4.8s ease-in-out infinite',
        'kovio-marquee': 'kovioMarquee 300s linear infinite',
        'kovio-travel': 'kovioTravel 1.4s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
