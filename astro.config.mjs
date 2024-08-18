import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "hybrid",
  site: process.env.CI
    ? "https://astro-template.vercel.app"
    : "http://localhost:3000",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  vite: {
    plugins: [],
  },
  adapter: vercel(),
});
