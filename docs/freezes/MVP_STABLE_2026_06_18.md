# FREEZE: MVP_STABLE_2026_06_18

**Freeze date:** 2026-06-18 (UTC)  
**Git tag:** `MVP_STABLE_2026_06_18`  
**Purpose:** Permanent production baseline for the GRARF public web surfaces (`grarf.com`) bundled from Desktop Home.

---

## What is frozen

| Layer | Frozen artifact |
|---|---|
| Web bundle source | Git tag `MVP_STABLE_2026_06_18` → commit `243539c70411300833834ac177800fb74367a5e0` |
| Runtime worker config | `webapp-config.js` (operational + editorial API URLs) |
| Build output | `webapp-home.bundle.js`, `webapp-home.css`, `webapp.html` produced by `build-home.mjs` |
| Editorial KV (upstream) | See **grarf** repo: `backups/freeze-2026-06-18/sportscape-editorial-kv.json` |

Full system restore (workers, KV, desktop code) is documented in the sibling repo:

**`grarf/docs/freezes/MVP_STABLE_2026_06_18.md`**

---

## Production URLs

| Surface | URL |
|---|---|
| Root | `https://grarf.com/` |
| GRARF Web | `https://grarf.com/webapp.html` |
| LiveTrack | `https://grarf.com/livetrack.html` |

### Worker URLs (configured in `webapp-config.js`)

| Service | URL |
|---|---|
| Operational ingest / snapshot | `https://grarf-operational-service.grarf.workers.dev` |
| Sportscape editorial API | `https://grarf-sportscape-editorial.grarf.workers.dev` |

Poll interval: `60_000` ms (`operationalPollIntervalMs`).

---

## Git commit and tag

| Field | Value |
|---|---|
| Repository | `grarf-landing` |
| Branch at freeze | `main` |
| Tag | `MVP_STABLE_2026_06_18` |
| Commit | `243539c70411300833834ac177800fb74367a5e0` |
| Message | Deploy Best Game Right Now briefing hierarchy, WNBA channel priority, and PGA golf ranking. |

Paired **grarf** application commit: `379f91e53a61f65ac9d392d8297b0d052a3fcc72` (same tag name).

```bash
git fetch --tags
git checkout MVP_STABLE_2026_06_18
```

---

## Worker version IDs (production at freeze)

| Worker | Version ID | Deployed (UTC) |
|---|---|---|
| `grarf-operational-service` | `59672363-95d6-4d1b-a995-536107b1d39e` | 2026-06-18T23:55:06Z |
| `grarf-sportscape-editorial` | `f1b0f8a1-7561-440c-9bf9-4e61bca2d6b4` | 2026-06-18T13:57:58Z |

---

## KV namespace IDs

| Worker | Binding | Namespace ID |
|---|---|---|
| `grarf-sportscape-editorial` | `SPORTSCAPE_EDITORIAL` | `af9941131bcd49248b302e01b0b2fb68` |
| `grarf-operational-service` | `EDITORIAL_RECAPS` | `3a7e26e5426c4cf685c1bcd3f0bffe17` |
| `grarf-operational-service` | `EDITORIAL_STATE` | `0ad24abed092414999c884054da4b8e0` |
| `grarf-operational-service` | `LIVE_DROP_DIAGNOSTICS` | `b0336ab4eaa9429fb7ad916ef23c3d35` |

### KV export backup (in **grarf** repo)

| Field | Value |
|---|---|
| Path | `backups/freeze-2026-06-18/sportscape-editorial-kv.json` |
| Key | `sportscape-editorial:v1` |
| `featuredGames` | 17 assignments |

---

## Restore procedure (grarf-landing)

### 1. Checkout frozen code

```bash
git fetch --tags
git checkout MVP_STABLE_2026_06_18
```

Ensure sibling **grarf** repo is also at `MVP_STABLE_2026_06_18` (commit `379f91e`).

### 2. Restore editorial KV

Run from **grarf** repo (see full procedure in `grarf/docs/freezes/MVP_STABLE_2026_06_18.md`):

```bash
wrangler kv key put --namespace-id=af9941131bcd49248b302e01b0b2fb68 \
  "sportscape-editorial:v1" \
  --path=backups/freeze-2026-06-18/sportscape-editorial-kv.json
```

### 3. Redeploy workers (if needed)

From **grarf** repo:

```bash
cd grarf-operational-service && npx wrangler deploy
cd ../workers/grarf-sportscape-editorial && npx wrangler deploy
```

### 4. Rebuild web bundle

```bash
cd grarf-landing
node build-home.mjs
```

Build reads Desktop Home from `../grarf/desktop/src` (see `build-home.mjs`).

### 5. Publish to grarf.com

Deploy these artifacts to GitHub Pages (CNAME: `grarf.com`):

- `webapp.html`
- `webapp-home.bundle.js`
- `webapp-home.css`
- `webapp-config.js`
- `404.html` (SPA fallback)
- `league-logos/` (synced by build)

---

## Known production features in this freeze

- GRARF Web home — Games Spine, Command Briefing, Best Game Right Now, operational mode bar.
- Cloud operational ingest — polls `grarf-operational-service` every 60s.
- Sportscape editorial — Command Briefing priorities from KV (`featuredGames`).
- WNBA channel logo / name from stream URL.
- PGA prioritized above LPGA in Best Game Right Now golf hierarchy.
- LiveTrack social card at `/livetrack.html`.

---

## Build reference

```bash
node build-home.mjs          # Home / webapp bundle
node build-spine.mjs         # Games spine standalone bundle (if used)
node scripts/build-daily-brief.mjs
```

Environment overrides at build time:

- `VITE_GRARF_OPERATIONAL_INGEST_URL`
- `VITE_SPORTSCAPE_EDITORIAL_API_URL`

Defaults match `webapp-config.js` production URLs.
