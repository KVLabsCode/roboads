// Paper + amber palette (final selection from the Kovio design handoff).
export const palette = {
  bg: '#F1EDE2',
  surface: '#E8E3D4',
  surface2: '#DDD7C5',
  line: 'rgba(20,20,18,0.10)',
  lineStrong: 'rgba(20,20,18,0.22)',
  fg: '#14130F',
  fgDim: 'rgba(20,19,15,0.62)',
  fgMute: 'rgba(20,19,15,0.40)',
  accent: '#C77C1A',
  accentInk: '#F1EDE2',
  warm: '#C77C1A',
  cool: '#1F5BCC',
} as const

export type Palette = typeof palette

export const fonts = {
  sans: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
  mono: 'var(--font-geist-mono), ui-monospace, "SF Mono", Menlo, monospace',
  serif: 'var(--font-serif), "Times New Roman", serif',
  display: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
} as const

export const fmtMoney = (n: number) => '$' + n.toFixed(2)
