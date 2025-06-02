import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/",          // ↪ vivir en la raíz del dominio
  plugins: [react()],
});
