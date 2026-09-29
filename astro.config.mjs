import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://thresholdcleaning.ca",
  trailingSlash: "always",
  integrations: [tailwind(), react(), sitemap()],
  output: "static",
  adapter: node({ mode: "standalone" }),
});
