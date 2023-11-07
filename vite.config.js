/* global process */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Fangsis/',
  // base: process.env.NODE_ENV === 'Fangsis' ? '/Fangsis/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import 'bootstrap/scss/functions';
        @import '@/assets/scss/helpers/variables';
        @import 'bootstrap/scss/maps';
        @import 'bootstrap/scss/mixins';  
        @import '@/assets/scss/helpers/utilities';
        `
      }
    }
  }
})
