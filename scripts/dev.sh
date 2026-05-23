#!/usr/bin/env bash
# Git Bash 등에서 PATH에 Node가 없을 때 사용
set -e

NODE_DIRS=(
  "/c/Program Files/nodejs"
  "/mnt/c/Program Files/nodejs"
)

for dir in "${NODE_DIRS[@]}"; do
  if [[ -x "$dir/node.exe" || -x "$dir/node" ]]; then
    export PATH="$dir:$PATH"
    break
  fi
done

if ! command -v npm >/dev/null 2>&1; then
  echo "npm을 찾을 수 없습니다. Node.js LTS를 설치하세요: https://nodejs.org"
  echo "또는 Cursor 터미널을 PowerShell로 바꾼 뒤 npm run dev 를 실행하세요."
  exit 1
fi

exec npm run dev
