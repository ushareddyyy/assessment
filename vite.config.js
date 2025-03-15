import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/assessment/', // 👈 Important for subfolder
  plugins: [react()],
});
