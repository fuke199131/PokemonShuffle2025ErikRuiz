import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8080, 
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],  
  },
});