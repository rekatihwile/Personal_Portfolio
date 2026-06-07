#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT_DIR"
VENV_DIR="$ROOT_DIR/.venv"

if [[ ! -f "$APP_DIR/package.json" ]]; then
  echo "Error: expected app files at $APP_DIR"
  exit 1
fi

echo "Creating Python virtual environment at $VENV_DIR"
python3 -m venv "$VENV_DIR"

# shellcheck disable=SC1091
source "$VENV_DIR/bin/activate"

python -m pip install --upgrade pip setuptools wheel

cd "$APP_DIR"
echo "Installing Node dependencies"
npm install

echo "Starting portfolio dev server on http://localhost:5173"
echo "Press Ctrl+C to stop."
npm run dev -- --host 0.0.0.0 --port 5173 &
DEV_PID=$!

sleep 2
if command -v "$BROWSER" >/dev/null 2>&1; then
  "$BROWSER" "http://localhost:5173" || true
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "http://localhost:5173" || true
fi

wait "$DEV_PID"
