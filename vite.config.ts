import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: https://<user>.github.io/Portfolio/
const base = process.env.GITHUB_PAGES === 'true' ? '/Portfolio/' : '/';

/** GitHub Pages SPA — deep link 시 404.html → index.html */
function ghPagesSpaFallback() {
  return {
    name: 'gh-pages-spa-fallback',
    closeBundle() {
      if (process.env.GITHUB_PAGES !== 'true') return;
      const out = join(process.cwd(), 'dist');
      copyFileSync(join(out, 'index.html'), join(out, '404.html'));
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), ghPagesSpaFallback()],
});
