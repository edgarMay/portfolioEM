import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolioEM/',   // ← aquí va exactamente "/<nombre-de-tu-repo>/"
  plugins: [react()],
})
