#!/usr/bin/env node
/**
 * Build grarf-landing/data/dailyBrief.json from grarf/dailyBriefSource.txt.
 * Each story block: League, Headline, URL (blank lines between blocks ignored).
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const landingRoot = path.resolve(__dirname, "..");
const grarfRoot = path.resolve(landingRoot, "../grarf");
const sourcePath = path.join(grarfRoot, "dailyBriefSource.txt");
const outputPath = path.join(landingRoot, "data/dailyBrief.json");
const buildHomePath = path.join(landingRoot, "build-home.mjs");

function localDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function parseDailyBriefSource(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

  if (lines.length === 0) {
    return [];
  }

  if (lines.length % 3 !== 0) {
    const blockIndex = Math.floor(lines.length / 3) + 1;
    const offset = (blockIndex - 1) * 3;
    const partial = lines.slice(offset);
    throw new Error(
      `Story block ${blockIndex} is malformed — expected League, Headline, and URL (got ${partial.length} line(s): ${JSON.stringify(partial.join(" | "))})`
    );
  }

  const stories = [];
  for (let i = 0; i < lines.length; i += 3) {
    const blockIndex = i / 3 + 1;
    const league = lines[i];
    const headline = lines[i + 1];
    const url = lines[i + 2];

    if (!league) {
      throw new Error(`Story block ${blockIndex} is malformed — missing League`);
    }
    if (!headline) {
      throw new Error(`Story block ${blockIndex} is malformed — missing Headline`);
    }
    if (!url) {
      throw new Error(`Story block ${blockIndex} is malformed — missing URL`);
    }
    if (!/^https?:\/\//i.test(url)) {
      throw new Error(
        `Story block ${blockIndex} is malformed — URL must start with http:// or https:// (got ${JSON.stringify(url)})`
      );
    }

    stories.push({ league, headline, url });
  }
  return stories;
}

function runBuildHome() {
  console.log("[build-daily-brief] running build-home.mjs …");
  execFileSync(process.execPath, [buildHomePath], {
    cwd: landingRoot,
    stdio: "inherit",
  });
}

function main() {
  const raw = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, "utf8") : "";
  const stories = parseDailyBriefSource(raw);
  const payload = {
    date: localDateKey(),
    stories,
  };

  fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`[build-daily-brief] wrote ${outputPath}`);
  console.log(`[build-daily-brief] generated ${stories.length} stor${stories.length === 1 ? "y" : "ies"}`);
  runBuildHome();
}

try {
  main();
} catch (err) {
  console.error(`[build-daily-brief] ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
