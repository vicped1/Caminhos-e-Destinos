import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  define: {
    'process.env': {
      VITE_BACKEND_URL: JSON.stringify('http://localhost:3000'),
    },
  },
});
