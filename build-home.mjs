#!/usr/bin/env node
/**
 * Bundle full Desktop Home (AppShellLayout + HomePage) for webapp.html.
 */
import * as esbuild from "esbuild";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const desktopSrc = path.resolve(__dirname, "../grarf/desktop/src");
const outJs = path.join(__dirname, "webapp-home.bundle.js");
const outCss = path.join(__dirname, "webapp-home.css");

const ingestUrl =
  process.env.VITE_GRARF_OPERATIONAL_INGEST_URL ??
  "https://grarf-operational-service.grarf.workers.dev";

/** Full env object — required for dynamic `import.meta.env[name]` access in desktop code. */
const importMetaEnv = {
  DEV: false,
  PROD: true,
  MODE: "production",
  VITE_OPERATIONAL_INGEST_PROVIDER: "grarf_cloud",
  VITE_GRARF_OPERATIONAL_INGEST_URL: ingestUrl,
  VITE_TRACE_FINAL_LIVE_FIELDS: "",
  VITE_ENABLE_ESPN_RESOLVER: "false",
  VITE_POSTHOG_KEY: "",
  VITE_POSTHOG_HOST: "",
};

console.log("[build-home] bundling Desktop Home from desktop/src …");

await esbuild.build({
  entryPoints: [path.join(__dirname, "webapp/home-entry.tsx")],
  bundle: true,
  format: "esm",
  outfile: outJs,
  platform: "browser",
  target: ["es2020"],
  jsx: "automatic",
  loader: { ".tsx": "tsx", ".ts": "ts", ".png": "file", ".svg": "file", ".css": "css" },
  alias: {
    "@": desktopSrc,
    // Single React + Router — desktop and landing each have their own node_modules trees.
    react: path.resolve(__dirname, "node_modules/react"),
    "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    "react-dom/client": path.resolve(__dirname, "node_modules/react-dom/client"),
    "react-router": path.resolve(__dirname, "node_modules/react-router"),
    "react-router/dom": path.resolve(
      __dirname,
      "node_modules/react-router/dist/production/dom-export.mjs"
    ),
    "react-router-dom": path.resolve(__dirname, "node_modules/react-router-dom"),
    zustand: path.resolve(__dirname, "node_modules/zustand"),
  },
  define: {
    "import.meta.env": JSON.stringify(importMetaEnv),
    "process.env.NODE_ENV": '"production"',
  },
  logLevel: "info",
});

console.log("[build-home] building Tailwind CSS for Home …");

const tailwindInput = path.join(__dirname, "webapp/home-tailwind.css");
const tailwindConfig = path.join(__dirname, "tailwind.home.config.js");

execSync(
  `npx tailwindcss -i "${tailwindInput}" -o "${outCss}" -c "${tailwindConfig}" --minify`,
  { stdio: "inherit", cwd: __dirname }
);

console.log("[build-home] done:", outJs, outCss);
