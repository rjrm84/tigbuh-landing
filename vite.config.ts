// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // (opcional) si querés este plugin de Babel, va acá:
      babel: { plugins: [['babel-plugin-react-compiler']] },
    }),
  ],
  // 👇 ESTA línea es la clave para GitHub Pages
  base: '/tigbuh-landing/',
})
