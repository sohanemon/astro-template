import themePreset from "./src/styles/tailwind/preset"
import type { Config } from "tailwindcss"

const config = {
  content: ["src/**/*.{astro,html,tsx}"],
  presets: [themePreset],
} satisfies Config

export default config
