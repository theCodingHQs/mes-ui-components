
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
    },
  }
});
