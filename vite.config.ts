import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  outpt: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'featureUiVue',
      formats: ['es', 'umd', 'iife']
    }
  },
  plugins: [vue(), vueJsx()],
});
