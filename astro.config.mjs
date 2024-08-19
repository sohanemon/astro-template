import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "hybrid",
  site: process.env.CI
    ? "https://astromotion.vercel.app"
    : "http://localhost:3000",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  vite: {
    plugins: [],
  },
  adapter: vercel(),
});
