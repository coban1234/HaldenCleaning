import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel";

const githubPages = process.env.GITHUB_PAGES === "true";
const onVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  site: githubPages
    ? "https://coban1234.github.io"
    : "https://haldercleaning.ca",
  base: githubPages ? "/HaldenCleaning/" : "/",
  trailingSlash: "always",
  redirects: {
    "/our-team/": "/",
  },
  integrations: [tailwind(), react(), sitemap()],
  output: "static",
  adapter: onVercel ? vercel() : node({ mode: "standalone" }),
});
