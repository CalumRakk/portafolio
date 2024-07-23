import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: "https://CalumRakk.github.io",
  base: "mi-repo",
});
