import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/joshuashao8-github-io/",
  plugins: [react()],


  build: {
    outDir: 'docs' // Tell Vite to output files to a 'docs' folder instead of 'dist'
  }
})
