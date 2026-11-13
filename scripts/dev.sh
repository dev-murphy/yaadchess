#!/usr/bin/env bash
set -euo pipefail

# Always run from the project root, regardless of where the script is called from
cd "$(dirname "$0")/.."

DEV_URL="http://localhost:5173"
set -m

# Start the front-end (fail instead of silently picking another port)
pnpm --dir ui exec vite --strictPort &
VITE_PID=$!

cleanup() {
  kill -- -"$VITE_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

# Wait until dev server is live (bail out if vite dies or takes too long)
for _ in $(seq 1 150); do
  if curl -fsS "$DEV_URL" >/dev/null 2>&1; then
    break
  fi
  if ! kill -0 "$VITE_PID" 2>/dev/null; then
    echo "Vite dev server exited unexpectedly" >&2
    exit 1
  fi
  sleep 0.2
done

if ! curl -fsS "$DEV_URL" >/dev/null 2>&1; then
  echo "Timed out waiting for $DEV_URL" >&2
  exit 1
fi

# Run python project (vite is stopped by the EXIT trap when this returns)
uv run python src/__init__.py --dev
