import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permitir conexiones desde cualquier IP
    port: 3000,        // Puerto de desarrollo
    open: true         // Abre automáticamente el navegador
  },
});