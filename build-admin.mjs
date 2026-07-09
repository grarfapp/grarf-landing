#!/usr/bin/env node
/**
 * Bundle GRARF Admin for static hosting or local esbuild dev serve.
 */
import * as esbuild from "esbuild";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const desktopSrc = path.resolve(__dirname, "../grarf/desktop/src");
const sharedRoot = path.resolve(__dirname, "../grarf/shared");
const outJs = path.join(__dirname, "admin.bundle.js");
const serve = process.argv.includes("--serve");

const ingestUrl =
  process.env.VITE_GRARF_OPERATIONAL_INGEST_URL ??
  "https://grarf-operational-service.grarf.workers.dev";

const sportscapeEditorialApiUrl =
  process.env.VITE_SPORTSCAPE_EDITORIAL_API_URL ??
  "https://grarf-operational-service.grarf.workers.dev/sportscape-editorial";

const importMetaEnv = {
  DEV: serve,
  PROD: !serve,
  MODE: serve ? "development" : "production",
  VITE_OPERATIONAL_INGEST_PROVIDER: "grarf_cloud",
  VITE_GRARF_OPERATIONAL_INGEST_URL: ingestUrl,
  VITE_SPORTSCAPE_EDITORIAL_API_URL: sportscapeEditorialApiUrl,
  VITE_TRACE_FINAL_LIVE_FIELDS: "",
  VITE_ENABLE_ESPN_RESOLVER: "false",
  VITE_POSTHOG_KEY: "",
  VITE_POSTHOG_HOST: "",
};

const buildOptions = {
  entryPoints: [path.join(__dirname, "admin.tsx")],
  bundle: true,
  format: "esm",
  outfile: outJs,
  platform: "browser",
  target: ["es2020"],
  jsx: "automatic",
  loader: { ".tsx": "tsx", ".ts": "ts", ".css": "css", ".png": "file", ".svg": "file" },
  alias: {
    react: path.resolve(__dirname, "node_modules/react"),
    "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    "react-dom/client": path.resolve(__dirname, "node_modules/react-dom/client"),
  },
  define: {
    "import.meta.env": JSON.stringify(importMetaEnv),
    "process.env.NODE_ENV": serve ? '"development"' : '"production"',
  },
  logLevel: "info",
};

if (serve) {
  const ctx = await esbuild.context(buildOptions);
  const { host, port } = await ctx.serve({
    servedir: __dirname,
    port: 5174,
  });
  console.log(`[build-admin] serving admin at http://${host}:${port}/admin.html`);
} else {
  console.log("[build-admin] bundling GRARF Admin …");
  await esbuild.build(buildOptions);
  console.log("[build-admin] wrote admin.bundle.js");
}
