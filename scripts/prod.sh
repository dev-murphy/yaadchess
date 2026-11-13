#!/usr/bin/env bash

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "Building production chess UI..."
cd "$PROJECT_DIR/ui"
pnpm build

echo "Starting production application..."
cd "$PROJECT_DIR"
uv run python src/__init__.py --prod