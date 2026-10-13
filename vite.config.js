import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' supaya hasil build jalan di mana saja, termasuk
// GitHub Pages project site (username.github.io/nama-repo/)
export default defineConfig({
  plugins: [vue()],
  base: './',
})
