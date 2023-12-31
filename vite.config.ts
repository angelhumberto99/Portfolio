import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/Portfolio/",
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: path.join(__dirname, 'docs')
  }
})
