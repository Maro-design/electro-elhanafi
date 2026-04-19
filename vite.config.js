import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/gsmarena': {
        target: 'https://fdn2.gsmarena.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gsmarena/, '')
      }
    }
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        warn(warning);
      }
    }
  }
})
