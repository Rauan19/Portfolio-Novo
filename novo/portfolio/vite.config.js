import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '::',  // Aceita conexões de todas as interfaces de rede
    port: 8080,  // Porta para o servidor
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',  // Atalho para 'src'
        replacement: fileURLToPath(new URL('./src', import.meta.url)),  // Usa import.meta.url para resolver o caminho
      },
      {
        find: 'lib',  // Atalho para a pasta 'lib'
        replacement: resolve(__dirname, 'lib'),  // __dirname não funciona em ESM, use fileURLToPath
      },
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],  // Garantir que as dependências sejam otimizadas
  },
});
