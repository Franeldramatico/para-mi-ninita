import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base relativa para soportar despliegues en subcarpetas (GitHub Pages, ZIP)
  base: './',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})