import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

const githubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: githubPages
    ? "https://coban1234.github.io"
    : "https://thresholdcleaning.ca",
  base: githubPages ? "/HaldenCleaning/" : "/",
  trailingSlash: "always",
  integrations: [tailwind(), react(), sitemap()],
  output: "static",
  adapter: node({ mode: "standalone" }),
});
