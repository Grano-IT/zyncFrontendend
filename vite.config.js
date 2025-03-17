import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/zyncFrontend/",  // Set to your repo name if using GitHub Pages
});
