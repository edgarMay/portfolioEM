import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Si vas a usar un dominio propio, sirve todo desde la raíz:
  base: '/',                // ← ahora asumimos que los assets estarán en `/assets/...`
  plugins: [react()]
})
