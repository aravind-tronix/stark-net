#!/usr/bin/env bash
# Local preview before git commit. ES modules need http:// not file://
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
PORT="${PORT:-8765}"
cd "$ROOT"

if command -v python3 >/dev/null 2>&1; then
  PY=python3
elif command -v python >/dev/null 2>&1; then
  PY=python
else
  echo "Need python3" >&2
  exit 1
fi

# free port if stale preview left open
if command -v fuser >/dev/null 2>&1; then
  fuser -k "${PORT}/tcp" 2>/dev/null || true
elif command -v lsof >/dev/null 2>&1; then
  pid=$(lsof -t -iTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true)
  [ -n "${pid:-}" ] && kill "$pid" 2>/dev/null || true
fi

echo ""
echo "  Preview:  http://127.0.0.1:${PORT}/"
echo "  Root:     $ROOT"
echo "  Stop:     Ctrl+C"
echo ""
echo "  Edit files, refresh browser — no rebuild."
echo "  When it looks right: git add/commit/push"
echo ""

exec "$PY" -m http.server "$PORT" --bind 127.0.0.1
