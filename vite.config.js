import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // У режимі розробки (npm run dev) сайт працює в корені localhost,
  // тому base має бути '/'. Лише при продакшн-збірці (npm run build)
  // для GitHub Pages потрібен префікс з назвою репозиторію.
  base: command === 'build' ? '/Teritor_Gromada/' : '/',
}))