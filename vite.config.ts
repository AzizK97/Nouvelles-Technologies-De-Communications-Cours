import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        'synchro-distru': resolve(__dirname, 'synchro-distru.html'),
        'architecture-rest': resolve(__dirname, 'architecture-rest.html'),
        'event-driven': resolve(__dirname, 'event-driven.html'),
        'nouvelles-tech': resolve(__dirname, 'nouvelles-tech.html'),
        synchronisation: resolve(__dirname, 'synchronisation.html'),
        exemples: resolve(__dirname, 'exemples.html'),
      },
    },
  },
});
