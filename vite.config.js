import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fundamentosReactTP3.10/',  // nome do repositório no github
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  }
})
