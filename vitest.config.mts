import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // `server-only` throws outside a React Server Components bundle; tests import server modules directly.
      'server-only': path.resolve(__dirname, 'src/test/empty.ts'),
    },
  },
  // tsconfig keeps JSX as-is for Next; tests need it compiled (the email templates are .tsx).
  oxc: { jsx: { runtime: 'automatic' } },
  test: {
    environment: 'node',
    include: ['**/*.test.ts', '**/*.test.tsx'],
    exclude: ['**/node_modules/**', 'disabled-pages/**'],
  },
})
