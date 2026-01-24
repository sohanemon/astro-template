import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.CI
    ? 'https://astromotion.vercel.app'
    : 'http://localhost:3000',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
