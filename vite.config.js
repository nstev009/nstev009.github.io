// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // Base path - change this if you're deploying to a subdirectory
  base: '/',
});