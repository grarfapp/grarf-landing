#!/usr/bin/env node
/**
 * Export the Mobile Expo Web client and stage it for GitHub Pages hosting.
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mobileDir = path.resolve(__dirname, "../grarf/mobile");
const mobileDistDir = path.join(mobileDir, "dist");
const landingMobileWebDir = path.join(__dirname, "mobile-web");

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
    return;
  }
  fs.copyFileSync(src, dest);
}

console.log("[build-mobile] exporting Expo Web from mobile/ …");
execSync("npx expo export --platform web", {
  cwd: mobileDir,
  stdio: "inherit",
});

const bundleDir = path.join(mobileDistDir, "_expo/static/js/web");
if (!fs.existsSync(bundleDir)) {
  console.error("[build-mobile] missing Expo web bundle directory:", bundleDir);
  process.exit(1);
}

const bundleFile = fs.readdirSync(bundleDir).find((name) => name.endsWith(".js"));
if (!bundleFile) {
  console.error("[build-mobile] missing Expo web bundle file in:", bundleDir);
  process.exit(1);
}

fs.rmSync(landingMobileWebDir, { recursive: true, force: true });
copyRecursive(mobileDistDir, landingMobileWebDir);

const landingAssetsDir = path.join(__dirname, "assets");
fs.rmSync(landingAssetsDir, { recursive: true, force: true });
copyRecursive(path.join(mobileDistDir, "assets"), landingAssetsDir);

const bundleUrl = `/mobile-web/_expo/static/js/web/${bundleFile}`;
const manifest = {
  bundleUrl,
};

fs.writeFileSync(path.join(landingMobileWebDir, "manifest.json"), JSON.stringify(manifest, null, 2));
fs.writeFileSync(path.join(__dirname, ".nojekyll"), "");
console.log("[build-mobile] ensured GitHub Pages .nojekyll (disables Jekyll _path filtering)");
console.log("[build-mobile] synced mobile web assets to", landingAssetsDir);
console.log("[build-mobile] wrote", path.join(landingMobileWebDir, "manifest.json"));
console.log("[build-mobile] done:", bundleUrl);
