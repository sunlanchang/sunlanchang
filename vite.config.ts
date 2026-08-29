import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart({
      // Every page is static: prerender to HTML at build time so the
      // Worker only has to serve assets.
      prerender: { enabled: true, crawlLinks: true, autoStaticPathsDiscovery: true },
    }),
    viteReact(),
  ],
});
