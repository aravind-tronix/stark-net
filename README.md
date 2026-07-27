# STARK-NET

Public development-stage status board for **Jarvis** and the AI roster (EDITH, Friday, Dummy) — Hermes + Claude/Grok MCP roadmap.

**Live:** https://starknet.aravind.one

## Layout

```
index.html          # shell / structure only
css/main.css        # tokens + layout
js/data.js          # roster, roadmap, stack (edit content here)
js/render.js        # DOM renderers
js/main.js          # boot
assets/hero.png     # JARVIS hologram art
```

Content changes → edit `js/data.js`. No build step.

## Run

```bash
python3 -m http.server 8080
# open http://127.0.0.1:8080
```

ES modules need a local server (not `file://`).

## Deploy

GitHub `main` → AWS Amplify (`d20m2d5muyyri8`, us-east-1) → `starknet.aravind.one` (Cloudflare CNAME, DNS-only).

## Privacy

Public roles/capabilities only. No credentials, IPs, or personal data.
