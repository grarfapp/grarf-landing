#!/usr/bin/env node
/**
 * Bundle full Desktop Home (AppShellLayout + HomePage) for webapp.html.
 */
import * as esbuild from "esbuild";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const desktopSrc = path.resolve(__dirname, "../grarf/desktop/src");
const outJs = path.join(__dirname, "webapp-home.bundle.js");
const outCss = path.join(__dirname, "webapp-home.css");

const ingestUrl =
  process.env.VITE_GRARF_OPERATIONAL_INGEST_URL ??
  "https://grarf-operational-service.grarf.workers.dev";

const sportscapeEditorialApiUrl =
  process.env.VITE_SPORTSCAPE_EDITORIAL_API_URL ??
  "https://grarf-sportscape-editorial.grarf.workers.dev";

/** Full env object — required for dynamic `import.meta.env[name]` access in desktop code. */
const importMetaEnv = {
  DEV: false,
  PROD: true,
  MODE: "production",
  VITE_OPERATIONAL_INGEST_PROVIDER: "grarf_cloud",
  VITE_GRARF_OPERATIONAL_INGEST_URL: ingestUrl,
  VITE_SPORTSCAPE_EDITORIAL_API_URL: sportscapeEditorialApiUrl,
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

const webappHtmlPath = path.join(__dirname, "webapp.html");
const spa404Path = path.join(__dirname, "404.html");
const webappHtml = fs.readFileSync(webappHtmlPath, "utf8");
const spa404Html = webappHtml.includes("<base ")
  ? webappHtml
  : webappHtml.replace("<head>", '<head>\n  <base href="/">');
fs.writeFileSync(spa404Path, spa404Html);
console.log("[build-home] wrote GitHub Pages SPA fallback:", spa404Path);

console.log("[build-home] done:", outJs, outCss);
