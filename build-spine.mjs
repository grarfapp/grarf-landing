#!/usr/bin/env node
/**
 * Bundle Desktop HomeGamesToday spine for webapp.html (React + desktop/src).
 */
import * as esbuild from "esbuild";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const desktopSrc = path.resolve(__dirname, "../grarf/desktop/src");
const outJs = path.join(__dirname, "webapp-games-spine.bundle.js");
const outCss = path.join(__dirname, "webapp-games-spine.css");

const ingestUrl =
  process.env.VITE_GRARF_OPERATIONAL_INGEST_URL ??
  "https://grarf-operational-service.grarf.workers.dev";

console.log("[build-spine] bundling Games Spine from desktop/src …");

await esbuild.build({
  entryPoints: [path.join(__dirname, "webapp/spine-entry.tsx")],
  bundle: true,
  format: "esm",
  outfile: outJs,
  platform: "browser",
  target: ["es2020"],
  jsx: "automatic",
  loader: { ".tsx": "tsx", ".ts": "ts", ".png": "file", ".svg": "file" },
  alias: {
    "@": desktopSrc,
  },
  define: {
    "import.meta.env.DEV": "false",
    "import.meta.env.PROD": "true",
    "import.meta.env.MODE": '"production"',
    "import.meta.env.VITE_OPERATIONAL_INGEST_PROVIDER": '"grarf_cloud"',
    "import.meta.env.VITE_GRARF_OPERATIONAL_INGEST_URL": JSON.stringify(ingestUrl),
    "import.meta.env.VITE_TRACE_FINAL_LIVE_FIELDS": '""',
    "import.meta.env.VITE_ENABLE_ESPN_RESOLVER": '"false"',
    "process.env.NODE_ENV": '"production"',
  },
  logLevel: "info",
});

console.log("[build-spine] building Tailwind CSS for spine …");

const tailwindInput = path.join(__dirname, "webapp/spine-tailwind.css");
const tailwindConfig = path.join(__dirname, "tailwind.spine.config.js");

execSync(
  `npx tailwindcss -i "${tailwindInput}" -o "${outCss}" -c "${tailwindConfig}" --minify`,
  { stdio: "inherit", cwd: __dirname }
);

console.log("[build-spine] done:", outJs, outCss);
