import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [
    vue2({
      jsx: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm.js',
    },
  },
  build: {
    brotliSize: false, // unsupported in StackBlitz
  },
  // server: {
  //   proxy: {
  //     '/prod': {
  //       target: 'https://swsut62sse.execute-api.ap-south-1.amazonaws.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/prod/, '/prod'),
  //     },
  //   },
  //   cors: true,
  // },
})
