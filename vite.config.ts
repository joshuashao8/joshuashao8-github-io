import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/joshuashao8-github-io/',  // critical for GitHub Pages
  plugins: [react()],
  server: {
    port: 8000
  }
})
