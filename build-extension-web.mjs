#!/usr/bin/env node
/** Build + deploy extension web preview into this landing repo. */
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const landingRoot = path.dirname(fileURLToPath(import.meta.url));
const desktopRoot = path.resolve(landingRoot, "../grarf/desktop");

execSync("npm run deploy:extension-web", {
  cwd: desktopRoot,
  stdio: "inherit",
  env: { ...process.env, GRARF_LANDING_ROOT: landingRoot },
});

console.log("[build-extension-web] done — https://grarf.com/extension and /extension.html");
