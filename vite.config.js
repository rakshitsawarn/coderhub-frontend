import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: true,   // <-- ensures _redirects gets copied to dist
  },
  base: '/',  // <-- ensures relative paths in built files
})
