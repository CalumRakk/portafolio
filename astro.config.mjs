import { defineConfig } from "astro/config";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: "https://CalumRakk.github.io",
  base: "mi-repo",
  output: "server",
  adapter: vercel()
});