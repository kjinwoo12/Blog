# Portfolio

언리얼·유니티·웹 개발 포트폴리오 — React + Vite + GitHub Pages.

## 로컬 실행

```bash
npm install
npm run dev
```

### `bash: npm: command not found` 일 때

Node.js는 설치되어 있어도 **Git Bash 터미널**이 예전 PATH를 쓰면 `npm`을 못 찾을 수 있습니다.

1. **Cursor 터미널을 모두 닫고** 새 터미널을 연다 (프로젝트 `.vscode/settings.json` 이 Node 경로를 붙임).
2. 그래도 안 되면 **PowerShell** 터미널에서 `npm run dev` 실행.
3. Bash만 쓸 경우: `npm run dev:bash`

한 번만 PATH를 고치려면 Git Bash `~/.bashrc` 에 추가:

```bash
export PATH="/c/Program Files/nodejs:$PATH"
```

설치 확인: `"/c/Program Files/nodejs/node.exe" -v`

## GitHub Pages 배포

1. 저장소 **Settings → Pages → Build and deployment** 에서 **GitHub Actions** 선택
2. `main` 브랜치에 push 시 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 이 빌드·배포
3. 사이트 URL: `https://kjinwoo12.github.io/Portfolio/`

> 저장소 이름이 `Portfolio` 가 아니면 `vite.config.ts` 의 `base` 경로를 맞춰 수정하세요.

## 스택

- React 19, TypeScript, Vite 6
- React Router (SPA + GitHub Pages `basename`)
- Framer Motion (섹션 애니메이션)
- CSS Modules + 글로벌 토큰
